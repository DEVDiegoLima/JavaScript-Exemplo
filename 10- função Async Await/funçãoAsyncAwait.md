# <div align="center" style="color:Cyan; font-weight:bold;"> JavaScript - Async Await</div>
<br/>

### O JavaScript é uma linguagem de programação assíncrona, o que significa que ele pode executar várias tarefas simultaneamente, sem bloquear a execução do código. No entanto, muitas vezes precisamos executar tarefas assíncronas de forma sequencial, ou seja, uma após a outra, garantindo que uma tarefa termine antes de iniciar a próxima. É aqui que as funções async/await entram em cena.

### O async é uma palavra-chave que é usada para declarar uma função assíncrona. Essa função retorna sempre uma Promise. Dentro dessa função, podemos usar a palavra-chave await para indicar que queremos esperar a resolução de uma Promise antes de prosseguir com a execução do código.

### Vamos dar um exemplo para entender melhor. Suponha que você tenha uma função assíncrona chamada getData() que faz uma requisição assíncrona para buscar dados de um servidor. Usando async/await, o código ficaria assim:

<pre>
    async function getData() {
  try {
    const response = await fetch('https://api.example.com/data'); // Fazendo uma requisição assíncrona

    const data = await response.json(); // Espera pela resposta e a transforma em JSON

    console.log(data); // Manipula os dados recebidos
  } catch (error) {
    console.log(error); // Trata erros, se ocorrerem
  }
}
</pre>
### Nesse exemplo, usamos await para aguardar a resposta da requisição fetch e também para aguardar a conversão da resposta em JSON. Dessa forma, o código é executado de forma sequencial, aguardando cada operação assíncrona ser concluída antes de prosseguir.

### Além disso, utilizamos o bloco try/catch para tratar erros que possam ocorrer durante a execução assíncrona. Isso nos permite capturar e tratar exceções de forma mais conveniente.

### As funções async/await tornam o código mais legível e mais fácil de entender, especialmente quando temos várias operações assíncronas encadeadas. Em vez de usar várias callbacks ou lidar diretamente com Promises, podemos escrever o código como se fosse síncrono, tornando a lógica mais clara.

### Lembre-se de que, ao usar async/await, é importante que a função chamadora também seja assíncrona ou trate o retorno da Promise corretamente.
<br>

# Explicação 2

### A função async/await é usada para lidar com tarefas assíncronas de uma maneira mais síncrona, ou seja, ela permite escrever o código como se estivesse sendo executado de forma sequencial, mesmo quando há operações assíncronas envolvidas.

### Vou dar um exemplo mais básico para ilustrar seu uso:
<pre>
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

</pre>
### Nesse exemplo, temos uma função minhaFuncao que é declarada como assíncrona usando a palavra-chave async. Dentro dessa função, usamos a palavra-chave await para indicar que queremos esperar pela resolução de uma Promise.

### A função delay é uma função auxiliar que retorna uma Promise que é resolvida após um determinado tempo de espera. No exemplo, estamos usando delay para simular operações assíncronas.

### Quando chamamos minhaFuncao(), ela é executada sequencialmente, aguardando cada operação assíncrona ser concluída antes de prosseguir para a próxima. No exemplo, há duas chamadas para delay com diferentes tempos de espera.

### Ao chamar minhaFuncao(), o código imprimirá "Iniciando..." e, em seguida, aguardará por 2 segundos antes de imprimir "Após 2 segundos.". Depois, aguardará por mais 1 segundo antes de imprimir "Após mais 1 segundo.". Por fim, a função retornará a string "Fim da função.".

### Observe que, ao chamar minhaFuncao(), encadeamos .then() para lidar com o resultado retornado pela função (nesse caso, a string "Fim da função."). Também podemos encadear um .catch() para lidar com erros que possam ocorrer durante a execução assíncrona.

### A ideia principal é que async/await nos permite escrever código assíncrono de uma maneira mais fácil de ler e entender, sem a necessidade de callbacks ou manipulação direta de Promises.