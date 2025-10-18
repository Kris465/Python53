const prompt = require('prompt-sync')();

const month = parseInt(prompt("Введите номер месяца (1-12): "));

let season;
if (month === 12 || month === 1 || month === 2) {
    season = "Зима";
} else if (month >= 3 && month <= 5) {
    season = "Весна";
} else if (month >= 6 && month <= 8) {
    season = "Лето";
} else if (month >= 9 && month <= 11) {
    season = "Осень";
} else {
    season = "Неверный номер месяца";
}

console.log(season);