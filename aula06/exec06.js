let titulo = document.getElementById('titulo');
titulo.innerHTML = 'Exercicios js';
titulo.style.textAlign = 'center';
titulo.style.color = '#666';




let dadosLutador = document.getElementById('ltdor')
// Criando um objeto Lutador.
let lutador = {
    nome: 'luta nada ',
    nacionalidade:'Brasolivas',
    Idade : 35,
    Peso : 195,
    Altura : 1.89
}
dadosLutador.innerHTML = `<strong><h2>Dados dos lutador</h2></strong><br> Nome: ${lutador.nome}<br> Nacionalidade: ${lutador.nacionalidade}<br> Idade: ${lutador.Idade}<br>Peso: ${lutador.Peso}<br> Altura: ${lutador.Altura}`

let mensgDia = document.querySelector('#msg')
let dia = 01
let mes = 03
let ano = 2023
let text = 'Ser gênio é algo que não sou, mas o que define meu perfil é ser curioso e sonhador.Todo mundo pode ser inteligente, basta ser curioso e não ter medo de errar.'

mensgDia.innerHTML = `<strong> Estamos no dia ${dia}/${mes}/${ano} </strong>. </br> <h2>Mensagem Do Dia</h2> </br> ${text} <br>`


const calendario = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dez'
]

document.write(calendario)