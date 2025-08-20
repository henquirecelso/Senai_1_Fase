programa {

  funcao inicio() {
    cadeia senha, login, senha1, login1
    inteiro conta = 5000, operacao, retirar, depositar
    logico continue = verdadeiro
    escreva("--------------------------------------------------------------------------------\n")
    escreva("Bem vindo, para acessar sua conta bancaria você deve criar um login e uma senha!\n")
    escreva("--------------------------------------------------------------------------------\n\n")

    escreva("________________\n")
    escreva("Crie um Usuario: \n") 
    escreva("⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺\n")
    leia(login1)


    escreva("________________\n")
    escreva("Crie uma senha: \n")
    escreva("⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺\n")
    leia(senha1)

    limpa()
    escreva("________________\n")
    escreva("Digite sua login: \n")
    escreva("⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺\n")


    leia(login)
    escreva("________________\n")
    escreva("Digite seu senha: \n")
    escreva("⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺\n")
    leia(senha)

    limpa()

    se (login == login1 e senha == senha1)
    escreva("Você fez login \n")
    senao{
    escreva("Incorreto. Finalizando programa")
    retorne
  }
    enquanto (continue){
    escreva("Atualmente você tem: $", conta, "\nDigite o numero da operação desejada \n1- Retirar / 2- Depositar \n")
    leia(operacao)

    limpa()

    se (operacao == 1) {
    escreva("Digite o valor a retirar: ")
    leia(retirar)
    conta = conta - retirar
    escreva("Após a transferencia você possui: $",conta)
    }
    senao{
    escreva("Digite o valor a depositar: ")
    leia(depositar)
    conta = conta + depositar
    escreva("Após a transferencia você possui: $ ",conta)
    }

   
    
    escreva("\nDeseja fazer outra operação ?\n 1 - Sim   2 - Não\n")
    inteiro resposta
    leia(resposta)
    se ( resposta == 2)
    continue = falso
    
   
// A variável conta é declarada fora do enquanto, então ela mantém seu valor entre uma repetição e outra.
// Após cada operação, você atualiza o saldo com:
// conta = conta - retirar ou
// conta = conta + depositar
// O novo valor de conta será usado na próxima repetição do enquanto.
    }

  

    



  


    



    
  

   

    
   



  }
}
