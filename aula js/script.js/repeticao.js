// exemplos de repeticao e correcoes

// Exemplo: while (comentado)
// let contador = 1
// while (contador <= 5) {
//     console.log("contagem: " + contador)
//     contador++
// }

// Exemplo: decremento
// let tempo = 10
// while (tempo > 0) {
//     console.log(tempo)
//     tempo--
// }
// console.log("codigo acabou.")

// DO-WHILE: garante execução ao menos 1x
/*let num = 10;
console.log("isso NAO vai aparecer."); // intencional: mostra que o while não executaria
do {
    console.log("isso VAI aparecer pelo menos 1x");
} while (num < 5);

// adivinhe o numero (fixo) 
const numerosecreto = 8;
let palpiteEx1;
let tentativasEx1 = 0;

alert("adivinhe o numero entre 1 e 10.");

do {
    palpiteEx1 = Number(prompt("seu palpite:"));
    tentativasEx1++;

    if (Number.isNaN(palpiteEx1)) {
        alert("digite um numero valido.");
    } else if (palpiteEx1 === numerosecreto) {
        alert("acertou em " + tentativasEx1 + " tentativas.");
    } else if (palpiteEx1 < numerosecreto) {
        alert("muito baixo");
    } else {
        alert("muito alto");
    }
} while (palpiteEx1 !== numerosecreto);

// adivinhe o numero (aleatorio)
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
        alert("muito baixo");
    } else {
        alert("muito alto");
    }
} while (palpite2 !== numeroSecreto2);

// FOR -> LOOP
for (let conta = 0; conta < 10; conta++) {
    console.log(conta);
}
console.log("o loop terminou.");

// Tabuada (exemplo)
const NumeroEx = Number(prompt("tabuada de qual numero?"));
if (Number.isNaN(NumeroEx)) {
    console.log("numero invalido.");
} else {
    console.log(`\nTabuada do ${NumeroEx}\n`);
    for (let i = 1; i <= 10; i++) {
        const resultado = NumeroEx * i;
        console.log(`${NumeroEx} x ${i} = ${resultado}`);
    }
}

// Numeros pares de 0 a 20
console.log("numeros pares de 0 a 20:");
for (let pares = 0; pares <= 20; pares += 2) {
    console.log(pares);
}

// Contagem regressiva
console.log("lancamento em:");
for (let cont = 10; cont >= 1; cont--) {
    console.log(cont + "...");
}
console.log("decolar!");

// Exemplo de loop aninhado
for (let numeroLoop = 1; numeroLoop <= 3; numeroLoop++) {
    for (let vezes = 1; vezes <= 3; vezes++) {
        console.log(numeroLoop);
    }
}
const linhas = 5;

for (let i = 1; i <= linhas; i++) {
  let linha = "";
  for (let j = 1; j <= i; j++) {
    linha += "* ";
  }
  console.log(linha);
}                                                                                                                    


//Nível Básico
//1. Contagem de 1 a 10
//Crie um programa que exiba todos os números de 1 até 10, um por linha.


 for (let conta = 1; conta < 11; conta++) {
    console.log(conta);
}
console.log("o loop terminou.");





//2. Tabuada de um número
//Solicite um número ao usuário e exiba sua tabuada de multiplicação de 1 a 10.
//Exemplo para o número 5:
//5 x 1 = 5
//5 x 2 = 10
//...
//5 x 10 = 50



const numero = Number(prompt("tabuada de qual numero?"));
if (Number.isNaN(numero)) {
    console.log("numero invalido.");
} else {
    console.log(`\nTabuada do ${numero}\n`);
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}






//3. Soma dos primeiros N números
//Solicite um número inteiro positivo ao usuário e calcule a soma de todos os números de 1 até esse valor.
//Exemplo:
//Entrada: 5 
//Saída: 15 
//(1 + 2 + 3 + 4 + 5 = 15)

const n = Number(prompt("Digite um número inteiro positivo:"));
if (Number.isNaN(n) || n <= 0) {
    console.log("número inválido.");
} else {
    let soma = 0;
    for (let i = 1; i <= n; i++) {
        soma += i;
    }
    console.log(`A soma dos números de 1 até ${n} é: ${soma}`);
}









//🟡 Nível Intermediário
//4. Números pares de 1 a 50
//Exiba todos os números pares entre 1 e 50, um por linha.

console.log("Números pares de 1 a 50:");
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}






//5. Jogo de adivinhação
//Crie um programa que gere um número aleatório entre 1 e 100.
//O usuário deverá informar palpites até acertar o número.
//Durante o jogo:
//Se o palpite for maior que o número secreto, informe que o número é menor. 
//Se o palpite for menor que o número secreto, informe que o número é maior. 
//Quando acertar, exiba uma mensagem de parabéns e encerre o programa.

/*const numeroSecreto = Math.floor(Math.random() * 100 + 1);  
let palpite = null;
let tentativas = 0;

console.log("Jogo de adivinhação! Tente adivinhar o número entre 1 e 100.");

while (palpite !== numeroSecreto) {
    palpite = Number(prompt("Digite seu palpite:"));
    tentativas++;
    
    if (Number.isNaN(palpite)) {
        console.log("Digite um número válido.");
    } else if (palpite === numeroSecreto) {
        console.log(`Parabéns! Você acertou em ${tentativas} tentativas!`);
    } else if (palpite < numeroSecreto) {
        alert("O número secreto é maior.");
    } else {
        alert("O número secreto é menor.");
    }
} 








//6. Contagem regressiva
//Solicite um número inteiro ao usuário e faça uma contagem regressiva até 0, exibindo cada número.
//Exemplo:
//Entrada:
//5
//Saída:
//5
//4
//3
//2
//1
//0

const numero6 = Number(prompt("Digite um número para contagem regressiva:"));
if (Number.isNaN(numero6)) {
    console.log("Número inválido.");
} else {
    for (let i = numero6; i >= 0; i--) {
        console.log(i);
    }
}










//Nível Avançado
//7. Soma dos dígitos
//Solicite um número inteiro positivo ao usuário e calcule a soma de todos os seus dígitos.
//Exemplo:
//Entrada: 1234 
//Saída: 10 
//(1 + 2 + 3 + 4 = 10)

const numero7 = String(Number(prompt("Digite um número inteiro positivo:")));
if (numero7 === "NaN" || Number(numero7) <= 0) {
    console.log("Número inválido.");
} else {
    let somaDigitos = 0;
    for (let i = 0; i < numero7.length; i++) {
        somaDigitos += Number(numero7[i]);
    }
    console.log(`A soma dos dígitos de ${numero7} é: ${somaDigitos}`);
}



















//8. Fatorial
//Solicite um número inteiro positivo ao usuário e calcule o seu fatorial.
//O fatorial de um número é obtido multiplicando esse número por todos os inteiros positivos menores que ele, até chegar em 1.
//Exemplo:
//5! = 5 × 4 × 3 × 2 × 1 = 120 
//4! = 4 × 3 × 2 × 1 = 24 
//3! = 3 × 2 × 1 = 6 
//Ao final, exiba o resultado do cálculo.

const numero8 = Number(prompt("Digite um número inteiro positivo:"));
if (Number.isNaN(numero8) || numero8 < 0) {
    console.log("Número inválido.");
} else {
    let fatorial = 1;
    for (let i = numero8; i > 1; i--) {
        fatorial *= i;
    }
    console.log(`${numero8}! = ${fatorial}`);
}













//9. Inverter número
//Solicite um número inteiro positivo ao usuário e exiba esse número com seus dígitos na ordem inversa.
//Exemplo:
//Entrada: 12345 
//Saída: 54321

const numero9 = String(Number(prompt("Digite um número inteiro positivo:")));
if (numero9 === "NaN" || Number(numero9) <= 0) {
    console.log("Número inválido.");
} else {
    let invertido = "";
    for (let i = numero9.length - 1; i >= 0; i--) {
        invertido += numero9[i];
    }
    console.log(`O número ${numero9} invertido é: ${invertido}`);
} 








//10. Números perfeitos até 1000
//Um número perfeito é aquele cuja soma de todos os seus divisores positivos, exceto ele mesmo, é igual ao próprio número.
//Exemplo:
//Divisores de 6: 1, 2 e 3 
//1 + 2 + 3 = 6 
//Crie um programa que encontre e exiba todos os números perfeitos entre 1 e 1000.

console.log("Números perfeitos entre 1 e 1000:");
for (let num = 1; num <= 1000; num++) {
    let somaDivisores = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            somaDivisores += i;
        }
    }
    if (somaDivisores === num) {
        console.log(num);
    }
}




//ARRAY
//um array e um tipo de dados que pode armazenar mais de um valor em uma unica variavel
//sequencialmento em forma de lista

const numeros= [1,2,3,4,5]

const Nomes = ["Ana", "Bruno", "Carlos", "Diana"]

// na minha lista de numeros
//eu quero a posicao 0

console.log(numeros[2]) //0     

console.log(Nomes[4]) //Diana



//lenght
//e uma propriedade que retorna o tamanho do array
console.log(numeros.length) //5

    for (let i = 0; i < Nomes.length; i++) {
        
        console.log(Nomes[i])
    
    }

// for of
const frutas = ["maçã", "banana", "laranja", "uva", "abacaxi"];

for (const fruta of frutas) {
    console.log(fruta);
}



//faca a soma  de todos os numeros do array numeros
const listaNumeros = [10, 25, 8, 42, 15, 7];

let soma = 0;
//of listaNumeros - percorra toda a lista!
for (const numero of listaNumeros) {
    soma += numero;
    //mesmo que soma = soma + numero
}

console.log("numeros" , numeros)
console.log("soma" , soma)


const notas = [7.5, 8.8, 9.0, 6.5, 10];
//utilize o for of e retorne a maoir nota da lista
let maiorNota = notas[0]; // Inicializa com a primeira nota
    //mesmo que soma = soma + numero
}

console.log("numeros" , numeros)
console.log("soma" , soma)


const notas = [7.5, 8.8, 9.0, 6.5, 10];
//utilize o for of e retorne a maoir nota da lista
let maiorNota = notas[0]; // Inicializa com a primeira nota

for (const nota of notas) {
    if (nota > maiorNota) {
        maiorNota = nota;
    }
}
console.log("Maior nota:" , maiorNota)




//- Cada informação tem um nome e um valor
//PESSOA - ( Nome, idade, email, genero, cpf)

const pessoa = {
    nome: "João",
    idade: 30,
    email: "joao@email.com",
    genero: "Masculino",
    cpf: "123.456.789-00"
};

console.log(pessoa) //acessar todo o objeto
console.log(pessoa.nome) //João
console.log(pessoa.idade) //30




//FOR IN

for (const chave in pessoa) {

//chave e o nome da propriedade do objeto
//objeto [chave] e o valor da propriedade do objeto

    console.log(chave, pessoa[chave])

//para cada vez que o for percorrer, ele vai a 
//CHAVE atual e retornar o valor que a chave representa


}


//objeto aluno que aguarde od dados de nome, matricula, curso, notas (array) e media (metodo)

const aluno = {

//sempre chave e valor

nome: "ana",
matricula: "123456",
curso: "JavaScript",
Notas: [9.5, ]
};

console.log("dados do aluno:\n")

for (const chave in aluno) {
    const valor = aluno[chave];
    console.log("chave:  "+ chave + "  valor:  " + valor);
}

//lista de produto

//informcao de produtos, precos, quantidade. 

//array de objetos
// cada item do array e um objetto


const carrinho = [

{produto: "camiseta", preco: 49.90, quantidade: 2},
{produto: "calça", preco: 150.90, quantidade: 1},
{produto: "tênis", preco: 199.90, quantidade: 1},



]

//For ..in --> objetos | retorna chaves / indices
//For ..of --> arrays,strings | retorna valores

for (const itemDomercado of carrinho) {

    //retornar apenas o nome do produto e o preco

console.log()



}




//- Cada informação tem um nome e um valor
//PESSOA - ( Nome, idade, email, genero, cpf)

const pessoa = {
    nome: "João",
    idade: 30,
    email: "joao@email.com",
    genero: "Masculino",
    cpf: "123.456.789-00"
};

console.log(pessoa) //acessar todo o objeto
console.log(pessoa.nome) //João
console.log(pessoa.idade) //30




//FOR IN

for (const chave in pessoa) {

//chave e o nome da propriedade do objeto
//objeto [chave] e o valor da propriedade do objeto

    console.log(chave, pessoa[chave])

//para cada vez que o for percorrer, ele vai a 
//CHAVE atual e retornar o valor que a chave representa


}


//objeto aluno que aguarde od dados de nome, matricula, curso, notas (array) e media (metodo)

const aluno = {

//sempre chave e valor

nome: "ana",
matricula: "123456",
curso: "JavaScript",
Notas: [9.5, ]
};

console.log("dados do aluno:\n")

for (const chave in aluno) {
    const valor = aluno[chave];
    console.log("chave:  "+ chave + "  valor:  " + valor);
}

//lista de produto

//informcao de produtos, precos, quantidade. 

//array de objetos
// cada item do array e um objetto


const carrinho = [

{produto: "camiseta", preco: 49.90, quantidade: 2},
{produto: "calça", preco: 150.90, quantidade: 1},
{produto: "tênis", preco: 199.90, quantidade: 1},



]

//For ..in --> objetos | retorna chaves / indices
//For ..of --> arrays,strings | retorna valores

for (const itemDomercado of carrinho) {

    //retornar apenas o nome do produto e o preco

console.log(itemDomercado.produto)
console.log(itemDomercado.preco)


}



*/
let naBrasa = [
    {produto: "picanha", preco: 49.90, quantidade: 2},
    {produto: "linguiça", preco: 150.90, quantidade: 1},
    {produto: "fraldinha", preco: 199.90, quantidade: 1},
]
let valormaior = 0;
for (const valormaior of naBrasa) {
    if (valormaior > valormaior) {
        valormaior = valormaior;
    }
}
console.log("Valor maior:" , valormaior)

for  (const calculo of naBrasa) {

    //retornar apenas o nome do produto e o preco

console.log(calculo.produto)
console.log(calculo.preco)

//exibir o valor total de cada produto (preco * quantidade)

const valorTotal = calculo.preco * calculo.quantidade;
console.log("Valor total do produto: " + valorTotal);

//ao final, informar qual item teve o maior valor total, considerando a quantidade comprada.

console.log(calculo.produto + "" | "-- VALOR TOTAL ITEM:" + calculo.preco * calculo.quantidade);


}

const nomes = ["guilherme", "lailton", "rita", "miguel, michael jackson", "maria", "joao", "ana", "carlos", "diana", "bruno"];

nomes.reverse(); //inverte a ordem dos elementos

console.log( nomes) //reverse e destrutivo, ele modifica o array original.



//uma escola possui uma lista de alunos com suas respectivas notas.
//considere que a nota minima de cada aluno para ser aprovado e 7.0.

//1. crie um array de objetos, chamados "aluno"
//2. cada objeto deve conter possuir  as propriesades: nome e nota
//percorra todos os alunos utilizando o for of
//caso a nota seja menor que 7, utikize o continue para pular para o proximo aluno
//exiba no console somente os alunos aprovados, com a seguinte mensagem: "Parabéns [nome do aluno], você foi aprovado(a) com nota [nota do aluno]!"

const alunos = [
    { nome: "Ana", nota: 8.5 },
    { nome: "João", nota: 6.0 },
    { nome: "Maria", nota: 9.0 },
    { nome: "Pedro", nota: 7.5 }
];

for (const aluno of alunos) {
    if (aluno.nota < 7.0) {
        continue;
    }
    alert(`Parabéns ${aluno.nome}, você foi aprovado(a) com nota ${aluno.nota}!`);
}













































































































































































































































































































































