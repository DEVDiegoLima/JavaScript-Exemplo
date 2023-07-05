# <div align="center" style="color:Cyan; font-weight:bold;"> JavaScript - Array.FlatMap</div>

<br>

### Em JavaScript, o flatMap é um método introduzido no ECMAScript 2019 (também conhecido como ES10). Ele combina as funcionalidades de map e flat, permitindo transformar e nivelar (flatten) uma matriz (array) em uma única matriz resultante.

### O método map é usado para percorrer cada elemento de uma matriz e aplicar uma função a cada um deles, retornando um novo array com os resultados. Por outro lado, o flat é usado para nivelar (achatar) uma matriz de matrizes, removendo um nível de profundidade. O flatMap combina essas duas operações, aplicando uma função em cada elemento e, em seguida, nivelando o resultado em um único array.

### A sintaxe básica do flatMap é a seguinte:

<pre>
array.flatMap(callback[, thisArg])
</pre>
<br>

### <li>array: O array que será percorrido e transformado.</li>

### <li>callback: Uma função de callback que será aplicada a cada elemento do array. Ela pode retornar um valor ou um novo array.</li>

### <li>thisArg (opcional): Um valor para ser usado como this dentro da função de callback.</li>

<br>

### A função de callback fornecida ao flatMap é executada uma vez para cada elemento do array. Ela recebe três argumentos: o valor do elemento atual, o índice do elemento e o array original. Essa função pode retornar um valor simples ou um novo array.

### Aqui está um exemplo para ilustrar o uso do flatMap com objetos JavaScript:

<pre>
const pessoas = [
  { nome: 'João', habilidades: ['JavaScript', 'CSS'] },
  { nome: 'Maria', habilidades: ['HTML', 'CSS', 'React'] },
  { nome: 'Pedro', habilidades: ['JavaScript', 'React', 'Node.js'] }
];

const habilidades = pessoas.flatMap(pessoa => pessoa.habilidades);
console.log(habilidades);
</pre>
<br>

### Nesse exemplo, temos um array de objetos pessoas, onde cada objeto possui um nome e um array de habilidades. Usando o flatMap, aplicamos uma função que retorna apenas o array de habilidades de cada pessoa. O resultado é um único array habilidades que contém todas as habilidades das pessoas.

### A saída desse exemplo será:

<pre>
["JavaScript", "CSS", "HTML", "CSS", "React", "JavaScript", "React", "Node.js"]
</pre>

### Observe que o flatMap nivelou o resultado em um único array, eliminando a estrutura aninhada.

### Em resumo, o flatMap é uma combinação dos métodos map e flat, permitindo transformar uma matriz aplicando uma função em cada elemento e, em seguida, nivelando o resultado em um único array. É uma forma poderosa de manipular e reestruturar dados em JavaScript.
