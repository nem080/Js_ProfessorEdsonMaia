/* Arquivo JS aula 09 DOM + alterar CSS */

let titulo = document.querySelector('h1')
titulo.textContent = `Os texto mudou aqui pelo js Aula 09 Manipular CSS`
titulo.innerHTML = 'Usando o innerHTML <br> Aula Manipular CSS'
let imagem = document.querySelector('#foto')
// o uso do setAttribute e usando para atribuir valor a um elemento
imagem.setAttribute('src', '../img/images-lutador.jpeg')
imagem.setAttribute('width', '280px')
imagem.setAttribute('border', '5px')
imagem.setAttribute('margin', '20px')

// /* MANIPULAR CSS */
document.querySelector('h1').style.color = "blue";
titulo.style.color = "green";
titulo.style.backgroundColor = "#444";
titulo.style.borderBottom = "2px solid red";
titulo.style.padding = "0.625rem";
titulo.style.borderRadius = "15px";

let box = document.querySelectorAll('.box')
box[0].setAttribute('class', 'escura')
box[0].removeAttribute('class')

// /////// MODOS DE COR ///////
let tela = document.querySelector('main')

let btnDark = document.querySelector('#btdark')

let btnLight = document.querySelector('#btlight')

btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)

function modoDark() {
    //event.preventDefault();
    console.log('modo dark')
        // add class
    tela.classList.add("dark");
    tela.classList.remove("light");
}

function modoLight() {
    //event.preventDefault();
    console.log('modo light')
        // add class
    tela.classList.remove("dark");
    tela.classList.add("light");

}

/*
titulo.addEventListener('click', mudarId)
function mudarId() {
    titulo.id = 'titulo'
    console.log(titulo.id)
}
*/
