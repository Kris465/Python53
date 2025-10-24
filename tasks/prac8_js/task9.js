const prompt = require('prompt-sync')();

function addTime(timeStr, minutesToAdd) {
    /**
     * Добавляет минуты к времени
     * @param {string} timeStr - время в формате "HH:MM"
     * @param {number} minutesToAdd - количество минут для добавления
     * @returns {string} Новое время в формате "HH:MM" или сообщение об ошибке
     */
    // Проверяем формат времени с помощью регулярного выражения
    const timeRegex = /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$/;
    if (!timeRegex.test(timeStr)) {
        return "Неверный формат времени. Используйте HH:MM";
    }
    
    try {
        // Разбиваем время на часы и минуты
        const [hours, minutes] = timeStr.split(':').map(Number);
        
        // Преобразуем все в минуты от начала суток
        const totalMinutes = hours * 60 + minutes + minutesToAdd;
        
        // Вычисляем новые часы и минуты, учитывая переход через полночь
        const newHours = Math.floor(totalMinutes / 60) % 24;
        const newMinutes = totalMinutes % 60;
        
        // Форматируем в строку с ведущими нулями
        const formatNumber = (num) => num.toString().padStart(2, '0');
        return `${formatNumber(newHours)}:${formatNumber(newMinutes)}`;
        
    } catch (error) {
        return "Ошибка при обработке времени";
    }
}

// Демонстрация работы
console.log("=== Калькулятор времени ===\n");

// Тест 1: Простое добавление минут
console.log("23:45 + 30 минут =", addTime("23:45", 30));
// Объяснение: 23:45 + 30 мин = 00:15 (переход через полночь)

// Тест 2: Добавление больше часа
console.log("10:30 + 90 минут =", addTime("10:30", 90));
// Объяснение: 90 мин = 1 час 30 мин, 10:30 + 1:30 = 12:00

// Тест 3: Добавление нескольких часов
console.log("14:20 + 180 минут =", addTime("14:20", 180));
// Объяснение: 180 мин = 3 часа, 14:20 + 3:00 = 17:20

// Тест 4: Очень большое количество минут (несколько дней)
console.log("22:00 + 1500 минут =", addTime("22:00", 1500));
// Объяснение: 1500 мин = 25 часов = 1 день 1 час

// Тест с ошибкой
console.log("\nТест с ошибкой формата:");
console.log(addTime("25:70", 30));  // Неправильное время

// Интерактивная часть
console.log("\n=== Интерактивный режим ===");
const userTime = prompt("Введите время (HH:MM): ");
const userMinutes = parseInt(prompt("Введите количество минут для добавления: "));

if (!isNaN(userMinutes)) {
    const result = addTime(userTime, userMinutes);
    console.log(`Результат: ${userTime} + ${userMinutes} мин = ${result}`);
} else {
    console.log("❌ Количество минут должно быть числом!");
}