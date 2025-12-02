# Конспект лекции: 2.7 Макет: Flexbox

## 1. Что такое Flexbox?

### Определение
**Flexbox** (Flexible Box Layout) — это модуль CSS для создания гибких и адаптивных макетов. Он позволяет легко выравнивать элементы, распределять пространство и управлять порядком отображения, даже когда размер элементов неизвестен или динамичен.

### Аналогия
Представьте гибкий контейнер с игрушками:
- **Контейнер** — коробка, которая может растягиваться и сжиматься
- **Игрушки (элементы)** — предметы внутри коробки
- **Flexbox** — правила, как игрушки располагаются в коробке:
  - В ряд или колонку
  - С равными промежутками
  - Выровненные по краям или центру
  - Меняющие порядок при необходимости

## 2. Основные понятия Flexbox

### Две оси Flexbox:
```
Основная ось (main axis) ───────────────▶
Поперечная ось (cross axis) │
                            │
                            ▼
```

### Структура:
- **Flex Container** — родительский элемент с `display: flex`
- **Flex Items** — дочерние элементы внутри контейнера

## 3. Создание Flex Container

### Базовый синтаксис
```css
.container {
    display: flex; /* или inline-flex */
}
```

### Пример:
```html
<div class="flex-container">
    <div class="flex-item">Элемент 1</div>
    <div class="flex-item">Элемент 2</div>
    <div class="flex-item">Элемент 3</div>
</div>
```

```css
.flex-container {
    display: flex;
    border: 2px solid #3498db;
    padding: 10px;
    background-color: #f0f7ff;
}

.flex-item {
    padding: 20px;
    margin: 5px;
    background-color: #3498db;
    color: white;
    text-align: center;
}
```

## 4. Свойства Flex Container

### 1. `flex-direction` — направление основной оси
Определяет, в каком направлении располагаются элементы.

```css
.container {
    display: flex;
    flex-direction: значение;
}
```

**Значения:**
- `row` (по умолчанию) — слева направо
- `row-reverse` — справа налево
- `column` — сверху вниз
- `column-reverse` — снизу вверх

**Пример:**
```css
.row {
    flex-direction: row; /* 1 2 3 */
}

.row-reverse {
    flex-direction: row-reverse; /* 3 2 1 */
}

.column {
    flex-direction: column; 
    /* 1
       2
       3 */
}

.column-reverse {
    flex-direction: column-reverse;
    /* 3
       2
       1 */
}
```

### 2. `justify-content` — выравнивание по основной оси
Распределяет элементы вдоль основной оси.

```css
.container {
    display: flex;
    justify-content: значение;
}
```

**Значения:**
- `flex-start` (по умолчанию) — к началу оси
- `flex-end` — к концу оси
- `center` — по центру
- `space-between` — равные промежутки между элементами
- `space-around` — равные промежутки вокруг элементов
- `space-evenly` — равные промежутки между и вокруг элементов

**Визуализация:**
```
flex-start:    [###]   [###]   [###]
flex-end:        [###]   [###]   [###]
center:        [###]   [###]   [###]
space-between: [###]      [###]      [###]
space-around:   [###]    [###]    [###]
space-evenly:  [###]   [###]   [###]
```

**Пример:**
```css
.start {
    justify-content: flex-start;
}

.center {
    justify-content: center;
}

.between {
    justify-content: space-between;
}

.around {
    justify-content: space-around;
}
```

### 3. `align-items` — выравнивание по поперечной оси
Выравнивает элементы вдоль поперечной оси (перпендикулярно основной).

```css
.container {
    display: flex;
    align-items: значение;
}
```

**Значения:**
- `stretch` (по умолчанию) — растягивает на всю высоту контейнера
- `flex-start` — к началу поперечной оси
- `flex-end` — к концу поперечной оси
- `center` — по центру поперечной оси
- `baseline` — по базовой линии текста

**Пример с разной высотой элементов:**
```css
.container {
    display: flex;
    align-items: center; /* Выравнивание по центру по вертикали */
    height: 200px;
    border: 2px solid #333;
}

.item {
    width: 100px;
    padding: 10px;
    background-color: lightblue;
    margin: 5px;
}

.tall {
    height: 150px;
}

.short {
    height: 50px;
}
```

### 4. `flex-wrap` — перенос элементов
Определяет, переносятся ли элементы на новую строку/столбец.

```css
.container {
    display: flex;
    flex-wrap: значение;
}
```

**Значения:**
- `nowrap` (по умолчанию) — все в одну линию
- `wrap` — перенос на новую строку
- `wrap-reverse` — перенос на новую строку в обратном порядке

**Пример:**
```css
.nowrap {
    flex-wrap: nowrap; /* Все элементы в одну строку */
    width: 300px; /* Явно маленькая ширина */
}

.wrap {
    flex-wrap: wrap; /* Перенос на новую строку */
    width: 300px;
}
```

### 5. `align-content` — выравнивание строк (при многострочном контейнере)
Распределяет строки вдоль поперечной оси при `flex-wrap: wrap`.

```css
.container {
    display: flex;
    flex-wrap: wrap;
    align-content: значение;
}
```

**Значения:** (аналогично `justify-content`)
- `stretch` (по умолчанию)
- `flex-start`
- `flex-end`
- `center`
- `space-between`
- `space-around`
- `space-evenly`

**Пример:**
```css
.container {
    display: flex;
    flex-wrap: wrap;
    height: 400px;
    align-content: space-between;
}

.item {
    width: 100px;
    height: 50px;
    background-color: lightblue;
    margin: 5px;
}
```

### 6. `gap`, `row-gap`, `column-gap` — промежутки между элементами
Современный способ создания отступов между элементами.

```css
.container {
    display: flex;
    gap: 20px; /* Промежуток между элементами */
}

/* Или отдельно */
.container {
    display: flex;
    row-gap: 10px;    /* Между строками */
    column-gap: 20px; /* Между колонками */
}
```

**Преимущества перед margin:**
- Не нужно убирать margin у последнего элемента
- Проще управлять
- Работает и с Grid

## 5. Свойства Flex Items

### 1. `order` — порядок отображения
Изменяет порядок отображения элементов без изменения HTML.

```css
.item {
    order: число; /* По умолчанию 0 */
}
```

**Пример:**
```css
.item1 { order: 3; }
.item2 { order: 1; }
.item3 { order: 2; }
.item4 { order: 4; }

/* Отобразится: 2, 3, 1, 4 */
```

### 2. `flex-grow` — коэффициент роста
Определяет, насколько элемент может увеличиваться относительно других.

```css
.item {
    flex-grow: число; /* По умолчанию 0 */
}
```

**Пример:**
```css
.container {
    display: flex;
    width: 500px;
}

.item {
    width: 100px;
}

.grow-1 { flex-grow: 1; }   /* Займет оставшееся пространство */
.grow-2 { flex-grow: 2; }   /* В 2 раза больше, чем grow-1 */
```

### 3. `flex-shrink` — коэффициент сжатия
Определяет, насколько элемент может уменьшаться относительно других.

```css
.item {
    flex-shrink: число; /* По умолчанию 1 */
}
```

**Пример:**
```css
.container {
    display: flex;
    width: 300px;
}

.item {
    width: 150px;
}

.shrink-0 { flex-shrink: 0; } /* Не сжимается */
.shrink-2 { flex-shrink: 2; } /* Сжимается в 2 раза сильнее */
```

### 4. `flex-basis` — базовый размер
Определяет начальный размер элемента до распределения свободного пространства.

```css
.item {
    flex-basis: значение; /* auto, px, %, и т.д. */
}
```

**Пример:**
```css
.item {
    flex-basis: 200px; /* Начальная ширина 200px */
}
```

### 5. Сокращенное свойство `flex`
Объединяет `flex-grow`, `flex-shrink` и `flex-basis`.

```css
.item {
    flex: flex-grow flex-shrink flex-basis;
}
```

**Распространенные значения:**
```css
.flex-1 { flex: 1; }           /* flex: 1 1 0% */
.flex-auto { flex: auto; }     /* flex: 1 1 auto */
.flex-none { flex: none; }     /* flex: 0 0 auto */
.flex-initial { flex: initial; } /* flex: 0 1 auto */

/* Конкретные значения */
.custom { flex: 2 1 200px; }   /* grow:2, shrink:1, basis:200px */
```

### 6. `align-self` — индивидуальное выравнивание
Переопределяет `align-items` для отдельного элемента.

```css
.item {
    align-self: значение; /* те же значения, что у align-items */
}
```

**Пример:**
```css
.container {
    display: flex;
    align-items: center; /* Все по центру */
}

.special-item {
    align-self: flex-start; /* Этот элемент сверху */
}
```

## 6. Полный интерактивный пример

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox - Полное руководство</title>
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
            background-color: #f8f9fa;
            padding: 20px;
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
        
        h3 {
            color: #2c3e50;
            margin: 20px 0 10px 0;
        }
        
        /* Навигация */
        .nav {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-bottom: 30px;
            flex-wrap: wrap;
        }
        
        .nav-btn {
            padding: 10px 20px;
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 500;
            transition: background-color 0.3s;
        }
        
        .nav-btn:hover {
            background-color: #2980b9;
        }
        
        .nav-btn.active {
            background-color: #2c3e50;
        }
        
        /* Демо-секции */
        .demo-section {
            background-color: white;
            border-radius: 8px;
            padding: 30px;
            margin-bottom: 40px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
        
        /* Контейнеры для демонстрации */
        .demo-container {
            position: relative;
            width: 100%;
            min-height: 200px;
            background-color: #ecf0f1;
            border: 2px dashed #bdc3c7;
            border-radius: 4px;
            margin: 20px 0;
            padding: 15px;
        }
        
        .flex-demo {
            display: flex;
            gap: 10px;
        }
        
        .flex-item {
            min-width: 80px;
            min-height: 80px;
            padding: 20px;
            background-color: #3498db;
            color: white;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            border-radius: 4px;
            transition: all 0.3s ease;
        }
        
        .flex-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        
        .item-1 { background-color: #3498db; }
        .item-2 { background-color: #2ecc71; }
        .item-3 { background-color: #e74c3c; }
        .item-4 { background-color: #f39c12; }
        .item-5 { background-color: #9b59b6; }
        .item-6 { background-color: #1abc9c; }
        
        /* Контролы для демонстрации */
        .controls {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            margin-bottom: 20px;
            padding: 15px;
            background-color: #f8f9fa;
            border-radius: 6px;
        }
        
        .control-group {
            display: flex;
            flex-direction: column;
            min-width: 200px;
            flex: 1;
        }
        
        label {
            margin-bottom: 5px;
            font-weight: 500;
            color: #2c3e50;
        }
        
        select, input[type="range"] {
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            background-color: white;
        }
        
        .value-display {
            display: inline-block;
            min-width: 30px;
            text-align: right;
            font-weight: bold;
            color: #3498db;
        }
        
        /* Визуализация осей */
        .axis-visualization {
            position: absolute;
            top: 10px;
            right: 10px;
            display: flex;
            gap: 20px;
            font-size: 12px;
            color: #7f8c8d;
        }
        
        .main-axis, .cross-axis {
            display: flex;
            align-items: center;
            gap: 5px;
        }
        
        .axis-line {
            width: 40px;
            height: 2px;
            background-color: #e74c3c;
        }
        
        .cross-axis .axis-line {
            width: 2px;
            height: 20px;
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
            text-align: left;
        }
        
        .comparison-table th {
            background-color: #f2f2f2;
            font-weight: bold;
        }
        
        /* Практические примеры */
        .example-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }
        
        .example-card {
            background-color: white;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            border: 1px solid #e0e0e0;
        }
        
        .example-title {
            color: #2c3e50;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 1px solid #ecf0f1;
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
        
        /* Адаптивность */
        @media (max-width: 768px) {
            .controls {
                flex-direction: column;
            }
            
            .control-group {
                min-width: 100%;
            }
            
            .example-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Flexbox - Полное руководство</h1>
        
        <!-- Навигация -->
        <nav class="nav">
            <button class="nav-btn active" data-target="direction">Направление</button>
            <button class="nav-btn" data-target="justify">Выравнивание</button>
            <button class="nav-btn" data-target="align">Вертикальное выравнивание</button>
            <button class="nav-btn" data-target="wrap">Перенос</button>
            <button class="nav-btn" data-target="items">Свойства элементов</button>
            <button class="nav-btn" data-target="examples">Примеры</button>
        </nav>
        
        <!-- flex-direction -->
        <section id="direction" class="demo-section">
            <div class="demo-title">flex-direction</div>
            <p>Определяет направление основной оси, вдоль которой располагаются элементы.</p>
            
            <div class="controls">
                <div class="control-group">
                    <label for="directionSelect">flex-direction:</label>
                    <select id="directionSelect">
                        <option value="row">row (по умолчанию)</option>
                        <option value="row-reverse">row-reverse</option>
                        <option value="column">column</option>
                        <option value="column-reverse">column-reverse</option>
                    </select>
                </div>
            </div>
            
            <div class="demo-container">
                <div class="axis-visualization">
                    <div class="main-axis">
                        <span>Основная ось</span>
                        <div class="axis-line"></div>
                        <span>→</span>
                    </div>
                    <div class="cross-axis">
                        <span>Поперечная ось</span>
                        <div class="axis-line"></div>
                        <span>↓</span>
                    </div>
                </div>
                
                <div class="flex-demo" id="directionDemo">
                    <div class="flex-item item-1">1</div>
                    <div class="flex-item item-2">2</div>
                    <div class="flex-item item-3">3</div>
                    <div class="flex-item item-4">4</div>
                </div>
            </div>
            
            <div class="tip">
                <strong>Запомните:</strong>
                <ul>
                    <li><code>row</code> — слева направо (по умолчанию)</li>
                    <li><code>row-reverse</code> — справа налево</li>
                    <li><code>column</code> — сверху вниз</li>
                    <li><code>column-reverse</code> — снизу вверх</li>
                    <li>Основная ось зависит от направления!</li>
                </ul>
            </div>
        </section>
        
        <!-- justify-content -->
        <section id="justify" class="demo-section" style="display: none;">
            <div class="demo-title">justify-content</div>
            <p>Выравнивает элементы вдоль основной оси. Распределяет свободное пространство.</p>
            
            <div class="controls">
                <div class="control-group">
                    <label for="justifySelect">justify-content:</label>
                    <select id="justifySelect">
                        <option value="flex-start">flex-start (по умолчанию)</option>
                        <option value="flex-end">flex-end</option>
                        <option value="center">center</option>
                        <option value="space-between">space-between</option>
                        <option value="space-around">space-around</option>
                        <option value="space-evenly">space-evenly</option>
                    </select>
                </div>
                
                <div class="control-group">
                    <label for="justifyWidth">Ширина контейнера: <span id="widthValue" class="value-display">100</span>%</label>
                    <input type="range" id="justifyWidth" min="30" max="100" value="100">
                </div>
            </div>
            
            <div class="demo-container">
                <div class="flex-demo" id="justifyDemo">
                    <div class="flex-item item-1">1</div>
                    <div class="flex-item item-2">2</div>
                    <div class="flex-item item-3">3</div>
                </div>
            </div>
            
            <div class="tip">
                <strong>Визуализация:</strong><br>
                <code>flex-start</code>: ███ ███ ███<br>
                <code>flex-end</code>: &nbsp;&nbsp;&nbsp;███ ███ ███<br>
                <code>center</code>: &nbsp;&nbsp;███ ███ ███<br>
                <code>space-between</code>: ███&nbsp;&nbsp;&nbsp;&nbsp;███&nbsp;&nbsp;&nbsp;&nbsp;███<br>
                <code>space-around</code>: &nbsp;███ &nbsp;███ &nbsp;███<br>
                <code>space-evenly</code>: ███ &nbsp;███ &nbsp;███
            </div>
        </section>
        
        <!-- align-items -->
        <section id="align" class="demo-section" style="display: none;">
            <div class="demo-title">align-items</div>
            <p>Выравнивает элементы вдоль поперечной оси (перпендикулярно основной).</p>
            
            <div class="controls">
                <div class="control-group">
                    <label for="alignSelect">align-items:</label>
                    <select id="alignSelect">
                        <option value="stretch">stretch (по умолчанию)</option>
                        <option value="flex-start">flex-start</option>
                        <option value="flex-end">flex-end</option>
                        <option value="center">center</option>
                        <option value="baseline">baseline</option>
                    </select>
                </div>
                
                <div class="control-group">
                    <label for="containerHeight">Высота контейнера: <span id="heightValue" class="value-display">200</span>px</label>
                    <input type="range" id="containerHeight" min="100" max="400" value="200">
                </div>
            </div>
            
            <div class="demo-container" id="alignContainer" style="height: 200px;">
                <div class="flex-demo" id="alignDemo">
                    <div class="flex-item item-1" style="height: 80px;">1</div>
                    <div class="flex-item item-2" style="height: 120px; font-size: 24px;">2</div>
                    <div class="flex-item item-3" style="height: 60px; font-size: 18px;">3</div>
                    <div class="flex-item item-4" style="height: 100px; padding-top: 30px;">4</div>
                </div>
            </div>
            
            <div class="tip">
                <strong>Особенности:</strong>
                <ul>
                    <li><code>stretch</code> — растягивает на всю высоту (ширину) контейнера</li>
                    <li><code>baseline</code> — выравнивает по базовой линии текста</li>
                    <li>Для <code>column</code> направления работает аналогично, но по горизонтали</li>
                </ul>
            </div>
        </section>
        
        <!-- flex-wrap -->
        <section id="wrap" class="demo-section" style="display: none;">
            <div class="demo-title">flex-wrap и gap</div>
            <p>Управляет переносом элементов и создает промежутки между ними.</p>
            
            <div class="controls">
                <div class="control-group">
                    <label for="wrapSelect">flex-wrap:</label>
                    <select id="wrapSelect">
                        <option value="nowrap">nowrap (по умолчанию)</option>
                        <option value="wrap">wrap</option>
                        <option value="wrap-reverse">wrap-reverse</option>
                    </select>
                </div>
                
                <div class="control-group">
                    <label for="gapValue">gap: <span id="gapDisplay" class="value-display">10</span>px</label>
                    <input type="range" id="gapValue" min="0" max="40" value="10">
                </div>
                
                <div class="control-group">
                    <label for="containerWidthWrap">Ширина контейнера: <span id="widthWrapValue" class="value-display">400</span>px</label>
                    <input type="range" id="containerWidthWrap" min="200" max="800" value="400">
                </div>
            </div>
            
            <div class="demo-container" id="wrapContainer" style="width: 400px;">
                <div class="flex-demo" id="wrapDemo">
                    <div class="flex-item item-1" style="width: 120px;">1</div>
                    <div class="flex-item item-2" style="width: 120px;">2</div>
                    <div class="flex-item item-3" style="width: 120px;">3</div>
                    <div class="flex-item item-4" style="width: 120px;">4</div>
                    <div class="flex-item item-5" style="width: 120px;">5</div>
                    <div class="flex-item item-6" style="width: 120px;">6</div>
                </div>
            </div>
            
            <div class="tip">
                <strong>Преимущества gap:</strong>
                <ul>
                    <li>Не нужно убирать margin у последнего элемента</li>
                    <li>Работает как с Flexbox, так и с Grid</li>
                    <li>Можно задавать отдельно <code>row-gap</code> и <code>column-gap</code></li>
                    <li>Более семантично и проще в поддержке</li>
                </ul>
            </div>
        </section>
        
        <!-- Свойства элементов -->
        <section id="items" class="demo-section" style="display: none;">
            <div class="demo-title">Свойства flex-элементов</div>
            <p>Индивидуальные настройки для каждого элемента внутри контейнера.</p>
            
            <div class="controls">
                <div class="control-group">
                    <label for="flexGrow1">Элемент 1 - flex-grow: <span id="grow1Value" class="value-display">1</span></label>
                    <input type="range" id="flexGrow1" min="0" max="5" value="1">
                </div>
                
                <div class="control-group">
                    <label for="flexGrow2">Элемент 2 - flex-grow: <span id="grow2Value" class="value-display">2</span></label>
                    <input type="range" id="flexGrow2" min="0" max="5" value="2">
                </div>
                
                <div class="control-group">
                    <label for="flexGrow3">Элемент 3 - flex-grow: <span id="grow3Value" class="value-display">0</span></label>
                    <input type="range" id="flexGrow3" min="0" max="5" value="0">
                </div>
                
                <div class="control-group">
                    <label for="order1">Элемент 1 - order: <span id="order1Value" class="value-display">0</span></label>
                    <input type="range" id="order1" min="0" max="5" value="0">
                </div>
            </div>
            
            <div class="demo-container">
                <div class="flex-demo" id="itemsDemo" style="justify-content: space-between;">
                    <div class="flex-item item-1" id="item1" style="flex-grow: 1; order: 0;">
                        1<br>grow: 1<br>order: 0
                    </div>
                    <div class="flex-item item-2" id="item2" style="flex-grow: 2; order: 0;">
                        2<br>grow: 2<br>order: 0
                    </div>
                    <div class="flex-item item-3" id="item3" style="flex-grow: 0; order: 0;">
                        3<br>grow: 0<br>order: 0
                    </div>
                </div>
            </div>
            
            <div class="tip">
                <strong>Ключевые свойства элементов:</strong>
                <ul>
                    <li><code>order</code> — меняет порядок отображения</li>
                    <li><code>flex-grow</code> — определяет способность к расширению</li>
                    <li><code>flex-shrink</code> — определяет способность к сжатию</li>
                    <li><code>flex-basis</code> — начальный размер элемента</li>
                    <li><code>align-self</code> — индивидуальное выравнивание</li>
                    <li><code>flex</code> — сокращение для grow, shrink, basis</li>
                </ul>
            </div>
        </section>
        
        <!-- Практические примеры -->
        <section id="examples" class="demo-section" style="display: none;">
            <div class="demo-title">Практические примеры использования Flexbox</div>
            
            <div class="example-grid">
                <!-- Пример 1: Карточки -->
                <div class="example-card">
                    <h3 class="example-title">Карточки в ряд</h3>
                    <div style="display: flex; gap: 15px; flex-wrap: wrap;">
                        <div style="flex: 1; min-width: 200px; background: #f8f9fa; padding: 15px; border-radius: 6px; border: 1px solid #dee2e6;">
                            <h4>Карточка 1</h4>
                            <p>Содержимое карточки</p>
                        </div>
                        <div style="flex: 1; min-width: 200px; background: #f8f9fa; padding: 15px; border-radius: 6px; border: 1px solid #dee2e6;">
                            <h4>Карточка 2</h4>
                            <p>Содержимое карточки</p>
                        </div>
                        <div style="flex: 1; min-width: 200px; background: #f8f9fa; padding: 15px; border-radius: 6px; border: 1px solid #dee2e6;">
                            <h4>Карточка 3</h4>
                            <p>Содержимое карточки</p>
                        </div>
                    </div>
                    <code style="display: block; margin-top: 15px; padding: 10px; background: #f8f9fa; border-radius: 4px;">
display: flex;<br>
gap: 15px;<br>
flex-wrap: wrap;
                    </code>
                </div>
                
                <!-- Пример 2: Навигация -->
                <div class="example-card">
                    <h3 class="example-title">Навигационное меню</h3>
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px; background: #2c3e50; border-radius: 6px; color: white;">
                        <div style="font-weight: bold;">Логотип</div>
                        <div style="display: flex; gap: 20px;">
                            <a href="#" style="color: white; text-decoration: none;">Главная</a>
                            <a href="#" style="color: white; text-decoration: none;">О нас</a>
                            <a href="#" style="color: white; text-decoration: none;">Контакты</a>
                        </div>
                        <button style="padding: 8px 16px; background: #3498db; color: white; border: none; border-radius: 4px;">Войти</button>
                    </div>
                    <code style="display: block; margin-top: 15px; padding: 10px; background: #f8f9fa; border-radius: 4px;">
/* Контейнер */<br>
display: flex;<br>
justify-content: space-between;<br>
align-items: center;<br><br>
/* Меню */<br>
display: flex;<br>
gap: 20px;
                    </code>
                </div>
                
                <!-- Пример 3: Форма -->
                <div class="example-card">
                    <h3 class="example-title">Форма с гибкими полями</h3>
                    <div style="display: flex; flex-direction: column; gap: 15px;">
                        <div style="display: flex; gap: 10px;">
                            <input type="text" placeholder="Имя" style="flex: 1; padding: 10px; border: 1px solid #ddd; border-radius: 4px;">
                            <input type="text" placeholder="Фамилия" style="flex: 1; padding: 10px; border: 1px solid #ddd; border-radius: 4px;">
                        </div>
                        <input type="email" placeholder="Email" style="padding: 10px; border: 1px solid #ddd; border-radius: 4px;">
                        <textarea placeholder="Сообщение" style="padding: 10px; border: 1px solid #ddd; border-radius: 4px; min-height: 100px;"></textarea>
                        <div style="display: flex; justify-content: flex-end; gap: 10px;">
                            <button style="padding: 10px 20px; background: #6c757d; color: white; border: none; border-radius: 4px;">Отмена</button>
                            <button style="padding: 10px 20px; background: #28a745; color: white; border: none; border-radius: 4px;">Отправить</button>
                        </div>
                    </div>
                    <code style="display: block; margin-top: 15px; padding: 10px; background: #f8f9fa; border-radius: 4px;">
/* Контейнер формы */<br>
display: flex;<br>
flex-direction: column;<br>
gap: 15px;<br><br>
/* Строка с двумя полями */<br>
display: flex;<br>
gap: 10px;<br><br>
/* Кнопки */<br>
display: flex;<br>
justify-content: flex-end;<br>
gap: 10px;
                    </code>
                </div>
                
                <!-- Пример 4: Галерея -->
                <div class="example-card">
                    <h3 class="example-title">Адаптивная галерея</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
                        <div style="flex: 1 1 200px; max-width: 200px; height: 150px; background: #3498db; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: white;">Изображение 1</div>
                        <div style="flex: 1 1 200px; max-width: 200px; height: 150px; background: #2ecc71; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: white;">Изображение 2</div>
                        <div style="flex: 1 1 200px; max-width: 200px; height: 150px; background: #e74c3c; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: white;">Изображение 3</div>
                        <div style="flex: 1 1 200px; max-width: 200px; height: 150px; background: #f39c12; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: white;">Изображение 4</div>
                    </div>
                    <code style="display: block; margin-top: 15px; padding: 10px; background: #f8f9fa; border-radius: 4px;">
display: flex;<br>
flex-wrap: wrap;<br>
gap: 10px;<br>
justify-content: center;<br><br>
/* Элементы галереи */<br>
flex: 1 1 200px;<br>
max-width: 200px;
                    </code>
                </div>
            </div>
            
            <div class="tip">
                <strong>Где использовать Flexbox:</strong>
                <ul>
                    <li>Навигационные меню и шапки сайтов</li>
                    <li>Карточки товаров или статей</li>
                    <li>Формы и группы полей ввода</li>
                    <li>Галереи изображений</li>
                    <li>Макеты с сайдбарами</li>
                    <li>Центрирование элементов по вертикали и горизонтали</li>
                </ul>
            </div>
        </section>
        
        <!-- Сравнительная таблица -->
        <section class="demo-section">
            <h2>Сводная таблица свойств Flexbox</h2>
            
            <table class="comparison-table">
                <thead>
                    <tr>
                        <th>Свойство</th>
                        <th>Применяется к</th>
                        <th>Значения по умолчанию</th>
                        <th>Описание</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>display</code></td>
                        <td>Контейнер</td>
                        <td><code>flex</code> или <code>inline-flex</code></td>
                        <td>Создает flex-контейнер</td>
                    </tr>
                    <tr>
                        <td><code>flex-direction</code></td>
                        <td>Контейнер</td>
                        <td><code>row</code></td>
                        <td>Направление основной оси</td>
                    </tr>
                    <tr>
                        <td><code>justify-content</code></td>
                        <td>Контейнер</td>
                        <td><code>flex-start</code></td>
                        <td>Выравнивание по основной оси</td>
                    </tr>
                    <tr>
                        <td><code>align-items</code></td>
                        <td>Контейнер</td>
                        <td><code>stretch</code></td>
                        <td>Выравнивание по поперечной оси</td>
                    </tr>
                    <tr>
                        <td><code>flex-wrap</code></td>
                        <td>Контейнер</td>
                        <td><code>nowrap</code></td>
                        <td>Перенос элементов</td>
                    </tr>
                    <tr>
                        <td><code>gap</code></td>
                        <td>Контейнер</td>
                        <td><code>0</code></td>
                        <td>Промежутки между элементами</td>
                    </tr>
                    <tr>
                        <td><code>order</code></td>
                        <td>Элементы</td>
                        <td><code>0</code></td>
                        <td>Порядок отображения</td>
                    </tr>
                    <tr>
                        <td><code>flex-grow</code></td>
                        <td>Элементы</td>
                        <td><code>0</code></td>
                        <td>Коэффициент роста</td>
                    </tr>
                    <tr>
                        <td><code>flex-shrink</code></td>
                        <td>Элементы</td>
                        <td><code>1</code></td>
                        <td>Коэффициент сжатия</td>
                    </tr>
                    <tr>
                        <td><code>flex-basis</code></td>
                        <td>Элементы</td>
                        <td><code>auto</code></td>
                        <td>Начальный размер элемента</td>
                    </tr>
                    <tr>
                        <td><code>align-self</code></td>
                        <td>Элементы</td>
                        <td><code>auto</code></td>
                        <td>Индивидуальное выравнивание</td>
                    </tr>
                </tbody>
            </table>
        </section>
        
        <!-- Итоговые советы -->
        <section class="tip" style="margin-top: 40px;">
            <h3>📝 Практические советы по работе с Flexbox:</h3>
            <ol>
                <li><strong>Начинайте с мобильной версии</strong> — Flexbox отлично подходит для адаптивности</li>
                <li><strong>Используйте gap вместо margin</strong> — проще и современнее</li>
                <li><strong>flex: 1 для равного распределения</strong> — вместо фиксированных ширины/высоты</li>
                <li><strong>flex-wrap: wrap для адаптивности</strong> — элементы автоматически переносятся</li>
                <li><strong>align-items: center для вертикального центрирования</strong> — забываем про line-height</li>
                <li><strong>justify-content: space-between для навигации</strong> — лого слева, меню справа</li>
                <li><strong>Проверяйте поддержку в старых браузерах</strong> — Flexbox хорошо поддерживается, но есть нюансы</li>
            </ol>
        </section>
    </div>

    <script>
        // Навигация между секциями
        const navButtons = document.querySelectorAll('.nav-btn');
        const sections = document.querySelectorAll('.demo-section');
        
        navButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Убираем активный класс у всех кнопок
                navButtons.forEach(btn => btn.classList.remove('active'));
                // Добавляем активный класс текущей кнопке
                button.classList.add('active');
                
                // Скрываем все секции
                sections.forEach(section => {
                    section.style.display = 'none';
                });
                
                // Показываем нужную секцию
                const targetId = button.getAttribute('data-target');
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.style.display = 'block';
                }
            });
        });
        
        // flex-direction демо
        const directionSelect = document.getElementById('directionSelect');
        const directionDemo = document.getElementById('directionDemo');
        
        directionSelect.addEventListener('change', () => {
            directionDemo.style.flexDirection = directionSelect.value;
        });
        
        // justify-content демо
        const justifySelect = document.getElementById('justifySelect');
        const justifyWidth = document.getElementById('justifyWidth');
        const justifyDemo = document.getElementById('justifyDemo');
        const widthValue = document.getElementById('widthValue');
        
        justifySelect.addEventListener('change', () => {
            justifyDemo.style.justifyContent = justifySelect.value;
        });
        
        justifyWidth.addEventListener('input', () => {
            const width = justifyWidth.value;
            widthValue.textContent = width;
            justifyDemo.style.width = `${width}%`;
        });
        
        // align-items демо
        const alignSelect = document.getElementById('alignSelect');
        const containerHeight = document.getElementById('containerHeight');
        const alignDemo = document.getElementById('alignDemo');
        const alignContainer = document.getElementById('alignContainer');
        const heightValue = document.getElementById('heightValue');
        
        alignSelect.addEventListener('change', () => {
            alignDemo.style.alignItems = alignSelect.value;
        });
        
        containerHeight.addEventListener('input', () => {
            const height = containerHeight.value;
            heightValue.textContent = height;
            alignContainer.style.height = `${height}px`;
        });
        
        // flex-wrap демо
        const wrapSelect = document.getElementById('wrapSelect');
        const gapValue = document.getElementById('gapValue');
        const containerWidthWrap = document.getElementById('containerWidthWrap');
        const wrapDemo = document.getElementById('wrapDemo');
        const wrapContainer = document.getElementById('wrapContainer');
        const gapDisplay = document.getElementById('gapDisplay');
        const widthWrapValue = document.getElementById('widthWrapValue');
        
        wrapSelect.addEventListener('change', () => {
            wrapDemo.style.flexWrap = wrapSelect.value;
        });
        
        gapValue.addEventListener('input', () => {
            const gap = gapValue.value;
            gapDisplay.textContent = gap;
            wrapDemo.style.gap = `${gap}px`;
        });
        
        containerWidthWrap.addEventListener('input', () => {
            const width = containerWidthWrap.value;
            widthWrapValue.textContent = width;
            wrapContainer.style.width = `${width}px`;
        });
        
        // Свойства элементов демо
        const flexGrow1 = document.getElementById('flexGrow1');
        const flexGrow2 = document.getElementById('flexGrow2');
        const flexGrow3 = document.getElementById('flexGrow3');
        const order1 = document.getElementById('order1');
        
        const grow1Value = document.getElementById('grow1Value');
        const grow2Value = document.getElementById('grow2Value');
        const grow3Value = document.getElementById('grow3Value');
        const order1Value = document.getElementById('order1Value');
        
        const item1 = document.getElementById('item1');
        const item2 = document.getElementById('item2');
        const item3 = document.getElementById('item3');
        
        function updateItemsDemo() {
            const grow1 = flexGrow1.value;
            const grow2 = flexGrow2.value;
            const grow3 = flexGrow3.value;
            const orderVal = order1.value;
            
            // Обновляем значения в интерфейсе
            grow1Value.textContent = grow1;
            grow2Value.textContent = grow2;
            grow3Value.textContent = grow3;
            order1Value.textContent = orderVal;
            
            // Применяем стили к элементам
            item1.style.flexGrow = grow1;
            item1.style.order = orderVal;
            item2.style.flexGrow = grow2;
            item3.style.flexGrow = grow3;
            
            // Обновляем текст в элементах
            item1.innerHTML = `1<br>grow: ${grow1}<br>order: ${orderVal}`;
            item2.innerHTML = `2<br>grow: ${grow2}<br>order: 0`;
            item3.innerHTML = `3<br>grow: ${grow3}<br>order: 0`;
        }
        
        flexGrow1.addEventListener('input', updateItemsDemo);
        flexGrow2.addEventListener('input', updateItemsDemo);
        flexGrow3.addEventListener('input', updateItemsDemo);
        order1.addEventListener('input', updateItemsDemo);
        
        // Инициализация
        updateItemsDemo();
    </script>
</body>
</html>
```

## 7. Распространенные паттерны и решения

### 1. Центрирование по вертикали и горизонтали
```css
/* Классическая проблема, простое решение */
.centered {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Или любая высота */
}

/* Центрирование одного элемента */
.parent {
    display: flex;
}

.centered-child {
    margin: auto; /* Работает в flex-контейнере! */
}
```

### 2. Липкий футер
```css
body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

main {
    flex: 1; /* Занимает всё доступное пространство */
}

footer {
    /* Футер всегда внизу */
}
```

### 3. Адаптивная навигация
```css
/* Десктоп: меню в строку */
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Мобильные: меню в колонку */
@media (max-width: 768px) {
    .nav {
        flex-direction: column;
        gap: 10px;
    }
}
```

### 4. Карточки одинаковой высоты
```css
.card-container {
    display: flex;
    gap: 20px;
}

.card {
    flex: 1; /* Все карточки одинаковой ширины */
    display: flex;
    flex-direction: column;
}

.card-content {
    flex: 1; /* Контент растягивается, кнопка внизу */
}
```

### 5. Сетка с ограниченным количеством колонок
```css
.grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.grid-item {
    flex: 1 1 300px; /* Минимальная ширина 300px */
    max-width: calc(33.333% - 20px); /* Не более 3 колонок */
}
```

## 8. Flexbox vs Grid

### Когда использовать Flexbox:
- **Одномерные макеты** (строка или колонка)
- **Распределение пространства** внутри контейнера
- **Выравнивание элементов**
- **Навигационные меню**
- **Карточки в строку**

### Когда использовать Grid:
- **Двумерные макеты** (и строки, и колонки)
- **Сложные сетки** с пересекающимися областями
- **Макеты с явными позициями**
- **Шапки/подвалы** с фиксированными областями

### Их можно комбинировать:
```css
/* Grid для основного макета */
.layout {
    display: grid;
    grid-template-columns: 250px 1fr;
}

/* Flexbox для содержимого внутри */
.sidebar {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
```

## 9. Поддержка браузерами

### Современная поддержка:
- **Chrome 29+** (2013)
- **Firefox 28+** (2014)
- **Safari 9+** (2015)
- **Edge 12+** (2015)
- **iOS Safari 9+**
- **Android Browser 4.4+**

### Автопрефиксер:
Для старых браузеров может потребоваться:
```css
.container {
    display: -webkit-box;      /* Old iOS, Safari */
    display: -ms-flexbox;      /* IE 10 */
    display: -webkit-flex;     /* Old Android */
    display: flex;             /* Современные браузеры */
}
```

**Рекомендация:** Используйте Autoprefixer или PostCSS для автоматического добавления префиксов.

## 10. Лучшие практики

### Правильно:
```css
/* Используйте gap вместо margin */
.container {
    display: flex;
    gap: 1rem;
}

/* flex: 1 для равномерного распределения */
.equal-columns {
    display: flex;
}

.equal-columns > * {
    flex: 1;
}

/* Минимальная ширина для адаптивности */
.responsive-grid {
    display: flex;
    flex-wrap: wrap;
}

.responsive-grid > * {
    flex: 1 1 300px; /* Минимум 300px, но может расти */
}

/* Центрирование одним свойством */
.centered {
    display: flex;
    place-content: center; /* justify-content + align-content */
    place-items: center;   /* justify-items + align-items */
}
```

### Избегайте:
```css
/* Фиксированные размеры в flex-контейнере */
.container {
    display: flex;
}

.item {
    width: 200px; /* ПЛОХО - лучше flex-basis */
    height: 100px; /* ПЛОХО - мешает align-items: stretch */
}

/* Избыточные обертки */
.wrapper {
    display: flex;
    justify-content: center;
}

.wrapper > div {
    display: flex; /* Часто не нужно */
}

/* Слишком много вложенных flex-контейнеров */
/* Если возможно, используйте Grid */
```

## 11. Практическое задание

Создайте адаптивный макет сайта с использованием Flexbox:
1. Шапка с логотипом слева и навигацией справа
2. Основной контент с сайдбаром (сайдбар фиксированной ширины, контент гибкий)
3. Галерея карточек (3 в ряд на десктопе, 2 на планшете, 1 на мобильном)
4. Форма с гибкими полями ввода
5. Футер с колонками (равная ширина)
6. Кнопку "Наверх" в правом нижнем углу
7. Адаптивное меню (горизонтальное на десктопе, вертикальное на мобильных)
8. Используйте gap вместо margin где возможно

---

**Вопросы для самопроверки:**
1. Чем отличается `justify-content` от `align-items`?
2. Как заставить элементы переноситься на новую строку?
3. Что делает свойство `flex: 1`?
4. Как изменить порядок элементов без изменения HTML?
5. Как центрировать элемент по вертикали и горизонтали с помощью Flexbox?