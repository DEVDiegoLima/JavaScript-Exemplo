# <div align="center" style="color:Cyan; font-weight:bold;"> JavaScript - Tipo De Dados</div>

## Em JavaScript, existem vários tipos de dados que podem ser usados para armazenar diferentes tipos de valores. Vou explicar brevemente cada um deles, fornecer exemplos e mostrar como usar o operador typeof para verificar o tipo de dado de uma variável.
<br>

## <strong>Number</strong>
### Usado para representar valores numéricos. Isso inclui números inteiros e números de ponto flutuante. Exemplo:
<br>

## <strong>String</strong>
### Usado para representar sequências de caracteres. As strings devem estar entre aspas simples ou duplas.
<br/>

## <strong>Boolean</strong>
### Usado para representar valores verdadeiros ou falsos (verdadeiro ou falso). 
<br/>

## <strong>Null </strong>
### Usado para representar a ausência intencional de qualquer valor.

## Explicação do motivo do typeof do null retorna object
### Quando o JavaScript foi criado pela primeira vez, em seu estágio inicial, o valor null foi representado internamente como um ponteiro nulo para um objeto. Portanto, ao usar o operador typeof em null, ele retorna "object". Essa escolha de design foi mantida ao longo do tempo por questões de compatibilidade com versões anteriores, mesmo que pudesse parecer um pouco confuso.<br>Na prática, null não é um objeto em JavaScript. É um valor primitivo especial que representa a ausência de qualquer objeto ou valor. Para verificar se uma variável é null, você pode usar a verificação de igualdade estrita (===) com null
<br>

## <strong>Undefined (Indefinido) </strong>
### Usado para representar variáveis que não foram atribuídas com um valor. Exemplo:
<br>

## <strong>Object (Objeto) </strong>
###  Usado para armazenar coleções de pares de chave-valor. Pode ser qualquer objeto JavaScript, incluindo funções e arrays.
<br>

## <strong>Array  </strong>
###  Usado para armazenar coleções ordenadas de valores.
## Explicando o array retorna object
### Em JavaScript, o tipo de dado retornado pelo operador typeof para um array é "object", e isso ocorre devido à implementação da linguagem.<br>Embora um array seja tecnicamente uma estrutura de dados distinta, internamente é tratado como um tipo especial de objeto em JavaScript. Os arrays herdam propriedades e comportamentos da função construtora Array e também podem ter propriedades adicionais definidas pelo usuário.<br>Quando o operador typeof é aplicado a um array, ele retorna "object" porque os arrays são considerados objetos complexos que podem conter vários valores indexados por suas chaves numéricas. No entanto, isso pode ser considerado uma peculiaridade da linguagem e pode levar a interpretações confusas ou imprecisas.

<br>

## <strong>Function  (Função): </strong>
###  Usado para representar blocos de código reutilizáveis. As funções são objetos em JavaScript.
<br>