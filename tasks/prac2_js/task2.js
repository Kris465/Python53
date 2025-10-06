const prompt = require('prompt-sync')();

let minut = parseInt(prompt("Введите количество минут: "));
let chasov = Math.floor(minut / 60);
let ostav_minut = minut % 60;

console.log(`${minut} минут = ${chasov} часов и ${ostav_minut} минут`);