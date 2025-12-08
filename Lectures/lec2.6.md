# Конспект лекции: 2.6 Позиционирование элементов

## 1. Что такое позиционирование в CSS?

### Определение
**Позиционирование** — это способ управления расположением элементов на веб-странице с помощью свойства `position`. Оно позволяет точно контролировать, где будет находиться элемент относительно его обычного места или других элементов.

### Аналогия
Представьте элементы на странице как мебель в комнате:
- **static** — мебель стоит там, где её поставили (по умолчанию)
- **relative** — можно немного сдвинуть от исходного места
- **absolute** — висит на стене (не занимает места в потоке)
- **fixed** — прибита к окну (не двигается при прокрутке)
- **sticky** — магнитится к краю при прокрутке

## 2. Свойство `position` и его значения

### Базовый синтаксис
```css
.element {
    position: значение;
    top: значение;
    right: значение;
    bottom: значение;
    left: значение;
    z-index: значение;
}
```

## 3. `position: static` (статическое) - значение по умолчанию

### Описание
Элемент располагается в нормальном потоке документа. Свойства `top`, `right`, `bottom`, `left` и `z-index` не работают.

```css
.static-element {
    position: static; /* Можно не писать - это значение по умолчанию */
    /* top, right, bottom, left НЕ РАБОТАЮТ */
}
```

**HTML пример:**
```html
<div class="static-box">Статический элемент 1</div>
<div class="static-box">Статический элемент 2</div>
<div class="static-box">Статический элемент 3</div>
```

**CSS:**
```css
.static-box {
    width: 200px;
    height: 100px;
    background-color: lightblue;
    margin: 10px;
    border: 2px solid darkblue;
}
```

## 4. `position: relative` (относительное)

### Описание
Элемент располагается в нормальном потоке, но затем может быть сдвинут относительно своего обычного положения. Оригинальное место элемента сохраняется в потоке.

```css
.relative-element {
    position: relative;
    top: 20px;     /* Сдвиг вниз на 20px от верхнего края */
    left: 30px;    /* Сдвиг вправо на 30px от левого края */
    /* Также можно использовать right и bottom */
}
```

### Примеры использования:

**Пример 1: Простой сдвиг**
```html
<div class="box static">Статический</div>
<div class="box relative">Относительный (сдвиг)</div>
<div class="box static">Еще статический</div>
```

```css
.box {
    width: 200px;
    height: 50px;
    margin: 10px;
    padding: 10px;
    border: 2px solid #333;
}

.static {
    background-color: lightblue;
}

.relative {
    position: relative;
    top: 20px;
    left: 30px;
    background-color: lightcoral;
}
```

**Пример 2: Создание контекста позиционирования**
```html
<div class="parent">
    <div class="child">Абсолютный элемент</div>
</div>
```

```css
.parent {
    position: relative; /* Создает контекст для абсолютного позиционирования */
    width: 300px;
    height: 200px;
    background-color: lightgray;
    margin: 20px;
}

.child {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: lightcoral;
    padding: 10px;
}
```

**Пример 3: Наложение элементов**
```css
.image-container {
    position: relative;
    width: 300px;
}

.image-container img {
    width: 100%;
    display: block;
}

.badge {
    position: relative;
    top: -10px;
    left: -10px;
    background-color: red;
    color: white;
    padding: 5px 10px;
    border-radius: 50%;
}
```

## 5. `position: absolute` (абсолютное)

### Описание
Элемент полностью вырывается из нормального потока документа. Он позиционируется относительно ближайшего предка с `position: relative`, `absolute`, `fixed` или `sticky`. Если такого нет — относительно `<html>`.

```css
.absolute-element {
    position: absolute;
    top: 50px;
    left: 100px;
    /* Элемент не занимает места в потоке */
}
```

### Ключевые особенности:
- Вырывается из потока (не занимает места)
- Ширина устанавливается по содержимому, если не задана явно
- Позиционируется относительно ближайшего позиционированного предка
- Можно использовать `z-index`

### Примеры использования:

**Пример 1: Контекст позиционирования**
```html
<div class="container">
    <div class="absolute-box">Абсолютный элемент</div>
    <div class="content">Обычный контент</div>
</div>
```

```css
.container {
    position: relative; /* Контекст для абсолютного позиционирования */
    width: 400px;
    height: 300px;
    background-color: lightgray;
    margin: 20px;
}

.absolute-box {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 100px;
    height: 100px;
    background-color: lightcoral;
}

.content {
    padding: 20px;
}
```

**Пример 2: Модальное окно**
```html
<div class="modal-overlay">
    <div class="modal">
        <h3>Модальное окно</h3>
        <p>Содержимое модального окна...</p>
        <button class="close-btn">×</button>
    </div>
</div>
```

```css
.modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    position: relative;
    width: 400px;
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    border: none;
    background-color: #f0f0f0;
    border-radius: 50%;
    cursor: pointer;
    font-size: 20px;
}
```

**Пример 3: Выпадающее меню**
```html
<nav class="dropdown">
    <button class="dropdown-toggle">Меню ▽</button>
    <ul class="dropdown-menu">
        <li><a href="#">Пункт 1</a></li>
        <li><a href="#">Пункт 2</a></li>
        <li><a href="#">Пункт 3</a></li>
    </ul>
</nav>
```

```css
.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-toggle {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 200px;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    display: none;
    z-index: 1000;
}

.dropdown:hover .dropdown-menu {
    display: block;
}

.dropdown-menu li {
    list-style: none;
}

.dropdown-menu a {
    display: block;
    padding: 10px 15px;
    text-decoration: none;
    color: #333;
}

.dropdown-menu a:hover {
    background-color: #f5f5f5;
}
```

## 6. `position: fixed` (фиксированное)

### Описание
Элемент вырывается из потока и фиксируется относительно окна браузера (viewport). Остается на одном месте при прокрутке страницы.

```css
.fixed-element {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    /* Элемент всегда виден при прокрутке */
}
```

### Ключевые особенности:
- Фиксируется относительно viewport
- Не двигается при прокрутке
- Не оставляет пустого места в потоке
- Идеально для шапок, подвалов, кнопок "наверх"

### Примеры использования:

**Пример 1: Фиксированная шапка**
```html
<header class="fixed-header">
    <nav>Навигация</nav>
</header>
<main class="content">
    <!-- Длинный контент -->
</main>
```

```css
.fixed-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    padding: 15px 0;
}

.content {
    padding-top: 70px; /* Чтобы контент не скрывался под шапкой */
}
```

**Пример 2: Кнопка "Наверх"**
```html
<button class="scroll-to-top">↑</button>
```

```css
.scroll-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    display: none; /* Показываем только при прокрутке */
    z-index: 999;
}

.scroll-to-top.visible {
    display: block;
}
```

**Пример 3: Боковая панель**
```html
<aside class="sidebar">
    <h3>Боковая панель</h3>
    <p>Содержимое панели...</p>
</aside>
<main class="main-content">
    <!-- Основной контент -->
</main>
```

```css
.sidebar {
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    height: 100vh;
    background-color: #f8f9fa;
    border-left: 1px solid #dee2e6;
    padding: 20px;
    overflow-y: auto;
}

.main-content {
    margin-right: 320px; /* Отступ для фиксированной панели */
}
```

## 7. `position: sticky` (липкое)

### Описание
Гибрид relative и fixed. Элемент ведет себя как relative, пока не достигает заданной позиции при прокрутке, затем "прилипает" как fixed.

```css
.sticky-element {
    position: sticky;
    top: 0; /* Прилипает к верхнему краю при прокрутке */
}
```

### Ключевые особенности:
- Работает только с одним из свойств: `top`, `right`, `bottom`, `left`
- Требует указания точки "прилипания"
- Работает внутри родительского контейнера
- Современное и популярное решение

### Примеры использования:

**Пример 1: Липкая шапка таблицы**
```html
<table>
    <thead class="sticky-header">
        <tr>
            <th>Заголовок 1</th>
            <th>Заголовок 2</th>
            <th>Заголовок 3</th>
        </tr>
    </thead>
    <tbody>
        <!-- Много строк таблицы -->
    </tbody>
</table>
```

```css
.sticky-header {
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 10;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
```

**Пример 2: Липкая навигация внутри статьи**
```html
<article>
    <nav class="sticky-nav">
        <a href="#section1">Раздел 1</a>
        <a href="#section2">Раздел 2</a>
        <a href="#section3">Раздел 3</a>
    </nav>
    
    <section id="section1">
        <h2>Раздел 1</h2>
        <!-- Контент -->
    </section>
    
    <!-- Другие разделы -->
</article>
```

```css
.sticky-nav {
    position: sticky;
    top: 20px;
    background-color: #f8f9fa;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 20px;
    z-index: 5;
}

.sticky-nav a {
    display: inline-block;
    margin-right: 15px;
    text-decoration: none;
    color: #007bff;
}
```

**Пример 3: Липкий сайдбар**
```html
<div class="container">
    <main class="content">
        <!-- Длинный контент -->
    </main>
    <aside class="sticky-sidebar">
        <h3>Оглавление</h3>
        <!-- Ссылки на разделы -->
    </aside>
</div>
```

```css
.container {
    display: flex;
    gap: 30px;
}

.content {
    flex: 1;
}

.sticky-sidebar {
    position: sticky;
    top: 20px;
    width: 250px;
    height: fit-content;
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
}
```

## 8. Свойство `z-index`

### Определение
`z-index` контролирует порядок наложения элементов по оси Z (глубине). Работает только с позиционированными элементами (`relative`, `absolute`, `fixed`, `sticky`).

```css
.element {
    position: relative; /* или absolute/fixed/sticky */
    z-index: 10;
}
```

### Особенности:
- Значение по умолчанию: `auto` (0 для новых контекстов)
- Может быть отрицательным
- Создает новый контекст стека
- Работает только в пределах одного контекста

### Пример:
```html
<div class="box box1">Box 1 (z-index: 1)</div>
<div class="box box2">Box 2 (z-index: 2)</div>
<div class="box box3">Box 3 (z-index: 3)</div>
```

```css
.box {
    position: absolute;
    width: 200px;
    height: 150px;
    padding: 20px;
    color: white;
    font-weight: bold;
}

.box1 {
    background-color: rgba(255, 0, 0, 0.7);
    top: 50px;
    left: 50px;
    z-index: 1;
}

.box2 {
    background-color: rgba(0, 255, 0, 0.7);
    top: 100px;
    left: 100px;
    z-index: 2;
}

.box3 {
    background-color: rgba(0, 0, 255, 0.7);
    top: 150px;
    left: 150px;
    z-index: 3;
}
```

## 9. Полный интерактивный пример

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Позиционирование в CSS</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            padding: 20px;
            background-color: #f8f9fa;
            min-height: 200vh; /* Для демонстрации прокрутки */
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        h1 {
            text-align: center;
            color: #2c3e50;
            margin-bottom: 30px;
            padding-bottom: 10px;
            border-bottom: 2px solid #3498db;
        }
        
        h2 {
            color: #34495e;
            margin: 25px 0 15px 0;
        }
        
        /* Фиксированная навигация по типам позиционирования */
        .position-nav {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: white;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            padding: 10px 0;
        }
        
        .position-nav ul {
            display: flex;
            justify-content: center;
            list-style: none;
            gap: 20px;
        }
        
        .position-nav a {
            text-decoration: none;
            color: #3498db;
            font-weight: 500;
            padding: 5px 10px;
            border-radius: 4px;
            transition: background-color 0.3s;
        }
        
        .position-nav a:hover {
            background-color: #f0f7ff;
        }
        
        .main-content {
            padding-top: 60px; /* Отступ для фиксированной навигации */
        }
        
        /* Демонстрационные блоки */
        .demo-section {
            background-color: white;
            border-radius: 8px;
            padding: 30px;
            margin-bottom: 40px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            position: relative;
            min-height: 300px;
        }
        
        .demo-title {
            display: inline-block;
            background-color: #3498db;
            color: white;
            padding: 5px 15px;
            border-radius: 4px;
            margin-bottom: 20px;
            font-size: 18px;
        }
        
        .demo-container {
            position: relative;
            width: 100%;
            height: 250px;
            background-color: #ecf0f1;
            border: 2px dashed #bdc3c7;
            border-radius: 4px;
            margin: 20px 0;
            overflow: hidden;
        }
        
        .demo-box {
            width: 120px;
            height: 80px;
            padding: 15px;
            border: 2px solid;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
        }
        
        .static-box {
            background-color: rgba(52, 152, 219, 0.7);
            border-color: #2980b9;
            color: white;
        }
        
        .relative-box {
            background-color: rgba(46, 204, 113, 0.7);
            border-color: #27ae60;
            color: white;
        }
        
        .absolute-box {
            background-color: rgba(231, 76, 60, 0.7);
            border-color: #c0392b;
            color: white;
        }
        
        .fixed-box {
            background-color: rgba(155, 89, 182, 0.7);
            border-color: #8e44ad;
            color: white;
        }
        
        .sticky-box {
            background-color: rgba(241, 196, 15, 0.7);
            border-color: #f39c12;
            color: #333;
        }
        
        /* Специфичные стили для каждого типа позиционирования */
        
        /* Static демо */
        #static-demo .demo-box {
            position: static;
            margin: 10px;
        }
        
        /* Relative демо */
        #relative-demo .relative-box {
            position: relative;
            top: 30px;
            left: 50px;
        }
        
        #relative-demo .static-box {
            position: static;
            margin: 10px;
        }
        
        /* Absolute демо */
        #absolute-demo .demo-container {
            position: relative; /* Контекст для абсолютного позиционирования */
        }
        
        #absolute-demo .absolute-box {
            position: absolute;
            top: 20px;
            right: 20px;
        }
        
        #absolute-demo .static-box {
            position: static;
            margin: 10px;
        }
        
        /* Fixed демо */
        .fixed-demo-box {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 150px;
            height: 100px;
            background-color: rgba(155, 89, 182, 0.9);
            border: 2px solid #8e44ad;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            z-index: 999;
        }
        
        /* Sticky демо */
        .sticky-demo-header {
            position: sticky;
            top: 60px; /* Ниже фиксированной навигации */
            background-color: rgba(241, 196, 15, 0.9);
            color: #333;
            padding: 15px;
            text-align: center;
            font-weight: bold;
            z-index: 800;
            border-radius: 8px 8px 0 0;
        }
        
        /* Сравнительная таблица */
        .comparison-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            background-color: white;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        .comparison-table th,
        .comparison-table td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: center;
        }
        
        .comparison-table th {
            background-color: #f2f2f2;
            font-weight: bold;
        }
        
        .comparison-table tr:hover {
            background-color: #f9f9f9;
        }
        
        /* Интерактивная демонстрация */
        .interactive-demo {
            background-color: white;
            padding: 25px;
            border-radius: 8px;
            margin-top: 30px;
            border: 1px solid #ddd;
        }
        
        .controls {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-bottom: 20px;
        }
        
        .control-group {
            display: flex;
            flex-direction: column;
        }
        
        label {
            margin-bottom: 5px;
            font-weight: 500;
        }
        
        select, input[type="range"] {
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        
        .value-display {
            display: inline-block;
            min-width: 30px;
            text-align: right;
        }
        
        .playground {
            position: relative;
            width: 100%;
            height: 400px;
            background-color: #ecf0f1;
            border: 2px dashed #bdc3c7;
            border-radius: 4px;
            margin: 20px 0;
            overflow: hidden;
        }
        
        .playground-box {
            position: absolute;
            width: 120px;
            height: 80px;
            background-color: rgba(52, 152, 219, 0.8);
            border: 2px solid #2980b9;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            cursor: move;
            user-select: none;
            transition: all 0.3s ease;
        }
        
        .coordinates {
            text-align: center;
            margin-top: 10px;
            font-size: 14px;
            color: #666;
        }
        
        /* Информационные блоки */
        .tip {
            background-color: #e8f4fc;
            border-left: 4px solid #3498db;
            padding: 15px;
            margin: 20px 0;
            border-radius: 0 4px 4px 0;
        }
        
        .tip strong {
            color: #2c3e50;
        }
        
        .warning {
            background-color: #fde8e8;
            border-left: 4px solid #e74c3c;
            padding: 15px;
            margin: 20px 0;
            border-radius: 0 4px 4px 0;
        }
        
        code {
            background-color: #f8f9fa;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'Courier New', monospace;
            color: #e74c3c;
        }
    </style>
</head>
<body>
    <!-- Фиксированная навигация -->
    <nav class="position-nav">
        <ul>
            <li><a href="#static">Static</a></li>
            <li><a href="#relative">Relative</a></li>
            <li><a href="#absolute">Absolute</a></li>
            <li><a href="#fixed">Fixed</a></li>
            <li><a href="#sticky">Sticky</a></li>
            <li><a href="#comparison">Сравнение</a></li>
            <li><a href="#playground">Песочница</a></li>
        </ul>
    </nav>
    
    <div class="container">
        <div class="main-content">
            <h1>Позиционирование элементов в CSS</h1>
            
            <!-- Static позиционирование -->
            <section id="static" class="demo-section">
                <div class="demo-title">position: static</div>
                <p>Значение по умолчанию. Элемент располагается в нормальном потоке документа.</p>
                
                <div class="demo-container" id="static-demo">
                    <div class="demo-box static-box">Static 1</div>
                    <div class="demo-box static-box">Static 2</div>
                    <div class="demo-box static-box">Static 3</div>
                </div>
                
                <div class="tip">
                    <strong>Особенности:</strong>
                    <ul>
                        <li>Элементы идут друг за другом в потоке</li>
                        <li>Свойства <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code> не работают</li>
                        <li><code>z-index</code> не применяется</li>
                        <li>Это значение по умолчанию для всех элементов</li>
                    </ul>
                </div>
            </section>
            
            <!-- Relative позиционирование -->
            <section id="relative" class="demo-section">
                <div class="demo-title">position: relative</div>
                <p>Элемент сдвигается относительно своего обычного положения, но оригинальное место сохраняется.</p>
                
                <div class="demo-container" id="relative-demo">
                    <div class="demo-box static-box">Static</div>
                    <div class="demo-box relative-box">Relative<br>(top: 30px, left: 50px)</div>
                    <div class="demo-box static-box">Static</div>
                </div>
                
                <div class="tip">
                    <strong>Особенности:</strong>
                    <ul>
                        <li>Сохраняет свое место в потоке</li>
                        <li>Можно сдвигать с помощью <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code></li>
                        <li>Часто используется для создания контекста для <code>position: absolute</code></li>
                        <li>Можно использовать <code>z-index</code></li>
                    </ul>
                </div>
            </section>
            
            <!-- Absolute позиционирование -->
            <section id="absolute" class="demo-section">
                <div class="demo-title">position: absolute</div>
                <p>Элемент вырывается из потока и позиционируется относительно ближайшего позиционированного предка.</p>
                
                <div class="demo-container" id="absolute-demo">
                    <div class="demo-box static-box">Static 1</div>
                    <div class="demo-box absolute-box">Absolute<br>(top: 20px, right: 20px)</div>
                    <div class="demo-box static-box">Static 2</div>
                </div>
                
                <div class="tip">
                    <strong>Особенности:</strong>
                    <ul>
                        <li>Вырывается из нормального потока (не занимает места)</li>
                        <li>Позиционируется относительно ближайшего предка с <code>position</code> ≠ <code>static</code></li>
                        <li>Если такого предка нет — относительно <code>&lt;html&gt;</code></li>
                        <li>Ширина устанавливается по содержимому</li>
                        <li>Идеально для модальных окон, выпадающих меню, тултипов</li>
                    </ul>
                </div>
                
                <div class="warning">
                    <strong>Важно:</strong> Для работы <code>position: absolute</code> внутри элемента, 
                    этот элемент-родитель должен иметь <code>position: relative</code>, <code>absolute</code>, 
                    <code>fixed</code> или <code>sticky</code>.
                </div>
            </section>
            
            <!-- Fixed позиционирование -->
            <section id="fixed" class="demo-section">
                <div class="demo-title">position: fixed</div>
                <p>Элемент фиксируется относительно окна браузера и не двигается при прокрутке.</p>
                
                <div class="demo-container">
                    <p>Прокрутите страницу вниз, чтобы увидеть фиксированный элемент в правом нижнем углу.</p>
                    <p>Фиксированная навигация вверху страницы также использует <code>position: fixed</code>.</p>
                </div>
                
                <div class="tip">
                    <strong>Особенности:</strong>
                    <ul>
                        <li>Фиксируется относительно viewport (окна браузера)</li>
                        <li>Не двигается при прокрутке страницы</li>
                        <li>Не оставляет пустого места в потоке</li>
                        <li>Идеально для шапок, подвалов, кнопок "наверх", чатов</li>
                        <li>Может создавать проблемы на мобильных устройствах</li>
                    </ul>
                </div>
            </section>
            
            <!-- Фиксированный демо-элемент -->
            <div class="fixed-demo-box">
                Fixed Element<br>
                (position: fixed)
            </div>
            
            <!-- Sticky позиционирование -->
            <section id="sticky" class="demo-section">
                <div class="demo-title">position: sticky</div>
                <p>Гибрид relative и fixed. Элемент "прилипает" при достижении заданной позиции при прокрутке.</p>
                
                <div class="sticky-demo-header">
                    Липкий заголовок (position: sticky, top: 60px)
                </div>
                
                <div class="demo-container">
                    <p style="height: 800px; padding: 20px;">
                        Прокрутите этот контейнер, чтобы увидеть, как липкий заголовок "прилипает" к верху.
                        <br><br>
                        Sticky позиционирование работает только внутри своего родительского контейнера.
                        Когда вы прокручиваете за пределы этого контейнера, элемент перестает быть sticky.
                        <br><br>
                        Это полезно для заголовков таблиц, навигации в длинных статьях, сайдбаров.
                    </p>
                </div>
                
                <div class="tip">
                    <strong>Особенности:</strong>
                    <ul>
                        <li>Работает как <code>relative</code>, пока не достигнет точки прилипания</li>
                        <li>Затем работает как <code>fixed</code> (но только внутри родителя)</li>
                        <li>Требует указания хотя бы одного свойства: <code>top</code>, <code>right</code>, <code>bottom</code> или <code>left</code></li>
                        <li>Не поддерживается в старых браузерах (IE)</li>
                        <li>Идеально для липких заголовков, навигации, сайдбаров</li>
                    </ul>
                </div>
            </section>
            
            <!-- Сравнительная таблица -->
            <section id="comparison">
                <h2>Сравнение типов позиционирования</h2>
                
                <table class="comparison-table">
                    <thead>
                        <tr>
                            <th>Тип</th>
                            <th>Поведение в потоке</th>
                            <th>Относительно чего позиционируется</th>
                            <th>При прокрутке</th>
                            <th>Типичное применение</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>static</code></td>
                            <td>В потоке</td>
                            <td>—</td>
                            <td>Двигается</td>
                            <td>Обычные элементы</td>
                        </tr>
                        <tr>
                            <td><code>relative</code></td>
                            <td>В потоке (место сохраняется)</td>
                            <td>Своего обычного положения</td>
                            <td>Двигается</td>
                            <td>Незначительные сдвиги, контекст для absolute</td>
                        </tr>
                        <tr>
                            <td><code>absolute</code></td>
                            <td>Вырывается из потока</td>
                            <td>Ближайшего позиционированного предка</td>
                            <td>Двигается с родителем</td>
                            <td>Модальные окна, тултипы, выпадающие меню</td>
                        </tr>
                        <tr>
                            <td><code>fixed</code></td>
                            <td>Вырывается из потока</td>
                            <td>Viewport (окна браузера)</td>
                            <td>Остается на месте</td>
                            <td>Фиксированные шапки, кнопки "наверх"</td>
                        </tr>
                        <tr>
                            <td><code>sticky</code></td>
                            <td>В потоке</td>
                            <td>Viewport (после прилипания)</td>
                            <td>Прилипает при достижении позиции</td>
                            <td>Липкие заголовки, навигация</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            
            <!-- Интерактивная песочница -->
            <section id="playground" class="interactive-demo">
                <h2>Интерактивная песочница</h2>
                <p>Поэкспериментируйте с различными типами позиционирования:</p>
                
                <div class="controls">
                    <div class="control-group">
                        <label for="positionType">Тип позиционирования:</label>
                        <select id="positionType">
                            <option value="static">static</option>
                            <option value="relative">relative</option>
                            <option value="absolute">absolute</option>
                            <option value="fixed">fixed</option>
                            <option value="sticky">sticky</option>
                        </select>
                    </div>
                    
                    <div class="control-group">
                        <label for="topValue">Top: <span id="topDisplay" class="value-display">50</span>px</label>
                        <input type="range" id="topValue" min="0" max="300" value="50">
                    </div>
                    
                    <div class="control-group">
                        <label for="leftValue">Left: <span id="leftDisplay" class="value-display">50</span>px</label>
                        <input type="range" id="leftValue" min="0" max="300" value="50">
                    </div>
                    
                    <div class="control-group">
                        <label for="zIndexValue">z-index: <span id="zIndexDisplay" class="value-display">1</span></label>
                        <input type="range" id="zIndexValue" min="-10" max="10" value="1">
                    </div>
                </div>
                
                <div class="playground" id="playgroundContainer">
                    <div class="playground-box" id="playgroundBox">
                        Играй со мной!
                    </div>
                    
                    <!-- Статические элементы для контекста -->
                    <div style="position: absolute; top: 100px; left: 100px; width: 120px; height: 80px; background-color: rgba(46, 204, 113, 0.5); border: 2px solid #27ae60; display: flex; align-items: center; justify-content: center;">
                        Static 1
                    </div>
                    
                    <div style="position: absolute; top: 200px; left: 200px; width: 120px; height: 80px; background-color: rgba(155, 89, 182, 0.5); border: 2px solid #8e44ad; display: flex; align-items: center; justify-content: center;">
                        Static 2
                    </div>
                </div>
                
                <div class="coordinates" id="coordinates">
                    Координаты: top: 50px, left: 50px, z-index: 1
                </div>
                
                <div class="tip">
                    <strong>Советы для песочницы:</strong>
                    <ul>
                        <li>Попробуйте <code>absolute</code> и измените top/left</li>
                        <li>Для <code>fixed</code> элемент позиционируется относительно окна</li>
                        <li><code>sticky</code> требует прокрутки родителя (не работает в этой демке)</li>
                        <li>Измените z-index, чтобы управлять порядком наложения</li>
                    </ul>
                </div>
            </section>
            
            <!-- Практические советы -->
            <section class="tip" style="margin-top: 40px;">
                <h3>📝 Практические советы по позиционированию:</h3>
                <ol>
                    <li><strong>Начинайте с static/relative</strong> — используйте абсолютное позиционирование только когда действительно нужно</li>
                    <li><strong>Создавайте контекст</strong> — для <code>absolute</code> элементов добавляйте <code>position: relative</code> родителю</li>
                    <li><strong>Избегайте фиксированной высоты</strong> — особенно с абсолютным позиционированием</li>
                    <li><strong>Проверяйте на мобильных</strong> — <code>fixed</code> может создавать проблемы</li>
                    <li><strong>Используйте sticky для современной навигации</strong> — вместо JavaScript для прилипающих элементов</li>
                    <li><strong>Управляйте z-index осознанно</strong> — создавайте систему значений (10, 20, 30...)</li>
                </ol>
            </section>
        </div>
    </div>

    <script>
        // Интерактивная песочница
        const playgroundBox = document.getElementById('playgroundBox');
        const positionTypeSelect = document.getElementById('positionType');
        const topInput = document.getElementById('topValue');
        const leftInput = document.getElementById('leftValue');
        const zIndexInput = document.getElementById('zIndexValue');
        
        const topDisplay = document.getElementById('topDisplay');
        const leftDisplay = document.getElementById('leftDisplay');
        const zIndexDisplay = document.getElementById('zIndexDisplay');
        const coordinates = document.getElementById('coordinates');
        
        function updatePlayground() {
            const positionType = positionTypeSelect.value;
            const top = parseInt(topInput.value);
            const left = parseInt(leftInput.value);
            const zIndex = parseInt(zIndexInput.value);
            
            // Обновляем значения в интерфейсе
            topDisplay.textContent = top;
            leftDisplay.textContent = left;
            zIndexDisplay.textContent = zIndex;
            
            // Применяем стили к блоку
            playgroundBox.style.position = positionType;
            playgroundBox.style.top = `${top}px`;
            playgroundBox.style.left = `${left}px`;
            playgroundBox.style.zIndex = zIndex;
            
            // Обновляем информацию о координатах
            coordinates.textContent = `Координаты: top: ${top}px, left: ${left}px, z-index: ${zIndex}`;
            
            // Для sticky нужно указать точку прилипания
            if (positionType === 'sticky') {
                playgroundBox.style.top = `${top}px`;
            }
        }
        
        // Drag and drop для блока
        let isDragging = false;
        let startX, startY, initialLeft, initialTop;
        
        playgroundBox.addEventListener('mousedown', startDrag);
        
        function startDrag(e) {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            
            const styles = window.getComputedStyle(playgroundBox);
            initialLeft = parseInt(styles.left) || 0;
            initialTop = parseInt(styles.top) || 0;
            
            document.addEventListener('mousemove', drag);
            document.addEventListener('mouseup', stopDrag);
            
            e.preventDefault();
        }
        
        function drag(e) {
            if (!isDragging) return;
            
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;
            
            const newLeft = initialLeft + deltaX;
            const newTop = initialTop + deltaY;
            
            playgroundBox.style.left = `${newLeft}px`;
            playgroundBox.style.top = `${newTop}px`;
            
            // Обновляем inputs
            topInput.value = Math.max(0, Math.min(300, newTop));
            leftInput.value = Math.max(0, Math.min(300, newLeft));
            
            updatePlayground();
        }
        
        function stopDrag() {
            isDragging = false;
            document.removeEventListener('mousemove', drag);
            document.removeEventListener('mouseup', stopDrag);
        }
        
        // Назначаем обработчики событий
        positionTypeSelect.addEventListener('change', updatePlayground);
        topInput.addEventListener('input', updatePlayground);
        leftInput.addEventListener('input', updatePlayground);
        zIndexInput.addEventListener('input', updatePlayground);
        
        // Плавная прокрутка для навигации
        document.querySelectorAll('.position-nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Учитываем фиксированную навигацию
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Инициализация
        updatePlayground();
    </script>
</body>
</html>
```

## 10. Распространенные проблемы и решения

### Проблема 1: Абсолютное позиционирование выходит за границы
```css
/* Проблема: элемент выходит за пределы экрана */
.tooltip {
    position: absolute;
    top: -100px; /* Может скрыться за верхним краем */
}

/* Решение: проверка границ с помощью JavaScript */
// Или используйте transform для центрирования
.modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

### Проблема 2: Фиксированное позиционирование на мобильных
```css
/* Проблема: fixed элементы могут дрожать на iOS */
.fixed-header {
    position: fixed;
    -webkit-overflow-scrolling: touch; /* Решение для iOS */
}

/* Альтернатива: sticky позиционирование */
.sticky-header {
    position: sticky;
    top: 0;
}
```

### Проблема 3: Z-index войны
```css
/* Проблема: сложно управлять порядком наложения */
.modal { z-index: 9999; }
.overlay { z-index: 9998; }
/* ... и так до 10000 */

/* Решение: система z-index */
:root {
    --z-dropdown: 100;
    --z-sticky: 200;
    --z-fixed: 300;
    --z-modal-backdrop: 400;
    --z-modal: 500;
    --z-popover: 600;
    --z-tooltip: 700;
}

.modal {
    z-index: var(--z-modal);
}
```

### Проблема 4: Sticky не работает
```css
/* Распространенные причины:
   1. Родитель имеет overflow: hidden
   2. Не указано top/right/bottom/left
   3. Высота родителя меньше высоты sticky элемента
*/

/* Решение: */
.container {
    /* overflow: visible; или auto */
    height: 1000px; /* Достаточная высота */
}

.sticky-element {
    position: sticky;
    top: 0; /* Обязательно указать! */
}
```

## 11. Современные альтернативы

### Flexbox для выравнивания
```css
/* Вместо absolute для центрирования */
.center-absolute {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.center-flex {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

### Grid для сложных макетов
```css
/* Вместо absolute для наложения */
.overlay-absolute {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.overlay-grid {
    display: grid;
    grid-template-areas: "overlay";
}

.overlay-grid > * {
    grid-area: overlay;
}
```

### CSS Container Queries
```css
/* Адаптивное позиционирование в зависимости от контейнера */
@container (max-width: 500px) {
    .element {
        position: static; /* На мобильных убираем позиционирование */
    }
}
```

## 12. Лучшие практики

### Правильно:
```css
/* Используйте relative для создания контекста */
.parent {
    position: relative;
}

.child {
    position: absolute;
    top: 0;
    left: 0;
}

/* Центрирование с transform */
.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

/* Sticky для современной навигации */
.navigation {
    position: sticky;
    top: 0;
    z-index: 100;
}

/* Используйте CSS Custom Properties для z-index */
:root {
    --z-base: 1;
    --z-above: 10;
    --z-modal: 100;
}

.element {
    z-index: var(--z-above);
}
```

### Избегайте:
```css
/* Избегайте чрезмерного использования absolute */
.container > * {
    position: absolute; /* ПЛОХО */
}

/* Не злоупотребляйте fixed на мобильных */
.mobile-header {
    position: fixed; /* Может быть проблематично */
}

/* Не используйте z-index без необходимости */
.element {
    z-index: 9999; /* ПЛОХО - создает z-index войны */
}

/* Не забывайте про контекст для absolute */
.parent {
    /* Нет position: relative */
}

.child {
    position: absolute; /* Будет относительно <html> */
}
```

## 13. Практическое задание

Создайте страницу с использованием всех типов позиционирования:
1. Фиксированная шапка с навигацией
2. Липкий сайдбар с оглавлением
3. Модальное окно с абсолютным позиционированием
4. Карточки с относительным позиционированием для эффектов при наведении
5. Кнопку "Наверх" с фиксированным позиционированием
6. Выпадающее меню с абсолютным позиционированием
7. Галерею с наложением подписей на изображения
8. Адаптивный дизайн, который меняет позиционирование на мобильных

---

**Вопросы для самопроверки:**
1. Чем отличается `relative` от `absolute` позиционирование?
2. Как заставить `absolute` элемент позиционироваться относительно родителя?
3. Что такое "липкое" (sticky) позиционирование и когда его использовать?
4. Почему `z-index` может не работать?
5. Как центрировать элемент по вертикали и горизонтали с помощью позиционирования?