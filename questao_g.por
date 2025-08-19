programa {
  funcao inicio() {
    inteiro dmgcrit, calc, critbonus
    escreva("Digite o dano: ")
    leia(dmgcrit)
    escreva("Digite o dano bonus: ")
    leia(critbonus)
    calc = (dmgcrit * 1.5) + critbonus
    escreva("Seu dano critico foi: ", calc)
  }
}
