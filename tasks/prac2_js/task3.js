const prompt = require('prompt-sync')();

let num1 = prompt("Введите первое число: ");
let num2 = prompt("Введите второе число: ");

let concat_result = num1 + num2;

let sum_result = parseInt(num1) + parseInt(num2);

console.log("Результат конкатенации: ", concat_result);
console.log("Результат сложения: ", sum_result);