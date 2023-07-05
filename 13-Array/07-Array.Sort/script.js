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

const idade = lista.sort((a, b) => {
  if (a.idade < b.idade) {
    return -1;
  }
  if (a.idade > b.idade) {
    return 1;
  }
  return 0;
});

//Organizando por ordem alfabetica

const alfabeto = lista.sort((a, b) => {
  if (a.nome.toLocaleUpperCase() < b.nome.toLocaleUpperCase()) {
    return -1;
  }
  if (a.nome.toLocaleUpperCase() > b.nome.toLocaleUpperCase()) {
    return 1;
  }
  return 0;
});

const pessoas = [
  {
    nome: "Joao",
    idade: 20,
  },
  {
    nome: "Maria",
    idade: 30,
  },
  {
    nome: "Pedro",
    idade: 20,
  },
];

console.log(pessoas);

pessoas.sort((a, b) => a.idade - b.idade);

console.log(pessoas);
