//linguagem interpretada
//Node.js
//tipagem fraca                                                                                                                                                    
let minhaVariavel = 10;
minhaVariavel = "Ola mundo!";
minhaVariavel = true;

let numero = 10;
let texto = 20;
let resultado = numero + texto;
console.log(resultado);

console.log(Number("123")); //converte string para numero
console.log(parseInt("10.9")); //converte string para numero inteiro
console.log(parseFloat("10.9"));
console.log(String("123"));
console.log(Boolean("0"));
console.log(Boolean("1"));
console.log(Boolean(""));
console.log(Boolean("oi"));

//condicionais (if, else, operadores logicos)
const chovendo = true;
const solApareceu = false;

const idade = 20;
if (idade >= 20) {
    console.log("Você é maior ou igual a 20 anos");
}

const idade2 = 15;

if (idade2 >= 18) {
    console.log("maior de idade");
} else {
    console.log("menor de idade");
}

const idade3 = Number(prompt("Digite sua idade:"));

if (idade3 >= 18) {
    console.log("voce pode tirar a carteira de motorista");
} else {
    console.log("voce ainda nao pode tirar a carteira de motorista");

}

//converte string para numero decimal
const idade4 = 20;
const temDocumento = true;
const estaLista = true;

if (idade4 >= 18 && temDocumento && estaLista) {
    console.log("voce pode entrar!!");
} else {
    console.log("voce nao pode entrar!");
}

const temDinheiro = false;

const temCartao = true;

const temPix = false;

if(temDinheiro || temCartao || temPix) {

    console.log("pode pagar")

} else {
        console.log("nao pode pagar")

}
const usuario = "admin";
const senha = 1234;

const senhaCorreta = (senha === "1234");
const ehAdmin = (usuario === "admin")
const ehGerente = (usuario === "gerente")

if ((ehAdmin && senhaCorreta) || (ehGerente && senhaCorreta)) {
    console.log("acesso liberado!")
} else {
    console.log("acesso negado!")
}

if ((ehAdmin || ehGerente) && (senhaCorreta)) {
    console.log("acesso autorizado");
} else {
    console.log("acesso negado");
}



const usuario2 = prompt("usuario");

const senha2 = prompt("senha");

const acessoadmin = (usuario2 === "admin" && senha2 === "1234")

const acessouser = (usuario2 === "user" && senha2 === "senha1234") 

if (acessoadmin || acessouser) {
    console.log("acesso liberado");
} else {
    console.log("acesso negado");
}

const nota = 75;

if (nota >= 80) {

    console.log("aprovado");
    
} else if (nota >= 60) {
    console.log("em recuperação");
} else {
    console.log("reprovado");
}

const temperatura = Number(prompt("Digite a temperatura em °C:"));

if (temperatura < 0)
     {
    console.log(" Muito frio");

} else if (temperatura >= 0 && temperatura <= 15)
     {
    console.log(" Frio");

} else if (temperatura >= 16 && temperatura <= 25)
     {
    console.log(" Agradável");

} else if (temperatura >= 26 && temperatura <= 35)
     {
    console.log(" Quente");

} else {
    console.log(" Muito quente");
F 
    if(Number.isNaN(temperatura))
        console.log("tempratura invalida")

}

