programa {
  // Calculo pra media final do aluno
  funcao inicio() {
    real nota1, nota2, nota3
    inteiro x, media
    
    escreva("Média das notas do final de semestre\n")

    escreva("Digite a primeira nota:  ")
    leia(nota1)
    escreva("Digite a segunda nota:  ")
    leia(nota2)
    escreva("Digite a terceira nota: ")
    leia(nota3)

    limpa()

    x = nota1 + nota2 + nota3
    media = x / 3
    
    escreva("A média do aluno é: ", media)

  }
}
