//  

while(false) {
console.log("ao infinito e... alem!")

}

let contador = 1

//enquanto o meu contador for menor ou igual a 5, continue. 


while (contador <= 5) {

console.log("contagem: "+ contador)

contador = (contador + 1)
}
            //1+1=2
        


        //contador = 2

let tempo = 10

while(tempo > 0) {

console.log(tempo)

//tempo = tempo -1 retira 1 do tempo

tempo--

}
console.log("codigo acabou.")

//VALIDACAO SENHA

const senhaCorreta  = "1910deunaopai"
let tentativa = ""

while( tentativa != senhaCorreta) {
 
    tentativa = prompt("digite a senha:")

    if (tentativa === senhaCorreta) {
        console.log("senha correta! acesso liberado!")
    } else {
        console.log("senha incorreta. tente novamente")
    }

}

//CRIAR UM CODIGO COM WHILE QUE SOME NUMEROS ATE
//PASSAR DE 100


let soma = 0
let numero = 0

while(soma <= 100) {

numero = Number(prompt("informe um numero"))

soma = soma + numero

}

console.log("a soma dos numeros chegou em: " + soma)

//DO-while PERMITE CRIAR LOOP QUE SAO EXECUTADOS UMA OU MAIS VEZES.

let repetir = false

do{

console.log ("so uma vez.")


}while(repetir) //ENQUANTO a condicao for TRUE
// 

let num = 10;

while(num < 5){
console.log("isso NAO vai aparecer.")

}
do{
console.log ("isso VAI aparecer pelo menos 1x")

}
while(num < 5)


// adivinhe o numero (1 a 10)
const numerosecreto = 8;
let palpite;
let tentativas = 0;

alert("adivinhe o numero entre 1 e 10.");

do {
    palpite = Number(prompt("seu palpite:"));
    tentativas++;

    if (Number.isNaN(palpite)) {
        alert("digite um numero valido.");
    } else if (palpite === numerosecreto) {
        alert("acertou em " + tentativas + " tentativas.");
    } else if (palpite < numerosecreto) {
        alert("muito baixo");
    } else {
        alert("muito alto");
    }
} while (palpite !== numerosecreto);

// adivinhe o numero (1 a 10) - aleatorio
const numeroSecreto2 = Math.floor(Math.random() * 10 + 1);
let palpite2;
let tentativas2 = 0;

console.log("adivinhe o numero entre 1 e 10.");

do {
    palpite2 = Number(prompt("seu palpite:"));
    tentativas2++;

    if (Number.isNaN(palpite2)) {
        console.log("digite um numero valido.");
    } else if (palpite2 === numeroSecreto2) {
        console.log("acertou em " + tentativas2 + " tentativas.");
    } else if (palpite2 < numeroSecreto2) {
        console.log("muito baixo");
    } else {
        console.log("muito alto");
    }
} while (palpite2 !== numeroSecreto2);

// ...existing code...























































































































































































































