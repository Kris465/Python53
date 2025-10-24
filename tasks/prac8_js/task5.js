const prompt = require('prompt-sync')();

function analyzeText(text) {
    /**
     * Анализирует текст и возвращает статистику
     * @param {string} text - строка для анализа
     * @returns {Object} Объект со статистикой текста
     */
    // Убираем лишние пробелы в начале и конце
    text = text.trim();
    
    // Разбиваем текст на предложения по точкам, восклицательным и вопросительным знакам
    // filter(Boolean) убирает пустые строки из результата
    const sentences = text.split(/[.!?]+/).filter(sentence => 
        sentence.trim().length > 0
    ).map(sentence => sentence.trim());
    
    // Разбиваем текст на слова по пробелам и знакам препинания
    const words = text.split(/\s+/).filter(word => word.length > 0);
    
    // Находим самую длинную и короткую фразу
    // reduce() находит элементы с максимальной/минимальной длиной
    const longestSentence = sentences.reduce((longest, current) => 
        current.length > longest.length ? current : longest, ""
    );
    
    const shortestSentence = sentences.reduce((shortest, current) => 
        current.length < shortest.length || shortest === "" ? current : shortest, ""
    );
    
    // Возвращаем объект со всей статистикой
    return {
        symbols: text.length,           // Общее количество символов
        words: words.length,            // Количество слов
        sentences: sentences.length,    // Количество предложений
        longest: longestSentence,       // Самое длинное предложение
        shortest: shortestSentence      // Самое короткое предложение
    };
}

// Демонстрация работы
console.log("=== Анализатор текста ===\n");

const testText = "Привет! Как дела? Все хорошо. Это тестовый текст для проверки работы анализатора.";

console.log("Анализируемый текст:");
console.log(testText);
console.log();

const stats = analyzeText(testText);

console.log("Результаты анализа:");
console.log("Символов:", stats.symbols);
console.log("Слов:", stats.words);
console.log("Предложений:", stats.sentences);
console.log("Самое длинное предложение:", `'${stats.longest}'`);
console.log("Самое короткое предложение:", `'${stats.shortest}'`);

// Дополнительный тест с пустым текстом
console.log("\nТест с пустым текстом:");
const emptyStats = analyzeText("");
console.log(emptyStats);