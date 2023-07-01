# <div align="center" style="color:Cyan; font-weight:bold;"> JavaScript - Array.Ruduce</div>

<br>

### Em JavaScript, o array.reduce é uma função de alta ordem que permite combinar os elementos de um array em um único valor. Ele itera sobre cada elemento do array, aplicando uma função de redução e acumulando o resultado em um valor final.

### A função de redução que você passa para o array.reduce recebe dois parâmetros: o acumulador e o elemento atual do array. O acumulador é o valor intermediário que é atualizado a cada iteração, e o elemento atual é o elemento atual sendo processado.

### Vou mostrar um exemplo para ilustrar melhor:

<pre>
const numeros = [1, 2, 3, 4, 5];

const soma = numeros.reduce((acumulador, elementoAtual) => {
  return acumulador + elementoAtual;
}, 0);

console.log(soma); // Saída: 15

</pre>

### Nesse exemplo, temos um array de números [1, 2, 3, 4, 5]. A função de redução recebe o acumulador (inicializado com o valor 0) e o primeiro elemento do array (1). A função retorna a soma do acumulador com o elemento atual (0 + 1 = 1).

### Na próxima iteração, o acumulador recebe o valor retornado na iteração anterior (1) e o próximo elemento do array (2). A função retorna a soma do acumulador com o elemento atual (1 + 2 = 3).

### Esse processo se repete até percorrer todos os elementos do array, acumulando o resultado na variável soma. No final, o valor de soma será a soma de todos os elementos do array (1 + 2 + 3 + 4 + 5 = 15).

### Essa é apenas uma aplicação básica do array.reduce. Você pode usar essa função para realizar diferentes tipos de reduções em um array, como encontrar o valor máximo, calcular a média, concatenar strings, entre outras possibilidades.

<br>

## Segunda explicação

### O array.reduce é uma função do JavaScript que permite combinar os elementos de um array em um único valor.

### Você pode pensar no array.reduce como um processo de somar vários números em uma calculadora. Imagine que você tem uma lista de números [1, 2, 3, 4, 5] e quer somar todos eles.

### No primeiro passo, você pega o primeiro número da lista (1) e o guarda na memória.

### No segundo passo, você pega o próximo número (2) e o soma com o número que você já tinha na memória (1). Agora, você atualiza a memória com o valor da soma (3).

### Você continua repetindo esse processo para cada número na lista. No final, o valor que fica na memória é a soma de todos os números.

### O array.reduce faz exatamente isso, mas em vez de usar a memória, você usa o acumulador. O acumulador é uma variável que guarda o resultado parcial da redução.

### A função que você passa para o array.reduce determina como os números devem ser combinados. Ela recebe dois argumentos: o acumulador e o elemento atual. Você precisa retornar o resultado da combinação dos dois.

### No exemplo anterior, a função de redução somava o acumulador com o elemento atual:

<pre>
const numeros = [1, 2, 3, 4, 5];

const soma = numeros.reduce((acumulador, elementoAtual) => {
  return acumulador + elementoAtual;
});

console.log(soma); // Saída: 15
</pre>

## Outro exemplo de código

<pre>
const numeros = [1, 2, 3, 4, 5];

const multiplicacao = numeros.reduce((acc, elementoAtual) => {
  return acc * elementoAtual;
});

console.log(multiplicacao);

</pre>

### 1- Inicialmente, criamos o array numeros contendo os números [1, 2, 3, 4, 5].

### 2- Em seguida, utilizamos o array.reduce para realizar a multiplicação dos elementos. A função de redução é definida como (acc, elementoAtual) => { return acc \* elementoAtual; }.

### <li>acc é o acumulador, que irá armazenar o resultado parcial da multiplicação.</li>

### <li>elementoAtual é o elemento atual do array sendo processado.</li>

### 3- Na primeira iteração, o acc é inicializado com o primeiro elemento do array (1) e o elementoAtual recebe o segundo elemento (2). A função retorna o resultado da multiplicação dos dois (1 \* 2 = 2).

### 4- Nas próximas iterações, o acc recebe o valor retornado na iteração anterior e o elementoAtual é atualizado para o próximo elemento do array. A multiplicação é realizada em cada iteração até que todos os elementos do array sejam processados.

### 5- Após todas as iterações, o valor final da multiplicação será armazenado na variável multiplicacao.

### 6- Por fim, o resultado é exibido no console através do comando console.log(multiplicacao).

### No seu exemplo, o resultado impresso será 120, que é o produto de todos os elementos do array [1, 2, 3, 4, 5] (1 _ 2 _ 3 _ 4 _ 5 = 120).
