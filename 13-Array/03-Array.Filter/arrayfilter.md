# <div align="center" style="color:Cyan; font-weight:bold;"> JavaScript - Array.Filter</div>

<br/>

### O array.filter() é uma função em JavaScript que permite filtrar elementos de um array com base em uma condição específica. Ele cria um novo array contendo apenas os elementos que satisfazem essa condição.

### Aqui está um exemplo:

<pre>
var numeros = [1, 2, 3, 4, 5, 6];

var numerosPares = numeros.filter(function(elemento) {
  return elemento % 2 === 0;
});

console.log(numerosPares); // [2, 4, 6]
</pre>

### Neste exemplo, o filter() é usado para criar um novo array chamado numerosPares que contém apenas os números pares do array original numeros. A função de filtro verifica se cada elemento é divisível por 2 (ou seja, se é par) e retorna true para incluí-lo no novo array ou false para excluí-lo.

### O filter() é útil quando você precisa extrair elementos específicos de um array com base em uma condição, permitindo que você reduza o tamanho do array e trabalhe apenas com os elementos desejados.
