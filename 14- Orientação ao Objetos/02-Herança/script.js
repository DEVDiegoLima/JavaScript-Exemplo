class Usuario {
  nome;
  email;
  senha;

  constructor(nome, email, senha) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }
}

class Administrador extends Usuario {
  permissoes;

  constructor(nome, email, senha, permissoes) {
    super(nome, email, senha);
    this.permissoes = permissoes;
  }
}

class Comprador extends Usuario {
  compras;
  quantasCompras() {
    if (this.compras) {
      return this.compras.length;
    }
    return 0;
  }
  constructor(nome, email, senha, compras, dataDeNascimento) {
    super(nome, email, senha);
    this.compras = compras;
    this.dataDeNascimento = dataDeNascimento;
  }
}

const admin = new Administrador(
  "Diego",
  "diegolimareis21@gmail.com",
  "fiufiu2015@",
  true
);

console.log(admin);

const comprador = new Comprador(
  "Leandro",
  "leandrofortao@gmail.com",
  "senha123",
  ["Sapatos", "Camisas"],
  "16/03/2000"
);

console.log(comprador.dataDeNascimento);

console.log(`${comprador.nome} Fez ${comprador.quantasCompras()} compras hoje`);

const usuario1 = new Usuario();

usuario1.nome = "Fernanda";
usuario1.senha = "senha123";
usuario1.email = "fernandabonitinha@gmail.com";
console.log(usuario1);
