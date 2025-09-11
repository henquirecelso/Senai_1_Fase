let peso, altura, imc;

peso = prompt("Digite seu peso em kg:")
altura = prompt("Digite sua altura em metros:")

imc = peso / (altura * altura)

if (imc < 18.5) {
    alert("Abaixo do peso")
} else if (imc >= 18.5 && imc < 24.9) {
    alert("Peso normal")
} else if (imc >= 25 && imc < 29.9) {
    alert("Sobrepeso")
} else {
    alert("Obesidade")
}
