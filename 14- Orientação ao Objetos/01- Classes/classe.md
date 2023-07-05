# <div align="center" style="color:Cyan; font-weight:bold;"> JavaScript - Classe</div>

<br/>

### Classes em JavaScript são uma forma de definir e criar objetos que têm propriedades e comportamentos semelhantes. Elas são uma parte importante da programação orientada a objetos (POO) e fornecem uma maneira de criar estruturas reutilizáveis e organizadas em seu código.

### Para definir uma classe em JavaScript, você usa a palavra-chave class, seguida pelo nome da classe. Aqui está um exemplo básico de uma classe em JavaScript:

<pre>
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  saudacao() {
    console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
  }
}
</pre>

### este exemplo, temos uma classe chamada Pessoa com um construtor e um método chamado saudacao. O construtor é um método especial que é chamado quando você cria uma nova instância da classe. Ele é usado para inicializar os membros da classe. No exemplo, o construtor recebe dois parâmetros, nome e idade, e atribui esses valores às propriedades correspondentes usando a sintaxe this.nome = nome e this.idade = idade.

<br>

### O método saudacao é um método regular da classe que imprime uma saudação com o nome e a idade da pessoa.

### Agora, podemos criar objetos com base nessa classe usando a palavra-chave new:

<pre>
const pessoa1 = new Pessoa("João", 25);
const pessoa2 = new Pessoa("Maria", 30);

pessoa1.saudacao(); // Saída: Olá, meu nome é João e eu tenho 25 anos.
pessoa2.saudacao(); // Saída: Olá, meu nome é Maria e eu tenho 30 anos.
</pre>

### Neste exemplo, criamos duas instâncias da classe Pessoa, pessoa1 e pessoa2, com diferentes valores para o nome e a idade. Chamamos o método saudacao em cada objeto, e eles imprimem as saudações personalizadas com base nos valores das propriedades.

### Além do construtor e dos métodos, você também pode adicionar outras propriedades e métodos à classe. Os métodos podem ser definidos usando a sintaxe de função regular ou usando a sintaxe de função de seta (arrow function). Dentro dos métodos, você pode usar a palavra-chave this para se referir às propriedades e métodos do objeto atual.

### Você também pode usar a herança em JavaScript para criar subclasses que herdam propriedades e métodos de uma classe pai. Para isso, você pode usar a palavra-chave extends. No entanto, a explicação completa da herança está além do escopo desta resposta.
