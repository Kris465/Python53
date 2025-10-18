const prompt = require('prompt-sync')();

console.log("\nЗадача 8: Конвертер температур");
const temp = parseFloat(prompt("Введите температуру: "));
const scale = prompt("Введите шкалу (C/F): ").toUpperCase();

if (scale === "C") {
    const fahrenheit = temp * 9/5 + 32;
    console.log(`${temp}°C = ${fahrenheit.toFixed(1)}°F`);
} else if (scale === "F") {
    const celsius = (temp - 32) * 5/9;
    console.log(`${temp}°F = ${celsius.toFixed(1)}°C`);
} else {
    console.log("Неверная шкала. Используйте C или F");
}