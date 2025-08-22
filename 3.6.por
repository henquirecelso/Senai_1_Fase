programa {
inclua biblioteca Matematica
  funcao inicio() {
    inteiro num1, quad, potencia
    real raiz1
    escreva("Digite um numero: ")
    leia(num1)
    quad = num1 * num1
    raiz1 = Matematica.raiz(num1, 2)
    escreva("o quadrado é: " + quad + " e a raiz é: " + raiz1)
  }
}
