programa {
  //Escrever um algoritmo que leia o nome e as três notas obtidas por um aluno durante o semestre. 
  //Calcular a sua média (aritmética), informar o nome e sua menção aprovado (media maior ou igual 7), Reprovado (media <= 5) e Recuperação (media entre 5.1 a 6.9)
  funcao inicio() {
    cadeia nome
    inteiro media, calc, nota1, nota2, nota3

    escreva("Digite seu nome: ")
    leia(nome)
    
    escreva("Digite a primeira nota: \n")
    leia(nota1)
    
    escreva("Digite a segunda nota: \n")
    leia(nota2)
    
    escreva("Digite a terceira nota: \n")
    leia(nota3)

    calc = nota1 + nota2 + nota3
    media = calc / 3

    se (media >= 7) 
    escreva("o aluno ",nome + " foi aprovado com uma média de: ", media)
    senao
    escreva("o aluno ",nome + " ficara em recuperação com uma média de: ", media)
    
   




    
  }
}
