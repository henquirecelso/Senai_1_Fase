//Classificação de Notas: Peça ao usuário para inserir sua nota em uma escala de 0 a 100 e, em seguida, atribua uma classificação (A, B, C, D ou E) com base na nota.
let nota = prompt("Digite sua nota (0-100):");

if (nota >= 90 && nota <= 100) {
    alert("Classificação: A");
} else if (nota >= 80 && nota < 90) {
    alert("Classificação: B");
} else if (nota >= 70 && nota < 80) {
    alert("Classificação: C");
} else if (nota >= 60 && nota < 70) {
    alert("Classificação: D");
} else if (nota < 60) {
    alert("Classificação: E");
}