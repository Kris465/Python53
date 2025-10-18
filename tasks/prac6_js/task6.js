const prompt = require('prompt-sync')();

const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

console.log("Загадано число от 1 до 100. Попробуйте угадать!");

while (true) {
    const guess = parseInt(prompt("Ваша попытка: "));
    attempts++;
    
    if (guess < secretNumber) {
        console.log("Больше!");
    } else if (guess > secretNumber) {
        console.log("Меньше!");
    } else {
        console.log(`Поздравляем! Вы угадали число ${secretNumber} за ${attempts} попыток.`);
        break;
    }
}