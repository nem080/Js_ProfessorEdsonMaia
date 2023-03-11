/* Aula 10 Funcoes ou metodos no Js */

let titulo = document.querySelector('h1')
titulo.textContent = 'Funções no JS'
let box = document.querySelectorAll('box')

/* Funcoes sem parametros e sem retorno (procedure) */
function olaMundo() {
    document.write(' msg 1 Olá Mundo sem retorno<br>')
}

/* Funcoes sem parametros e com retorno (function) */
function olaMundo2() {
    return ' msg 2 Olá Mundo com retorno da linha 14 <br>'
}

function olaMundo3() {
    document.write(`msg 3 esse mensagem esta sem retorno linha 18 vsCode <br>`)
}

// CHAMAR A FUNCAO = executar ela
olaMundo() //chamando  a função sem retorno.
olaMundo3()
document.write(olaMundo2())

let x = 2
let y = 1
let mensagem = 'Jesus Cristo é o Salvador.'

/* Funcoes com parametros e sem retorno  (procedure) */
function somar(a, b) {
    document.write((a + b) + "<br>")
}

/* Funcoes com parametros e com retorno  (function) */
function somar2(c, d) {
    return c + d
}

// CHAMAR A FUNCAO = executar ela
somar(x, y)
somar(10, 5)

document.write(` essa soma esta dentro de uma craze de uma fanction x, y  q é 2 +1 = ${somar2(x, y)}</p>`)
document.write(`aqui esta outra fanction com parametro de 5 + 2 = ${somar2(5, 2)}</p>`)

/* funcao anonima = nao tem nome 
pode ou nao ter parametros
pode ou nao ter retorno
*/
titulo.addEventListener('click', function () {
    console.log('Clicou no título')
    titulo.innerText = `Vc clicou no titulo`
    titulo.style.color = 'orange'
})


/* Arrow Functions ES6 2015 em diante */

const olaMundoArrow = () => document.write("Olá mundo!!!!!!!!")

// nao precisa usar a palavra function
// nao precisa usar a palavra return
// nao se usa nome na funcao
// nao precisa colocar { } se for so uma instrucao
const olaMundo2Arrow = () => '<p>Olá mundo com arrow function</p>'

olaMundoArrow()
document.write(olaMundo2Arrow())
