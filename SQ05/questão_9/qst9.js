let altura = Number(prompt("Digite sua altura em metros: "))
let genero = Number(prompt("Digite seu genero: (1) masculino (2) feminino"))

if (genero === 1) {
    pesoideal = (62.1*altura) - 44.7
    alert("Seu peso ideal é: " + pesoideal)
} else if (genero === 2) {
    pesoideal = (72.7*altura) - 58
    alert("Seu peso ideal é: " + pesoideal)
} else {
    alert("Numero digitado inválido")
}





