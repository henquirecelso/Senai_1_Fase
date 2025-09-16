let quartoSimples = 250, quartoDuplo = 400, quartoSuite = 750;


let tipoQuarto = prompt("Digite o tipo de quarto para a diaria (simples, duplo, suite):").toLowerCase();

if(tipoQuarto === "simples" && quartoSimples) {
    alert("Quarto simples indisponível");
} else if(tipoQuarto === "duplo" && quartoDuplo) {
    alert("Quarto duplo disponível com o valor de R$ " + quartoDuplo);
} else if(tipoQuarto === "suite" && quartoSuite) {
    alert("Quarto suíte disponível com o valor de R$ " + quartoSuite);
} 
else {
    alert("Tipo de quarto inválido");
}