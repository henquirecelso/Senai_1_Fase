let A,B,C,D
A = Number(prompt("Digite o valor A"))
B = Number(prompt("Digite o valor B"))
C = Number(prompt("Digite o valor C"))
D = Number(prompt("Digite o valor D"))

if(B > C && D > A && (C+D) > (A+B) && C > 0 && A % 2 == 0) {
    alert("Valores aceitos")
} else {
    alert("Valores nao aceitos")
}