programa {
  funcao inicio() {
    real salario_mensal, result, dias

    escreva("Digite seu salario: ")
    leia(salario_mensal)

    escreva("Quantos dias você trabalhou: ")
    leia(dias)

    result = salario_mensal / dias
    escreva("Seu salario diario é: ", result)
  }
}
