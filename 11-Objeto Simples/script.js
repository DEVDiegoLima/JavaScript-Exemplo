//Criando um objeto
let meuTime = {
    nomeTime: "Flamengo",
    tecnico: "Jorge Sampaoli",
    atacante:"Gabriel Barbosa",
    meioCampo:"Giorgian De Arascaeta",
    zagueiro: "David luiz",
    goleiro: "Santos",
    comemoracao: function(){
        console.log("Gooool do Flamengooo")
    }
}

//Para acessar as propriedades de um objeto, você pode usar a notação de ponto 
console.log(meuTime.tecnico);

//E para chamar o método comemoracao, você pode fazer assim:
meuTime.comemoracao();

//Você também pode adicionar novas propriedades a um objeto simplesmente atribuindo um valor a elas. Por exemplo:
meuTime.lateral = "Filipe Luís";
console.log(meuTime.lateral);

//Além disso, você pode alterar o valor de uma propriedade existente atribuindo um novo valor a ela. Por exemplo:
meuTime.zagueiro = "Rodrigo Caio";
console.log(meuTime.zagueiro);