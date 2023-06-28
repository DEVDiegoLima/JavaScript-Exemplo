//Estrutura de Controle

//IF e Else
var idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}

//  Condições múltiplas com "else if

var nota = 80;

if (nota >= 90) {
  console.log("Você tirou uma nota excelente!");
} else if (nota >= 70) {
  console.log("Você tirou uma nota boa.");
} else {
  console.log("Você precisa estudar mais.");
}


//Estrutura de controle "switch

var diaDaSemana = "quinta";

switch (diaDaSemana) {
  case "segunda":
    console.log("Hoje é segunda-feira.");
    break;
  case "terça":
    console.log("Hoje é terça-feira.");
    break;
  case "quarta":
    console.log("Hoje é quarta-feira.");
    break;
  default:
    console.log("Outro dia da semana.");
    break;
}

// Loops com "for"
for (let i = 1; i <= 5; i++) {
    console.log("Contagem: " + i);
  }

// Loops com "while":
let i = 1;
while (i <= 5) {
  console.log("Contagem: " + i);
  i++;
}

  