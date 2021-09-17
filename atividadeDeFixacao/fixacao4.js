//1)
let numero1 = new Number(7);
let numero2 = new Number(-55);
let numero3 = new Number(389);
let numero4 = new Number(1000);
let numero5 = new Number(3.1459);
let numero6 = new Number(-46.267);

console.log(numero1);
console.log(numero2);
console.log(numero3);
console.log(numero4);
console.log(numero5);
console.log(numero6);

console.log(numero1 + numero6);
console.log(numero1 * numero3);
console.log(numero4 / numero5);

//2)
let valor1 = new Number(10);
let valor2 = new Number(3);
let valor3 = new Number(9);
let valor4 = new Number(99.9);
let valor5 = new Number(721);

console.log(valor1);
console.log(valor2);
console.log(valor3);
console.log(valor4);
console.log(valor5);

let teste_max = valor1 < Number.MAX_VALUE ? "é menor" : "não é menor";
console.log(teste_max);

let teste_nulo = valor2 == Number.NaN ? "sim, possui." : "não, são diferentes.";
console.log(teste_nulo);

let teste_var = valor5 <= valor3 ? "sim" : "não";
console.log(teste_var);
