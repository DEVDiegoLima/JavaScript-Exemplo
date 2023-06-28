//Exemplo Try,catch e Finally
try {
  // Bloco de código que pode gerar um erro
  // por exemplo, dividir um número por zero
  let result = 10 / 0;
  console.log("Resultado:", result);
} catch (error) {
  // Bloco de código executado quando ocorre um erro
  console.log("Ocorreu um erro:", error);
} finally {
  // Bloco de código executado sempre
  console.log("Fim da execução");
}


//Exemplo 2

const bannedWords = [
  'Lixo',
  'Idiota',
  'Imbecil',
  'Besta',
  'Burro',
  'Estúpida',
  'Animal',
];
 
const words = (userWords) => {
  const lowerCaseUserWords = userWords.toLowerCase();
  const foundBannedWord = bannedWords.find((word) =>
    lowerCaseUserWords.includes(word.toLowerCase()),
  );
 
  if (foundBannedWord) {
    throw new Error('O usuário não pode digitar mensagens de ofensas');
  } else {
    console.log(userWords);
  }
};
 
try {
  const usuarioDigitou = words('Você é um Burro');
} catch (error) {
  console.log('Erro mensagem não permitada:', error.message);
}