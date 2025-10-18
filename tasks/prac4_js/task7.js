const prompt = require('prompt-sync')();

const year = parseInt(prompt("Введите год: "));

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`${year} - високосный год`);
} else {
    console.log(`${year} - не високосный год`);
}