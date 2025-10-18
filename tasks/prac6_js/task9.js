const prompt = require('prompt-sync')();

const k = parseInt(prompt("Введите количество чисел K: "));

if (k <= 0) {
    console.log("Количество должно быть положительным");
} else {
    const fib = [0, 1];
    
    if (k === 1) {
        console.log(0);
    } else {
        for (let i = 2; i < k; i++) {
            const nextFib = fib[i-1] + fib[i-2];
            fib.push(nextFib);
        }
        
        console.log("Последовательность Фибоначчи:", fib.slice(0, k).join(", "));
    }
}

// https://learn.javascript.ru/array-methods
// https://doka.guide/js/array-join/