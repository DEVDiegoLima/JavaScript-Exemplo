let lista = [
    {
        nome: "Fernando",
        idade: 27,
    },
    {
        nome: "Lucas",
        idade: 18,
    },
    {
        nome: "Fernanda",
        idade: 26,
    },
    {
        nome: "Fred",
        idade: 17,
    },
    {
        nome: "Paula",
        idade: 37,
    },
    {
        nome: "Pedro Lucas",
        idade: 47,
    },
    {
        nome: "Gabriel",
        idade: 30,
    }
]

//console.log(lista.map((Object)=> Object.idade));
//console.log(lista.map((Object)=> Object.nome));


let idade = lista.map((Object)=> Object.idade);

//console.log(idade);

const converterObjeto = (Object)=> {
    return {
        ...Object,
        idade: `${Object.nome} + ${Object.idade}`
    }
}

//console.log(lista.map(converterObjeto))


// Exemplo 2

const numero = [1,2,3,4,5,6,7,8,9,10]

const triplicados = numero.map((numero)=>{
    return numero *3
} )

//console.log(triplicados);


//Exemplo 3

function dobrar(numero) {
    return numero * 2
}

const dobrados = numero.map(dobrar);

//console.log(dobrados);



const flamengo = {
    tecnico: "Jorge Sampaoli",
    atacante: [
      { nome: "Gabriel Barbosa", camisa: 10 },
      { nome: "Bruno Henrique", camisa: 27 },
      { nome: "Pedro", camisa: 9 },
      { nome: "Marinho", camisa: 31 },
      { nome: "Everton Cebolinha", camisa: 11 }
    ],
    meia: [
      { nome: "Everton Ribeiro", camisa: 7 },
      { nome: "Arrascaeta", camisa: 14 },
      { nome: "Vitor Hugo", camisa: 29 },
      { nome: "Matheus França", camisa: 42 }
    ],
    voltante: [
      { nome: "Arthur Vidal", camisa: 32 },
      { nome: "Thiago Maia", camisa: 8 },
      { nome: "Erick", camisa: 5 },
      { nome: "Gerson", camisa: 20 }
    ],
    laretalEsquerto: [{
        nome: "Felipe Luis", camisa: 16,
        nome: "Ayrton Lucas", camisa: 16,
    }],
    laretalDireito: [{
        nome: "Matheuszinho", camisa: 34,
        nome: "Varela", camisa: 2,
    }],
    zagueiro: [
        { nome: "Rodrigo Caio", camisa: 3 },
        { nome: "Léo Pereira", camisa: 4 },
        { nome: "David Luiz", camisa: 23 },
        { nome: "Fabrício Bruno", camisa: 15 },
        { nome: "Pablo", camisa: 30 }
      ],
    goleiro: [
        { nome: "Hugo Souza", camisa: 45 },
        { nome: "Mathues Cunha", camisa: 25 },
        { nome: "Santos", camisa: 1 },
    ]
  };
  
  //console.log(flamengo);
  

const jogadoresNomes = flamengo.atacante.map((jogador)=>{
    return jogador.nome
})

console.log(jogadoresNomes);

const camisas = flamengo.atacante.map((jogador) => {
    return jogador.camisa;
  });
  
  console.log(camisas);


//O método join() é utilizado para concatenar os elementos de um array em uma única string, utilizando o separador especificado como argumento. No exemplo acima, passamos um espaço em branco como separador para obter a string desejada sem vírgulas.

const AtacantesDoFlamengo = jogadoresNomes.join(' ');

console.log(AtacantesDoFlamengo);