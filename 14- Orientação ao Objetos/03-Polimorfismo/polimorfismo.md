# <div align="center" style="color:Cyan; font-weight:bold;"> JavaScript - Polimorfismo </div>

<br>

### O polimorfismo em JavaScript é uma característica da programação orientada a objetos que permite que objetos de diferentes classes sejam tratados de maneira uniforme, mesmo que tenham comportamentos diferentes. Isso é possível através do uso de herança e sobrescrita de métodos.

### Vamos considerar um exemplo com as classes "Usuário", "Administrador" e "Comprador". A classe "Usuário" será a classe base, e as classes "Administrador" e "Comprador" serão classes derivadas que herdam características e comportamentos da classe "Usuário".

<pre>
class Usuario {
  constructor(nome) {
    this.nome = nome;
  }

  saudacao() {
    console.log(`Olá, ${this.nome}!`);
  }
}

class Administrador extends Usuario {
  constructor(nome, cargo) {
    super(nome);
    this.cargo = cargo;
  }

  saudacao() {
    console.log(`Olá, ${this.nome}! Você é um administrador com o cargo de ${this.cargo}.`);
  }

  realizarTarefaAdministrativa() {
    console.log(`${this.nome} está realizando uma tarefa administrativa.`);
  }
}

class Comprador extends Usuario {
  constructor(nome, categoria) {
    super(nome);
    this.categoria = categoria;
  }

  saudacao() {
    console.log(`Olá, ${this.nome}! Você é um comprador da categoria ${this.categoria}.`);
  }

  fazerCompra() {
    console.log(`${this.nome} está fazendo uma compra.`);
  }
}
</pre>

### Aqui, a classe "Usuario" define um construtor que recebe o nome do usuário e um método saudacao() que imprime uma mensagem de saudação com o nome do usuário.

### As classes "Administrador" e "Comprador" são subclasses de "Usuario" que estendem suas funcionalidades. Elas adicionam propriedades e métodos específicos para cada tipo de usuário.

### Tanto a classe "Administrador" quanto a classe "Comprador" sobrescrevem o método saudacao(), adicionando informações específicas de cada tipo de usuário à mensagem de saudação.

### Agora, podemos criar instâncias dessas classes e tratar os objetos uniformemente:

<pre>
const usuario = new Usuario("João");
const administrador = new Administrador("Maria", "Gerente");
const comprador = new Comprador("José", "VIP");

usuario.saudacao(); // Saída: Olá, João!
administrador.saudacao(); // Saída: Olá, Maria! Você é um administrador com o cargo de Gerente.
comprador.saudacao(); // Saída: Olá, José! Você é um comprador da categoria VIP.

administrador.realizarTarefaAdministrativa(); // Saída: Maria está realizando uma tarefa administrativa.
comprador.fazerCompra(); // Saída: José está fazendo uma compra.

</pre>

### Perceba que, mesmo tratando todos os objetos como "Usuário", quando chamamos o método saudacao(), cada objeto imprime a mensagem apropriada para sua classe específica.

### Isso é um exemplo de polimorfismo em JavaScript, onde objetos de diferentes classes são tratados de maneira uniforme, mas seus comportamentos específicos são preservados.
