programa {
  funcao inicio() {
    cadeia nome
    real salarioFixo, calc, salarioComissao
    inteiro totalVendasMes

    escreva("Digite o nome do vendendor: ")
    leia(nome)
    escreva("Seu salario fixo: ")
    leia(salarioFixo)
    escreva("Seu total de vendas em dinheiro no mês: ")
    leia(totalVendasMes)

    calc = totalVendasMes * 0.15
    salarioComissao = calc + salarioFixo
    escreva("O salario do vendendor no final do mes é: ", salarioComissao)

    
  }
}
// Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). 
// Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.

// Entrada
// O arquivo de entrada contém um texto (primeiro nome do vendedor) e 2 valores de dupla precisão (double) com duas casas decimais, 
// representando o salário fixo do vendedor e montante total das vendas efetuadas por este vendedor, respectivamente.

// Saída
// Imprima o total que o funcionário deverá receber, conforme exemplo fornecido.