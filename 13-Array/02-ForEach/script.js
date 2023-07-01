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

// For

// for (let i = 0; i < lista.length; i++) {
//   console.log(lista[i]);
// }

// lista.forEach(function (Object) {
//   console.log(Object);
// });

//lista.forEach((Object) => console.log(Object));

let soma = 0;
lista.forEach((Object) => {
  soma += Object.idade;
});

console.log("soma", soma);

const numericos = [2, 3, 5, 6, 8];

numericos.forEach((numero) => {
  let dobro = numero * 2;
  console.log(dobro);
});
