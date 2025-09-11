const pedacoPequeno = 4, pedacoMedio = 6, pedacoGrande = 8, pequenopreco = 44, mediopreco = 72, grandepreco = 89;


let escolhapedaco = prompt("Escolha o tamanho do pedaço de pizza (P, M, G):").toUpperCase();

if (escolhapedaco === "P") {
    alert("O preço do pedaço pequeno é R$ " + pequenopreco + ",00");
} else if (escolhapedaco === "M") {
    alert("O preço do pedaço médio é R$ " + mediopreco + ",00");
} else if (escolhapedaco === "G") {
    alert("O preço do pedaço grande é R$ " + grandepreco + ",00");
} else {
    alert("Tamanho de pedaço inválido!");
}