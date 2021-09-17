//1)
//a. Dado que x = 5 e y = 8, valide se os valores e os tipos são iguais.
let x = 5;
let y = 8;

let resultado = x === y ? "é igual" : "não é igual";
console.log (resultado);

//b. Dado que x = 6 e y = “6”, valide se os valores e os tipos são diferentes.
let x2 = 6;
let y2 = "6";

let resultado2 = x2 !== y2 ? "são diferentes" : "não, são iguais";
console.log (resultado2);

//c. Dado que x = “7” e y = 7, valide se os valores são iguais.
let x3 = "7";
let y3 = 7;

let resultado3 = x3 == y3 ? "é igual" : "não é igual";
console.log (resultado3);

//2)
var nome = "fulano";
console.log ("Boa noite, " + nome + "!");

//3)
//a.
let xdado = 10;
let ydado = 5;

console.log("x = " + (xdado += ydado));

//b.
xdado = 10;
ydado = 5;

console.log("x = " + (xdado *= ydado));

//c.
xdado = 10;
ydado = 5;

console.log("x = " + (xdado = 0));

//d.
xdado = 10;
ydado = 5;

console.log ("x = " + (xdado /= ydado));

//e.
xdado = 10;
ydado = 5;

console.log ("x = " + (xdado = ydado));
