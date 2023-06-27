//Operadores Lógicos

//Operador "E" lógico (&&)

let temCarro = false;
let temCasa = true;

console.log(temCarro && temCasa); //false


//Operador "OU" lógico (||)

let temIrmao = true;
let temIrma = false;

console.log(temIrmao || temIrma); //true

//Operador "NÃO" lógico (!):
let temPC = !true;
let temTV = !false;

console.log(temPC,temTV);


//Operadores de Comparação
let a = 5;
let b = 10;
let c= '10';
console.log(a == b); //false
console.log(a != b); //true
console.log(a > b); //false
console.log(a < b); //true
// === e !==
console.log('10 === "10"?',b === c);
console.log('10 != "10"?',b !== c);

// >= e <=
console.log(10 >= 15) //false
console.log(5 <= 10)//true