const prompt = require('prompt-sync')();

let number = parseFloat(prompt("Введите число с плавающей точкой: "));
let rounded = Math.round(number);

let result_sum = number + rounded;
console.log(`Исходное число: ${number}`);
console.log(`Округленное число: ${rounded}`);
console.log(`Сумма: ${number} + ${rounded} = ${result_sum}`);