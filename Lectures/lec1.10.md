### **Конспект лекции: Коллекции в JavaScript — Массивы**

**Тема:** 1.10 Коллекции в JavaScript: Массивы  
**Цель:** Освоить создание и работу с массивами в JavaScript: основные методы для добавления, удаления элементов и управление длиной массива.

---

## **Введение в массивы**

**Массив** — это упорядоченная коллекция элементов произвольных типов.  
**Аналогия из жизни:** Список дел, корзина покупок, плейлист песен.

**Зачем нужны массивы?**
- Хранение набора данных в одной переменной
- Упорядоченное хранение элементов (сохраняется порядок добавления)
- Эффективный доступ к элементам по индексу
- Богатый набор методов для работы с данными

**Особенности массивов в JavaScript:**
- Динамический размер (можно добавлять/удалять элементы)
- Могут содержать элементы разных типов
- Являются объектами со специальными методами
- Индексация начинается с 0

---

## **Создание массивов**

### **Способы создания массивов**

```javascript
// 1. Литерал массива (рекомендуемый способ)
const emptyArray = [];
const fruits = ["яблоко", "банан", "апельсин"];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "текст", true, 3.14, null, undefined];

// 2. Конструктор Array (менее популярен)
const emptyArray2 = new Array();
const numbersArray = new Array(1, 2, 3, 4, 5);
const fixedLength = new Array(3); // массив длины 3 с пустыми элементами

console.log(fruits);  // ["яблоко", "банан", "апельсин"]
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(fixedLength); // [empty × 3]
```

### **Особенности массивов**

```javascript
// Массивы могут содержать любые типы данных
const person = ["Анна", 25, true, { city: "Москва" }, [1, 2, 3]];
console.log(person); // ["Анна", 25, true, {…}, Array(3)]

// Дублирование элементов разрешено
const grades = [5, 4, 5, 3, 5, 4];
console.log(grades); // [5, 4, 5, 3, 5, 4]

// Доступ к элементам по индексу
console.log(fruits[0]); // "яблоко"
console.log(fruits[2]); // "апельсин"
console.log(fruits[-1]); // undefined (отрицательные индексы не работают)
```

---

## **Длина массива — свойство `length`**

### **Работа с длиной массива**

```javascript
const colors = ["красный", "зеленый", "синий"];

// Получение длины массива
console.log(colors.length); // 3

// Изменение длины массива
colors.length = 2;
console.log(colors); // ["красный", "зеленый"] - элементы обрезаны!

colors.length = 5;
console.log(colors); // ["красный", "зеленый", empty × 3] - добавлены пустые места

// Использование длины для доступа к последнему элементу
const lastColor = colors[colors.length - 1];
console.log(lastColor); // undefined (так как массив был расширен)
```

### **Практическое использование length**

```javascript
const tasks = ["задача 1", "задача 2", "задача 3"];

// Проверка на пустоту массива
if (tasks.length === 0) {
    console.log("Список задач пуст");
} else {
    console.log(`Количество задач: ${tasks.length}`);
}

// Перебор массива с использованием length
for (let i = 0; i < tasks.length; i++) {
    console.log(`${i + 1}. ${tasks[i]}`);
}
```

---

## **Методы для работы с концом массива**

### **`push()` — добавление элементов в конец**

```javascript
const shoppingList = ["хлеб", "молоко"];

// Добавление одного элемента
shoppingList.push("яйца");
console.log(shoppingList); // ["хлеб", "молоко", "яйца"]

// Добавление нескольких элементов
shoppingList.push("сыр", "масло");
console.log(shoppingList); // ["хлеб", "молоко", "яйца", "сыр", "масло"]

// push() возвращает новую длину массива
const newLength = shoppingList.push("кофе");
console.log(newLength); // 6
console.log(shoppingList); // ["хлеб", "молоко", "яйца", "сыр", "масло", "кофе"]
```

### **`pop()` — удаление элемента с конца**

```javascript
const stack = ["документ1", "документ2", "документ3"];

// Удаление последнего элемента
const lastItem = stack.pop();
console.log(lastItem); // "документ3"
console.log(stack); // ["документ1", "документ2"]

// Последовательное извлечение
const nextItem = stack.pop();
console.log(nextItem); // "документ2"
console.log(stack); // ["документ1"]

// pop() из пустого массива
const empty = [];
const result = empty.pop();
console.log(result); // undefined
console.log(empty); // []
```

---

## **Методы для работы с началом массива**

### **`unshift()` — добавление элементов в начало**

```javascript
const queue = ["клиент2", "клиент3"];

// Добавление одного элемента в начало
queue.unshift("клиент1");
console.log(queue); // ["клиент1", "клиент2", "клиент3"]

// Добавление нескольких элементов
queue.unshift("VIP-клиент", "привилегированный");
console.log(queue); // ["VIP-клиент", "привилегированный", "клиент1", "клиент2", "клиент3"]

// unshift() возвращает новую длину массива
const queueLength = queue.unshift("новый VIP");
console.log(queueLength); // 6
```

### **`shift()` — удаление элемента из начала**

```javascript
const waitingLine = ["Анна", "Борис", "Виктор", "Галина"];

// Удаление первого элемента
const firstPerson = waitingLine.shift();
console.log(firstPerson); // "Анна"
console.log(waitingLine); // ["Борис", "Виктор", "Галина"]

// Последовательная обработка очереди
const nextPerson = waitingLine.shift();
console.log(nextPerson); // "Борис"
console.log(waitingLine); // ["Виктор", "Галина"]

// Эмуляция очереди обслуживания
while (waitingLine.length > 0) {
    const current = waitingLine.shift();
    console.log(`Обслуживается: ${current}`);
}
console.log(waitingLine); // []
```

---

## **Сравнение методов**

### **Визуализация работы методов**

```
Массив: [A, B, C]
Индексы:  0  1  2

push(D)    → [A, B, C, D]     (+ в конец)
pop()      → [A, B]           (- с конца)

unshift(Z) → [Z, A, B, C]     (+ в начало)  
shift()    → [B, C]           (- с начала)
```

### **Сводная таблица методов**

| Метод | Действие | Возвращает | Изменяет массив |
|-------|----------|-------------|-----------------|
| `push()` | Добавляет элемент(ы) в конец | Новую длину массива | ✅ Да |
| `pop()` | Удаляет элемент с конца | Удаленный элемент | ✅ Да |
| `unshift()` | Добавляет элемент(ы) в начало | Новую длину массива | ✅ Да |
| `shift()` | Удаляет элемент из начала | Удаленный элемент | ✅ Да |
| `length` | Получает/устанавливает длину | Число | ✅ При изменении |

---

## **Практические примеры**

### **Пример 1: Управление списком задач**

```javascript
// Симуляция менеджера задач
const tasks = [];

// Добавление задач
tasks.push("Изучить JavaScript");
tasks.push("Сделать проект");
tasks.unshift("Купить продукты"); // срочная задача

console.log("Текущие задачи:", tasks);

// Выполнение задач (FIFO - First In, First Out)
const completedTask = tasks.shift();
console.log(`Выполнено: ${completedTask}`);
console.log("Оставшиеся задачи:", tasks);

// Добавление срочной задачи
tasks.unshift("Починить компьютер");
console.log("После добавления срочной:", tasks);
```

### **Пример 2: Стек браузера (история навигации)**

```javascript
// Симуляция истории браузера
const browserHistory = [];

// Пользователь посещает страницы
browserHistory.push("https://example.com");
browserHistory.push("https://example.com/products");
browserHistory.push("https://example.com/product/123");

console.log("Текущая история:", browserHistory);
console.log("Текущая страница:", browserHistory[browserHistory.length - 1]);

// Пользователь нажимает "Назад"
const previousPage = browserHistory.pop();
console.log(`Вернулись с: ${previousPage}`);
console.log("Теперь текущая:", browserHistory[browserHistory.length - 1]);

// Добавление новой страницы
browserHistory.push("https://example.com/about");
console.log("Обновленная история:", browserHistory);
```

### **Пример 3: Очередь печати документов**

```javascript
class PrintQueue {
    constructor() {
        this.queue = [];
    }
    
    addDocument(doc) {
        this.queue.push(doc);
        console.log(`Документ "${doc}" добавлен в очередь`);
    }
    
    printNext() {
        if (this.queue.length === 0) {
            console.log("Очередь печати пуста");
            return null;
        }
        
        const document = this.queue.shift();
        console.log(`Печатается: ${document}`);
        console.log(`В очереди осталось: ${this.queue.length} документов`);
        return document;
    }
    
    showQueue() {
        console.log("Текущая очередь:", this.queue);
    }
}

// Использование
const printer = new PrintQueue();
printer.addDocument("Отчет.pdf");
printer.addDocument("Презентация.pptx");
printer.addDocument("Договор.doc");

printer.showQueue();
printer.printNext();
printer.printNext();
printer.showQueue();
```

### **Пример 4: Работа с длиной массива**

```javascript
// Управление массивом через свойство length
const data = [1, 2, 3, 4, 5];

// Обрезка массива
console.log("Исходный массив:", data); // [1, 2, 3, 4, 5]
data.length = 3;
console.log("После обрезки:", data); // [1, 2, 3]

// Очистка массива
data.length = 0;
console.log("После очистки:", data); // []

// Заполнение массива
const newArray = [];
for (let i = 0; i < 5; i++) {
    newArray.push(`Элемент ${i + 1}`);
}
console.log("Заполненный массив:", newArray);
console.log("Длина массива:", newArray.length);
```

---

## **Распространенные ошибки**

### **1. Путаница между методами**

```javascript
const items = ["A", "B", "C"];

// НЕПРАВИЛЬНОЕ понимание:
// items.shift("X"); // Не добавляет, а удаляет!
// items.unshift();  // Без аргументов - просто возвращает длину

// ПРАВИЛЬНО:
items.unshift("X"); // Добавляет в начало
console.log(items); // ["X", "A", "B", "C"]

const first = items.shift(); // Удаляет из начала
console.log(first); // "X"
```

### **2. Использование неправильного индекса**

```javascript
const arr = [10, 20, 30];

// НЕПРАВИЛЬНО:
// console.log(arr[arr.length]); // undefined (выход за границы)

// ПРАВИЛЬНО:
console.log(arr[arr.length - 1]); // 30 (последний элемент)
```

### **3. Изменение const массива**

```javascript
const fixedArray = [1, 2, 3];

// ЭТО РАБОТАЕТ (можно изменять содержимое):
fixedArray.push(4); // ✅
fixedArray.pop();   // ✅

// ЭТО НЕ РАБОТАЕТ (нельзя переопределить):
// fixedArray = [4, 5, 6]; // ❌ TypeError
```

### **4. Неправильная работа с пустым массивом**

```javascript
const empty = [];

// БЕЗОПАСНО (проверка длины):
if (empty.length > 0) {
    const item = empty.pop();
    console.log(item);
} else {
    console.log("Массив пуст"); // Выполнится это
}

// ОПАСНО (без проверки):
// const item = empty.pop(); // undefined
// console.log(item.toUpperCase()); // TypeError
```

---

## **Итоги урока**

### **Ключевые моменты:**
- **Массивы** — упорядоченные коллекции элементов
- **`length`** — свойство для получения/установки длины массива
- **`push()` / `pop()`** — работа с концом массива (стек)
- **`unshift()` / `shift()`** — работа с началом массива (очередь)
- **Индексация** начинается с 0, последний элемент — `array[array.length - 1]`

### **Практические рекомендации:**
1. Используйте **`push()` / `pop()`** для реализации стека (LIFO)
2. Применяйте **`push()` / `shift()`** для реализации очереди (FIFO)  
3. Используйте **`unshift()`** для добавления приоритетных элементов
4. Всегда проверяйте **`length`** перед извлечением элементов
5. Помните, что методы изменяют исходный массив
6. Используйте литерал `[]` для создания массивов

### **Когда что использовать:**
- **`push()`** — добавление в конец (основной способ)
- **`pop()`** — извлечение с конца (стек, история)
- **`unshift()`** — добавление в начало (приоритетные задачи)
- **`shift()`** — извлечение из начала (очередь, обработка по порядку)

**Совет:** Практикуйтесь с комбинациями этих методов — они являются фундаментом для работы с коллекциями данных в JavaScript!