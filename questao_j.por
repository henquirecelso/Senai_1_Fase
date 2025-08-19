programa {
  funcao inicio() {
    inteiro cafe, coxinha, halls, docedeleite, calc
    escreva("qual o preço da coxinha: ")
    leia(coxinha)
    escreva("Qual o preço do cafe: ")
    leia(cafe)
    escreva("qual o preço do halls: ")
    leia(halls)
    escreva("qual o preço do doce de leite: ")
    leia(docedeleite)
   
limpa()

  calc = (3*cafe)+halls+(2*docedeleite)+coxinha
  escreva("o total de vendas na cantina foi: ", calc)

  }
}
