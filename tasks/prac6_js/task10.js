const prompt = require('prompt-sync')();

const text = prompt("Введите строку: ");

const charCount = text.length;
const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
const vowels = "aeiouаеёиоуыэюя";
let vowelCount = 0;

// https://learn.javascript.ru/regular-expressions
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

for (let char of text.toLowerCase()) {
    if (vowels.includes(char)) {
        vowelCount++;
    }
}

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

console.log(`Символов: ${charCount}`);
console.log(`Слов: ${wordCount}`);
console.log(`Гласных: ${vowelCount}`);

