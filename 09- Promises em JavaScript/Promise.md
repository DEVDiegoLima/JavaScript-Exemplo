# <div align="center" style="color:Cyan; font-weight:bold;"> JavaScript - Promise</div>
<br>

### Imagine que você pediu para um amigo te trazer um sorvete, mas ele ainda não chegou. Você pode esperar por ele, mas enquanto isso você pode fazer outras coisas, como jogar videogame ou assistir TV. No entanto, você precisa estar pronto quando seu amigo finalmente chegar com o sorvete.

### Em JavaScript, uma Promise é como um amigo que vai buscar o sorvete para você. Quando você faz uma solicitação assíncrona, como buscar dados de um servidor da web, uma Promise é retornada. Essa Promise representa uma operação que está em andamento, mas que ainda não terminou.

### Enquanto a Promise está sendo processada, você pode continuar fazendo outras coisas em seu código. Quando a operação assíncrona é concluída, a Promise pode ter um resultado de sucesso ou um resultado de falha.

### Digamos que você queira buscar informações de um servidor da web. Você pode criar uma Promise e dizer para ela buscar essas informações. Enquanto a Promise estiver sendo processada, você pode continuar executando outras partes do seu código. Quando a Promise for concluída, você pode realizar uma ação com base no resultado.

### Por exemplo, se a Promise retornar com sucesso, você pode mostrar os dados recebidos na tela. Se a Promise falhar, você pode lidar com o erro de alguma forma.

<pre>
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

</pre>
### Neste exemplo, criamos uma Promise que simula uma operação assíncrona. Se a operação for bem-sucedida, resolvemos a Promise com os dados recebidos. Caso contrário, rejeitamos a Promise com uma mensagem de erro.

### Depois, usamos o método then para tratar o caso de sucesso, onde exibimos os dados recebidos no console. Também usamos o método catch para lidar com o caso de erro, onde exibimos a mensagem de erro no console.

### Enquanto a Promise está sendo processada, o código continua executando outras tarefas. Neste exemplo, a mensagem "Continuando a executar outras tarefas..." é exibida antes dos dados ou erros da Promise, pois a Promise está em execução assíncrona.
<br>

# Diferença entre Promise e try-catch

### Embora as Promises e os blocos try-catch possam ser usados para lidar com erros, eles têm propósitos diferentes.

###  A estrutura try-catch é usada para capturar e lidar com exceções (erros) em código síncrono. Ela envolve um bloco de código em que você espera que ocorra algum tipo de erro. Se uma exceção é lançada dentro desse bloco, ela é capturada pelo bloco catch correspondente, permitindo que você trate o erro de alguma forma.

###  Por outro lado, as Promises são usadas para lidar com operações assíncronas e seus resultados, sejam eles de sucesso ou falha. Elas fornecem uma abordagem mais estruturada e flexível para lidar com código assíncrono, permitindo que você encadeie várias etapas de processamento e trate erros de forma mais granular.

### Enquanto um bloco try-catch é útil para capturar erros imediatamente em código síncrono, as Promises permitem que você trate erros em operações assíncronas que podem ocorrer em momentos diferentes. Com Promises, você pode usar os métodos then e catch para lidar com o resultado de uma operação assíncrona, seja ela bem-sucedida ou falha, em momentos diferentes.

### Em resumo, as Promises são mais adequadas para lidar com fluxos de controle assíncronos e operações que podem levar algum tempo para serem concluídas, enquanto o bloco try-catch é mais adequado para tratar exceções imediatas em código síncrono.