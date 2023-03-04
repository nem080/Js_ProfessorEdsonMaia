// titulo pagina
let titulo = document.getElementById('titulo');
titulo.innerHTML = 'Exercicios js';
titulo.style.textAlign = 'center';
titulo.style.margin = '40px'
titulo.style.fontSize = '30px'
titulo.style.color = '#666';



// card lutador  
const nome = document.querySelector('#nomeLuta');
let nasci = document.getElementById('paisLutador');
let idade = document.getElementById('idadeLutador')
let kl = document.getElementById('klLutador');
let altura = document.querySelector('#alturaLutador');

// manipulando dados lutador
nome.innerHTML = `Balrog Street fighter`;
nasci.innerText= `Brasil`;
idade.innerText = `39 anos`;
kl.innerText = `189 Kg`;
altura.innerText = `190 m`;

// mgs de dia
let dia = 12;
let mes = 10;
let anoNasc = 1987;
let diaHoje = document.querySelector('#data')
const tituloMsg = document.querySelector('#tituloMsg');
const corpoMsg = document.querySelector('#corpMsg');
const autorMsg = document.querySelector('#autMsg');
// manipulando dados lutador
diaHoje.innerHTML = `${dia}/${mes}/${anoNasc}`;
diaHoje.style.textAlign = 'left'
diaHoje.style.padding = '10px'
corpoMsg.innerText = `"Existe um momento na vida de cada pessoa  que é possível sonhar e realizar nossos sonhos… e esse momento tão fugaz chama-se presente e tem a duração do tempo que passa."`;

corpoMsg.style.padding = '20px';

autorMsg.innerText = `Mario Quintana`;
autorMsg.style.textAlign ='right';
autorMsg.style.padding = '20px';

// Meses do ano 
let mess = document.querySelector('#mesesss');
let tituloMeses = document.querySelector('.tituloMes');
let mesesAno = [' janeiro', ' fevereiro', ' março', ' abril', ' maio', ' junho'];
mess.innerText =`${mesesAno}`
mess.style.textTransform = 'uppercase'