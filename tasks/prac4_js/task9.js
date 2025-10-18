const prompt = require('prompt-sync')();

const a = parseFloat(prompt("Введите сторону A: "));
const b = parseFloat(prompt("Введите сторону B: "));
const c = parseFloat(prompt("Введите сторону C: "));

let triangleType;
// Проверка на существование треугольника
if (a + b <= c || a + c <= b || b + c <= a) {
    triangleType = "не треугольник";
} else if (a === b && b === c) {
    triangleType = "Равносторонний треугольник";
} else if (a === b || a === c || b === c) {
    triangleType = "Равнобедренный треугольник";
} else {
    triangleType = "Разносторонний треугольник";
}

console.log(triangleType);