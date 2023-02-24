document.write('ola mundo aula 02 no js externo');
console.log('ola mundo no terminal node');

let ms = "minha msg"
let mgs = "minha msg"
let meuPeso = 91.01;
let minhaAltura = 1.84;
let minhaIdade = 35;
let ehDoador = false;
let teste = null;

// usando o const
const PI = 3.1415;
const TAXA = 0.5;
// <================acessando as variaveis====================> 
// document.write(ms);
// document.write(mgs);
// document.write(meuPeso);
// document.write(minhaAltura);
// document.write(minhaIdade);
// document.write(ehDoador);
// document.write(teste);
// Document.write(PI);
// document.write(TAXA);

// <===============================concatenação==========================> 
document.write("<p> concatenação Nem" + ms + "</p> <br>");
// <================================usando o tampleplay====================>
document.write(` mensagem: ${mgs}`);
// <===============================concatenação==========================> 
document.write("<p> concatenação msgteste: " + meuPeso + "</p>");
// <================================usando o tampleplay====================>
document.write(`Minha altura:  ${minhaAltura}`);
// <===============================concatenação==========================> 
document.write("<p> concatenação  minhaIdade: " + minhaIdade + "</p>");
// <================================usando o tampleplay====================>
document.write(`eh doador: ${ehDoador}`);
// <===============================concatenação==========================> 
document.write("<p> concatenação  teste: " + teste + "</p>");
// <================================usando o tampleplay====================>
Document.write(`PI ${PI}`);
// <===============================concatenação==========================> 
document.write("<p>concatenação  TAXA" + TAXA + "</p>");