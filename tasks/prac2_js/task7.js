const prompt = require('prompt-sync')();

let num1 = parseInt(prompt("Введите первое число: "));
let num2 = parseInt(prompt("Введите второе число: "));

let is_even = num1 % 2 === 0;
let is_positive = num2 > 0;

console.log(`Первое число четное: ${is_even}`);
console.log(`Второе число положительное: ${is_positive}`);