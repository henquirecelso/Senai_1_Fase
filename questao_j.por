programa {
  funcao inicio() {
    inteiro cafe, coxinha, halls, docedeleite, calc
    escreva("Quantas coxinhas foram vendidas: ")
    leia(coxinha)
    escreva("Quantas cafés foram vendidos: ")
    leia(cafe)
    escreva("Quantos halls foram vendidos: ")
    leia(halls)
    escreva("Quantos doce de leite foram vendidos: ")
    leia(docedeleite)
   
limpa()

  calc = (3*cafe)+halls+(2*docedeleite)+coxinha
  escreva("o total de vendas na cantina foi: ", calc)

  }
}
