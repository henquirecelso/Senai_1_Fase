// let acertos = Number(prompt("Quantos acertos? "))
// let valorPorQuestao = 10/16
// let nota = acertos * valorPorQuestao

// alert("Sua nota foi: " + nota)
let contador = false


let boolean= prompt("É true ou false ? ")

if(boolean === "true"){
   contador = true
}else {
   contador = false
}

if(contador === false){
    alert("ERro 2xx")
}
while (contador === true){
    alert("Loop teste")
    alert("Loop teste")
    alert("Loop teste")

let again = prompt("Deseja repetir o loop ? (true) (false)")
if(again !== "true"){
contador = false;

}
}