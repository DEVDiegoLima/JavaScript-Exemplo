setTimeout(function() {
    console.log("Olá, mundo!");
  }, 2000);



// Explicação do erro
const soma = setTimeout(()=> {
    return 5 + 5;
},5000)

//console.log(soma());


// exemplo correto
const calc = () => {
    return 5 + 5;
  };
  
  setTimeout(() => {
    console.log(calc());
  }, 5000);


// Exemplo do Callback.md
const callback = () => {
    console.log("Essa é uma função de callback!");
  };
  
  setTimeout(callback, 5000);


//Função callback anonima
setTimeout(() => {
    console.log("Essa é uma função de callback anônima!");
}, 5000);



// Exemplo sem o uso do setTimeout
function calcular(a, b, operacao) {
    console.log("Realizando o cálculo...");
    return operacao(a, b);
  }
  
  function soma(a, b) {
    return a + b;
  }
  
  function subtracao(a, b) {
    return a - b;
  }
  
  console.log(calcular(5, 3, soma));        // Exemplo de soma
  console.log(calcular(5, 3, subtracao));   // Exemplo de subtração
  