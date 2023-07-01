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

const funcaoReduce = (acc, objeto) => {
  return {
    ...acc,
    [objeto.nome]: {
      idade: objeto.idade,
    },
  };
};
const pessoas = lista.reduce(funcaoReduce, {});
//console.log(pessoas);
const chaves = Object.keys(pessoas);
//console.log("chaves:", chaves);
//console.log(Object.keys(lista[0]));

const listaDeVolta = chaves.map((chave) => ({
  nome: chave,
  idade: pessoas[chave].idade,
}));

console.log(listaDeVolta);
