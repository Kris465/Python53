const prompt = require('prompt-sync')();

function generateSequence(seqType, first, difference, count) {
    /**
     * Генерирует арифметическую или геометрическую прогрессию
     * @param {string} seqType - тип последовательности ('арифметическая' или 'геометрическая')
     * @param {number} first - первый элемент последовательности
     * @param {number} difference - разность (для арифметической) или знаменатель (для геометрической)
     * @param {number} count - количество элементов
     * @returns {Array|string} Массив элементов последовательности или сообщение об ошибке
     */
    // Начинаем с первого элемента
    const sequence = [first];
    
    if (seqType === 'арифметическая') {
        // Арифметическая прогрессия: каждый следующий элемент = предыдущий + разность
        for (let i = 1; i < count; i++) {
            const nextElement = first + i * difference;
            sequence.push(nextElement);
        }
    } else if (seqType === 'геометрическая') {
        // Геометрическая прогрессия: каждый следующий элемент = предыдущий * знаменатель
        for (let i = 1; i < count; i++) {
            const nextElement = first * Math.pow(difference, i);
            sequence.push(nextElement);
        }
    } else {
        return "Неизвестный тип последовательности";
    }
    
    return sequence;
}

// Демонстрация работы
console.log("=== Генератор прогрессий ===\n");

// Арифметическая прогрессия: начинаем с 2, разность 3, 5 элементов
console.log("Арифметическая прогрессия (2, 3, 5):");
const arithmetic = generateSequence('арифметическая', 2, 3, 5);
console.log(arithmetic);
// Объяснение: 2, 2+3=5, 2+6=8, 2+9=11, 2+12=14

console.log("\nГеометрическая прогрессия (2, 3, 5):");
// Геометрическая прогрессия: начинаем с 2, знаменатель 3, 5 элементов
const geometric = generateSequence('геометрическая', 2, 3, 5);
console.log(geometric);
// Объяснение: 2, 2×3=6, 2×9=18, 2×27=54, 2×81=162

console.log("\nПроверка на ошибку:");
// Тест с неправильным типом
const errorTest = generateSequence('неправильная', 1, 1, 5);
console.log(errorTest);