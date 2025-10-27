// Configuração das planilhas
const planilhaID = '1Ku0osSQlG0xF1j2SspMp4PCEzK0b0tErHxNUqOTgHUs';
const aba = "Dados";
const urlLeitura = `https://opensheet.vercel.app/${planilhaID}/${aba}`;
const urlCadastro = "https://api.sheetmonkey.io/form/vYxUmYrnP6iBLN4T9PF9B5";

// Validar login
async function validarUsuario(usuario, senha) {
  try {
    const response = await fetch(urlLeitura);
    const dados = await response.json();
    return dados.some(registro => registro.usuario === usuario && registro.senha === senha);
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return false;
  }
}

// Login
async function handleLogin(event) {
  event.preventDefault();

  const usuario = document.querySelector('#usuarioLogin').value.trim();
  const senha = document.querySelector('#senhaLogin').value.trim();

  if (!usuario || !senha) {
    mostrarMensagem("⚠️ Por favor, preencha usuário e senha.", "msg");
    return;
  }

  const existe = await validarUsuario(usuario, senha);

  if (existe) {
  mostrarMensagem("✅ Login efetuado com sucesso!", "msg");
  setTimeout(() => window.location.href = "index2.html", 1500);   
 
  } else {
    mostrarMensagem("❌ Usuário ou senha incorretos! Tente novamente ou cadastre-se.", "msg");
  }
}

// Cadastro
async function cadastrarUsuario() {
  const novoUsuario = document.querySelector('#novoUsuario').value.trim();
  const novaSenha = document.querySelector('#novaSenha').value.trim();

  if (!novoUsuario || !novaSenha) {
    mostrarMensagem("⚠️ Preencha usuário e senha para cadastro!", "msg");
    return;
  }

  try {
    // Verifica se usuário já existe (via leitura)
    const response = await fetch(urlLeitura);
    const dados = await response.json();
    if (dados.some(registro => registro.usuario === novoUsuario)) {
    mostrarMensagem("🚫 Usuário já cadastrado! Escolha outro.", "msg");
      return;
    }

    // Envia para SheetMonkey
    await fetch(urlCadastro, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usuario: novoUsuario, senha: novaSenha })
    });

    mostrarMensagem(`✅ Usuário "${novoUsuario}" cadastrado com sucesso!`, "msg");

    // Força atualização para login imediato
    await new Promise(r => setTimeout(r, 2000)); // 2s para SheetMonkey processar

    // Volta para aba login
    document.querySelector('#cadastroTab').classList.remove('active');
    document.querySelector('#loginTab').classList.add('active');
    document.querySelector('#cadastroForm').classList.remove('ativo');
    document.querySelector('#loginForm').classList.add('ativo');

  } catch (error) {
    console.error("Erro ao cadastrar:", error);
    mostrarMensagem("❌ Erro ao cadastrar. Tente novamente mais tarde.", "msg");
  }
}

// Troca de abas
document.addEventListener('DOMContentLoaded', () => {
  const formLogin = document.querySelector('#loginForm');
  const btnCadastrar = document.querySelector('#cadastrar');

  formLogin.addEventListener('submit', handleLogin);
  btnCadastrar.addEventListener('click', cadastrarUsuario);

  const loginTab = document.querySelector('#loginTab');
  const cadastroTab = document.querySelector('#cadastroTab');
  const loginForm = document.querySelector('#loginForm');
  const cadastroForm = document.querySelector('#cadastroForm');

  loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    cadastroTab.classList.remove('active');
    loginForm.classList.add('ativo');
    cadastroForm.classList.remove('ativo');
  });

  cadastroTab.addEventListener('click', () => {
    cadastroTab.classList.add('active');
    loginTab.classList.remove('active');
    cadastroForm.classList.add('ativo');
    loginForm.classList.remove('ativo');
  });
});
  function mostrarMensagem(texto, tipo = "msg", duracao = 4000) {
  const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.textContent = texto;
    mensagemDiv.className = `mensagem ${tipo}`; // aplica classe correta
    mensagemDiv.style.display = "block";

  // Oculta após o tempo definido
  setTimeout(() => {
    mensagemDiv.style.display = "none";
  }, duracao);
}
