let diaria = Number(prompt("Digite o numero de quantas diarias vai ficar: "))
let valorDiaria 
let totalBruto
let desconto, multa=150, totalLiquido
desconto = totalBruto * 0.25

if (diaria <= 5) {
    valorDiaria = 100
    totalBruto = diaria * valorDiaria
    desconto = totalBruto * 0.25
    totalLiquido = totalBruto - desconto + multa
    alert("O preço total já com os descontos e a multa vai ser $" + totalLiquido.toFixed(2).replace(".",","))
} else if (diaria <= 10) {
    valorDiaria = 90
    totalBruto = diaria * valorDiaria
    desconto = totalBruto * 0.25
    totalLiquido = totalBruto - desconto + multa
    alert("O preço total já com os descontos e a multa vai ser $" + totalLiquido.toFixed(2).replace(".",","))
} else {
    valorDiaria = 80
    totalBruto = diaria * valorDiaria
    desconto = totalBruto * 0.25
    totalLiquido = totalBruto - desconto + multa
    alert("O preço total já com os descontos e a multa vai ser $" + totalLiquido.toFixed(2).replace(".",","))

    
}   

