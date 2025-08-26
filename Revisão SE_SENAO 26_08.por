programa {
  inclua biblioteca Matematica
  funcao inicio() {
    cadeia nome
    real nota1, nota2, nota3, media, frequencia

    escreva("Digite o nome do aluno avaliado: ")
    leia(nome)
    escreva("Digite a primeira nota: ")
    leia(nota1)
    escreva("Digite a segunda nota: ")
    leia(nota2)
    escreva("Digite a terceira nota: ")
    leia(nota3)
    limpa()
    escreva("Qual a frequencia do aluno: ")
    leia(frequencia)
    frequencia = frequencia * 100
    limpa()
    
    media = (nota1+nota2+nota3)/3

    media = Matematica.arredondar(media, 2)
    escreva("A média foi: "+media)
    escreva("\n")
    escreva(frequencia, "% de frequencia")


    se(media >= 7 e frequencia >= 8) {
      escreva("\nParabéns você passou ", nome)
    }senao
      escreva("\nVocê foi reprovado")
    
      


   
   
  }
}
