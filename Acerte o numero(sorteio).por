programa {
inclua biblioteca Util

  funcao inicio() {
  inteiro result=Util.sorteia(1,10)
  inteiro escolha1
    escreva("Tente acertar o numero de 1 a 10\n")
    leia(escolha1)

    se (escolha1==result)
    escreva("Parabéns você acertou!")
    senao
    escreva("Você errou, a resposta era: ", result)

    

    
  }
}
