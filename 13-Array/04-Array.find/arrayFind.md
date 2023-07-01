# <div align="center" style="color:Cyan; font-weight:bold;"> JavaScript - Array.map</div>

<br/>

### O método array.find() é uma função embutida no JavaScript que permite encontrar o primeiro elemento em um array que satisfaça uma determinada condição. Ele percorre os elementos do array da esquerda para a direita e retorna o valor do primeiro elemento encontrado que atenda à condição especificada ou undefined caso nenhum elemento seja encontrado.

### Aqui está a sintaxe básica do array.find():

<pre>
array.find(function(currentValue, index, arr) {
  // lógica de verificação da condição
}, thisValue);
</pre>

### Vamos explicar os parâmetros:

<li>function(currentValue, index, arr): Uma função callback que será executada para cada elemento do array. Ela recebe três parâmetros opcionais:</li>
<li>currentValue: O valor do elemento atual sendo verificado.</li>
<li>index (opcional): O índice do elemento atual sendo verificado</li>
<li>arr (opcional): O array original em que find() foi chamado.
Dentro dessa função, você pode implementar a lógica para verificar se o elemento atual satisfaz a condição desejada. Se a condição for verdadeira, você pode retornar true para indicar que o elemento foi encontrado.</li>
<li>thisValue (opcional): Um valor a ser usado como this quando executar a função de callback.</li>
<br>

### Aqui está um exemplo simples para ilustrar como usar o array.find():

<pre>
const numbers = [1, 2, 3, 4, 5];

const evenNumber = numbers.find(function(num) {
  return num % 2 === 0;
});

console.log(evenNumber); // Saída: 2
</pre>

### Nesse exemplo, o array.find() é usado para encontrar o primeiro número par no array numbers. A função de callback verifica se o número atual (num) é divisível por 2 usando o operador % (resto da divisão). O find() retorna o valor 2, que é o primeiro número par encontrado no array.

### É importante mencionar que o array.find() retorna apenas o primeiro elemento que satisfaz a condição. Se você quiser encontrar todos os elementos que correspondem à condição, pode usar o método array.filter() em vez disso.

<br>

## Segundo explicação

### O array.find( ) é uma função no JavaScript que permite encontrar o primeiro elemento em um array que atenda a uma condição específica. Você pode pensar nessa função como uma busca em um armário com várias gavetas.

### Digamos que você tenha um armário com várias gavetas, e você quer encontrar o primeiro par de meias. Você começa abrindo a primeira gaveta e verifica se há um par de meias dentro. Se encontrar, você para a busca e pega esse par de meias. Caso contrário, você passa para a próxima gaveta e repete o processo até encontrar o que está procurando ou verificar todas as gavetas.

### No código JavaScript, o array.find() funciona de maneira semelhante. Você fornece uma função que verifica se cada elemento do array atende à condição que você definiu. O método find() percorre os elementos do array da esquerda para a direita, verificando cada um deles até encontrar o primeiro que satisfaça a condição. Assim que encontrar, ele retorna esse elemento e para a busca.

### Aqui está um exemplo prático:

<pre>
const numbers = [1, 2, 3, 4, 5];

const evenNumber = numbers.find(function(num) {
  return num % 2 === 0;
});

console.log(evenNumber); // Saída: 2
</pre>

### Nesse exemplo, temos um array chamado numbers com os valores de 1 a 5. Queremos encontrar o primeiro número par no array. Então, usamos o array.find() com uma função que verifica se cada número é divisível por 2 (ou seja, é par). Quando o número 2 é encontrado, ele atende à condição e é retornado pelo find(). Por isso, o valor de evenNumber é 2.
