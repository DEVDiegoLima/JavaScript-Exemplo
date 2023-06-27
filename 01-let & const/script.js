//Exemplo usando var
function example01() {
    var x = 10;
    if (true) {
      var x = 20; // Mesma variável 'x' do escopo externo
      console.log(x); // Saída: 20
    }
    //console.log(x); // Saída: 20
  }
  


//Exemplo com let
function example02() {
    let x = 10;
    if (true) {
      let x = 20; // Nova variável 'x' no escopo interno
      //let x = 23 não podem ser redeclaradas dentro do mesmo escopo.
      console.log(x); // Saída: 20
    }
    console.log(x); // Saída: 10
  }
  

//example02()


//Exemplo com const
function example03() {
    const x = 10;
     //x = 15; x não pode ser reatribuidada no mesmo escopo
    if (true) {
      const x = 20; // Nova constante 'x' no escopo interno
      console.log(x); // Saída: 20
    }
    console.log(x); // Saída: 10
  }
  
  example03()