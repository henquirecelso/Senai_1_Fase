programa {
  funcao inicio() {
    // Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de conversão é: F=(9*C+160)/5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.
  real tempc, tempf, calc
  escreva("Digite a temperatura em graus Celsius: ")
  leia(tempc)
  
  limpa()
  calc = 9 * tempc + 160
  tempf = calc / 5

  escreva("A temperatura convertida para graus Fahrenheit é: ", tempf)

  }
}
