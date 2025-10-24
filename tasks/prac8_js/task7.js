const prompt = require('prompt-sync')();

function cipher(text, key) {
    /**
     * Шифрует текст шифром Цезаря
     * @param {string} text - текст для шифрования
     * @param {number} key - ключ шифрования (сдвиг)
     * @returns {string} Зашифрованный текст
     */
    let result = "";
    
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        
        if (/[a-zA-Z]/.test(char)) {
            // Определяем базовый код для алфавита
            // charCodeAt() возвращает числовой код символа
            const base = char === char.toUpperCase() ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
            
            // Сдвигаем символ и обеспечиваем циклический сдвиг с помощью %
            // % 26 гарантирует, что результат останется в пределах алфавита
            const shifted = (char.charCodeAt(0) - base + key) % 26;
            // Обрабатываем отрицательные значения для дешифровки
            const finalShift = shifted >= 0 ? shifted : shifted + 26;
            result += String.fromCharCode(finalShift + base);
        } else {
            // Не-буквенные символы остаются без изменений
            result += char;
        }
    }
    
    return result;
}

function decipher(text, key) {
    /**
     * Дешифрует текст шифром Цезаря
     * @param {string} text - зашифрованный текст
     * @param {number} key - ключ шифрования (сдвиг)
     * @returns {string} Расшифрованный текст
     */
    // Дешифровка - это шифрование с отрицательным ключом
    return cipher(text, -key);
}

// Демонстрация работы
console.log("=== Шифратор/дешифратор Цезаря ===\n");

// Тестовый текст и ключ
const originalText = "Hello World! ABCxyz";
const key = 3;

console.log("Исходный текст:", originalText);
console.log("Ключ:", key);

// Шифруем
const encrypted = cipher(originalText, key);
console.log("Зашифрованный: ", encrypted);

// Дешифруем
const decrypted = decipher(encrypted, key);
console.log("Расшифрованный:", decrypted);

// Проверяем, что получился исходный текст
console.log("\nСовпадение с исходным:", originalText === decrypted);

// Интерактивная часть
console.log("\n=== Интерактивный режим ===");
const userText = prompt("Введите текст для шифрования: ");
const userKey = parseInt(prompt("Введите ключ (число): "));

if (!isNaN(userKey)) {
    const userEncrypted = cipher(userText, userKey);
    console.log("Зашифрованный текст:", userEncrypted);
    
    const userDecrypted = decipher(userEncrypted, userKey);
    console.log("Расшифрованный текст:", userDecrypted);
} else {
    console.log("❌ Ключ должен быть числом!");
}