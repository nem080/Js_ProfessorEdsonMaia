// /* Aula 16 de JS Dado Virtual */

// // SELECIONAR ELEMENTOS
// let numeroSorteado = 0
// let jogaodr01 = document.getElementById('jogador1')
// let jogaodr02 = document.getElementById('jogador2')
// let imgDado = document.querySelector('#imgDado')
// let btnSortear = document.querySelector('#btnSortear')
// let btnlimpar = document.querySelector('#btnlimpar')
// let sorteado = document.querySelector('#sorteado')
// let dadoRolando = document.querySelector('#dadoRolando')
// let respostaDado = document.querySelector('#resp')

// // zerando o dado apos joga-lo
// btnlimpar.addEventListener('click', function(){
//     imgDado.setAttribute('src', '../img/dado/0.png')
//     respostaDado.innerHTML = '';
// })



// btnSortear.addEventListener('click', function() {
//     function vezJogador() {
//         vezJogador = jogaodr01;
//         if (vezJogador === '' || vezJogador === undefined) {
//             alert('informe um jogador.')
//         } else {

//         }
//     }

//     // adicionar a animacao
//     imgDado.classList.add('animar')
//     sorteado.classList.add('aparecer')

//     // tocar o efeito sonoro
//     dadoRolando.play()

// // ocultar o botao Sortear
//     btnSortear.style.display = 'none'
//     btnlimpar.style.display ='none'


// // usar setTimeout para executar as acoes apos 1.75 segundos   
//     setTimeout(function() {

//         // ARMAZENAR NUMERO SORTEADO NA VARIAVEL
//         numeroSorteado = getRandomInt(1,6)

//         // definir atributo src com base no numero
//         imgDado.setAttribute('src' , '../img/dado/'+numeroSorteado+'.png')
//         // escrever no paragrafo numeroSorteado
//         sorteado.textContent = numeroSorteado
//         respostaDado.innerHTML = `resultado da sua jogada foi ${numeroSorteado}`;
//         // respostaDado.innerHTML = '';
//         // exibir o botao Sortear
//         btnSortear.style.display = 'inline-block'
//         btnlimpar.style.display = 'inline-block'
//         // retirar a animacao
//         imgDado.classList.remove('animar')
//         sorteado.classList.remove('aparecer')
//     }, 1750)
   

    
// })
     



// // FUNCAO que gera numero randomico inteiro
// // incluindo o minimo e o maximo
// function getRandomInt(min, max) {
//     min = Math.ceil(min)  // arredonda para cima  ceil  = teto
//     max = Math.floor(max) // arredonda para baixo floor = piso
//     return Math.floor(Math.random() * (max - min + 1)) + min
// }


/* Aula 16 de JS Dado Virtual */

// SELECIONAR ELEMENTOS
let numeroSorteado = 0;
let jogador01 = document.getElementById('jogador1');
let jogador02 = document.getElementById('jogador2');
let imgDado = document.querySelector('#imgDado');
let btnSortear = document.querySelector('#btnSortear');
let btnLimpar = document.querySelector('#btnLimpar');
let sorteado = document.querySelector('#sorteado');
let dadoRolando = document.querySelector('#dadoRolando');
let respostaDado = document.querySelector('#resp');

// zerando o dado após jogá-lo
btnLimpar.addEventListener('click', function () {
    imgDado.src = '../img/dado/0.png';
    respostaDado.textContent = '';
});

btnSortear.addEventListener('click', function () {
    // // verifica se um jogador foi selecionado
    // let numJogadoresSelecionados = 0;
    // if (jogador01.checked) {
    //     numJogadoresSelecionados+1;
    // }
    // if (jogador02.checked) {
    //     numJogadoresSelecionados+1;
    // }
    // if (numJogadoresSelecionados !== 1) {
    //     alert('Selecione um jogador.');
    //     return;
    // }

    // define a vez do jogador
    let vezJogador;
    if (jogador01.value) {
        vezJogador = jogador01;
    } else {
        vezJogador = jogador02;
    }

    // adiciona a animação
    imgDado.classList.add('animar');
    sorteado.classList.add('aparecer');

    // toca o efeito sonoro
    dadoRolando.play();

    // oculta o botão Sortear e Limpar
    btnSortear.style.display = 'none';
    btnLimpar.style.display = 'none';

    // usa setTimeout para executar as ações após 1.75 segundos   
    setTimeout(function () {
        // ARMAZENA O NÚMERO SORTEADO NA VARIÁVEL
        numeroSorteado = getRandomInt(1, 6);

        // define o atributo src com base no número
        imgDado.src = '../img/dado/' + numeroSorteado + '.png';

        // escreve o número sorteado no parágrafo sorteado
        sorteado.textContent = numeroSorteado;

        // exibe a mensagem com o resultado da jogada
        respostaDado.textContent = `Resultado da sua jogada foi ${numeroSorteado}`;

    // exibe novamente o


        // exibe a mensagem com o resultado da jogada
        respostaDado.textContent = `Resultado da sua jogada foi ${numeroSorteado}`;

        // exibe novamente o botão Sortear e Limpar
        btnSortear.style.display = 'inline-block';
        btnLimpar.style.display = 'inline-block';

        // retira a animação
        imgDado.classList.remove('animar');
        sorteado.classList.remove('aparecer');

        // alterna a vez do jogador
        if (vezJogador === jogador01) {
            jogador01.checked = false;
            jogador02.checked = true;
        } else {
            jogador02.checked = false;
            jogador01.checked = true;
        }

    }, 1750);
});

// FUNÇÃO QUE GERA NÚMERO RANDOMICO INTEIRO
// INCLUINDO O MÍNIMO E O MÁXIMO
function getRandomInt(min, max) {
    min = Math.ceil(min); // arredonda para cima  ceil  = teto
    max = Math.floor(max); // arredonda para baixo floor = piso
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
