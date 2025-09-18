let idade = Number(prompt("Digite aqui sua idade: "))
if (idade < 16) {
    alert("Não pode votar!")
} else if(idade === 16 && idade === 17) {
    alert("Voto facultativo")
} else if(idade >= 18 && idade <= 65 ) {
    alert("Voto obrigatório!")
} else {
    alert("Voto facultativo")
}