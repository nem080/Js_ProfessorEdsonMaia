/* Aula 16 de JS Dado Virtual */

// SELECIONAR ELEMENTOS
let numeroSorteado = 0
let jogaodr01 = document.querySelector('#jogaodr01')
let jogaodr02 = document.querySelector('#jogaodr02')
let imgDado = document.querySelector('#imgDado')
let btnSortear = document.querySelector('#btnSortear')
let btnlimpar = document.querySelector('#btnlimpar')
let sorteado = document.querySelector('#sorteado')
let dadoRolando = document.querySelector('#dadoRolando')
let respostaDado = document.querySelector('#resp')


// verificar o jogaodr
function selecionarJogador() {
    let jogadorAtual = jogaodr01
    if (jogadorAtual === jogaodr01) {
        jogadorAtual = jogaodr02;
        return console.log(jogadorAtual);
    } else {
        jogadorAtual = jogaodr01;
        return 1;
    }
}

// zerando o dado apos joga-lo
btnlimpar.addEventListener('click', function(){
    imgDado.setAttribute('src', '../img/dado/0.png')
})


btnSortear.addEventListener('click', function() {
    // adicionar a animacao
    imgDado.classList.add('animar')
    sorteado.classList.add('aparecer')

    // tocar o efeito sonoro
    dadoRolando.play()

// ocultar o botao Sortear
    btnSortear.style.display = 'none'
    btnlimpar.style.display ='none'
// usar setTimeout para executar as acoes apos 1.75 segundos

    function result() {
        
    }
    setTimeout(function() {

        // ARMAZENAR NUMERO SORTEADO NA VARIAVEL
        numeroSorteado = getRandomInt(1,6)

        // definir atributo src com base no numero
        imgDado.setAttribute('src' , '../img/dado/'+numeroSorteado+'.png')
        // escrever no paragrafo numeroSorteado
        sorteado.textContent = numeroSorteado
        
        // exibir o botao Sortear
        btnSortear.style.display = 'inline-block'
        btnlimpar.style.display = 'inline-block'
        // retirar a animacao
        imgDado.classList.remove('animar')
        sorteado.classList.remove('aparecer')
    }, 1750)

})

// FUNCAO que gera numero randomico inteiro
// incluindo o minimo e o maximo
function getRandomInt(min, max) {
    min = Math.ceil(min)  // arredonda para cima  ceil  = teto
    max = Math.floor(max) // arredonda para baixo floor = piso
    return Math.floor(Math.random() * (max - min + 1)) + min
}

