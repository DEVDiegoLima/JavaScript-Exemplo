const lista = [
  {
    nome: "Jose",
    idade: 13,
    cartoes: ["6844", "4565"],
  },
  {
    nome: "Joao",
    idade: 42,
    cartoes: ["1580", "9600"],
  },
  {
    nome: "Maria",
    idade: 23,
    cartoes: ["2365", "4587"],
  },
  {
    nome: "Gabriela",
    idade: 25,
    cartoes: ["9284", "4506"],
  },
  {
    nome: "Fernanda",
    idade: 65,
    cartoes: ["1520", "6940"],
  },
  {
    nome: "André",
    idade: 69,
    cartoes: ["2014", "1456"],
  },
  {
    nome: "Heitor",
    idade: 32,
    cartoes: ["452", "647"],
  },
  {
    nome: "Gustavo",
    idade: 64,
    cartoes: ["248", "987"],
  },
  {
    nome: "Sandra",
    idade: 33,
    cartoes: ["154", "645"],
  },
];

const cartoes = lista.flatMap((obejeto) => obejeto.cartoes);

console.log(cartoes);
// usnado o flatMap ele converte uma lista de objetos em uma lista
const cartoes1 = lista.map((obejeto) => obejeto.cartoes);

//console.log(cartoes1);

//Usando o map eu teria uma lista dentro de outra lista de cartões e isso seria um problema
