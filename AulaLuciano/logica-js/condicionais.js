const prompt = require("prompt-sync")()
const notaFinal = parseFloat(prompt("Digite a nota final: "))
const freq = Number(prompt("Digite sua frequencia: (1-10)"))   
if(notaFinal >= 7 && freq >= 8){
    console.log("Aprovado")
} else if (freq < 8) {
    console.log("Reprovado por frequencia")
} else {
    console.log("Reprovado por nota")
}

