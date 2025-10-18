const prompt = require('prompt-sync')();

const start = parseInt(prompt("Введите начало диапазона: "));
const end = parseInt(prompt("Введите конец диапазона: "));

let total = 0;
for (let i = start; i <= end; i++) {
    total += i;
}

console.log(`Сумма чисел от ${start} до ${end}: ${total}`);