programa {
  funcao inicio() {
    inteiro poupanca
    real salario, moradia, agua, luz, internet, gasolina, netflix, telefone, outros
    escreva("Digite seu salario: ")
    leia(salario)

    escreva("Quanto você gastou no mês com agua: ")
    leia(agua)

    escreva("Quanto você gastou no mês com luz: ")
    leia(luz)

    escreva("Quanto você gastou no mês com moradia: ")
    leia(moradia)

    escreva("Quanto você gastou no mês com internet: ")
    leia(internet)

    escreva("Quanto você gastou no mês com gasolina: ")
    leia(gasolina)

    escreva("Quanto você gastou no mês com netflix: ")
    leia(netflix)

    escreva("Quanto você gastou no mêsc om telefone: ")
    leia(telefone)

    escreva("Quanto você gastou no mês com outros: ")
    leia(outros)
 
    poupanca = salario - (moradia+agua+luz+internet+telefone+outros+netflix+gasolina)
    escreva("Sua poupança ficou: ", poupanca)
  }
}
