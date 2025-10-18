const prompt = require('prompt-sync')();

const number = parseInt(prompt("Введите целое число: "));

let sign, parity;

// Проверка на положительное/отрицательное/ноль
if (number > 0) {
    sign = "Положительное";
} else if (number < 0) {
    sign = "Отрицательное";
} else {
    sign = "Ноль";
}

// Проверка на четность
if (number % 2 === 0) {
    parity = "четное";
} else {
    parity = "нечетное";
}

if (number === 0) {
    console.log("Ноль");
} else {
    console.log(`${sign}, ${parity}`);
}

// https://learn.javascript.ru/comparison