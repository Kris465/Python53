const prompt = require('prompt-sync')();

let a = parseInt(prompt("Введите число а: "));
let b = parseInt(prompt("Введите число b: "));

let temp = a;
a = b;
b = temp;

console.log(`a = ${a}`);
console.log(`b = ${b}`);
