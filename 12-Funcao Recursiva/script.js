function fatorial(n) {
    // Caso base: fatorial de 0 ou 1 é 1
    if (n === 0 || n === 1) {
      return 1;
    }
  
    // Chamada recursiva: fatorial(n) = n * fatorial(n-1)
    return n * fatorial(n - 1);
  }
  
  // Exemplo de uso
  console.log(fatorial(5)); // Saída: 120
  