# Конспект лекции: 2.4 Основы CSS. Селекторы и каскад

## 1. Что такое CSS?

### Определение
**CSS** (Cascading Style Sheets) — каскадные таблицы стилей, язык описания внешнего вида HTML-документов. CSS отвечает за визуальное представление веб-страниц: цвета, шрифты, расположение элементов.

### Аналогия
Представьте HTML и CSS как строительство дома:
- **HTML** = Чертеж и конструкция (где стены, окна, двери)
- **CSS** = Дизайн интерьера (цвет стен, материал пола, стиль мебели)

## 2. Способы подключения CSS

### 1. Встроенные стили (inline)
Стили прямо в атрибуте `style` HTML-элемента.

```html
<p style="color: blue; font-size: 16px;">Этот текст синий</p>
<div style="background-color: yellow; padding: 20px;">Желтый блок</div>
```

**Плюсы:**
- Быстро для тестирования
- Высокая специфичность

**Минусы:**
- Сложно поддерживать
- Нарушает принцип разделения кода
- Не переиспользуется

### 2. Внутренние стили (internal)
Стили внутри тега `<style>` в `<head>` документа.

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        h1 {
            color: red;
            text-align: center;
        }
        
        p {
            font-family: Arial, sans-serif;
            line-height: 1.5;
        }
        
        .highlight {
            background-color: yellow;
        }
    </style>
</head>
<body>
    <h1>Заголовок</h1>
    <p class="highlight">Текст с подсветкой</p>
</body>
</html>
```

**Плюсы:**
- Все стили в одном месте (на этой странице)
- Легче поддерживать, чем inline

**Минусы:**
- Не переиспользуется между страницами
- Увеличивает размер HTML-файла

### 3. Внешние стили (external)
Стили в отдельном файле с расширением `.css`.

**HTML:**
```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
    <!-- Можно подключать несколько файлов -->
    <link rel="stylesheet" href="layout.css">
    <link rel="stylesheet" href="colors.css">
</head>
<body>
    <h1>Заголовок</h1>
    <p class="highlight">Текст с подсветкой</p>
</body>
</html>
```

**CSS (styles.css):**
```css
h1 {
    color: red;
    text-align: center;
}

p {
    font-family: Arial, sans-serif;
    line-height: 1.5;
}

.highlight {
    background-color: yellow;
}
```

**Плюсы:**
- Переиспользование между страницами
- Кэширование браузером
- Чистое разделение HTML и CSS
- Легче поддерживать

**Минусы:**
- Дополнительный HTTP-запрос
- Может быть проблема если CSS не загрузится

### 4. Импорт стилей (import)
Импорт одного CSS-файла в другой.

**main.css:**
```css
@import url('reset.css');
@import url('typography.css');

/* Другие стили */
body {
    font-family: Arial, sans-serif;
}
```

**Недостатки:**
- Медленная загрузка (последовательные запросы)
- Лучше использовать несколько `<link>`

## 3. Синтаксис CSS

### Базовая структура правила CSS:
```css
селектор {
    свойство: значение;
    свойство: значение;
    /* коментарий */
}
```

**Пример:**
```css
h1 {                          /* селектор */
    color: blue;              /* свойство: значение; */
    font-size: 24px;          /* свойство: значение; */
    text-align: center;       /* свойство: значение; */
    /* Это комментарий */
}
```

## 4. Селекторы CSS

### 1. Селектор по тегу (элементу)
Выбирает все элементы с указанным тегом.

```css
/* Все параграфы */
p {
    color: #333;
    line-height: 1.6;
}

/* Все заголовки h1 */
h1 {
    font-size: 2em;
    margin-bottom: 20px;
}

/* Все ссылки */
a {
    text-decoration: none;
    color: #007bff;
}

/* Все изображения */
img {
    max-width: 100%;
    height: auto;
}
```

### 2. Селектор по классу (`.`)
Выбирает элементы с указанным классом.

**HTML:**
```html
<p class="warning">Внимание!</p>
<div class="card highlighted">Карточка</div>
<span class="text-muted small">Мелкий текст</span>
```

**CSS:**
```css
/* Элементы с классом warning */
.warning {
    color: red;
    font-weight: bold;
    border: 1px solid red;
    padding: 10px;
}

/* Элементы с классом card */
.card {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 15px;
    margin: 10px;
}

/* Элементы с классом text-muted */
.text-muted {
    color: #6c757d;
}

/* Элементы с двумя классами */
.highlighted {
    background-color: #ffffcc;
}

.small {
    font-size: 0.875em;
}
```

### 3. Селектор по ID (`#`)
Выбирает элемент с указанным идентификатором.

**HTML:**
```html
<div id="header">Шапка сайта</div>
<button id="submit-button">Отправить</button>
<nav id="main-navigation">Меню</nav>
```

**CSS:**
```css
/* Элемент с id="header" */
#header {
    background-color: #333;
    color: white;
    padding: 20px;
}

/* Элемент с id="submit-button" */
#submit-button {
    background-color: #28a745;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

/* Элемент с id="main-navigation" */
#main-navigation {
    display: flex;
    gap: 20px;
    list-style: none;
}
```

**Важно:** На странице должен быть только один элемент с конкретным ID!

### 4. Универсальный селектор (`*`)
Выбирает все элементы.

```css
/* Сброс отступов у всех элементов */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Применить ко всем элементам внутри .container */
.container * {
    font-family: Arial, sans-serif;
}
```

### 5. Комбинированные селекторы

#### Группировка (через запятую)
```css
/* Применить к h1, h2 и h3 */
h1, h2, h3 {
    font-family: 'Georgia', serif;
    margin-bottom: 15px;
}

/* Применить к нескольким классам */
.btn-primary,
.btn-secondary,
.btn-success {
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
}

/* Смешанная группировка */
h1, .title, #main-title {
    color: #2c3e50;
}
```

#### Вложенность (через пробел)
```css
/* Все параграфы внутри .article */
.article p {
    line-height: 1.8;
    text-align: justify;
}

/* Все ссылки внутри #navigation */
#navigation a {
    color: white;
    text-decoration: none;
}

/* Все элементы li внутри ul с классом menu */
ul.menu li {
    display: inline-block;
    margin-right: 10px;
}
```

#### Прямой потомок (`>`)
```css
/* Прямые дочерние div внутри .container */
.container > div {
    border: 1px solid #ddd;
}

/* Только прямые дочерние параграфы */
.article > p {
    font-size: 1.1em;
}

/* Структура меню */
nav > ul > li {
    position: relative;
}
```

#### Соседний элемент (`+`)
```css
/* Параграф сразу после h1 */
h1 + p {
    font-size: 1.2em;
    color: #666;
}

/* Кнопка сразу после input */
input + button {
    margin-left: 10px;
}
```

#### Общий соседний (`~`)
```css
/* Все параграфы после h2 */
h2 ~ p {
    margin-left: 20px;
}

/* Все элементы с классом .item после .active */
.active ~ .item {
    opacity: 0.7;
}
```

### 6. Селекторы атрибутов

```css
/* Все элементы с атрибутом title */
[title] {
    border-bottom: 1px dotted #999;
}

/* Все input с type="text" */
input[type="text"] {
    border: 1px solid #ccc;
    padding: 5px;
}

/* Все ссылки с href, начинающимся с https */
a[href^="https://"] {
    color: green;
}

/* Все ссылки с href, заканчивающимся на .pdf */
a[href$=".pdf"] {
    color: red;
}

/* Все ссылки, содержащие "example" в href */
a[href*="example"] {
    font-weight: bold;
}

/* Все input с определенным значением */
input[value="Отправить"] {
    background-color: blue;
    color: white;
}

/* Сложный селектор атрибутов */
input[type="email"][required] {
    border-color: orange;
}
```

## 5. Псевдоклассы и псевдоэлементы

### Псевдоклассы (состояния элементов)

```css
/* Состояния ссылок */
a:link { color: blue; }           /* Непосещенная ссылка */
a:visited { color: purple; }      /* Посещенная ссылка */
a:hover { color: red; }           /* При наведении */
a:active { color: orange; }       /* При нажатии */
a:focus { outline: 2px solid blue; } /* При фокусе */

/* Псевдоклассы для форм */
input:disabled { opacity: 0.5; }
input:checked { background-color: blue; }
input:required { border-color: red; }
input:valid { border-color: green; }
input:invalid { border-color: red; }

/* Структурные псевдоклассы */
li:first-child { font-weight: bold; }
li:last-child { border-bottom: none; }
li:nth-child(2n) { background-color: #f5f5f5; } /* Четные */
li:nth-child(2n+1) { background-color: white; } /* Нечетные */
li:nth-child(3) { color: red; } /* Третий элемент */

/* Особые псевдоклассы */
p:empty { display: none; }
input:not([type="submit"]) { width: 100%; }
div:target { background-color: yellow; } /* При переходе по якорю */
```

### Псевдоэлементы (части элементов)

```css
/* Добавить контент перед элементом */
h1::before {
    content: "★ ";
    color: gold;
}

/* Добавить контент после элемента */
.link-external::after {
    content: " ↗";
    font-size: 0.8em;
}

/* Стилизация первой буквы */
p::first-letter {
    font-size: 2em;
    font-weight: bold;
    float: left;
    margin-right: 5px;
}

/* Стилизация первой строки */
p::first-line {
    font-weight: bold;
    color: #333;
}

/* Выделение текста пользователем */
::selection {
    background-color: yellow;
    color: black;
}

/* Плейсхолдер в input */
input::placeholder {
    color: #999;
    font-style: italic;
}
```

## 6. Каскадность CSS (Cascading)

### Что такое каскадность?
Когда несколько CSS-правил применяются к одному элементу, браузер использует правила **каскада** для определения, какое правило имеет приоритет.

### Порядок применения стилей:
1. **Источник и важность** (`!important`)
2. **Специфичность селектора**
3. **Порядок объявления**

### Пример каскадности:
```css
p { color: black; }              /* Специфичность: 0,0,1 */
.text { color: blue; }           /* Специфичность: 0,1,0 */
#special { color: green; }       /* Специфичность: 1,0,0 */
p.text { color: purple; }        /* Специфичность: 0,1,1 */

/* В HTML: <p id="special" class="text">Текст</p> */
/* Цвет будет green (наибольшая специфичность) */
```

## 7. Специфичность (Specificity)

### Как вычисляется специфичность?
Каждый селектор имеет "вес", который вычисляется по формуле:
- **A:** ID селекторы (1,0,0 за каждый)
- **B:** Классы, атрибуты, псевдоклассы (0,1,0 за каждый)
- **C:** Элементы, псевдоэлементы (0,0,1 за каждый)

### Примеры специфичности:
```css
/* Специфичность: 0,0,1 */
p { color: black; }

/* Специфичность: 0,1,0 */
.warning { color: orange; }

/* Специфичность: 1,0,0 */
#header { color: blue; }

/* Специфичность: 0,1,1 */
p.warning { color: red; }

/* Специфичность: 0,2,0 */
.button.primary { color: white; }

/* Специфичность: 1,1,1 */
#nav li.active { color: gold; }

/* Специфичность: 0,3,1 */
ul.menu li.item:first-child { color: purple; }
```

### Правила сравнения:
1. Сравнивается значение A (ID)
2. Если равны, сравнивается B (классы)
3. Если равны, сравнивается C (элементы)
4. Если все равны, применяется последнее объявление

### Визуализация специфичности:
```
#id .class element
 1    1     1   = 1,1,1
 ↑    ↑     ↑
 A    B     C
```

## 8. `!important` — принудительный приоритет

```css
p {
    color: blue !important;  /* Самый высокий приоритет */
}

/* Даже если есть более специфичный селектор */
#special.paragraph {
    color: red;  /* Не применится из-за !important выше */
}
```

**Когда использовать (редко):**
- Переопределение стилей библиотек
- Критические стили (доступность)
- Быстрое исправление в production

**Почему избегать:**
- Нарушает каскадность
- Сложно переопределить
- Плохая практика

## 9. Наследование (Inheritance)

### Что наследуется автоматически:
```css
/* Эти свойства наследуются детьми */
body {
    font-family: Arial, sans-serif;  /* Наследуется */
    color: #333;                     /* Наследуется */
    line-height: 1.5;                /* Наследуется */
    text-align: center;              /* Наследуется */
}

/* Эти НЕ наследуются */
body {
    background-color: #f0f0f0;       /* НЕ наследуется */
    border: 1px solid #ccc;          /* НЕ наследуется */
    padding: 20px;                   /* НЕ наследуется */
    margin: 0;                       /* НЕ наследуется */
}
```

### Управление наследованием:
```css
div {
    /* Заставить наследовать */
    border: inherit;
    color: inherit;
    
    /* Запретить наследование */
    background-color: initial;  /* Сбросить к начальному */
    font-size: unset;          /* Наследовать, если возможно */
    all: revert;               /* Вернуть браузерные стили */
}
```

## 10. Полный пример с каскадностью и специфичностью

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Каскадность и специфичность CSS</title>
    <style>
        /* Базовые стили */
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
        }
        
        /* Демонстрация каскадности */
        
        /* Правило 1: Селектор по тегу - специфичность 0,0,1 */
        p {
            color: black;
            padding: 10px;
            margin: 10px 0;
            border: 2px solid #ddd;
            background-color: white;
        }
        
        /* Правило 2: Селектор по классу - специфичность 0,1,0 */
        .special-text {
            color: blue;
            border-color: blue;
        }
        
        /* Правило 3: Селектор по ID - специфичность 1,0,0 */
        #unique-paragraph {
            color: green;
            border-color: green;
        }
        
        /* Правило 4: Комбинированный - специфичность 0,1,1 */
        p.special-text {
            color: purple;
            border-color: purple;
        }
        
        /* Правило 5: Более специфичный - специфичность 1,1,1 */
        #unique-paragraph.special-text {
            color: orange;
            border-color: orange;
        }
        
        /* Правило 6: !important перебивает всё */
        .important-text {
            color: red !important;
            border-color: red !important;
        }
        
        /* Демонстрация наследования */
        .parent-box {
            color: darkblue;
            font-size: 18px;
            font-weight: bold;
            border: 3px solid darkblue;
            padding: 20px;
            margin: 20px 0;
            background-color: #e6f7ff;
        }
        
        .child-element {
            /* Наследует color и font-weight от родителя */
            /* Не наследует border, padding, margin, background-color */
            border: 2px dashed #666;
            padding: 10px;
            margin-top: 10px;
            background-color: white;
        }
        
        /* Демонстрация вложенных селекторов */
        .container .nested p {
            color: #666;
            font-style: italic;
        }
        
        .container > .direct-child {
            background-color: #fffacd;
            padding: 15px;
        }
        
        /* Стилизация таблицы специфичности */
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            background-color: white;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: center;
        }
        
        th {
            background-color: #f2f2f2;
            font-weight: bold;
        }
        
        .specificity-a { background-color: #ffcccc; }
        .specificity-b { background-color: #ccffcc; }
        .specificity-c { background-color: #ccccff; }
        
        /* Примеры различных селекторов */
        a[target="_blank"]::after {
            content: " ↗";
            font-size: 0.8em;
        }
        
        input[type="text"]:focus {
            outline: 2px solid #4CAF50;
            border-color: #4CAF50;
        }
        
        li:nth-child(even) {
            background-color: #f9f9f9;
        }
        
        .code-block {
            background-color: #f5f5f5;
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 15px;
            font-family: 'Courier New', monospace;
            margin: 15px 0;
        }
    </style>
</head>
<body>
    <h1>Каскадность и специфичность CSS</h1>
    
    <section>
        <h2>Демонстрация каскадности</h2>
        
        <div class="code-block">
            <p>Исходный параграф (только тег &lt;p&gt;)</p>
        </div>
        
        <div class="code-block">
            <p class="special-text">Параграф с классом .special-text</p>
        </div>
        
        <div class="code-block">
            <p class="special-text" id="unique-paragraph">
                Параграф с классом .special-text и id="unique-paragraph"
            </p>
        </div>
        
        <div class="code-block">
            <p class="special-text important-text" id="unique-paragraph">
                Параграф с !important (перебивает всё)
            </p>
        </div>
    </section>
    
    <section>
        <h2>Таблица специфичности</h2>
        
        <table>
            <thead>
                <tr>
                    <th>Селектор</th>
                    <th>Пример</th>
                    <th>A (ID)</th>
                    <th>B (Классы)</th>
                    <th>C (Элементы)</th>
                    <th>Общая специфичность</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Элемент</td>
                    <td><code>p</code></td>
                    <td class="specificity-a">0</td>
                    <td class="specificity-b">0</td>
                    <td class="specificity-c">1</td>
                    <td>0,0,1</td>
                </tr>
                <tr>
                    <td>Класс</td>
                    <td><code>.warning</code></td>
                    <td class="specificity-a">0</td>
                    <td class="specificity-b">1</td>
                    <td class="specificity-c">0</td>
                    <td>0,1,0</td>
                </tr>
                <tr>
                    <td>ID</td>
                    <td><code>#header</code></td>
                    <td class="specificity-a">1</td>
                    <td class="specificity-b">0</td>
                    <td class="specificity-c">0</td>
                    <td>1,0,0</td>
                </tr>
                <tr>
                    <td>Элемент + класс</td>
                    <td><code>p.warning</code></td>
                    <td class="specificity-a">0</td>
                    <td class="specificity-b">1</td>
                    <td class="specificity-c">1</td>
                    <td>0,1,1</td>
                </tr>
                <tr>
                    <td>Вложенный</td>
                    <td><code>#nav li.active</code></td>
                    <td class="specificity-a">1</td>
                    <td class="specificity-b">1</td>
                    <td class="specificity-c">1</td>
                    <td>1,1,1</td>
                </tr>
                <tr>
                    <td>Inline стиль</td>
                    <td><code>style="color: red"</code></td>
                    <td colspan="3" style="background-color: #ffcc99;">Выше любых селекторов</td>
                    <td>1,0,0,0</td>
                </tr>
                <tr>
                    <td>!important</td>
                    <td><code>color: red !important</code></td>
                    <td colspan="3" style="background-color: #ff9966;">Самый высокий приоритет</td>
                    <td>Превосходит всё</td>
                </tr>
            </tbody>
        </table>
    </section>
    
    <section>
        <h2>Демонстрация наследования</h2>
        
        <div class="parent-box">
            Родительский блок (.parent-box)
            <div class="child-element">
                Дочерний элемент (.child-element)<br>
                Наследует: цвет, размер шрифта, жирность<br>
                Не наследует: границу, отступы, фон
            </div>
        </div>
    </section>
    
    <section>
        <h2>Разные типы селекторов</h2>
        
        <h3>Ссылки с target="_blank"</h3>
        <p>
            <a href="https://example.com" target="_blank">Внешняя ссылка</a> 
            (иконка добавляется через ::after)
        </p>
        
        <h3>Поле ввода с :focus</h3>
        <input type="text" placeholder="Нажмите для фокуса">
        
        <h3>Список с :nth-child(even)</h3>
        <ul>
            <li>Первый элемент</li>
            <li>Второй элемент (четный)</li>
            <li>Третий элемент</li>
            <li>Четвертый элемент (четный)</li>
            <li>Пятый элемент</li>
        </ul>
    </section>
    
    <section>
        <h2>Правила применения стилей</h2>
        <ol>
            <li><strong>Источник:</strong> user agent → author → user !important → author !important</li>
            <li><strong>Специфичность:</strong> Вычисляется по формуле A-B-C</li>
            <li><strong>Порядок:</strong> Если специфичность одинаковая, побеждает последнее правило</li>
            <li><strong>Наследование:</strong> Некоторые свойства наследуются автоматически</li>
        </ol>
    </section>

    <script>
        // Динамическое обновление примера каскадности
        document.addEventListener('DOMContentLoaded', function() {
            const paragraphs = document.querySelectorAll('.code-block p');
            
            paragraphs.forEach(p => {
                const computedStyle = window.getComputedStyle(p);
                const color = computedStyle.color;
                const borderColor = computedStyle.borderColor;
                
                // Добавляем информацию о примененном стиле
                const info = document.createElement('div');
                info.style.marginTop = '10px';
                info.style.fontSize = '0.9em';
                info.style.color = '#666';
                info.innerHTML = `<strong>Применённый цвет:</strong> ${color}<br>
                                 <strong>Цвет границы:</strong> ${borderColor}`;
                
                p.parentNode.appendChild(info);
            });
        });
    </script>
</body>
</html>
```

## 11. Порядок применения стилей (подробно)

### 1. По источнику (от низшего к высшему):
```
1. User agent styles (стили браузера)
2. User styles (стили пользователя)
3. Author styles (стили разработчика)
4. Author !important
5. User !important
```

### 2. По специфичности (A,B,C):
```css
/* Примеры в порядке увеличения специфичности */
* {}                     /* 0,0,0 */
li {}                    /* 0,0,1 */
ul li {}                 /* 0,0,2 */
li.red {}                /* 0,1,1 */
ul li.red {}             /* 0,1,2 */
#list li.red {}          /* 1,1,2 */
#list {}                 /* 1,0,0 */
```

### 3. По порядку объявления:
```css
/* Последнее правило побеждает */
p { color: red; }
p { color: blue; }  /* Применится этот цвет */

/* Важен порядок в файле */
.container p { color: green; }
p { color: yellow; }  /* Применится green (выше специфичность) */
```

## 12. Лучшие практики

### Правильно:
```css
/* Используйте классы для стилизации */
.button { /* ... */ }
.button-primary { /* ... */ }

/* Избегайте излишней специфичности */
.card img { /* ... */ }  /* Хорошо */
div.container div.card img { /* ... */ }  /* Плохо */

/* Порядок объявления: от общего к частному */
/* 1. Сброс и базовые стили */
* { box-sizing: border-box; }

/* 2. Типографика */
body { font-family: ...; }
h1, h2, h3 { ... }

/* 3. Компоненты */
.button { ... }
.card { ... }

/* 4. Утилитарные классы */
.text-center { text-align: center; }
.mt-20 { margin-top: 20px; }
```

### Избегайте:
```css
/* Избегайте !important */
.color-red { color: red !important; }  /* Плохо */

/* Избегайте inline-стилей */
<p style="color: blue;">Текст</p>  /* Плохо */

/* Избегайте избыточных селекторов */
body div.container ul.menu li a { ... }  /* Плохо */
.menu a { ... }  /* Хорошо */

/* Избегайте стилизации по ID (если возможно) */
#submit-button { ... }  /* Плохо для переиспользования */
.btn-primary { ... }    /* Хорошо */
```

## 13. Инструменты для работы

### DevTools браузера:
- **Проверка элемента** (Inspect Element)
- **Панель Styles** (показывает примененные стили)
- **Вычисленная специфичность**
- **Зачёркнутые стили** (переопределенные)

### Онлайн-инструменты:
- [Specificity Calculator](https://specificity.keegan.st/)
- [CSS Validator](https://jigsaw.w3.org/css-validator/)

## 14. Практическое задание

Создайте страницу с демонстрацией всех типов селекторов:
1. Подключите внешний CSS-файл
2. Создайте примеры для каждого типа селектора
3. Продемонстрируйте каскадность (переопределение стилей)
4. Создайте таблицу сравнения специфичности
5. Добавьте примеры наследования свойств
6. Покажите разницу между селекторами:
   - `.class` vs `#id` vs `element`
   - `div p` vs `div > p`
   - `.a.b` vs `.a .b`

---

**Вопросы для самопроверки:**
1. Какой селектор имеет большую специфичность: `.class` или `#id`?
2. Что такое каскадность в CSS?
3. Какой порядок приоритета у источников стилей?
4. Какие свойства CSS наследуются?
5. Как работает селектор `div > p`?