programa {
  funcao inicio() {
    inteiro media, nota1, nota2, p1, p2
    escreva("Digite sua primeira nota: ")
    leia(nota1)
    escreva("Digite sua segunda nota: ")
    leia(nota2)
    escreva("Qual o peso da primeira nota: ")
    leia(p1)
    escreva("Qual o peso da segunda nota: ")
    leia(p2)
    media = (nota1*p1+nota2*p2) / (p1+p2)

    escreva("Sua média foi: ", media)
  }
}
