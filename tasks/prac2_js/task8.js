const prompt = require('prompt-sync')();

let zena = parseFloat(prompt("Введите исходную цену: "));
let skidka = parseFloat(prompt("Введите процент скидки: "));

let novaya_zena = zena * (1 - skidka / 100);
console.log(`Цена после скидки: ${novaya_zena}`);

samaya_novaya_zena = novaya_zena - 10;
console.log(`Цена после купона: ${samaya_novaya_zena}`);