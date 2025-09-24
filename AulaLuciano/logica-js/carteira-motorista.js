const prompt = require("prompt-sync")()
const idade = Number(prompt("Digite sua idade: "))
const cnh = prompt("Você tem CNH (S) (N):  ")

if(idade >= 18 && cnh.toUpperCase() === "S") {
    console.log("Pode dirigir")
} else if(idade < 18 && cnh.toUpperCase() === "S"){
    console.log("Você é menor de idade")
} else if (idade >= 18 && cnh.toUpperCase() === "N"){
    console.log("Você não pode dirigir pois não tem CNH")
} else {
    console.log("Você não tem idade para tirar a CNH e portanto não pode dirigir")
}

