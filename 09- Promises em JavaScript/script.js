// Criando uma Promise
const promessa = new Promise((resolve, reject) => {
    // Simulando uma operação assíncrona (por exemplo, busca de dados em um servidor)
    setTimeout(() => {
      const sucesso = true; // Indica se a operação foi concluída com sucesso
  
      if (sucesso) {
        const dados = { nome: 'João', idade: 10 };
        resolve(dados); // A operação foi bem-sucedida, então resolvemos a Promise com os dados
      } else {
        const erro = 'Algo deu errado na busca dos dados.';
        reject(erro); // A operação falhou, então rejeitamos a Promise com uma mensagem de erro
      }
    }, 2000); // Simula um atraso de 2 segundos na operação
  });
  
  // Usando a Promise
  promessa.then((dados) => {
    console.log('Dados recebidos:', dados);
  }).catch((erro) => {
    console.log('Erro:', erro);
  });
  
  console.log('Continuando a executar outras tarefas...');
  


// Outro exemplo de Promise
function buscarDados() {
  return new Promise((resolve, reject) => {
    // Simulando uma operação assíncrona que pode falhar
    setTimeout(() => {
      const sucesso = Math.random() < 0.5; // Simulando uma resposta bem-sucedida ou falha aleatória

      if (sucesso) {
        const dados = { nome: 'João', idade: 10 };
        resolve(dados); // A operação foi bem-sucedida, então resolvemos a Promise com os dados
      } else {
        const erro = 'Falha ao buscar os dados.';
        reject(erro); // A operação falhou, então rejeitamos a Promise com uma mensagem de erro
      }
    }, 2000); // Simula um atraso de 2 segundos na operação
  });
}

// Usando a Promise e lidando com o resultado
buscarDados()
  .then((dados) => {
    console.log('Dados recebidos:', dados);
  })
  .catch((erro) => {
    console.log('Erro:', erro);
  });
