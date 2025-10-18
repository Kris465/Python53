const prompt = require('prompt-sync')();

const password = prompt("Введите пароль: ");

const hasLength = password.length >= 8;
const hasDigit = /\d/.test(password);
const hasUpper = /[A-Z]/.test(password);

if (!hasLength) {
    console.log("Ошибка: пароль должен содержать не менее 8 символов");
} else if (!hasDigit) {
    console.log("Ошибка: пароль должен содержать хотя бы одну цифру");
} else if (!hasUpper) {
    console.log("Ошибка: пароль должен содержать хотя бы одну заглавную букву");
} else {
    console.log("Пароль надежный!");
}
