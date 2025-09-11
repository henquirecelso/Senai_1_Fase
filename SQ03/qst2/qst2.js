const dolar = 5.25, euro = 5.58, libra = 6.20;
let conversao
let valor = prompt("Digite o valor em reais que deseja converter:");

conversao = prompt("Escolha a moeda para conversão:\n1 - Dólar\n2 - Euro\n3 - Libra");


if (conversao == 1) {
    alert("O valor em reais é: R$ " + (valor * dolar))
} else if (conversao == 2) {
    alert("O valor em reais é: R$ " + (valor * euro))
} else if (conversao == 3) {
    alert("O valor em reais é: R$ " + (valor * libra))
}
else {
    alert("Opção inválida!")
}