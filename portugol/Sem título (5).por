programa {
  funcao inicio() {
    real primeira, segunda, terceira, quarta, quinta, desconto, soma2, result
    escreva("Quanto VocÊ conseguiu na primeira corrida: ")
    leia(primeira)
    escreva("Quanto VocÊ conseguiu na segunda corrida: ")
    leia(segunda)
    escreva("Quanto VocÊ conseguiu na terceira corrida: ")
    leia(terceira)
    escreva("Quanto VocÊ conseguiu na quarta corrida: ")
    leia(quarta)
    escreva("Quanto VocÊ conseguiu na quinta corrida: ")
    leia(quinta)
    soma2 = primeira + segunda + terceira + quarta + quinta
    desconto = (primeira*0.25) + (segunda*0.25) + (terceira*0.25) + (quarta*0.25) + (quinta*0.25)
    escreva("Desconto $" + desconto + " no dia\n")
    result = soma2 + desconto
    escreva("O total liqido é: ", soma2 - desconto)



  }
}