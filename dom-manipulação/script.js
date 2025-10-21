// function mostrarMensagem(){
//     alert("teste")
// }
//  const botao = document.getElementById('button');
//  botao.addEventListener('click', mostrarMensagem);

// function executarExercicio(){
//     // let nome = prompt("Qual seu nome ? ")
//     // alert(`Bem vindo ${nome}`)

//     let nome = document.getElementById("entrada").value
//     nome = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase()
//     document.getElementById('resultadoNome').innerHTML = "Bem vindo " + nome
// }


    function efetuarLogin(){
        let resultado = document.getElementById("resultadoLogin")
       let user = document.getElementById("username").value
       if(user == "admin"){
        resultado.innerHTML = "Login com sucesso"
       } else{
        resultado.innerHTML = "Por favor, cadastre-se!"
       }
    }



