### **Конспект лекции: Функции в JavaScript (`function`, `=>`)**

**Тема:** 1.8 Функции в JavaScript (`function`, `=>`).
**Цель:** Освоить различные способы объявления функций в JavaScript: Function Declaration, Function Expression и стрелочные функции. Понимать их различия и области применения.

---

## **Введение в функции JavaScript**

**Функция** в JavaScript — это объект, который содержит последовательность инструкций для выполнения определенной задачи. Функции являются фундаментальными строительными блоками языка.

**Зачем нужны функции?**
*   **Повторное использование кода:** Один раз объявил — многократно использовал
*   **Структурирование:** Разбиение сложной программы на логические блоки
*   **Изоляция:** Локальная область видимости предотвращает конфликты имен
*   **Абстракция:** Сокрытие сложной реализации за простым интерфейсом

**Особенности JavaScript:**
*   Функции являются **объектами первого класса** (можно присваивать переменным, передавать как аргументы)
*   Несколько синтаксисов для объявления функций
* **Поднятие (hoisting)** по-разному работает для разных типов функций

---

## **Function Declaration (Объявление функции)**

### **Синтаксис**

```javascript
function имяФункции(параметр1, параметр2) {
    // Тело функции
    return результат;
}
```

### **Особенности Function Declaration**

1. **Поднятие (Hoisting):** Функция доступна до ее объявления в коде
2. **Именованная:** Имеет имя, что полезно для отладки и рекурсии
3. **Классический синтаксис:** Самый читаемый и понятный

### **Примеры**

**Пример 1: Базовая функция**
```javascript
// Function Declaration
function greet(name) {
    return `Привет, ${name}!`;
}

// Вызов функции
console.log(greet("Дипсик")); // Привет, Дипсик!
console.log(greet("Анна"));   // Привет, Анна!
```

**Пример 2: Поднятие (Hoisting)**
```javascript
// Функция вызывается ДО ее объявления - РАБОТАЕТ!
console.log(calculateSum(5, 3)); // 8

function calculateSum(a, b) {
    return a + b;
}

// В отличие от переменных, объявленных через let/const:
// console.log(x); // Ошибка!
// let x = 10;
```

**Пример 3: Функция с логикой**
```javascript
function checkAge(age) {
    if (age >= 18) {
        return "Доступ разрешен";
    } else {
        return "Доступ запрещен";
    }
}

console.log(checkAge(20)); // Доступ разрешен
console.log(checkAge(15)); // Доступ запрещен
```

---

## **Function Expression (Функциональное выражение)**

### **Синтаксис**

```javascript
const имяПеременной = function(параметры) {
    // Тело функции
    return результат;
};
```

### **Особенности Function Expression**

1. **Нет поднятия:** Нельзя вызвать до объявления
2. **Анонимная:** Может не иметь имени (но рекомендуется давать имя для отладки)
3. **Гибкость:** Можно присваивать, передавать как аргумент

### **Примеры**

**Пример 1: Базовая Function Expression**
```javascript
// Function Expression
const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(4, 5)); // 20

// Попытка вызова до объявления:
// console.log(multiply(2, 3)); // Ошибка! multiply is not defined
```

**Пример 2: Именованное функциональное выражение**
```javascript
const factorial = function calcFactorial(n) {
    if (n <= 1) return 1;
    return n * calcFactorial(n - 1); // рекурсия через имя функции
};

console.log(factorial(5)); // 120
// console.log(calcFactorial(5)); // Ошибка! calcFactorial не доступна снаружи
```

**Пример 3: Передача функции как аргумента**
```javascript
// Функция, принимающая другую функцию как аргумент
function processNumbers(a, b, operation) {
    return operation(a, b);
}

// Function Expression как аргумент
const result1 = processNumbers(10, 5, function(x, y) {
    return x + y;
});
console.log(result1); // 15

const result2 = processNumbers(10, 5, function(x, y) {
    return x * y;
});
console.log(result2); // 50
```

---

## **Стрелочные функции (Arrow Functions)**

### **Синтаксис**

```javascript
// Полная форма
const имяФункции = (параметры) => {
    // Тело функции
    return результат;
};

// Сокращенные формы
const имяФункции = параметр => выражение;        // один параметр
const имяФункции = (парам1, парам2) => выражение; // несколько параметров
```

### **Особенности стрелочных функций**

1. **Короткий синтаксис:** Более компактная запись
2. **Нет своего `this`:** `this` берется из окружающего контекста
3. **Нет `arguments`:** Не имеет собственного объекта arguments
4. **Не могут быть конструкторами:** Нельзя использовать с `new`

### **Примеры**

**Пример 1: Базовые стрелочные функции**
```javascript
// Полная форма (аналогично Function Expression)
const add = (a, b) => {
    return a + b;
};

// Сокращенная форма (неявный return)
const multiply = (a, b) => a * b;

// Один параметр - скобки можно опустить
const square = x => x * x;

// Без параметров - пустые скобки
const sayHello = () => "Hello!";

console.log(add(2, 3));       // 5
console.log(multiply(4, 5));  // 20
console.log(square(6));       // 36
console.log(sayHello());      // Hello!
```

**Пример 2: Неявный return**
```javascript
// Для простых выражений фигурные скобки и return можно опустить
const numbers = [1, 2, 3, 4, 5];

// Стрелочная функция с неявным return
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Эквивалентная Function Expression
const doubledOld = numbers.map(function(num) {
    return num * 2;
});
```

**Пример 3: Работа с `this`**
```javascript
// Проблема с Function Expression
const person = {
    name: "Анна",
    tasks: ["Задача 1", "Задача 2", "Задача 3"],
    
    showTasks: function() {
        this.tasks.forEach(function(task) {
            // this здесь - не person, а глобальный объект или undefined
            console.log(`${this.name}: ${task}`); // Ошибка! this.name undefined
        });
    }
};

// Решение со стрелочной функцией
const personFixed = {
    name: "Анна",
    tasks: ["Задача 1", "Задача 2", "Задача 3"],
    
    showTasks: function() {
        this.tasks.forEach(task => {
            // this берется из окружающего контекста (метода showTasks)
            console.log(`${this.name}: ${task}`); // Анна: Задача 1 и т.д.
        });
    }
};

personFixed.showTasks();
```

---

## **Сравнение способов объявления функций**

### **Синтаксическое сравнение**

```javascript
// Function Declaration
function sum(a, b) {
    return a + b;
}

// Function Expression
const sum = function(a, b) {
    return a + b;
};

// Стрелочная функция
const sum = (a, b) => a + b;
```

### **Сравнительная таблица**

| Характеристика | Function Declaration | Function Expression | Стрелочная функция |
|----------------|---------------------|---------------------|-------------------|
| **Поднятие** | ✅ Полное | ❌ (только переменная) | ❌ (только переменная) |
| **Имя функции** | ✅ Обязательно | ✅ (рекомендуется) | ❌ Анонимная |
| **Свой `this`** | ✅ Да | ✅ Да | ❌ Нет (лексический) |
| **`arguments`** | ✅ Да | ✅ Да | ❌ Нет |
| **Конструктор** | ✅ Да | ✅ Да | ❌ Нет |
| **Короткий синтаксис** | ❌ Нет | ❌ Нет | ✅ Да |

### **Когда что использовать?**

**Function Declaration:**
- Основные функции программы
- Когда нужен доступ до объявления (поднятие)
- Рекурсивные функции

**Function Expression:**
- Присвоение функций переменным
- Передача как аргументов (колбэки)
- Создание методов объектов

**Стрелочные функции:**
- Короткие однострочные операции
- Колбэки в методах массивов
- Когда нужно сохранить контекст `this`
- Функции внутри функций

---

## **Возврат значений**

### **Оператор `return`**

```javascript
function withReturn(value) {
    console.log("До return");
    return value * 2; // Функция завершается здесь
    console.log("После return"); // Этот код никогда не выполнится
}

const result = withReturn(5);
console.log(result); // 10
```

### **Неявный возврат `undefined`**

```javascript
function withoutReturn() {
    console.log("Просто выводим в консоль");
    // Нет return - функция возвращает undefined
}

const result = withoutReturn();
console.log(result); // undefined
```

### **Возврат объектов в стрелочных функциях**

```javascript
// ОШИБКА: синтаксическая ошибка
// const createUser = (name, age) => { name: name, age: age };

// ПРАВИЛЬНО: обернуть объект в скобки
const createUser = (name, age) => ({ name: name, age: age });

console.log(createUser("Дипсик", 2)); // {name: "Дипсик", age: 2}
```

---

## **Практические примеры**

### **Пример 1: Обработка массива пользователей**

```javascript
// Function Declaration для основной логики
function processUsers(users, filterFunction) {
    return users.filter(filterFunction);
}

// Function Expression для фильтра
const isAdult = function(user) {
    return user.age >= 18;
};

// Стрелочная функция для преобразования
const formatUser = user => `${user.name} (${user.age} лет)`;

// Данные
const users = [
    { name: "Анна", age: 25 },
    { name: "Иван", age: 17 },
    { name: "Мария", age: 30 },
    { name: "Петр", age: 16 }
];

// Использование
const adults = processUsers(users, isAdult);
console.log("Совершеннолетние:", adults.map(formatUser));
// Совершеннолетние: ["Анна (25 лет)", "Мария (30 лет)"]
```

### **Пример 2: Калькулятор с разными стилями функций**

```javascript
// Function Declaration
function calculator(operation, a, b) {
    switch (operation) {
        case "add":
            return add(a, b);
        case "multiply":
            return multiply(a, b);
        case "power":
            return power(a, b);
        default:
            return "Неизвестная операция";
    }
}

// Function Expression
const add = function(x, y) {
    return x + y;
};

// Стрелочные функции
const multiply = (x, y) => x * y;
const power = (base, exponent) => base ** exponent;

// Использование
console.log(calculator("add", 5, 3));       // 8
console.log(calculator("multiply", 4, 5));  // 20
console.log(calculator("power", 2, 8));     // 256
```

### **Пример 3: Таймер с правильным `this`**

```javascript
class Timer {
    constructor(seconds) {
        this.seconds = seconds;
        this.intervalId = null;
    }
    
    // Метод с стрелочной функцией для сохранения this
    start = () => {
        this.intervalId = setInterval(() => {
            console.log(`Осталось: ${this.seconds} сек`);
            this.seconds--;
            
            if (this.seconds < 0) {
                this.stop();
            }
        }, 1000);
    }
    
    stop = () => {
        clearInterval(this.intervalId);
        console.log("Таймер остановлен");
    }
}

const myTimer = new Timer(5);
myTimer.start();
```

---

## **Распространенные ошибки**

### **1. Вызов Function Expression до объявления**

```javascript
// НЕПРАВИЛЬНО:
// console.log(myFunction()); // Ошибка!

// ПРАВИЛЬНО:
const myFunction = function() {
    return "Hello!";
};
console.log(myFunction()); // Hello!
```

### **2. Стрелочная функция как метод объекта**

```javascript
const obj = {
    value: 42,
    
    // ПЛОХО: стрелочная функция как метод
    badMethod: () => {
        console.log(this.value); // undefined (this - внешний контекст)
    },
    
    // ХОРОШО: обычная функция
    goodMethod: function() {
        console.log(this.value); // 42
    }
};

obj.badMethod();  // undefined
obj.goodMethod(); // 42
```

### **3. Путаница с возвратом объектов**

```javascript
// НЕПРАВИЛЬНО:
// const createObj = () => { a: 1, b: 2 }; // Ошибка синтаксиса

// ПРАВИЛЬНО:
const createObj = () => ({ a: 1, b: 2 });
console.log(createObj()); // {a: 1, b: 2}
```

### **4. Использование стрелочных функций как конструкторов**

```javascript
// НЕПРАВИЛЬНО:
// const Person = (name) => { this.name = name; };
// const person = new Person("Анна"); // Ошибка!

// ПРАВИЛЬНО:
function Person(name) {
    this.name = name;
}
const person = new Person("Анна");
console.log(person.name); // Анна
```

---

## **Итоги урока**

### **Ключевые моменты:**
- **Function Declaration** — классический способ с поднятием
- **Function Expression** — присваивание функции переменной
- **Стрелочные функции** — компактный синтаксис без своего `this`
- **`return`** — возвращает значение и завершает выполнение функции
- **Поднятие** по-разному работает для разных типов функций

### **Практические рекомендации:**
1. Используйте **Function Declaration** для основных функций программы
2. Применяйте **Function Expression** для колбэков и присваивания
3. Выбирайте **стрелочные функции** для коротких операций и сохранения контекста
4. Избегайте стрелочных функций как методов объектов
5. Всегда используйте **фигурные скобки** для многострочных функций
6. Давайте **имена** функциям для удобства отладки

### **Золотые правила:**
- 🔸 **Function Declaration** — когда нужен доступ до объявления
- 🔸 **Function Expression** — когда функция является значением  
- 🔸 **Стрелочные функции** — когда важны краткость и лексический `this`

**Совет:** Начинайте с Function Declaration для ясности, переходите к стрелочным функциям по мере освоения особенностей `this` и контекста выполнения.