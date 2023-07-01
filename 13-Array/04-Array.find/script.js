let lista = [
  {
    nome: "Fernando",
    idade: 27,
  },
  {
    nome: "Lucas",
    idade: 18,
  },
  {
    nome: "Fernanda",
    idade: 26,
  },
  {
    nome: "Fred",
    idade: 17,
  },
  {
    nome: "Paula Maria",
    idade: 30,
  },
  {
    nome: "Paula",
    idade: 37,
  },
  {
    nome: "Pedro Lucas",
    idade: 47,
  },
  {
    nome: "Gabriel",
    idade: 30,
  },
];

const novaPessoa = lista.find((Object) => Object.idade > 30);
console.log(novaPessoa);

const Paula = lista.find((Object) => Object.nome === "Paula Maria");
console.log(Paula);

const buscarPessoa = (Object) => Object.nome === "Lucas";
const buscandoLucas = lista.find(buscarPessoa);
console.log(buscandoLucas);

//exemplo da gavetas

const gavetas = [
  "Meias",
  "Coeca",
  "Calça",
  "Camisa",
  "Casaco",
  "Sapatos",
  "Oculos",
  "Relogio",
];

const buscarRelogio = (item) => item === "Relogio";
const encontrandoRelogio = gavetas.find(buscarRelogio);
console.log(encontrandoRelogio);
