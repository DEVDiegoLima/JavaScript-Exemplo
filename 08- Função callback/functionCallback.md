# <div align="center" style="color:Cyan; font-weight:bold;"> JavaScript - Função de callback</div>
<br>


## Em programação, uma função callback é uma função que é passada como argumento para outra função. A ideia é que a função que recebe o callback possa executar o código da função callback em algum momento específico ou em resposta a um determinado evento.

## Vamos usar o exemplo do setTimeout para ilustrar isso. O setTimeout é uma função em JavaScript que permite que você agende a execução de uma função após um determinado tempo de espera.
<br>

### Exemplo: no script.js
<br>

## Nesse exemplo, estamos passando uma função anônima como argumento para o setTimeout. Essa função será executada após um tempo de espera de 2000 milissegundos (ou 2 segundos). Quando esse tempo passar, a função será chamada e exibirá a mensagem "Olá, mundo!" no console.

## Nesse caso, a função anônima é o callback. O setTimeout é a função que recebe o callback e define quando ele será executado. O callback é uma maneira de especificar o que fazer depois que o tempo de espera acabar.

## Callbacks são úteis em situações em que você precisa esperar que algo aconteça antes de executar um código específico. Eles permitem que você programe ações para serem executadas em resposta a eventos, como um clique de botão, uma requisição assíncrona concluída ou o término de um tempo de espera.
<br>

## Explicação do exemplo que deu erro
<br>

## No seu exemplo, você está atribuindo o retorno do setTimeout a uma variável chamada soma. No entanto, o retorno do setTimeout é um identificador que representa o timer agendado, não o resultado da função callback.

## O setTimeout não retorna o resultado da função callback diretamente. Em vez disso, ele aguarda o tempo especificado (5000 milissegundos, ou 5 segundos, no seu caso) e, em seguida, chama a função callback.

## Se você deseja exibir o resultado da soma no console após o tempo de espera, você precisa ajustar o código da seguinte forma:
<br>

### Exemplo no script.js
<br>

## Nesse código, definimos a função soma separadamente, que retorna a soma de 5 + 5. Em seguida, passamos uma função anônima para o setTimeout, que chama console.log(soma()). Isso garantirá que a função soma seja executada após 5 segundos e que o resultado seja exibido no console.

## Lembre-se de que, para obter o resultado da soma após o tempo de espera, é necessário chamar soma() dentro da função callback do setTimeout, e não ao tentar imprimir soma() diretamente.
