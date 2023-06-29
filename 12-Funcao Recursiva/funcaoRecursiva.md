# <div align="center" style="color:Cyan; font-weight:bold;"> JavaScript - Função Recursiva</div>
<br/>

### Uma função recursiva é uma função que se chama a si mesma durante sua execução. Ela resolve um problema dividindo-o em subproblemas menores e, em seguida, resolve cada subproblema chamando a mesma função novamente. Essa chamada recursiva continua até que o problema seja reduzido a um caso base, que é uma situação em que a função pode retornar um resultado diretamente, sem fazer mais chamadas recursivas.

### Vamos ver um exemplo simples de uma função recursiva em JavaScript. Suponha que queremos calcular o fatorial de um número. O fatorial de um número inteiro positivo n é o produto de todos os números inteiros positivos de 1 até n. Podemos escrever uma função recursiva para calcular o fatorial da seguinte forma:

<pre>
function fatorial(n) {
  // Caso base: fatorial de 0 ou 1 é 1
  if (n === 0 || n === 1) {
    return 1;
  }

  // Chamada recursiva: fatorial(n) = n * fatorial(n-1)
  return n * fatorial(n - 1);
}

// Exemplo de uso
console.log(fatorial(5)); // Saída: 120
</pre>
### Nesse exemplo, a função fatorial recebe um número n como argumento. Ela verifica se n é igual a 0 ou 1, que são os casos base. Se for o caso, a função retorna 1, pois o fatorial de 0 ou 1 é sempre 1.

### Se n não for 0 ou 1, a função chama a si mesma passando n-1 como argumento e multiplica o resultado pelo valor de n. Essa é a chamada recursiva, onde o problema é reduzido a um subproblema menor. A função continua a chamar a si mesma com valores menores até atingir o caso base.

### No exemplo de uso, chamamos a função fatorial(5). A função é executada em várias iterações, chamando-se a si mesma com argumentos menores até que n seja 1. Em seguida, ela retorna o resultado final, que é 120.

### É importante ter cuidado ao usar funções recursivas, pois elas podem levar a um consumo excessivo de memória ou a um estouro de pilha (stack overflow) se não forem implementadas corretamente. É necessário garantir que a função atinja o caso base em algum momento para evitar um loop infinito.