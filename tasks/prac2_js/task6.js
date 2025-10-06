const prompt = require('prompt-sync')();

let symbol = prompt("Введите одну строчную английскую букву: ");
let new_code = ((symbol - 'a'.charCodeAt(0) + 3) % 26) + 'a'.charCodeAt(0);
let new_symbol = String.fromCharCode(new_code);
console.log(`'${symbol}' -> '${new_symbol}'`);