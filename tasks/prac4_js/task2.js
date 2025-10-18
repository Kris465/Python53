const prompt = require('prompt-sync')();

const score = parseInt(prompt("Введите балл (0-100): "));

let grade;
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

console.log(`Оценка: ${grade}`);
