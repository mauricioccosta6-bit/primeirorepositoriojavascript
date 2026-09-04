
//document --> pagina inteira do meu html

//getElementById --> procura pelo atributo id=""

//titulo filme -> id que queremos.

const elemento = document.getElementById("filme-principal");

console.log(elemento);

function selecionarPorId() {
    const titulofilme = document.getElementById("titulo-filme");
    console.log(titulofilme);
    console.log(titulofilme.tagName) //H3
    console.log(titulofilme.textContent) //o conteudo do h3
    console.log(titulofilme.id); //titulo-filme


    titulofilme.classList.add("elemento-selecionado"); //adiciona uma classe ao elemento





}

elemento.classList.add('elemento-selecionado') //getElementsByClassName -> retorna uma lista de todos os elementos existentes.


function selecionarPorClasse(){

     const elementos = document.getElementsByClassName('genero-acao')
     
     //elementos.length quantidade de elementos encontrados.
     console.log('Quantidade: ' + elementos.length)

     for (i = 0;  i < elementos.length; i++){

            console.log(elementos[i].textContent.trim())
            elementos[i].classList.add('elemento-selecionado')             
     }
}

//QuerySelector -> retorna o PRIMEIRO elemento.

function selecionarPorQuery() {

       const elemento = document.querySelector('.filme-mini')
       console.log(elemento)
    //=> arrow function
    //el = elemento atual, indice = posicao (0, 1, 2...), 

    elemento.forEach(el, indice => {
        console.log(indice, el.textContent.trim())

el.classList.add('elemento-selecionado')


    });                                   

    function mudarTexto(){

//selecionar o element oque queremos mudar

const titulo = document.getElementById ('titlo-destaque')

titulo.textContent = document.getElementById ('input-busca').value

console.log('novo teste,' + titulo.textContent)

    }


function  adiconarBadge() {
    //criar o elemento
    //craetelement ('span')
const badge = document.createElement ('span')

badge.className = 'badge'
badge.textContent = 'em alta'

//procurar um elemento do html pelo id
const container = document.getElementById ('badge-container')


    container.innerHTML = '';

    container.appendChild(badge);



}

function mudarPoster () {

const poster = document.getElementById





}


const opcoes = [
        {
            url: 'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
            nome: 'The Last of Us'
        },
        {
            url: 'https://image.tmdb.org/t/p/w500/qZtAf4Z1lazGQoYVXiHOrvLr5lI.jpg',
            nome: 'Wednesday'
        },
        {
            url: 'https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg',
            nome: 'Breaking Bad'
        },
        {
            url: 'https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg',
            nome: 'Round 6'
        },
        {
            url: 'https://image.tmdb.org/t/p/w500/twfKp60THrcOIep9sjHODOOfO8d.jpg',
            nome: 'Stranger Things'
        }
    ];

const sorteado = opcoes[2];

poster.src = sorteado.url
poster.alt = sorteado.nome
titulo.textContent = sorteado.nome

console.log("poster trocado para: ", sorteado.nome)


poster.style.opacity ='0'

poster.style.transition = 'opacity 0.3s'

//() => funcao anonima

setTimeout( () {

//todo esse bloco de codigo sera executado apos 300ms

poster.style.opacity = '1';

poster.classList.add('poster-fade-in')


//remover uma classe apos 600 ms
setTimeout( ()=> poster.classList.remove('poster-fade in'), 600)

},300     //300ms



)

function lerinput() {
    
const input = document.getElementById('input-busca').value.trim()

if (input === '') {
    alert("digite algo no campo!")

return; //para processo processo da funcao.

}

const titulo = document.getElementById('titulo-destaque')


titulo.textContent=input

titulo.classList.add('texto-animado')





}






}


























































































































































