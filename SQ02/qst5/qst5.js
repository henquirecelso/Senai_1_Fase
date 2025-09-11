let num1,num2;
num1 = parseInt(prompt("Digite o primeiro numero: "));
num2 = parseInt(prompt("Digite o segundo numero: "));

const escolha = parseInt(prompt("Escolha uma das opcoes: \n1 - Somar \n2 - Subtrair \n3 - Multiplicar \n4 - Dividir"));

if (escolha === 1) {
    alert(`O resultado da soma entre ${num1} e ${num2} é:  ${num1 + num2}`);
}
else if (escolha === 2) {
    alert(`O resultado da subtração entre ${num1} e ${num2} é:  ${num1 - num2}`);
}       
else if (escolha === 3) {
    alert(`O resultado da multiplicação entre ${num1} e ${num2} é:  ${num1 * num2}`);
}
else if (escolha === 4) {
    if (num2 === 0) {
        alert("Erro! Não é possível dividir por zero.");
    } else {
        alert(`O resultado da divisão entre ${num1} e ${num2} é:  ${num1 / num2}`);
    }
}
else {
    alert("Opção inválida! Por favor, escolha uma opção entre 1 e 4.");
}