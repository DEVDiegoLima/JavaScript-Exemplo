# <div align="center" style="color:Cyan; font-weight:bold;"> JavaScript - Array ForEach</div>

<br/>

### O forEach é um método fornecido pelo objeto Array em JavaScript que permite executar uma função em cada elemento de um array.

### A sintaxe básica do forEach é a seguinte:

<pre>
    array.forEach(function(elemento, índice, arrayOriginal) {
  // Código a ser executado para cada elemento
});
</pre>

### Aqui está uma explicação de cada parâmetro do forEach:

<li>elemento: O elemento atual sendo processado no array.</li>
<li>índice (opcional): O índice do elemento atual no array.</li>
<li>arrayOriginal (opcional): O array original em que o forEach está sendo chamado.</li>

### A função passada para o forEach será chamada uma vez para cada elemento no array. Ela pode realizar qualquer tipo de operação com o elemento, como exibir seu valor, modificá-lo ou executar qualquer outra lógica desejada.

### A principal característica do forEach é que ele itera sobre todos os elementos do array e não retorna um novo array. Em vez disso, é usado principalmente para executar alguma lógica em cada elemento, como executar uma ação em todos os itens de uma lista.

### Aqui está um exemplo simples que demonstra o uso do forEach:

<pre>
const array = [1, 2, 3, 4, 5];

array.forEach(function(elemento, índice) {
  console.log('Elemento:', elemento);
  console.log('Índice:', índice);
});

// Saída:
// Elemento: 1
// Índice: 0
// Elemento: 2
// Índice: 1
// Elemento: 3
// Índice: 2
// Elemento: 4
// Índice: 3
// Elemento: 5
// Índice: 4
</pre>
