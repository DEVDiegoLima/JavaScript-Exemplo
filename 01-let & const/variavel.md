# <div align="center" style="color:Cyan; font-weight:bold;"> JavaScript - Variavel</div>

##  Em JavaScript, temos três palavras-chaves para declarar variáveis "var", "let" e "const".
## <strong>var</strong>
### <ul>
###    <li>Escopo de função: variáveis declaradas com var têm escopo de função. Isso significa que elas são acessíveis dentro da função em que foram declaradas.</li>
### </ul>
### <ul>
###    <li>Hoisting: as declarações var são "elevadas" (hoisted) para o topo do escopo em que foram definidas. Isso significa que você pode usar a variável antes mesmo de declará-la explicitamente.</li>
### </ul>
### <ul>
###    <li>Reatribuição e redeclaração: variáveis declaradas com var podem ser reatribuídas (ter seu valor alterado) e redeclaradas dentro do mesmo escopo.</li>
### </ul>
<br><br>

## <strong>let</strong>
### <ul>
###    <li>Escopo de bloco: variáveis declaradas com let têm escopo de bloco, o que significa que são acessíveis apenas dentro do bloco em que foram declaradas.</li>
### </ul>
### <ul>
###    <li>Não há hoisting: declarações let não são elevadas para o topo do escopo. Você deve declarar a variável antes de usá-la.</li>
### </ul>
### <ul>
###    <li>Reatribuição: variáveis declaradas com let podem ser reatribuídas (ter seu valor alterado), mas não podem ser redeclaradas dentro do mesmo escopo.</li>
### </ul>
<br><br>

## <strong>const</strong>
### <ul>
###    <li>Escopo de bloco: assim como let, as variáveis declaradas com const também têm escopo de bloco.</li>
### </ul>
### <ul>
###    <li>Atribuição inicial obrigatória: ao declarar uma variável com const, você deve atribuir um valor a ela imediatamente..</li>
### </ul>
### <ul>
###    <li>Imutabilidade: variáveis declaradas com const são constantes e não podem ser reatribuídas nem redeclaradas dentro do mesmo escopo.</li>
### </ul>