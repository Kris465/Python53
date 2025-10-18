const prompt = require('prompt-sync')();

const num1 = parseFloat(prompt("Введите первое число: "));
const num2 = parseFloat(prompt("Введите второе число: "));
const operation = prompt("Введите операцию (+, -, *, /): ");

let result;
if (operation === "+") {
    result = num1 + num2;
    console.log(`Результат: ${result}`);
} else if (operation === "-") {
    result = num1 - num2;
    console.log(`Результат: ${result}`);
} else if (operation === "*") {
    result = num1 * num2;
    console.log(`Результат: ${result}`);
} else if (operation === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
        console.log(`Результат: ${result}`);
    } else {
        console.log("Ошибка: деление на ноль!");
    }
} else {
    console.log("Неизвестная операция");
}