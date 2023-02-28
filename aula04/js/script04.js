
let produtos = ['Arroz', 'Feijão', 'Ovos']
let numeros = [10, 20, 30];
let meses = ['Jan', 'Fev', 'Mar', 'Abr'];
var teste = Array [10];

teste[0] = 'joga 10'
teste[3] = 'é nois'
teste[10] = 'ja fosse bom'

// Adicionando itens  ao final de cada array usando o metodo "push()" necessita que passei um valor entre parentes.
produtos.push('salsicha', 'Esse adicionei agora ');
numeros.push(40, 50, 60, 70);
meses.push('mai', 'jun', 'ago');


// Removendo do final usando "pop()" não precisa adicionar nada entre os parentes.
produtos.pop()
numeros.pop()
meses.pop()



// // add no inicio do array utilizando o "unshift()"
meses.unshift('esse aqui fui add', 'juntom com esse aqui');
produtos.unshift('carne de pescoço');
numeros.unshift(05);


// // romovendo no inicio do array utilizando o "shift()"
numeros.shift();
produtos.shift();
meses.shift();


// Removendo de uma posição especifica utilizando "splice"
numeros.splice(1, 3)


// copiando um array utilizando' slice' 
let meses1 = meses.slice()
// copiando apartir de uma indice
let meses2 = meses.slice(0, 3)

// ver o tamanho de um array utilizando o "length()"
meses.length();
numeros.length();
produtos.length();

// Spreed operator => copiar todo conteudo de um array juntando o array de produto com os itens de do teste.
let teste = [...produtos, 'biscoito', 'farinha']
