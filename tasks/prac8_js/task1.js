const prompt = require('prompt-sync')();

// Глобальная переменная для хранения истории операций
let calculationHistory = [];

function calculate(a, b, operator) {
    /**
     * Выполняет математическую операцию и сохраняет в историю
     * @param {number} a - первое число
     * @param {number} b - второе число  
     * @param {string} operator - оператор (+, -, *, /)
     * @returns {number|string} Результат вычисления или сообщение об ошибке
     */
    let result;
    
    // Проверяем оператор и выполняем соответствующее действие
    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            // Проверяем деление на ноль
            if (b === 0) {
                return "Ошибка: деление на ноль";
            }
            result = a / b;
            break;
        default:
            return "Неизвестная операция";
    }
    
    // Формируем строку с описанием операции для истории
    const operationStr = `${a} ${operator} ${b} = ${result}`;
    
    // Добавляем операцию в начало массива (новые операции сверху)
    calculationHistory.unshift(operationStr);
    
    // Ограничиваем историю 3 последними операциями
    if (calculationHistory.length > 3) {
        calculationHistory.pop(); // Удаляем самую старую операцию
    }
    
    return result;
}

function showHistory() {
    /** Показывает последние 3 операции из истории */
    if (calculationHistory.length === 0) {
        console.log("История пуста");
        return;
    }
    
    console.log("Последние операции:");
    // forEach с индексом показывает номер каждой операции
    calculationHistory.forEach((operation, index) => {
        console.log(`${index + 1}. ${operation}`);
    });
}

// Демонстрация работы
console.log("=== Умный калькулятор ===\n");

// Тестовые вычисления
console.log("5 + 3 =", calculate(5, 3, '+'));
console.log("10 / 2 =", calculate(10, 2, '/'));
console.log("7 * 4 =", calculate(7, 4, '*'));

// Показываем историю
showHistory();

// Еще одно вычисление - должно вытеснить самое старое из истории
console.log("\n8 - 2 =", calculate(8, 2, '-'));
showHistory();