const prompt = require('prompt-sync')();

function generateTestData(dataType, count) {
    /**
     * Генерирует тестовые данные указанного типа
     * @param {string} dataType - тип данных ('number', 'string', 'boolean')
     * @param {number} count - количество элементов для генерации
     * @returns {Array|string} Массив сгенерированных данных или сообщение об ошибке
     */
    const result = [];
    
    for (let i = 0; i < count; i++) {
        if (dataType === 'number') {
            // Генерируем случайное число: 70% целых, 30% дробных
            if (Math.random() < 0.7) {  // Math.random() дает число от 0 до 1
                // Целое число от -100 до 100
                result.push(Math.floor(Math.random() * 201) - 100);
            } else {
                // Дробное число от -100.0 до 100.0 с 2 знаками после запятой
                result.push(Number((Math.random() * 200 - 100).toFixed(2)));
            }
        } else if (dataType === 'string') {
            // Генерируем случайную строку
            const length = Math.floor(Math.random() * 5) + 3; // Длина от 3 до 7 символов
            let randomString = '';
            const characters = 'abcdefghijklmnopqrstuvwxyz';
            
            for (let j = 0; j < length; j++) {
                randomString += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            result.push(randomString);
        } else if (dataType === 'boolean') {
            // Случайное булево значение
            result.push(Math.random() < 0.5);
        } else {
            return `Неизвестный тип данных: ${dataType}`;
        }
    }
    
    return result;
}

// Демонстрация работы
console.log("=== Генератор тестовых данных ===\n");

// Генерация чисел
console.log("5 случайных чисел:");
const numbers = generateTestData('number', 5);
console.log(numbers);

// Генерация строк
console.log("\n5 случайных строк:");
const strings = generateTestData('string', 5);
console.log(strings);

// Генерация булевых значений
console.log("\n10 случайных булевых значений:");
const booleans = generateTestData('boolean', 10);
console.log(booleans);

// Тест с ошибкой
console.log("\nТест с неизвестным типом:");
const errorResult = generateTestData('unknown', 3);
console.log(errorResult);

// Демонстрация для разных количеств
console.log("\nРазные количества элементов:");
[1, 3, 5].forEach(count => {
    const data = generateTestData('number', count);
    console.log(`${count} элементов: ${data}`);
});

// Интерактивная часть
console.log("\n=== Интерактивный режим ===");
const userDataType = prompt("Введите тип данных (number/string/boolean): ");
const userCount = parseInt(prompt("Введите количество элементов: "));

if (!isNaN(userCount) && userCount > 0) {
    const userData = generateTestData(userDataType, userCount);
    console.log(`\nСгенерированные данные (${userDataType}, ${userCount} элементов):`);
    console.log(userData);
} else {
    console.log("❌ Количество должно быть положительным числом!");
}