let emManutencao, emergenciaAtiva

emManutencao = confirm("Há manunteção ativa ?")
emergenciaAtiva = confirm("O nível de emergencia do parque está alto ?")
 

if (emManutencao || emergenciaAtiva) {
    alert("Transporte indisponível por motivo de segurança")
} else {
    alert("Transporte Liberado para uso.")
}