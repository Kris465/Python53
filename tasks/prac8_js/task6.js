const prompt = require('prompt-sync')();

function startGame(minNum, maxNum, attempts) {
    /**
     * Запускает игру 'Угадай число' с заданными настройками
     * @param {number} minNum - минимальное число диапазона
     * @param {number} maxNum - максимальное число диапазона  
     * @param {number} attempts - количество попыток
     * @returns {boolean} true если пользователь угадал, false если проиграл
     */
    // Генерируем случайное число в заданном диапазоне
    // Math.random() дает число от 0 до 1, преобразуем в нужный диапазон
    const secretNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    
    console.log(`Угадайте число от ${minNum} до ${maxNum}.`);
    console.log(`У вас ${attempts} попыток.\n`);
    
    // Цикл по количеству попыток
    for (let attempt = 0; attempt < attempts; attempt++) {
        try {
            // Запрашиваем предположение пользователя
            const input = prompt(`Попытка ${attempt + 1}: `);
            const guess = parseInt(input);
            
            // Проверяем, что введено число
            if (isNaN(guess)) {
                console.log("❌ Пожалуйста, введите целое число");
                continue; // Переходим к следующей итерации
            }
            
            // Проверяем предположение
            if (guess === secretNumber) {
                console.log("🎉 Поздравляем! Вы угадали!");
                return true;
            } else if (guess < secretNumber) {
                console.log("🔺 Загаданное число БОЛЬШЕ");
            } else {
                console.log("🔻 Загаданное число МЕНЬШЕ");
            }
                
        } catch (error) {
            // Обрабатываем возможные ошибки ввода
            console.log("❌ Ошибка ввода, попробуйте снова");
        }
    }
    
    // Если цикл завершился - пользователь исчерпал все попытки
    console.log(`\n💔 Вы проиграли! Загаданное число было: ${secretNumber}`);
    return false;
}

// Демонстрация работы
console.log("=== Игра 'Угадай число' ===\n");

// Запускаем игру с настройками: от 1 до 50, 5 попыток
// Раскомментируйте следующую строку для интерактивной игры
// startGame(1, 50, 5);

// Для автоматического тестирования (без ввода пользователя):
console.log("Для игры раскомментируйте вызов startGame() в коде");
console.log("Пример работы с заранее заданными числами:");

// Демонстрация логики без реальной игры
const testSecret = 42;
const testGuess = 30;
console.log(`\nДемо: загадано ${testSecret}, пользователь ввел ${testGuess}`);
if (testGuess < testSecret) {
    console.log("🔺 Загаданное число БОЛЬШЕ");
} else if (testGuess > testSecret) {
    console.log("🔻 Загаданное число МЕНЬШЕ");
} else {
    console.log("🎉 Поздравляем! Вы угадали!");
}