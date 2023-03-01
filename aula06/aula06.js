// comentario em linha

/*
Comentario em bloco
*/
document.write(`Conteudo js <br>`)
// criar variaveis use let ou var
let produto = 'Arroz'
let quant = 2
let precoUnitario = 4.99
let precoTotal = quant * precoUnitario
document.write(`Preço Total R$ ${precoTotal} <br> <hr>`);
// formatando uma string monetaria.
console.log(new Intl.NumberFormat('pt-BR').format(precoTotal))
// formatando uma string monetaria ACRECENTA A VIRGULA E O SIMBOLO DO R$.
document.write(`Preço Total ${precoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} <hr>`)

// criar constante
const nome = 'Edson Maia'
const peso = 83.5
const altura = 1.75
const imc = peso / (altura * altura)

document.write(`IMC: ${imc} <br> <hr>`)
// Usando o toFixed(2) para definiar o numero de casa decimais  na operação.
document.write(`IMC: ${imc.toFixed(2)} <br> <hr>`)

let nota1 = 7.5
let nota2 = 5.5
let nota3 = 4.0
let notaFinal = nota1 + nota2 + nota3
document.write("Nota Final " + notaFinal + '<br><hr>')

// let compra = 1999.99
// let desconto = 145.42
// let compraComDesconto = compra - desconto

// document.write(compraComDesconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })+ '<br><hr>')

// document.write(compraComDesconto + '<br><hr>')
