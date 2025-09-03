programa {
  //O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do distribuidor e dos impostos 
  //(aplicados, primeiro os impostos sobre o custo de fábrica, e depois a percentagem do distribuidor sobre o resultado).
  //Supondo que a percentagem do distribuidor seja de 28% e os impostos 45%. Escrever um algoritmo que leia o custo de fábrica de um carro e informe o custo ao consumidor do mesmo. 
  funcao inicio() {
    real custofabrica, distribuidor = 0.28, impostos = 0.45
    inteiro custocompleto

    escreva("Digite o custo de fabrica do carro novo: ")
    leia(custofabrica)

    custocompleto = ((custofabrica * impostos) * distribuidor) + custofabrica

    escreva("O custo completo do carro é: ", custocompleto)
    

  
  }
}


