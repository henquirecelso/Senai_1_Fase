programa {
  funcao inicio() {


// teste calculadora, variaveis
    real num1, num2
    inteiro operacao
    // print, scan
    escreva("\nDigite o primeiro numero: ")
    leia(num1)
   
    escreva("Digite o segundo numero: ")
    leia(num2)

    escreva("Digite o numero da operação desejada: \n1-Soma \n2-Subtração \n3-Multiplicação \n4-Divisão\n")
    leia(operacao)

    limpa()

    
    // if else
      se (operacao==1)
      escreva("O resultado da soma é: ",num1 + num2)
        senao 
        se (operacao==2)
        escreva("O resultado da subtração é: ",num1 - num2)
          senao
          se (operacao==3)
          escreva("O resultado da multiplicação é: ",num1 * num2)
               senao
               se (operacao==4)
               escreva("O resultado da divisão é", num1 / num2)
               senao
               escreva("Comando invalido")

               

            







  }
}