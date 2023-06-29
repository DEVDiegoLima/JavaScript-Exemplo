// Exemplo 1
async function getData() {
  try {
    const response = await fetch('https://api.example.com/data'); // Fazendo uma requisição assíncrona

    const data = await response.json(); // Espera pela resposta e a transforma em JSON

    console.log(data); // Manipula os dados recebidos
  } catch (error) {
    console.log(error); // Trata erros, se ocorrerem
  }
}


//Exemplo 2
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function minhaFuncao() {
    console.log('Iniciando...');
    
    await delay(2000); // Espera por 2 segundos
    
    console.log('Após 2 segundos.');
    
    await delay(1000); // Espera por mais 1 segundo
    
    console.log('Após mais 1 segundo.');
    
    return 'Fim da função.';
  }
  
  minhaFuncao()
    .then(resultado => console.log(resultado))
    .catch(erro => console.log(erro));
  