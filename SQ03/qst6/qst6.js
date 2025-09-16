//faça um aplicativo de previsão do tempo que permite ao usuário inserir o nome de uma cidade e, com base na cidade escolhida, fornece a previsão do tempo atual.

let city = prompt("Digite o nome da cidade para obter a previsão do tempo:").toLowerCase();

if (city === "são paulo") {
    alert("Previsão do tempo para São Paulo: Ensolarado, 25°C");
} else if (city === "rio de janeiro") {
    alert("Previsão do tempo para Rio de Janeiro: Parcialmente nublado, 28°C");
} else if (city === "belo horizonte") {
    alert("Previsão do tempo para Belo Horizonte: Chuvoso, 22°C");
} else {
    alert("Desculpe, não tenho a previsão do tempo para essa cidade.");
}