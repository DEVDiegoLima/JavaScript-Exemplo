# <div align="center" style="color:Cyan; font-weight:bold;"> JavaScript - Array.keys</div>

<br>

### O método array.keys() retorna um novo objeto de iteração que contém os índices (chaves) de um array. Ele permite percorrer os índices do array por meio de um loop, geralmente usando o loop for...of ou o método forEach().

### Aqui está um exemplo de como usar o array.keys():

<pre>
var myArray = ['maçã', 'banana', 'laranja'];

var iterator = myArray.keys();

for (var key of iterator) {
  console.log(key);
}


</pre>

### Nesse exemplo, iterator é um objeto de iteração retornado pelo método array.keys(). Em seguida, usamos um loop for...of para iterar sobre o objeto de iteração e imprimir cada índice (chave) do array.

### A saída será

<pre>
0
1
2

</pre>

### Observe que o método array.keys() retorna apenas os índices do array, não os valores correspondentes. Se você deseja obter tanto os índices quanto os valores, pode usar o método array.entries(), que retorna um objeto de iteração contendo pares de chave/valor.
