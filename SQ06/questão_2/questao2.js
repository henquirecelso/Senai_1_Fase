let visitantesNaArea, horaAtual 
visitantesNaArea = prompt("Digite quantos visitantes estão presentes: ")
horaAtual = prompt("Digite que horas são atualmente: ")

if(visitantesNaArea == 0 && horaAtual < 8 < 18){
    alert("Liberação autorizada, Abrindo jaula.")
}
else {
    alert("Liberação negada.")
}
