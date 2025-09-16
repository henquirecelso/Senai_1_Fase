let placaCarro = Number(prompt("Digite o ultimo dígito da placa do carro:"));

if (placaCarro == 1 || placaCarro == 0) {
    alert("Não pode rodar na sgunda-feira");
} else if (placaCarro == 2 || placaCarro == 3) {
    alert("Não pode rodar na terça-feira");
} else if (placaCarro == 4 || placaCarro == 5) {
    alert("Não pode rodar na quarta-feira");
} else if (placaCarro == 6 || placaCarro == 7) {
    alert("Não pode rodar na quinta-feira");
} else if (placaCarro == 8 || placaCarro == 9) {
    alert("Não pode rodar na sexta-feira");
} else {
    alert("Número inválido");
}

   