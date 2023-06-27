// Tipo de dados number/float

let idade =25
console.log(typeof idade,idade); //"Number"

let altura = 1.75
console.log(typeof altura,altura); //Number 1.75


//Tipo de dados string

let nome = 'Diego';//aspas simples
let sobrenome = "Lima";// aspas dublas
let nomeCompleto = `${nome} ${sobrenome}`; //template string

console.log(typeof nome, nome);
console.log(typeof sobrenome, sobrenome);
console.log(typeof nomeCompleto, nomeCompleto);

//Tipo de dado Boolean

const gostaDeProgramacao = true;
const temCarro = false;

console.log(gostaDeProgramacao);
console.log(temCarro);

//Tipo de dados null
let valorNulo = null;
console.log(typeof valorNulo,valorNulo);

//Verificando se uma variavel é null
var myVariable = null;
if (myVariable === null) {
  console.log("myVariable é null");
}


//Tipo de dado underfined
let variavelIndefinida;
console.log(typeof variavelIndefinida,variavelIndefinida); // "undefined"


//Tipo de dado Object (Objeto)
let pessoa = {
    nome: "Diego",
    idade: 21,
    time: 'Flamengo',
    endereco:'Rua dos malucos',
  };
  console.log(typeof pessoa,pessoa);  // "object"
  console.log(pessoa.time);


//Tipo de dado array
const atacantesDoFlamengo = ['Gabigol','Pedro','Bruno Henrique','Everton cebolinha'];
console.log(typeof atacantesDoFlamengo,atacantesDoFlamengo);

//Tipo de dado Função
function somar(a, b) {
    return a + b;
  }
  console.log(typeof somar);  // "function"
  