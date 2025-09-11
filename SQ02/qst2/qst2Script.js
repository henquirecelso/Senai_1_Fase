// Jogo de Adivinhação: Crie um número aleatório entre 1 e 10. Peça ao usuário para adivinhar o número e, em seguida, diga se eles acertaram ou não.
const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
const palpite = parseInt(prompt("Adivinhe um número entre 1 e 10:"));
if (palpite === numeroAleatorio) {
    alert("Parabéns! Você acertou o número.");
} else {
    alert("Que pena! O número era " + numeroAleatorio + ".");
}