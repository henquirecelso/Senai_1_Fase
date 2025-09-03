programa {
  //Escrever um algoritmo que leia dois valores inteiro distintos e informe qual é o maior. 
  funcao inicio() {
    real valor1, valor2, calc

    escreva("Digite o primeiro numero: ")
    leia(valor1)
    
    escreva("Digite o segundo numero: ")
    leia(valor2)

      enquanto (valor1 == valor2)
        valor2 = valor2 + 1
        escreva("Você digitou numeros iguais, Digite o segundo numero novamente: ")
        leia(valor2)
   


    se (valor1 > valor2)
      escreva("O maior valor é: ", valor1)
    senao
    escreva("O maior valor é: ", valor2)

    


  }
}
