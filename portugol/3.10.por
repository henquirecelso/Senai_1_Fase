programa {
  funcao inicio() {
    real primeira, segunda, terceira, quarta, quinta, soma, mesjuca
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
    soma = (primeira*0.25) + (segunda*0.25) + (terceira*0.25) + (quarta*0.25) + (quinta*0.25)
    mesjuca = soma * 20
    escreva("Juca conseguiu fazer $" + soma + " no dia\n")
    escreva("No mês juca conseguiu fazer $", mesjuca)

  }
}

