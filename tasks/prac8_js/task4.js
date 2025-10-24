const prompt = require('prompt-sync')();

function convertBase(number, fromBase, toBase) {
    /**
     * Конвертирует число между системами счисления
     * @param {string} number - число как строка (например, "255", "1010")
     * @param {number} fromBase - исходная система счисления (2-36)
     * @param {number} toBase - целевая система счисления (2-36)
     * @returns {string} Число в новой системе счисления как строка
     */
    try {
        // Сначала переводим в десятичную систему с помощью parseInt()
        // parseInt(number, fromBase) преобразует строку в число в указанной системе
        const decimalNum = parseInt(number, fromBase);
        
        // Проверяем, является ли число NaN (Not a Number)
        if (isNaN(decimalNum)) {
            return "Ошибка: некорректное число";
        }
        
        // Если целевая система - десятичная, просто возвращаем результат
        if (toBase === 10) {
            return decimalNum.toString();
        }
        
        // Для перевода в другие системы используем алгоритм деления
        let result = "";
        
        // Строка с символами для систем счисления до 36
        const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        
        let n = decimalNum;
        // Продолжаем делить пока число не станет 0
        while (n > 0) {
            // Остаток от деления - это цифра в новой системе
            const remainder = n % toBase;
            // Берем соответствующий символ из строки digits
            result = digits[remainder] + result;
            // Делим число на основание новой системы
            n = Math.floor(n / toBase);
        }
        
        // Если результат пустой (число было 0), возвращаем "0"
        return result || "0";
        
    } catch (error) {
        return "Ошибка: некорректные данные";
    }
}

// Демонстрация работы
console.log("=== Конвертер систем счисления ===\n");

// Из десятичной в шестнадцатеричную
console.log("255 (10 → 16):", convertBase("255", 10, 16));
// Объяснение: 255 в HEX = FF

// Из двоичной в десятичную
console.log("1010 (2 → 10):", convertBase("1010", 2, 10));
// Объяснение: 1010 в двоичной = 10 в десятичной

// Из десятичной в двоичную
console.log("10 (10 → 2):", convertBase("10", 10, 2));

// Из шестнадцатеричной в десятичную
console.log("FF (16 → 10):", convertBase("FF", 16, 10));

// Тест с ошибкой
console.log("\nТест с ошибкой (некорректное число):");
console.log(convertBase("XYZ", 10, 2));