const planilhaID = '1Ku0osSQlG0xF1j2SspMp4PCEzK0b0tErHxNUqOTgHUs';
const aba = "Dados"; 
const url = `https://opensheet.vercel.app/${'1Ku0osSQlG0xF1j2SspMp4PCEzK0b0tErHxNUqOTgHUs'}/${'Dados'}`;

async function validarUsuario(usuario, senha) {
  try {
    const response = await fetch(url);
    const dados = await response.json();
    return dados.some(registro => registro.usuario === usuario && registro.senha === senha);
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return false;
  }
}

const handleSubmit = async (event) => {
  event.preventDefault();

  const usuario = document.querySelector('input[name=usuario]').value.trim();
  const senha = document.querySelector('input[name=senha]').value.trim();

  if (!usuario || !senha) {
    alert("Por favor, preencha usuário e senha.");
    return;
  }

  const existe = await validarUsuario(usuario, senha);

  if (existe) {
    alert("Login Efetuado!");
  } else {
    try {
      await fetch('https://api.sheetmonkey.io/form/vYxUmYrnP6iBLN4T9PF9B5', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usuario, senha }),
      });
      alert("Usuário cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      alert("Erro ao cadastrar usuário.");
    }
  }
};

// Certifique-se que o DOM está carregado antes de adicionar o event listener
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', handleSubmit);
  } else {
    console.error("Formulário não encontrado no documento.");
  }
});
