const prompt = require('prompt-sync')();

const n = parseInt(prompt("Введите число N: "));

console.log(`Простые числа от 2 до ${n}:`);
for (let num = 2; num <= n; num++) {
    let isPrime = true;
    for (let divisor = 2; divisor <= Math.sqrt(num); divisor++) {
        if (num % divisor === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        process.stdout.write(num + " ");
    }
}
console.log();

// https://purpleschool.ru/knowledge-base/article/object-math