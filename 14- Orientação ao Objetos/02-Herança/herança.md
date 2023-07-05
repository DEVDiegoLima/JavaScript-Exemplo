# <div align="center" style="color:Cyan; font-weight:bold;"> JavaScript - Herança</div>

<br/>

### Em JavaScript, a herança é uma característica da programação orientada a objetos que permite que uma classe herde propriedades e métodos de outra classe. Isso significa que uma classe filha pode estender e reutilizar o código de uma classe pai.

### Para criar uma herança em JavaScript, podemos usar a função construtora class introduzida no ECMAScript 2015 (também conhecido como ES6). Vamos dar um exemplo simples:

<pre>
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' emite um som.');
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // chama o construtor da classe pai
    this.breed = breed;
  }

  speak() {
    super.speak(); // chama o método da classe pai
    console.log(this.name + ' é um cachorro da raça ' + this.breed + '.');
  }
}

const myDog = new Dog('Max', 'Labrador');
myDog.speak();

</pre>

### Neste exemplo, temos duas classes: Animal e Dog (cachorro). A classe Dog é uma classe filha de Animal, portanto, herda suas propriedades e métodos.

### Ao declarar a classe filha Dog, usamos a palavra-chave extends seguida do nome da classe pai Animal. Isso estabelece a relação de herança entre as duas classes.

### No construtor da classe filha Dog, usamos a palavra-chave super para chamar o construtor da classe pai. Isso é necessário para inicializar as propriedades herdadas da classe pai. No exemplo, super(name) chama o construtor da classe Animal passando o parâmetro name.

### Além disso, a classe filha Dog sobrescreve o método speak() da classe pai Animal. No entanto, dentro do método sobrescrito, podemos usar super.speak() para chamar o método speak() da classe pai e, em seguida, adicionar comportamento adicional específico da classe filha.

### Ao criar uma instância de Dog usando const myDog = new Dog('Max', 'Labrador'), podemos chamar o método speak() para exibir o nome do cachorro e sua raça. A saída seria:

<pre>
Max emite um som.
Max é um cachorro da raça Labrador.

</pre>
