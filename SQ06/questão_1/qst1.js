let crachaValido = confirm("Tem cracha ?")
let DigitalReconhecida = confirm("Digital no sistema ?")

if (crachaValido && DigitalReconhecida) {
    alert("Acesso liberado ao Centro de Comando")
} else if (crachaValido == false && DigitalReconhecida) {
    alert("Crachá inválido. Dirija-se à recepção")
} else if (crachaValido && DigitalReconhecida == false){
    alert("Falha na digital. Tente novamente ou chame o suporte")
} else {
    alert("Acesso negado. Verifique sua identificação")
}
