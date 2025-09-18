let nota1,nota2,media

nota1 = Number(prompt("Digite a primeira nota: "))
nota2 = Number(prompt("Digite a segunda nota: "))
media = (nota1 + nota2) / 2

alert(`A média de juca é: ${media}`)

if(media >= 7){
    alert("Parabéns você passou!") 
} else {
    alert("Infelizmente você foi reprovado!")
}