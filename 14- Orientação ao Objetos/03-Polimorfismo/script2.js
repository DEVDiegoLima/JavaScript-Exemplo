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
    console.log(
      `Olá, ${this.nome}! Você é um administrador com o cargo de ${this.cargo}.`
    );
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
    console.log(
      `Olá, ${this.nome}! Você é um comprador da categoria ${this.categoria}.`
    );
  }

  fazerCompra() {
    console.log(`${this.nome} está fazendo uma compra.`);
  }
}

const usuario = new Usuario("Joao");

const adm = new Administrador("Diego", "Gerente");

const comprador = new Comprador("Maria", "Prata");

usuario.saudacao();

adm.saudacao();

comprador.saudacao();

adm.realizarTarefaAdministrativa();
comprador.fazerCompra();
