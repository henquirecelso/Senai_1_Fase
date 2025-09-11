let senha = prompt("Digite uma senha (mínimo 8 caracteres): ")

if (senha.length < 8)  {
   alert("Senha inválida! A senha deve ter no mínimo 8 caracteres.")
}   else{
    alert("Senha criada com sucesso!")
}