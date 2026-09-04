//**Na opção 2**: receber o salário de um funcionário, calcular e mostrar o valor de suas férias. Sabe-se que as férias equivalem ao seu salário acrescido de l/2.
/*
if (opcao == 1) {
  // add your code for option 1 here
} else if (opcao == 2) {
  // ferias = salario + (salario / 2) -> simplificado: salario * 1.5
  const salario = Number(prompt("Digite o salário do funcionário:"));
  const ferias = salario * 1.5;

  console.log("\n=== CALCULO DE FERIAS ===");
  console.log(`salario: R$ ${salario.toFixed(2)}`);
  console.log(`acrescimo (1/2 do salario): R$ ${(salario / 2).toFixed(2)}`);
  console.log(`ferias: R$ ${ferias.toFixed(2)}`);

  alert(`O valor das férias do funcionário é: R$ ${ferias.toFixed(2)}`);
}



function calcularFerias() {
  const salario = Number(prompt("Digite o salário do funcionário:"));
  if (isNaN(salario)) { alert("Salário inválido."); return; }
  const ferias = salario * 1.5;
  console.log("\n=== CÁLCULO DE FÉRIAS ===");
  console.log(`salario: R$ ${salario.toFixed(2)}`);
  console.log(`acréscimo (1/2 do salário): R$ ${(salario / 2).toFixed(2)}`);
  console.log(`ferias: R$ ${ferias.toFixed(2)}`);
  alert(`O valor das férias do funcionário é: R$ ${ferias.toFixed(2)}`);
}

function calcularDecimoTerceiro() {
  const salario = Number(prompt("Digite o salário: "));
  const meses = Number(prompt("Digite os meses trabalhados: "));
  if (isNaN(salario) || isNaN(meses)) { alert("Entrada inválida."); return; }
  const decimoTerceiro = (salario * meses) / 12;
  alert("O valor do décimo terceiro é: R$ " + decimoTerceiro.toFixed(2));
}

function novoSalario() {
  // implementar lógica de novo salário aqui
  console.log("Função Novo salário não implementada.");
  alert("Função Novo salário não implementada.");
}

let menu = prompt("Menu de opções: Novo salário, férias, décimo terceiro, sair");
if (menu) menu = menu.toLowerCase();

while (menu !== "sair") {
  if (menu === "novo salário" || menu === "novo salario") {
    novoSalario();
  } else if (menu === "férias" || menu === "ferias") {
    calcularFerias();
  } else if (menu === "décimo terceiro" || menu === "decimo terceiro") {
    calcularDecimoTerceiro();
  } else {
    console.log("Opção inválida!");
    alert("Opção inválida! Por favor, escolha uma opção válida.");
  }
  menu = prompt("Menu de opções: Novo salário, férias, décimo terceiro, sair");
  if (menu) menu = menu.toLowerCase();
}

console.log("Saindo do programa...");
alert("Saindo do programa...");

*/
/*
et menu = prompt("Menu de opções: Novo salário, férias, décimo terceiro, sair");

while (menu !== "sair") {

if (menu === "Novo salário") { console.log("teste")
    
}

else if (menu === "férias") { console.log("teste2")

}
else if (menu === "décimo terceiro") { console.log("teste3")

}
else if (menu === "sair") { console.log("Saindo do programa...")
    alert("Saindo do programa...")
}

else {
    console.log("Opção inválida!");
    alert("Opção inválida! Por favor, escolha uma opção válida.");
}
menu = prompt("Menu de opções: Novo salário, férias, décimo terceiro, sair");
}

//1

let salario = Number(prompt("digite seu salário: "));
let novosalario = 0;

if (salario <= 350) {
    novosalario = salario + (salario * 0.15);
} else if (salario <= 600) {
    novosalario = salario + (salario * 0.10);
} else {
    novosalario = salario + (salario * 0.05);
}

alert("O novo salário é: " + novosalario.toFixed(2));



//2
if (opcao == 1) {
  // add your code for option 1 here
} else if (opcao == 2) {
  // ferias = salario + (salario / 2) -> simplificado: salario * 1.5
  const salario = Number(prompt("Digite o salário do funcionário:"));
  const ferias = salario * 1.5;

  console.log("\n=== CALCULO DE FERIAS ===");
  console.log(`salario: R$ ${salario.toFixed(2)}`);
  console.log(`acrescimo (1/2 do salario): R$ ${(salario / 2).toFixed(2)}`);
  console.log(`ferias: R$ ${ferias.toFixed(2)}`);

alert(`O valor das férias do funcionário é: R$ ${ferias.toFixed(2)}`);

}



//3
if ( menu == décimo terceiro ) {

    let salario = Number(prompt("Digite o salário: "));
    let meses = Number(prompt("Digite os meses trabalhados: "));


    let decimoTerceiro = (salario * meses) / 12;

    alert("O valor do décimo terceiro é: R$ " + decimoTerceiro.toFixed(2));
    
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

lif (opcao == 1) {
  // add your code for option 1 here
} else if (opcao == 2) {
  // ferias = salario + (salario / 2) -> simplificado: salario * 1.5
  const salario = Number(prompt("Digite o salário do funcionário:"));
  const ferias = salario * 1.5;

  console.log("\n=== CALCULO DE FERIAS ===");
  console.log(`salario: R$ ${salario.toFixed(2)}`);
  console.log(`acrescimo (1/2 do salario): R$ ${(salario / 2).toFixed(2)}`);
  console.log(`ferias: R$ ${ferias.toFixed(2)}`);

  alert(`O valor das férias do funcionário é: R$ ${ferias.toFixed(2)}`);
}



function calcularFerias() {
  const salario = Number(prompt("Digite o salário do funcionário:"));
  if (isNaN(salario)) { alert("Salário inválido."); return; }
  const ferias = salario * 1.5;
  console.log("\n=== CÁLCULO DE FÉRIAS ===");
  console.log(`salario: R$ ${salario.toFixed(2)}`);
  console.log(`acréscimo (1/2 do salário): R$ ${(salario / 2).toFixed(2)}`);
  console.log(`ferias: R$ ${ferias.toFixed(2)}`);
  alert(`O valor das férias do funcionário é: R$ ${ferias.toFixed(2)}`);
}

function calcularDecimoTerceiro() {
  const salario = Number(prompt("Digite o salário: "));
  const meses = Number(prompt("Digite os meses trabalhados: "));
  if (isNaN(salario) || isNaN(meses)) { alert("Entrada inválida."); return; }
  const decimoTerceiro = (salario * meses) / 12;
  alert("O valor do décimo terceiro é: R$ " + decimoTerceiro.toFixed(2));
}

function novoSalario() {
  // implementar lógica de novo salário aqui
  console.log("Função Novo salário não implementada.");
  alert("Função Novo salário não implementada.");
}

let menu = prompt("Menu de opções: Novo salário, férias, décimo terceiro, sair");
if (menu) menu = menu.toLowerCase();

while (menu !== "sair") {
  if (menu === "novo salário" || menu === "novo salario") {
    novoSalario();
  } else if (menu === "férias" || menu === "ferias") {
    calcularFerias();
  } else if (menu === "décimo terceiro" || menu === "decimo terceiro") {
    calcularDecimoTerceiro();
  } else {
    console.log("Opção inválida!");
    alert("Opção inválida! Por favor, escolha uma opção válida.");
  }
  menu = prompt("Menu de opções: Novo salário, férias, décimo terceiro, sair");
  if (menu) menu = menu.toLowerCase();
}

console.log("Saindo do programa...");
alert("Saindo do programa...");


*/

let menu = prompt("Menu de opções: Novo salário, férias, décimo terceiro, sair");

while (menu !== "sair") {

if (menu === "Novo salário") { 

let salario = Number(prompt("digite seu salário: "));
let novosalario = 0;

if (Number.isNaN(salario)) {
    alert("Por favor, digite um número válido para o salário.");
}
else if (salario <= 350) {
    novosalario = salario + (salario * 0.15);
} else if (salario <= 600) {
    novosalario = salario + (salario * 0.10);
} else {
    novosalario = salario + (salario * 0.05);
}

alert("O novo salário é: " + novosalario.toFixed(2));
    
}

////////////////////////////////////////////////////////////////////////////////////////////

else if (menu === "férias") { 
  const salario = Number(prompt("Digite o salário do funcionário:"));
  const ferias = salario * 1.5;

  console.log("\n=== CALCULO DE FERIAS ===");
  console.log(`salario: R$ ${salario.toFixed(2)}`);
  console.log(`acrescimo (1/2 do salario): R$ ${(salario / 2).toFixed(2)}`);
  console.log(`ferias: R$ ${ferias.toFixed(2)}`);

alert(`O valor das férias do funcionário é: R$ ${ferias.toFixed(2)}`);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

}
else if (menu === "décimo terceiro") {
    let salario = Number(prompt("Digite o salário: "));
    let meses = Number(prompt("Digite os meses trabalhados: "));


    let decimoTerceiro = (salario * meses) / 12;

    alert("O valor do décimo terceiro é: R$ " + decimoTerceiro.toFixed(2));
    
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

else if (menu === "sair") { console.log("Saindo do programa...")
    alert("Saindo do programa...")
}

else {
    console.log("Opção inválida!");
    alert("Opção inválida! Por favor, escolha uma opção válida.");
}
menu = prompt("Menu de opções: Novo salário, férias, décimo terceiro, sair");
}










































































































































































































