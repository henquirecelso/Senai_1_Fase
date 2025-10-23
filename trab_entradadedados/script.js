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
    window.location.href = "proxpagina.html";
  } else {
    alert("Usuario ou senha errado! tente novamente ou faça cadastro!")
    } 
    }
  
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', handleSubmit);
  } else {
    console.error("Formulário não encontrado no documento.");
  }
});





