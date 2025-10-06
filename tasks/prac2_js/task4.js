const prompt = require('prompt-sync')();

let dlina = parseFloat(prompt("Введите длину прямоугольника: "));
let shirina = parseFloat(prompt("Введите ширину прямоугольника: "));
let result = dlina * shirina;

console.log(`Площадь прямоугольника ${result}`);

let rad = parseFloat(prompt("Введите радиус круга: "));
result = Math.PI * rad ** 2;
console.log(`Площадь круга: ${result}`);