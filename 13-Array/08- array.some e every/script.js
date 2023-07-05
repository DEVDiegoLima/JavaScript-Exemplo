const lista = [
  {
    nome: "Jose",
    idade: 13,
    exibir: true,
  },
  {
    nome: "Joao",
    idade: 42,
  },
  {
    nome: "Maria",
    idade: 23,
  },
  {
    nome: "Gabriela",
    idade: 25,
  },
  {
    nome: "Fernanda",
    idade: 65,
  },
  {
    nome: "André",
    idade: 69,
  },
  {
    nome: "Heitor",
    idade: 32,
  },
  {
    nome: "Gustavo",
    idade: 64,
  },
  {
    nome: "Sandra",
    idade: 33,
  },
];
//some pelos menos 1 tem que está acima de 50 é como fosse ||
const resultadoSome = lista.some((objeto) => objeto.idade > 50);

//console.log("Resultado:", resultadoSome);

//every é como fosse &&, Todo da lista precisa ser maior que 50 anos

const resultadoEvery = lista.every((objeto) => objeto.idade > 50);
console.log("Resultado:", resultadoEvery);
