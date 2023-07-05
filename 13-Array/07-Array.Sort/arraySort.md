# <div align="center" style="color:Cyan; font-weight:bold;"> JavaScript - Array.Sort</div>

<br>

### O método Array.sort() em JavaScript é usado para ordenar os elementos de um array. Quando você está trabalhando com objetos, pode usar o Array.sort() para ordenar o array com base em uma propriedade específica dos objetos. Aqui está um exemplo de como isso pode ser feito:

<pre>
// Definindo um array de objetos
let pessoas = [
  { nome: 'João', idade: 25 },
  { nome: 'Maria', idade: 30 },
  { nome: 'Pedro', idade: 20 }
];

// Ordenando o array com base na propriedade 'idade'
pessoas.sort(function(a, b) {
  return a.idade - b.idade;
});

// Exibindo o array ordenado
console.log(pessoas);
</pre>

### Nesse exemplo, temos um array chamado pessoas que contém objetos representando pessoas, com as propriedades nome e idade. Para ordenar o array com base na propriedade idade, passamos uma função de comparação para o método sort(). Essa função recebe dois parâmetros (a e b), que representam os elementos sendo comparados.

### Dentro da função de comparação, subtraímos a idade de a pela idade de b. Se o resultado for negativo, significa que a deve ser colocado antes de b na ordenação. Se for positivo, a deve ser colocado depois de b. Se for zero, a ordem entre a e b é considerada igual e não há necessidade de alterar a ordem deles.

### Após a chamada do sort(), o array pessoas estará ordenado com base na idade, do mais novo para o mais velho. Você pode modificar a função de comparação para ordenar o array com base em outras propriedades dos objetos, se necessário.

### Lembre-se de que o método sort() modifica o array original e retorna o próprio array, em vez de criar uma cópia ordenada. Se você precisar preservar o array original, é uma boa prática criar uma cópia antes de chamar o sort().

<br>

### Se você deseja ordenar os objetos em ordem alfabética com base em uma propriedade nome, pode utilizar a.nome e b.nome na função de comparação. Aqui está um exemplo:

<pre>
// Definindo um array de objetos
let pessoas = [
  { nome: 'João', idade: 25 },
  { nome: 'Maria', idade: 30 },
  { nome: 'Pedro', idade: 20 }
];

// Ordenando o array com base na propriedade 'nome'
pessoas.sort(function(a, b) {
  // Utilizando a propriedade 'nome' para comparação
  if (a.nome < b.nome) {
    return -1;
  }
  if (a.nome > b.nome) {
    return 1;
  }
  return 0;
});

// Exibindo o array ordenado
console.log(pessoas);
</pre>

### Nesse caso, a função de comparação compara as propriedades nome dos objetos a e b. Se a.nome for menor que b.nome, retorna-se -1, indicando que a deve ser colocado antes de b. Se a.nome for maior que b.nome, retorna-se 1, indicando que a deve ser colocado depois de b. Se a.nome for igual a b.nome, retorna-se 0, indicando que a ordem entre a e b é igual.

### Após a chamada de sort(), o array pessoas estará ordenado em ordem alfabética com base no nome das pessoas.

### Lembre-se de que o método sort() modifica o array original. Se você precisar preservar o array original, faça uma cópia antes de chamar o sort().
