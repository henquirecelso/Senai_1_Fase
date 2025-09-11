let saldo, item;

saldo = prompt("Digite o saldo da sua conta: ");
item = prompt("Digite o valor do item que deseja comprar: ");

if (item >= saldo) {
    alert("Compra efetuada com sucesso!");
} else {
    alert("Saldo insuficiente!");
}