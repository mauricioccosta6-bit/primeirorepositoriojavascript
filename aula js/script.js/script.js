//linguagem interpretada
//Node.js
//tipagem fraca                                                                                                                                                    
let minhaVariavel = 10;
minhaVariavel = "Ola mundo!";
minhaVariavel = true;

let numero = 10;
let texto = 20;
console.log(numero + texto);

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

if (temDinheiro || temCartao || temPix) {

    console.log("pode pagar")

} else {
    console.log("nao pode pagar")

}
const usuarioAdmin = "admin";
const senha = 1234;

const senhaCorreta = (senha === "1234");
const ehAdmin = (usuarioAdmin === "admin")
const ehGerente = (usuarioAdmin === "gerente")

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

if (temperatura < 0) {
    console.log(" Muito frio");

} else if (temperatura >= 0 && temperatura <= 15) {
    console.log(" Frio");

} else if (temperatura >= 16 && temperatura <= 25) {
    console.log(" Agradável");

} else if (temperatura >= 26 && temperatura <= 35) {
    console.log(" Quente");

} else {
    console.log(" Muito quente");

    if (Number.isNaN(temperatura))
        console.log("tempratura invalida")

}

const peso = Number(prompt("Digite seu peso em kg:"));
const altura = Number(prompt("Digite sua altura em metros:"));

const imc = peso / (altura * altura);

console.log(imc.toFixed(2)); // quantidade de casas após a vírgula
alert(`Seu IMC é: ${imc.toFixed(2)}`); // popup

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc < 25) {
    console.log("Peso normal");
} else if (imc < 30) {
    console.log("Sobrepeso");
} else if (imc < 35) {
    console.log("Obesidade grau 1");
} else if (imc < 40) {
    console.log("Obesidade grau 2");
} else {
    console.log("Obesidade grau 3");
}

//1. Verificar maioridade
//Crie um programa que solicite a idade de uma pessoa e informe se ela é maior de idade (18 anos ou mais) ou menor de idade.

let idadeUsuario = Number(prompt("Digite sua idade:"));

if (idade >= 18) {

    alert("voce e maior de idade.");

} else {
    alert("voce e menor de idade.");

}



//Positivo ou Negativo
//Solicite um número ao usuário e informe se ele é positivo ou negativo. Considere o número 0 como negativo.

numero = Number(prompt("digite um numero:"));
if (numero > 0) {
    alert("0 e numero positivo.");

} else {

    alert("0 e numero negativo.");

}


// Aprovação em uma prova
//Peça ao usuário a nota final de um aluno (de 0 a 100). Caso a nota seja 60 ou maior, informe que ele foi Aprovado. Caso contrário, informe que foi Reprovado.

nota = Number(prompt("Digite a nota final (0 a 100):"));

if (nota >= 60) {
    alert("aluno aprovado");
} else {
    alert("aluno reprovado");
}


//Positivo, Negativo ou Zero
//Leia um número informado pelo usuário e indique se ele é:
//Positivo; 
//Negativo; 
//Zero. 

numero = Number(prompt("digite um numero:"));
if (numero > 0) {
    alert("o numero e positivo.");
} else if (numero < 0) {
    alert("o numero e negativo.");
} else {
    alert("o numero e zero.");
} 


//Classificação por idade
//Solicite a idade de uma pessoa e classifique-a...
const idadeClassificacao = Number(prompt("digite a sua idade:"));
if (Number.isNaN(idadeClassificacao) || idadeClassificacao < 0) {
    alert("idade invalida!");
} else if (idadeClassificacao <= 12) {
    alert("classificacao: crianca");
} else if (idadeClassificacao <= 17) {
    alert("classificacao: adolescente");
} else {
    alert("classificacao: adulto");
}

alert ("classificacao adulto");


//Par ou Ímpar

let Numero = Number(prompt("digite um numero intero"));

if (numero % 2 === 0) {
    alert("o numero e par.");
} else {
    alert("o numero e impar.");

}


//nivel intermediario

//calculadora simples

// 1. Coleta dos dados do usuário
let num1 = Number(prompt("Digite o primeiro número:"));
let operacao = prompt("Digite a operação desejada (+, -, * ou /):");
let num2 = Number(prompt("Digite o segundo número:"));

let resultado;

// 2. Estrutura de decisão para escolher a operação
switch (operacao) {
    case "+":
        resultado = num1 + num2;
        alert(`Resultado: ${num1} + ${num2} = ${resultado}`);
        break;
        
    case "-":
        resultado = num1 - num2;
        alert(`Resultado: ${num1} - ${num2} = ${resultado}`);
        break;
        
    case "*":
        resultado = num1 * num2;
        alert(`Resultado: ${num1} * ${num2} = ${resultado}`);
        break;
        
    case "/":
        // Tratamento especial: não é possível dividir por zero na matemática
        if (num2 === 0) {
            alert("Erro: Não é possível dividir por zero!");
        } else {
            resultado = num1 / num2;
            alert(`Resultado: ${num1} / ${num2} = ${resultado}`);
        }
        break;
        
    // Executado caso o usuário digite um símbolo que não seja +, -, * ou /
    default:
        alert("Erro: Operação inválida! Escolha apenas +, -, * ou /.");
        break;
}

// maior entre os tres numeros

let n1 = Number(prompt("Digite o primeiro número:"));
let n2 = Number(prompt("Digite o segundo número:"));
let n3 = Number(prompt("Digite o terceiro número:"));

// Math.max recebe os números e devolve automaticamente o maior deles
let maior = Math.max(n1, n2, n3);

alert(`O maior número digitado foi: ${maior}`);

//3. desconto em compras

const valorcompra = Number(prompt("valor total da compra:"))

if(valorcompra > 100) {

const desconto = valorcompra * 0.10 //10% do valor

const valorfinal = valorcompra - desconto
alert("desconto aplicado! total R$" + valorfinal.toFixed(2))

}

else{

alert("valor normal: R$" + valorcompra.toFixed(2))

}

//4 Sistema de login

const usuario = prompt("usuario")
const senhaLogin = prompt("senha")

if (usuario === "admin" && senhaLogin =="1234") {
    alert("login bem sucedido")
} else {
    alert("acesso negado")
}



//Nivel avancado

//classificacao dos triangulos

let triangulo1 = Number





















































































































































































































































































































































