//BREAK -> parar de percorrer a lista

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const procurado = 5;

for (const num of numeros) {

    console.log("numero analisado  :", num);

    if (num === procurado) {
        console.log("numero encontrado : " + num);
        break; //para o loop imediatamente
    }
}


//continue -> pula para o proximo item da lista

console.log("nuemros impares de 1 a 10");

for (let numero = 1; numero <= 10; numero++) {
    if (numero % 2 === 0) {
        continue; //pula para todo o restante do codigo.
    }
    console.log(numero);
}























































