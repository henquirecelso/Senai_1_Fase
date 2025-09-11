// Verificando Números Pares: Peça ao usuário para inserir um número e, em seguida, determine se é par ou ímpar.
let numero = prompt("Insira um número:");
if (numero % 2 === 0) {
    alert("O número " + numero + " é par.");
} else {
    alert("O número " + numero + " é ímpar.");
}