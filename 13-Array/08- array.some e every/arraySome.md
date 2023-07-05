# <div align="center" style="color:Cyan; font-weight:bold;"> JavaScript - Array.some</div>

<br>

### Array.prototype.some(): Essa função verifica se pelo menos um elemento do array atende a uma determinada condição. Ela percorre o array e retorna true assim que encontrar um elemento que satisfaça a condição. Caso nenhum elemento atenda a condição, o retorno será false.

### Exemplo:

<pre>
const array = [2, 4, 6, 8, 10];

const hasEvenNumber = array.some((element) => element % 2 === 0);
console.log(hasEvenNumber); // true
</pre>

### No exemplo acima, array.some() verifica se algum número do array é par. Como existe pelo menos um número par no array, o retorno é true.

<br>

### Agora, vamos ver como usar Array.prototype.some() com objetos. Suponha que você tem um array de objetos que representam alunos e você quer verificar se algum deles passou na prova. Você pode usar a função some() para isso.

<pre>
const students = [
  { name: 'Alice', score: 80 },
  { name: 'Bob', score: 90 },
  { name: 'Charlie', score: 70 }
];

const passedExam = students.some((student) => student.score >= 60);
console.log(passedExam); // true
</pre>

### Neste exemplo, a função some( ) verifica se pelo menos um aluno tem uma pontuação maior ou igual a 60. Como o aluno 'Alice' tem uma pontuação de 80, o retorno é true.

<br>
