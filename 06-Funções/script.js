// Funções e como declara-las

// 1- Declaração de função (Function Declaration)
function soma(a, b) {
    return a + b;
}

console.log("soma: " + soma(2,2));


// 2- Expressão de função (Function Expression)
var subtracao = function(a, b) {
    return a - b; 
};

console.log("subtraçao: " + subtracao(4,2));


// 3- Função de seta (Arrow Function)
var multiplicacao = (a, b) => {
    return a * b;
};

console.log("multiplicacao: "+ multiplicacao(2,5));