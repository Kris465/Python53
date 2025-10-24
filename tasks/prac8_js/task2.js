const prompt = require('prompt-sync')();

function validateUser(name, age, email) {
    /**
     * Проверяет корректность данных пользователя
     * @param {string} name - имя пользователя
     * @param {number} age - возраст пользователя
     * @param {string} email - email пользователя
     * @returns {Object} Объект с результатами проверки
     */
    const errors = []; // Создаем пустой массив для сбора ошибок
    
    // Проверка имени: не должно быть пустым или состоять только из пробелов
    // trim() удаляет пробелы в начале и конце строки
    if (!name || name.trim() === "") {
        errors.push("Имя не может быть пустым");
    }
    
    // Проверка возраста: должен быть в разумных пределах
    if (!(age >= 0 && age <= 120)) {
        errors.push("Возраст должен быть от 0 до 120");
    }
    
    // Проверка email: должен содержать символ @
    // includes() проверяет наличие подстроки в строке
    if (!email.includes('@')) {
        errors.push("Email должен содержать @");
    }
    
    // Возвращаем объект с результатами
    // errors.length === 0 означает, что массив ошибок пуст - проверка пройдена
    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

// Демонстрация работы
console.log("=== Валидатор данных пользователя ===\n");

// Тест 1: Неправильные данные
console.log("Тест 1 (неправильные данные):");
const result1 = validateUser("", 150, "invalid");
console.log("isValid:", result1.isValid);
console.log("Ошибки:", result1.errors);

console.log("\nТест 2 (правильные данные):");
// Тест 2: Правильные данные
const result2 = validateUser("Иван", 25, "test@mail.com");
console.log("isValid:", result2.isValid);
console.log("Ошибки:", result2.errors);

console.log("\nТест 3 (частично неправильные):");
// Тест 3: Частично неправильные данные
const result3 = validateUser("  ", 25, "test@mail.com");
console.log("isValid:", result3.isValid);
console.log("Ошибки:", result3.errors);