const prompt = require('prompt-sync')();

const numbers = [];

while (true) {
    const num = parseInt(prompt("Введите число (0 для завершения): "));
    if (num === 0) {
        break;
    }
    numbers.push(num);
}

// https://doka.guide/js/array-push/

if (numbers.length > 0) {
    const count = numbers.length;
    const total = numbers.reduce((sum, num) => sum + num, 0);
    const average = total / count;
    const maximum = Math.max(...numbers);
    const minimum = Math.min(...numbers);
    
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/max
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/min

    console.log(`Количество чисел: ${count}`);
    console.log(`Сумма: ${total}`);
    console.log(`Среднее: ${average.toFixed(2)}`);
    console.log(`Максимум: ${maximum}`);
    console.log(`Минимум: ${minimum}`);
} else {
    console.log("Числа не были введены.");
}

// https://learn.javascript.ru/task/why-rounded-down
