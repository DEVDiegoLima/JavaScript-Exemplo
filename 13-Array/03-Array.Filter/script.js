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

console.log("Lista Padrão", lista);
const listaFiltrada = lista.filter((pessoa) => pessoa.idade > 20);

console.log("Lista Filtrada", listaFiltrada);

const listaFiltrada2 = lista.filter((pessoa) => pessoa.idade < 20);

console.log("Lista Jovens", listaFiltrada2);

const filterNomeFernanda = lista.filter((pessoa) => pessoa.nome === "Fernanda");

console.log("Lista da Fernanda", filterNomeFernanda);

//Exemplo arrayfiltermd

var numeros = [1, 2, 3, 4, 5, 6];

var numerosPares = numeros.filter(function (elemento) {
  return elemento % 2 === 0;
});

console.log("Numeros Pares: " + numerosPares); // [2, 4, 6]
