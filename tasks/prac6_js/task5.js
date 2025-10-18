const prompt = require('prompt-sync')();

const number = prompt("Введите число: ");

let total = 0;
for (let digit of number) {
    total += parseInt(digit);
}

console.log(`Сумма цифр числа ${number}: ${total}`);
