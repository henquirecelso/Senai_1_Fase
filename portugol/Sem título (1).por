programa {
  funcao inicio() {
    inteiro horas,worker,salarioHora
    real salario

    escreva("Digite o numero do funcionario: ")
    leia(worker)
    escreva("Digite as horas trabalhas: ")
    leia(horas)
    escreva("Quanto o funcionario recebe por hora: ")
    leia(salarioHora)

    salario = (salarioHora*horas) * 30
    escreva("O funcionario recebe por mês: $",salario)




  }
}
// Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse funcionário. A seguir,
//  mostre o número e o salário do funcionário, com duas casas decimais.

// Entrada
// O arquivo de entrada contém 2 números inteiros e 1 número com duas casas decimais, representando o número, quantidade de horas trabalhadas e o valor que o funcionário recebe por hora trabalhada,
//  respectivamente.

// Saída
// Imprima o número e o salário do funcionário, conforme exemplo fornecido, com um espaço em branco antes e depois da igualdade. No caso do salário, também deve haver um espaço em branco após o $.