### Конспект: Переменные и типы данных в JavaScript

---

#### 1. Объявление переменных: `let`, `const` и устаревший `var`

В JavaScript есть три способа объявления переменных, но мы сосредоточимся на двух современных:

##### `let` - для изменяемых переменных
*   **Переменная, значение которой можно изменять.**
*   Аналог обычного объявления переменной в Python.
*   **Пример:**
    ```javascript
    let age = 25;
    let name = "Дипсик";
    
    console.log("Привет,", name); // Выведет: Привет, Дипсик
    
    // Значение можно изменить
    age = 26;
    name = "Новый Дипсик";
    console.log("Теперь тебе", age); // Выведет: Теперь тебе 26
    ```

##### `const` - для констант
*   **Переменная, которую нельзя переопределить после первоначального присваивания.**
*   Значение должно быть присвоено сразу при объявлении.
*   **Пример:**
    ```javascript
    const PI = 3.14159;
    const COMPANY_NAME = "MyApp";
    
    // PI = 3.14; // ОШИБКА! Assignment to constant variable.
    
    // Но важно: для объектов и массивов, объявленных через const,
    // можно изменять внутреннее содержимое, только не переприсваивать саму переменную
    const person = { name: "Анна", age: 30 };
    person.age = 31; // Это РАБОТАЕТ
    // person = { name: "Петр" }; // А это ОШИБКА
    ```

##### `var` - устаревший способ
*   **Старый способ объявления переменных (до ES6).**
*   Имеет проблемы с областью видимости - **избегайте его использования** в современном коде.

**Правила именования:**
*   Аналогичны Python: буквы, цифры, `$`, `_`
*   Не может начинаться с цифры
*   Регистрозависимые
*   Стиль: **camelCase** (`userName`, `totalCount`, `isActive`)

---

#### 2. Типы данных в JavaScript

JavaScript имеет динамическую типизацию, как и Python, но свою систему типов.

##### Примитивные типы:

1.  **`number`** - и целые, и дробные числа
    ```javascript
    let integer = 42;
    let float = 3.14;
    let scientific = 1.5e-3;
    let infinity = Infinity;
    let nan = NaN; // Not a Number
    ```

2.  **`string`** - строки (кавычки: `''`, `""`, `` ` ``)
    ```javascript
    let single = 'Привет';
    let double = "Мир";
    let backticks = `Текст с ${single}`; // Шаблонные строки!
    ```

3.  **`boolean`** - логический тип
    ```javascript
    let isReady = true;
    let isEmpty = false;
    let isGreater = 10 > 5; // true
    ```

4.  **`undefined`** - значение не определено
    ```javascript
    let unknown;
    console.log(unknown); // undefined
    ```

5.  **`null`** - пустое значение (намеренное отсутствие значения)
    ```javascript
    let emptyValue = null;
    ```

6.  **`bigint`** - для очень больших чисел
    ```javascript
    let bigNumber = 123456789012345678901234567890n;
    ```

7.  **`symbol`** - уникальные идентификаторы (для продвинутых случаев)

##### Объектные типы:

*   **`object`** - коллекции ключ-значение
    ```javascript
    let person = {
        name: "Анна",
        age: 25,
        isStudent: true
    };
    ```

*   **`array`** - массивы (списки)
    ```javascript
    let fruits = ["apple", "banana", "orange"];
    let numbers = [1, 2, 3, 4, 5];
    ```

**Определение типа: `typeof`**
```javascript
console.log(typeof 42);        // "number"
console.log(typeof "text");    // "string" 
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (известная особенность JS!)
console.log(typeof [1, 2, 3]); // "object"
console.log(typeof {a: 1});    // "object"
```

---

#### 3. Сравнение синтаксиса с Python

| Аспект | Python | JavaScript |
|--------|--------|------------|
| **Объявление** | `name = "value"` | `let name = "value";` или `const name = "value";` |
| **Точка с запятой** | Необязательны | Рекомендуются, иногда обязательны |
| **Строки** | `''`, `""`, `''' '''`, `""" """` | `''`, `""`, `` ` ` `` |
| **Шаблонные строки** | f-строки: `f"Hello {name}"` | Шаблонные строки: `` `Hello ${name}` `` |
| **Числа** | `int`, `float` раздельно | Единый тип `number` |
| **"Ничего"** | `None` | `null` и `undefined` |
| **Проверка типа** | `type(obj)` или `isinstance(obj, type)` | `typeof obj` |
| **Комментарии** | `# однострочный`<br>`"""многострочный"""` | `// однострочный`<br>`/* многострочный */` |

**Примеры для сравнения:**

```python
# Python
name = "Дипсик"
age = 25
message = f"Привет {name}, тебе {age} лет"
numbers = [1, 2, 3]
person = {"name": "Анна", "age": 30}
```
```javascript
// JavaScript
let name = "Дипсик";
const age = 25;
const message = `Привет ${name}, тебе ${age} лет`;
const numbers = [1, 2, 3];
const person = { name: "Анна", age: 30 };
```

---

#### 4. Консоль браузера и Node.js

##### Консоль браузера
*   **Инструменты разработчика** (F12) → вкладка Console
*   **Быстрое тестирование кода:** можно писать JS-код напрямую
*   **Отладка:** `console.log()`, `console.error()`, `console.warn()`
*   **Просмотр переменных:** просто введите имя переменной и нажмите Enter

```javascript
// В консоли браузера можно писать:
let x = 10;
let y = 20;
console.log(x + y); // 30
x // просто наберете 'x' и увидите: 10
```

##### Node.js
*   **Среда выполнения JavaScript вне браузера**
*   **Установлена на ваших компьютерах** - можно писать серверные приложения и скрипты
*   **Запуск из командной строки:**
    ```bash
    node script.js          # запуск файла
    node                    # интерактивный режим (REPL)
    ```

**Пример работы в Node.js:**
```javascript
// file: script.js
const name = "Дипсик";
const age = 25;

console.log(`Привет, ${name}!`);
console.log(`Через 5 лет тебе будет ${age + 5} лет`);

// Запуск: node script.js
```

---

### Частые ошибки и трудности

1.  **Путаница между `==` и `===`**
    ```javascript
    console.log(5 == "5");   // true (нестрогое сравнение)
    console.log(5 === "5");  // false (строгое сравнение)
    // Всегда используйте === если специально не нужно нестрогое сравнение
    ```

2.  **`undefined` vs `null`**
    *   `undefined` - значение не было присвоено
    *   `null` - программист явно указал "пустое значение"

3.  **Особенности `typeof`**
    ```javascript
    console.log(typeof null); // "object" - историческая особенность
    console.log(typeof []);   // "object" - используйте Array.isArray([])
    ```

4.  **Область видимости `let`/`const` vs `var`**
    ```javascript
    if (true) {
        let blockScoped = "видна только в блоке";
        var functionScoped = "видна везде в функции";
    }
    // console.log(blockScoped); // Ошибка!
    console.log(functionScoped); // Работает
    ```

5.  **Автоматическое преобразование типов** (type coercion)
    ```javascript
    console.log(5 + "5"); // "55" (конкатенация)
    console.log("5" - 3); // 2 (преобразование в число)
    ```

**Совет:** Всегда используйте `let` для переменных и `const` для констант. Проверяйте код в консоли браузера - это отличный способ учиться!