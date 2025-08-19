programa {
  funcao inicio() {
    inteiro empates, vitorias, pontos
    escreva("Quantas vezes seu time ganhou: ")
    leia(vitorias)
    escreva("Quantas vezes seu time empatou: ")
    leia(empates)
    pontos = (vitorias * 3) + empates
    escreva("Seu time conquistou ", pontos)
  }
}
