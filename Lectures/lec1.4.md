# Условные операторы в JavaScript (`if`/`else if`/`else`, `switch`)

## Введение

**Условные операторы** в JavaScript позволяют программе выполнять различные действия в зависимости от условий. В отличие от Python, JavaScript имеет некоторые особенности в работе с типами данных и преобразованиями, которые важно учитывать при написании условий.

**Особенности JavaScript:**
- Динамическая типизация
- Автоматическое преобразование типов
- Строгое и нестрогое сравнение
- Ложные (falsy) и истинные (truthy) значения

## Синтаксис условий в JavaScript

### 1. Простой оператор `if`

**Синтаксис:**
```javascript
if (условие) {
    // блок кода, который выполнится если условие true
    действие1;
    действие2;
}
```

**Пример:**
```javascript
const temperature = 30;

if (temperature > 25) {
    console.log("Жарко! Включите кондиционер");
    console.log("Пейте больше воды");
}
```

### 2. Конструкция `if-else`

**Синтаксис:**
```javascript
if (условие) {
    // выполняется если условие true
    действие_если_true;
} else {
    // выполняется если условие false  
    действие_если_false;
}
```

**Пример:**
```javascript
const age = 17;

if (age >= 18) {
    console.log("Доступ разрешен");
    console.log("Можете войти");
} else {
    console.log("Доступ запрещен");
    console.log("Вам нет 18 лет");
}
```

### 3. Конструкция `if-else if-else`

**Синтаксис:**
```javascript
if (условие1) {
    // выполняется если условие1 true
    действие1;
} else if (условие2) {
    // выполняется если условие1 false, но условие2 true
    действие2;
} else if (условие3) {
    // выполняется если предыдущие false, но условие3 true
    действие3;
} else {
    // выполняется если все условия false
    действие_по_умолчанию;
}
```

**Пример:**
```javascript
const score = 85;

if (score >= 90) {
    console.log("Оценка: A");
    console.log("Отлично!");
} else if (score >= 80) {
    console.log("Оценка: B"); 
    console.log("Хорошо!");
} else if (score >= 70) {
    console.log("Оценка: C");
    console.log("Удовлетворительно");
} else {
    console.log("Оценка: F");
    console.log("Нужно подтянуть знания");
}
```

### Важные правила синтаксиса:

1. **Круглые скобки** `()` вокруг условия - ОБЯЗАТЕЛЬНО!
2. **Фигурные скобки** `{}` для блоков кода
3. **Точка с запятой** после инструкций

```javascript
// ПРАВИЛЬНО:
if (condition) {
    action1;
    action2;
}

// НЕПРАВИЛЬНО:
if condition {  // Ошибка! Нет круглых скобок
    action1;
    action2;
}

// Допустимо (но не рекомендуется) для одной инструкции:
if (condition) action1;

// Лучше всегда использовать фигурные скобки:
if (condition) {
    action1;
}
```

## Логические операторы сравнения

### Операторы сравнения

| Оператор | Описание | Пример | Результат |
|----------|-----------|---------|-----------|
| `==` | Нестрогое равно | `5 == "5"` | `true` |
| `===` | Строгое равно | `5 === "5"` | `false` |
| `!=` | Нестрогое не равно | `5 != "5"` | `false` |
| `!==` | Строгое не равно | `5 !== "5"` | `true` |
| `>` | Больше | `10 > 5` | `true` |
| `<` | Меньше | `3 < 7` | `true` |
| `>=` | Больше или равно | `5 >= 5` | `true` |
| `<=` | Меньше или равно | `4 <= 6` | `true` |

```javascript
// Примеры использования
console.log(5 == "5");    // true (нестрогое сравнение)
console.log(5 === "5");   // false (строгое сравнение)
console.log(0 == false);  // true
console.log(0 === false); // false
console.log(1 == true);   // true
console.log(1 === true);  // false
```

### Логические операторы (AND, OR, NOT)

| Оператор | Описание | Пример | Результат |
|----------|-----------|---------|-----------|
| `&&` | И (оба условия true) | `(5 > 3) && (2 < 4)` | `true` |
| `||` | ИЛИ (хотя бы одно true) | `(5 > 3) || (2 > 4)` | `true` |
| `!` | НЕ (инверсия) | `!(5 === 3)` | `true` |

```javascript
// Примеры логических операторов
const age = 25;
const hasLicense = true;

// AND - оба условия должны быть true
const canDrive = (age >= 18) && hasLicense;
console.log(canDrive);  // true

// OR - хотя бы одно условие true
const isWeekend = true;
const isHoliday = false;
const canRest = isWeekend || isHoliday;
console.log(canRest);  // true

// NOT - инверсия результата
const isRaining = true;
const canWalk = !isRaining;
console.log(canWalk);  // false
```

### Приоритет операторов
1. `()` - скобки
2. `!` - логическое НЕ  
3. `&&` - логическое И
4. `||` - логическое ИЛИ

```javascript
// Разница в приоритетах
const result1 = true || false && false;  // = true || (false && false) = true || false = true
const result2 = (true || false) && false;  // = true && false = false

console.log(result1);  // true
console.log(result2);  // false
```

## Преобразование типов в условиях

### Falsy и Truthy значения

В JavaScript значения автоматически преобразуются к boolean в условиях:

**Falsy значения** (преобразуются в `false`):
- `false`
- `0`
- `""` (пустая строка)
- `null`
- `undefined`
- `NaN`

**Truthy значения** (преобразуются в `true`):
- Все остальные значения, включая:
- `"0"` (строка с нулем)
- `"false"` (строка)
- `[]` (пустой массив)
- `{}` (пустой объект)
- `function() {}` (функция)

```javascript
// Примеры преобразования
if (0) {
    console.log("Это не выполнится");
} else {
    console.log("0 - falsy значение");
}

if ("0") {
    console.log("Строка '0' - truthy значение");
}

if ("") {
    console.log("Это не выполнится");
} else {
    console.log("Пустая строка - falsy значение");
}

if (null) {
    console.log("Это не выполнится");
} else {
    console.log("null - falsy значение");
}

if (undefined) {
    console.log("Это не выполнится");
} else {
    console.log("undefined - falsy значение");
}

if (NaN) {
    console.log("Это не выполнится");
} else {
    console.log("NaN - falsy значение");
}
```

### Явное преобразование типов

```javascript
// Разные способы преобразования к boolean
const value = "hello";

// Неявное преобразование (автоматически в условии)
if (value) {
    console.log("Truthy значение");
}

// Явное преобразование
const boolValue = Boolean(value);
console.log(boolValue);  // true

// Двойное отрицание (быстрый способ)
const isTruthy = !!value;
console.log(isTruthy);  // true
```

## Вложенные условия

### Синтаксис вложенных условий

```javascript
if (внешнееУсловие) {
    // блок внешнего условия
    действие1;
    
    if (внутреннееУсловие) {
        // блок внутреннего условия
        действие2;
        действие3;
    } else {
        // блок else для внутреннего условия
        действие4;
    }
} else {
    // блок else для внешнего условия
    действие5;
}
```

### Практические примеры вложенных условий

**Пример 1: Проверка доступа**
```javascript
const age = 20;
const hasTicket = true;

if (age >= 18) {
    console.log("Возраст подходит");
    
    if (hasTicket) {
        console.log("Билет есть - проходите!");
        console.log("Приятного просмотра!");
    } else {
        console.log("Нужно купить билет");
    }
} else {
    console.log("Вам нет 18 лет");
    console.log("Доступ запрещен");
}
```

**Пример 2: Система оценок с дополнительными условиями**
```javascript
const score = 87;
const attendance = 95;

if (score >= 90) {
    const grade = "A";
    console.log(`Оценка: ${grade}`);
} else if (score >= 80) {
    const grade = "B";
    console.log(`Оценка: ${grade}`);
    
    // Вложенное условие
    if (attendance >= 90) {
        console.log("Отличная посещаемость!");
    } else {
        console.log("Старайтесь лучше посещать занятия");
    }
} else if (score >= 70) {
    const grade = "C";
    console.log(`Оценка: ${grade}`);
} else {
    const grade = "F";
    console.log(`Оценка: ${grade}`);
    console.log("Требуется дополнительное обучение");
}
```

## Оператор `switch`

Оператор `switch` предоставляет альтернативный способ обработки множественных условий, когда нужно сравнить одно значение с несколькими вариантами.

### Базовый синтаксис

```javascript
switch (выражение) {
    case значение1:
        // код для значение1
        break;
    case значение2:
        // код для значение2
        break;
    case значение3:
        // код для значение3
        break;
    default:
        // код по умолчанию
}
```

### Примеры использования `switch`

**Пример 1: Дни недели**
```javascript
const day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Понедельник";
        break;
    case 2:
        dayName = "Вторник";
        break;
    case 3:
        dayName = "Среда";
        break;
    case 4:
        dayName = "Четверг";
        break;
    case 5:
        dayName = "Пятница";
        break;
    case 6:
        dayName = "Суббота";
        break;
    case 7:
        dayName = "Воскресенье";
        break;
    default:
        dayName = "Неизвестный день";
}

console.log(`День ${day}: ${dayName}`); // День 3: Среда
```

**Пример 2: Группировка случаев**
```javascript
const grade = "B";
let message;

switch (grade) {
    case "A":
    case "B":
        message = "Отличный результат!";
        break;
    case "C":
    case "D":
        message = "Хороший результат";
        break;
    case "F":
        message = "Нужно улучшить";
        break;
    default:
        message = "Неизвестная оценка";
}

console.log(message); // Отличный результат!
```

**Пример 3: Сравнение с if-else if**
```javascript
// Старый способ (if-else if)
function getDayTypeIf(day) {
    if (day === 1 || day === 2 || day === 3 || day === 4 || day === 5) {
        return "Рабочий день";
    } else if (day === 6 || day === 7) {
        return "Выходной день";
    } else {
        return "Неизвестный день";
    }
}

// Новый способ (switch)
function getDayTypeSwitch(day) {
    switch (day) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return "Рабочий день";
        case 6:
        case 7:
            return "Выходной день";
        default:
            return "Неизвестный день";
    }
}

console.log(getDayTypeIf(3)); // Оба выведут: Рабочий день
console.log(getDayTypeSwitch(3)); // Оба выведут: Рабочий день
```

### Важность `break`

Без `break` выполнение "проваливается" на следующий `case`:

```javascript
const number = 2;

switch (number) {
    case 1:
        console.log("Один");
        // break; пропущен!
    case 2:
        console.log("Два");
        // break; пропущен!
    case 3:
        console.log("Три");
        break;
    default:
        console.log("Другое число");
}

// Выведет:
// Два
// Три
```

## Практические примеры для Node.js

### Пример 1: Калькулятор ИМТ
```javascript
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Введите вес (кг): ', (weightInput) => {
    readline.question('Введите рост (м): ', (heightInput) => {
        const weight = parseFloat(weightInput);
        const height = parseFloat(heightInput);
        
        const bmi = weight / (height * height);
        console.log(`Ваш ИМТ: ${bmi.toFixed(2)}`);
        
        let category;
        if (bmi < 18.5) {
            category = "Недостаточный вес";
        } else if (bmi < 25) {
            category = "Нормальный вес";
        } else if (bmi < 30) {
            category = "Избыточный вес";
        } else {
            category = "Ожирение";
        }
        
        console.log(`Категория: ${category}`);
        readline.close();
    });
});
```

### Пример 2: Определение времени суток с switch
```javascript
const hour = new Date().getHours();
let timeOfDay;
let greeting;

switch (true) {
    case (hour >= 5 && hour < 12):
        timeOfDay = "Утро";
        greeting = "Доброе утро!";
        break;
    case (hour >= 12 && hour < 17):
        timeOfDay = "День";
        greeting = "Добрый день!";
        break;
    case (hour >= 17 && hour < 22):
        timeOfDay = "Вечер";
        greeting = "Добрый вечер!";
        break;
    default:
        timeOfDay = "Ночь";
        greeting = "Доброй ночи!";
}

console.log(`Сейчас ${timeOfDay}`);
console.log(greeting);
```

### Пример 3: Проверка пароля с учетом falsy значений
```javascript
function validatePassword(password) {
    // Проверка на пустое значение
    if (!password) {
        console.log("Пароль не может быть пустым");
        return false;
    }
    
    const minLength = 8;
    
    if (password.length < minLength) {
        console.log("Пароль слишком короткий!");
        console.log(`Минимальная длина: ${minLength} символов`);
        return false;
    }
    
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    
    if (hasUpper && hasLower && hasDigit) {
        console.log("Пароль надежный!");
        return true;
    } else {
        console.log("Пароль слабый. Рекомендации:");
        
        if (!hasUpper) console.log("- Добавьте заглавные буквы");
        if (!hasLower) console.log("- Добавьте строчные буквы");
        if (!hasDigit) console.log("- Добавьте цифры");
        return false;
    }
}

// Тестирование
validatePassword("");           // Пароль не может быть пустым
validatePassword("123");        // Слишком короткий
validatePassword("strongpass"); // Нет цифр и заглавных букв
validatePassword("Strong123");  // Надежный пароль
```

### Пример 4: Калькулятор с switch
```javascript
function calculator(operator, a, b) {
    let result;
    
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
            if (b === 0) {
                console.log("Ошибка: деление на ноль!");
                return;
            }
            result = a / b;
            break;
        case '%':
            result = a % b;
            break;
        default:
            console.log("Неизвестный оператор");
            return;
    }
    
    console.log(`${a} ${operator} ${b} = ${result}`);
    return result;
}

// Тестирование
calculator('+', 10, 5);  // 10 + 5 = 15
calculator('-', 10, 5);  // 10 - 5 = 5
calculator('*', 10, 5);  // 10 * 5 = 50
calculator('/', 10, 5);  // 10 / 5 = 2
calculator('/', 10, 0);  // Ошибка: деление на ноль!
calculator('^', 10, 5);  // Неизвестный оператор
```

## Распространенные ошибки

### 1. Использование присваивания вместо сравнения
```javascript
// НЕПРАВИЛЬНО:
if (x = 5) {  // Присваивание вместо сравнения
    console.log("Равно 5");
}

// ПРАВИЛЬНО:
if (x === 5) {  // Сравнение
    console.log("Равно 5");
}
```

### 2. Забытые фигурные скобки
```javascript
// ОПАСНО (работает, но может привести к ошибкам):
if (condition)
    console.log("Условие выполнено");
    console.log("Эта строка выполнится ВСЕГДА!"); // Ошибка!

// ПРАВИЛЬНО:
if (condition) {
    console.log("Условие выполнено");
    console.log("Эта строка выполнится только при condition = true");
}
```

### 3. Нестрогое сравнение когда нужно строгое
```javascript
// ПРОБЛЕМА:
const count = 0;
if (count == false) {  // true (0 == false)
    console.log("Count is false"); // Выполнится, но это не очевидно
}

// РЕШЕНИЕ:
if (count === 0) {  // Более ясное намерение
    console.log("Count is zero");
}
```

### 4. Забытый break в switch
```javascript
// НЕПРАВИЛЬНО:
const color = "red";
switch (color) {
    case "red":
        console.log("Stop");
    case "green":
        console.log("Go");
    case "yellow":
        console.log("Wait");
}

// Выведет: Stop Go Wait

// ПРАВИЛЬНО:
switch (color) {
    case "red":
        console.log("Stop");
        break;
    case "green":
        console.log("Go");
        break;
    case "yellow":
        console.log("Wait");
        break;
}
// Выведет: Stop
```

## Итоги урока

### Ключевые моменты:
- **Условные операторы** позволяют программе принимать решения на основе условий
- **Синтаксис** требует круглых скобок вокруг условия и фигурных скобок для блоков
- **Сравнение**: используйте `===` и `!==` для строгого сравнения, избегая неявных преобразований
- **Falsy значения** автоматически преобразуются в `false` в условиях
- **Оператор `switch`** эффективен для множественного сравнения одного значения
- **`break`** в switch предотвращает "проваливание" на следующий case

### Практические рекомендации:
1. Всегда используйте фигурные скобки, даже для одной инструкции
2. Предпочитайте строгое сравнение (`===`, `!==`) нестрогому
3. Помните о falsy значениях при проверке условий
4. Используйте `switch` для множественного сравнения одного значения
5. Не забывайте про `break` в операторе `switch`
6. Проверяйте граничные случаи и обрабатывайте ошибки

### Когда использовать что:
- **`if-else`** - для общих условий и диапазонов
- **`switch`** - для точного сравнения дискретных значений
- **Вложенные условия** - для сложной логики принятия решений