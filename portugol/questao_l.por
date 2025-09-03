programa {
  funcao inicio() {
    inteiro cafe, alunos, cafebonus

    real capita
    escreva("quantos cafés: ")
    leia(cafe)

    escreva("quantos alunos: ")
    leia(alunos)

    escreva("quantos cafés extras foram feitos: ")
    leia(cafebonus)
     
    capita = (cafe+cafebonus) / alunos

    escreva("O resultado é: ", capita)
  }
}
