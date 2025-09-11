let mes;
const janeiro = 31, fevereiro = 28, marco = 31, abril = 30, maio = 31, junho = 30,
     julho = 31, agosto = 31, setembro = 30, outubro = 31,
     novembro = 30, dezembro = 31;

     mes = prompt("Digite o número do mês (1-12):");
        
  if (mes == 1) {
    alert("Janeiro tem " + janeiro + " dias.");
  } else if (mes == 2) {
    alert("Fevereiro tem " + fevereiro + " dias.");
  } else if (mes == 3) {
    alert("Março tem " + marco + " dias.");
  } else if (mes == 4) {
    alert("Abril tem " + abril + " dias.");
  } else if (mes == 5) {
    alert("Maio tem " + maio + " dias.");
  } else if (mes == 6) {
    alert("Junho tem " + junho + " dias.");
  } else if (mes == 7) {
    alert("Julho tem " + julho + " dias.");
  } else if (mes == 8) {
    alert("Agosto tem " + agosto + " dias.");
  } else if (mes == 9) {
    alert("Setembro tem " + setembro + " dias.");
  } else if (mes == 10) {
    alert("Outubro tem " + outubro + " dias.");
  } else if (mes == 11) {
    alert("Novembro tem " + novembro + " dias.");
  } else if (mes == 12) {
    alert("Dezembro tem " + dezembro + " dias.");
  } else {
    alert("Mês inválido! Por favor, insira um número entre 1 e 12.");
  }