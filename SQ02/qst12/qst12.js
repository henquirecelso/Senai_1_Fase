let idadeDog
idadeDog = prompt("Qual a idade do seu cachorro?")

idadeDog = Number(idadeDog) * 7

alert("A idade do seu cachorro em anos humanos é " + idadeDog)

if (idadeDog > 60) {
    alert("Seu cachorro é idoso e pode se aposentar")
}