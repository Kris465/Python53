const prompt = require('prompt-sync')();

let string = prompt("Введите слово: ");
console.log(`Первая буква: ${string[0]}`);
console.log(`Последняя буква: ${string[string.length - 1]}`);