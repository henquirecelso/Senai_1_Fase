let distancia = parseFloat(prompt("Digite a distância em km:"));
if (distancia <= 400) {
    alert("Carro, com um tempo de: " + (distancia / 80) + " horas");
} else if (distancia <= 200) {
    alert("Ônibus, com um tempo de: " + (distancia / 60) + " horas");
} else if (distancia <= 1000) {
    alert("Navio, com um tempo de: " + (distancia / 25) + " horas");
} else {
    alert("Avião, com um tempo de: " + (distancia /800).toFixed(2) + " horas");
}
