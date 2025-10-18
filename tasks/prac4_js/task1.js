const prompt = require('prompt-sync')();

console.log("Задача 1: Проверка возраста");
const age = parseInt(prompt("Введите возраст: "));

if (age < 18) {
    console.log("Ребенок");
} else if (age <= 65) {
    console.log("Взрослый");
} else {
    console.log("Пенсионер");
}
