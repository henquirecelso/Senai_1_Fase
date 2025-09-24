const prompt = require("prompt-sync")()
const usuario = prompt("Digite o usuario: ")
const senha = Number(prompt("Digite sua senha: "))

if(usuario === "admin" && senha === 12345){
    console.log("Bem vindo admin")
} else if(usuario != "admin" || senha != 12345) {
    console.log("Dados incorretos!")
}