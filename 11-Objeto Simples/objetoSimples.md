# <div align="center" style="color:Cyan; font-weight:bold;"> JavaScript - Objeto Simples</div>
<br/>

### Em JavaScript, um objeto é uma estrutura de dados que contém propriedades e métodos. As propriedades representam características do objeto e os métodos são ações que o objeto pode realizar. Os objetos são criados usando a sintaxe de chaves { }.

Aqui está um exemplo de um objeto simples em JavaScript:
<pre>
let pessoa = {
    nome: "João",
    idade: 25,
    profissao: "engenheiro",
    saudacao: function() {
        console.log("Olá! Meu nome é " + this.nome + " e   eu sou um " + this.profissao + ".");
  }
};

</pre>
### Neste exemplo, temos um objeto chamado pessoa. Ele possui quatro propriedades: nome, idade, profissao e saudacao. A propriedade nome tem o valor "João", a propriedade idade tem o valor 25 e a propriedade profissao tem o valor "engenheiro". A propriedade saudacao é um método que imprime uma saudação no console, usando os valores das outras propriedades.

### Para acessar as propriedades de um objeto, você pode usar a notação de ponto (objeto.propriedade) ou a notação de colchetes (objeto['propriedade']). Por exemplo, para acessar o nome da pessoa, você pode fazer assim:

<pre>
    console.log(pessoa.nome); // Saída: João
</pre>
### E para chamar o método saudacao, você pode fazer assim:
<pre>
   pessoa.saudacao(); // Saída: Olá! Meu nome é João e eu sou um engenheiro.
</pre>
### Você também pode adicionar novas propriedades a um objeto simplesmente atribuindo um valor a elas. Por exemplo:
<pre>
  pessoa.nacionalidade = "brasileiro";
    console.log(pessoa.nacionalidade); // Saída: brasileiro
</pre>
### Além disso, você pode alterar o valor de uma propriedade existente atribuindo um novo valor a ela. Por exemplo:
<pre>
  pessoa.idade = 30;
    console.log(pessoa.idade); // Saída: 30

</pre>