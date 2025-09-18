let diaria = Number(prompt("Digite o numero de quantas diarias vai ficar: "))

if (diaria <= 5) {
    alert("O preço total já com os descontos vai ser $" + (diaria * 100) * 0.25)
} else if (diaria > 6 && diaria <= 10) {
    alert("O preço total já com os descontos vai ser $" + (diaria * 90) * 0.25)
} else {
    alert("O preço total já com os descontos vai ser $" + (diaria * 80) * 0.25)
}