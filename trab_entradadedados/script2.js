document.getElementById("calcular").addEventListener("click", () => {
  const salario = parseFloat(document.getElementById("salario").value) || 0;
  const luz = parseFloat(document.getElementById("luz").value) || 0;
  const alimentacao = parseFloat(document.getElementById("alimentacao").value) || 0;
  const agua = parseFloat(document.getElementById("agua").value) || 0;
  const transporte = parseFloat(document.getElementById("transporte").value) || 0;
  const outros = parseFloat(document.getElementById("outros").value) || 0;

  if (salario === 0) {
    alert("⚠️ Digite seu salário para calcular.");
    return;
  }

  const totalGastos = luz + alimentacao + agua + transporte + outros;
  const saldo = salario - totalGastos;

  // Salva os dados no localStorage
  localStorage.setItem("dadosFinanceiros", JSON.stringify({
    salario, luz, alimentacao, agua, transporte, outros, saldo
  }));

  // Redireciona para a página de resultado
  window.location.href = "resultado.html";
});
