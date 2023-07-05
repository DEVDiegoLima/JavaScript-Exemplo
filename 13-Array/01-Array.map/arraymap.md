# <div align="center" style="color:Cyan; font-weight:bold;"> JavaScript - Array.map</div>

<br/>

### O array.map( ) é um método em JavaScript que permite percorrer cada elemento de um array e aplicar uma função a cada elemento. Ele retorna um novo array com os resultados dessas funções aplicadas a cada elemento. Em outras palavras, o array.map() cria um novo array com a mesma quantidade de elementos do array original, mas com cada elemento transformado de acordo com a função fornecida.

### Aqui está a estrutura básica do array.map():

<pre>
array.map(funçãoDeMapeamento)
</pre>
<li>array: É o array original que queremos percorrer e mapear.</li>
<li>funçãoDeMapeamento: É uma função que será aplicada a cada elemento do array. Essa função recebe o elemento atual como parâmetro e retorna o resultado da transformação desejada.</li>

### A função de mapeamento pode ser definida de duas formas: usando uma função anônima ou uma função nomeada. Vou mostrar exemplos de ambas as formas.

### Exemplo usando função anônima:

<pre>
const numeros = [1, 2, 3, 4, 5];

const dobrados = numeros.map(function(numero) {
  return numero * 2;
});

console.log(dobrados); // Output: [2, 4, 6, 8, 10]
</pre>

### Exemplo usando função nomeada:

<pre>
const numeros = [1, 2, 3, 4, 5];

function dobrar(numero) {
  return numero * 2;
}

const dobrados = numeros.map(dobrar);

console.log(dobrados); // Output: [2, 4, 6, 8, 10]
</pre>

### Nesse exemplo, definimos uma função nomeada chamada dobrar que recebe o parâmetro numero e retorna numero \* 2. Em seguida, passamos essa função como argumento para o array.map(), que percorre cada elemento do array numeros e aplica a função de mapeamento dobrar a cada elemento.
