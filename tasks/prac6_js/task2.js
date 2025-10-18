const prompt = require('prompt-sync')();

const number = parseInt(prompt("Введите число: "));

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    const result = number * i;
    console.log(`${number} × ${i} = ${result}`);
}