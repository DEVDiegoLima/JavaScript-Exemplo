# <div align="center" style="color:Cyan; font-weight:bold;"> JavaScript - Array.Every</div>

### Array.prototype.every(): Essa função verifica se todos os elementos do array atendem a uma determinada condição. Ela percorre o array e retorna true apenas se todos os elementos satisfizerem a condição. Caso algum elemento não atenda a condição, o retorno será false.

### Exemplo:

<pre>
const array = [2, 4, 6, 8, 10];

const allEvenNumbers = array.every((element) => element % 2 === 0);
console.log(allEvenNumbers); // true
</pre>

### No exemplo acima, array.every() verifica se todos os números do array são pares. Como todos os números do array são pares, o retorno é true.

### Agora, vamos ver como usar Array.prototype.every() com objetos. Suponha que você tem um array de objetos que representam alunos e você quer verificar se todos eles passaram na prova. Você pode usar a função every() para isso.

### Exemplo:

<pre>
const students = [
  { name: 'Alice', score: 80 },
  { name: 'Bob', score: 90 },
  { name: 'Charlie', score: 70 }
];

const allPassedExam = students.every((student) => student.score >= 60);
console.log(allPassedExam); // true
</pre>

### Neste exemplo, a função every() verifica se todos os alunos têm uma pontuação maior ou igual a 60. Como todos os alunos passaram na prova, o retorno é true.

### Em resumo, Array.prototype.some() retorna true se pelo menos um elemento do array atender a uma determinada condição, enquanto Array.prototype.every() retorna true somente se todos os elementos atenderem à condição.
