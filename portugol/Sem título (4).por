programa {
  funcao inicio() {
    inteiro valor, calc, calc2,calc3,calc4,calc5,calc6,calc7
   

    escreva("Digite o valor: ")
    leia(valor)

  calc = valor / 100
  valor = valor % 100
  
  calc2 = valor / 50
  valor = valor % 50

  calc3 = valor / 20
  valor = valor % 20
  
  calc4 = valor / 10
  valor = valor % 10

  calc5 = valor / 5
  valor = valor % 5

  calc6 = valor / 2
  valor = valor % 2

  calc7 = valor / 1
  valor = valor % 1

   escreva(calc, "\n", calc2, "\n", calc3, "\n", calc4, "\n", calc5, "\n", calc6, "\n", calc7, "\n")
  

    



  
    


    
  }
}



// Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1.
//  A seguir mostre o valor lido e a relação de notas necessárias.

// Entrada
// O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).

// Saída
// Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo necessárias, conforme o exemplo fornecido. 
// Não esqueça de imprimir o fim de linha após cada linha, caso contrário seu programa apresentará a mensagem: “Presentation Error”.