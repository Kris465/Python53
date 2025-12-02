# Конспект лекции: 2.8 Макет: CSS Grid

## 1. Что такое CSS Grid?

### Определение
**CSS Grid Layout** — это двумерная система макетирования, которая позволяет создавать сложные сеточные макеты с помощью строк и столбцов. В отличие от Flexbox (одномерного), Grid работает с двумя осями одновременно.

### Аналогия
Представьте таблицу Excel или тетрадь в клеточку:
- **Столбцы** — вертикальные линии
- **Строки** — горизонтальные линии
- **Ячейки** — пересечения столбцов и строк
- **Области** — объединенные ячейки

## 2. Основные понятия CSS Grid

### Структура Grid:
```
        Столбцы (columns)
      1     2     3     4
    ┌─────┬─────┬─────┬─────┐
  1 │  A  │  A  │  B  │  B  │
    ├─────┼─────┼─────┼─────┤
  2 │  C  │  D  │  D  │  E  │ ← Строки (rows)
    ├─────┼─────┼─────┼─────┤
  3 │  C  │  F  │  F  │  E  │
    └─────┴─────┴─────┴─────┘
```

### Терминология:
- **Grid Container** — родительский элемент с `display: grid`
- **Grid Items** — дочерние элементы внутри контейнера
- **Grid Line** — линии, разделяющие сетку
- **Grid Track** — пространство между двумя линиями (столбец или строка)
- **Grid Cell** — минимальная единица сетки (пересечение строки и столбца)
- **Grid Area** — прямоугольная область, состоящая из одной или нескольких ячеек

## 3. Создание Grid Container

### Базовый синтаксис
```css
.container {
    display: grid; /* или inline-grid */
}
```

### Пример:
```html
<div class="grid-container">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
</div>
```

```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(2, 100px);
    gap: 10px;
    padding: 10px;
    background-color: #f0f7ff;
    border: 2px solid #3498db;
}

.grid-item {
    background-color: #3498db;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
}
```

## 4. Свойства Grid Container

### 1. `grid-template-columns` и `grid-template-rows`
Определяют количество и размеры столбцов и строк.

```css
.container {
    display: grid;
    grid-template-columns: 100px 200px 150px; /* 3 столбца */
    grid-template-rows: 100px 200px; /* 2 строки */
}
```

### Единицы измерения:
```css
.container {
    /* Фиксированные размеры */
    grid-template-columns: 100px 200px 300px;
    
    /* Проценты */
    grid-template-columns: 25% 50% 25%;
    
    /* Дробные единицы (fr) */
    grid-template-columns: 1fr 2fr 1fr; /* 1:2:1 */
    
    /* Автоматические размеры */
    grid-template-columns: auto 1fr auto;
    
    /* Минимальные и максимальные значения */
    grid-template-columns: minmax(100px, 1fr) 2fr;
    
    /* Повторение */
    grid-template-columns: repeat(3, 1fr); /* 3 равных столбца */
    grid-template-columns: repeat(4, 100px); /* 4 по 100px */
    
    /* Смешанные значения */
    grid-template-columns: 200px repeat(2, 1fr) 150px;
}
```

### Функция `repeat()`:
```css
/* 4 столбца по 100px */
grid-template-columns: repeat(4, 100px);

/* 6 столбцов: 1fr 2fr 1fr 2fr 1fr 2fr */
grid-template-columns: repeat(3, 1fr 2fr);

/* Адаптивная сетка: минимум 200px, максимум 1fr */
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
```

### Функция `minmax()`:
```css
/* Минимум 100px, максимум 300px */
grid-template-columns: minmax(100px, 300px);

/* Минимум 200px, максимум auto (по содержимому) */
grid-template-rows: minmax(200px, auto);

/* В адаптивных сетках */
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
```

### 2. `grid-template-areas`
Создает именованные области для размещения элементов.

```css
.container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 80px 1fr 80px;
    grid-template-areas:
        "header header header"
        "sidebar main ads"
        "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.ads { grid-area: ads; }
.footer { grid-area: footer; }
```

### 3. `gap` (ранее `grid-gap`)
Определяет промежутки между элементами.

```css
.container {
    display: grid;
    gap: 20px; /* row-gap и column-gap вместе */
    
    /* Или отдельно */
    row-gap: 10px;
    column-gap: 20px;
}
```

### 4. `justify-content` и `align-content`
Выравнивают всю сетку внутри контейнера, если есть свободное пространство.

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(2, 100px);
    width: 500px;
    height: 300px;
    
    /* По горизонтальной оси */
    justify-content: center; /* start | end | center | stretch | space-around | space-between | space-evenly */
    
    /* По вертикальной оси */
    align-content: center;
}
```

### 5. `justify-items` и `align-items`
Выравнивают все элементы внутри их ячеек.

```css
.container {
    display: grid;
    justify-items: center; /* start | end | center | stretch */
    align-items: center;
}

/* Визуализация в ячейке:
   start: ███
   center:  ███
   end:    ███
   stretch: █████
*/
```

### 6. `grid-auto-columns` и `grid-auto-rows`
Определяют размеры автоматически создаваемых строк/столбцов.

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-auto-rows: 50px; /* Все новые строки высотой 50px */
}
```

### 7. `grid-auto-flow`
Определяет алгоритм размещения элементов.

```css
.container {
    display: grid;
    grid-auto-flow: row; /* По умолчанию: слева направо, сверху вниз */
    grid-auto-flow: column; /* Сверху вниз, слева направо */
    grid-auto-flow: dense; /* Пытается заполнить пустоты */
}
```

## 5. Свойства Grid Items

### 1. Позиционирование элементов
```css
.item {
    /* Начальная и конечная линии столбца */
    grid-column-start: 1;
    grid-column-end: 3;
    
    /* Сокращенная запись */
    grid-column: 1 / 3;
    
    /* То же для строк */
    grid-row-start: 1;
    grid-row-end: 3;
    grid-row: 1 / 3;
}
```

### Сокращенные записи:
```css
/* Столбец от линии 2 до линии 4 */
.item { grid-column: 2 / 4; }

/* Столбец от линии 2, занимает 2 трека */
.item { grid-column: 2 / span 2; }

/* Начинается с линии 1, заканчивается на -1 (последняя линия) */
.item { grid-column: 1 / -1; }

/* Занимает все строки */
.item { grid-row: 1 / -1; }
```

### 2. Именованные области
```css
.item {
    grid-area: название; /* Определено в grid-template-areas */
}
```

### 3. Индивидуальное выравнивание
```css
.item {
    /* Переопределяет justify-items для этого элемента */
    justify-self: start | end | center | stretch;
    
    /* Переопределяет align-items для этого элемента */
    align-self: start | end | center | stretch;
}
```

### 4. Порядок отображения
```css
.item {
    order: число; /* По умолчанию 0 */
}
```

## 6. Полный интерактивный пример

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Grid - Полное руководство</title>
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
            min-height: 300px;
            background-color: #ecf0f1;
            border: 2px dashed #bdc3c7;
            border-radius: 4px;
            margin: 20px 0;
            padding: 15px;
        }
        
        .grid-demo {
            display: grid;
            gap: 10px;
            height: 100%;
        }
        
        .grid-item {
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
            min-height: 60px;
        }
        
        .grid-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        
        .item-1 { background-color: #3498db; }
        .item-2 { background-color: #2ecc71; }
        .item-3 { background-color: #e74c3c; }
        .item-4 { background-color: #f39c12; }
        .item-5 { background-color: #9b59b6; }
        .item-6 { background-color: #1abc9c; }
        .item-7 { background-color: #34495e; }
        .item-8 { background-color: #e67e22; }
        .item-9 { background-color: #16a085; }
        
        /* Контролы для демонстрации */
        .controls {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 15px;
            margin-bottom: 20px;
            padding: 15px;
            background-color: #f8f9fa;
            border-radius: 6px;
        }
        
        .control-group {
            display: flex;
            flex-direction: column;
        }
        
        label {
            margin-bottom: 5px;
            font-weight: 500;
            color: #2c3e50;
        }
        
        select, input[type="range"], input[type="text"] {
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
        
        /* Визуализация сетки */
        .grid-lines {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            pointer-events: none;
            display: grid;
            gap: 10px;
            padding: 15px;
        }
        
        .grid-line {
            border: 1px dashed rgba(0, 0, 0, 0.1);
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
        
        pre {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 6px;
            overflow-x: auto;
            margin: 15px 0;
            border: 1px solid #e0e0e0;
        }
        
        /* Адаптивность */
        @media (max-width: 768px) {
            .controls {
                grid-template-columns: 1fr;
            }
            
            .example-grid {
                grid-template-columns: 1fr;
            }
        }
        
        /* Специальные стили для примеров */
        .named-areas {
            display: grid;
            grid-template-columns: 1fr 2fr 1fr;
            grid-template-rows: 80px 1fr 80px;
            grid-template-areas:
                "header header header"
                "sidebar main ads"
                "footer footer footer";
            gap: 10px;
            height: 400px;
        }
        
        .area-header { grid-area: header; background: #3498db; }
        .area-sidebar { grid-area: sidebar; background: #2ecc71; }
        .area-main { grid-area: main; background: #e74c3c; }
        .area-ads { grid-area: ads; background: #f39c12; }
        .area-footer { grid-area: footer; background: #9b59b6; }
        
        /* Интерактивный грид */
        .interactive-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(3, 100px);
            gap: 10px;
        }
        
        .highlight {
            background-color: rgba(231, 76, 60, 0.2) !important;
            border: 2px solid #e74c3c !important;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>CSS Grid - Полное руководство</h1>
        
        <!-- Навигация -->
        <nav class="nav">
            <button class="nav-btn active" data-target="basics">Основы</button>
            <button class="nav-btn" data-target="templates">Шаблоны</button>
            <button class="nav-btn" data-target="positioning">Позиционирование</button>
            <button class="nav-btn" data-target="alignment">Выравнивание</button>
            <button class="nav-btn" data-target="areas">Именованные области</button>
            <button class="nav-btn" data-target="examples">Примеры</button>
        </nav>
        
        <!-- Основы Grid -->
        <section id="basics" class="demo-section">
            <div class="demo-title">Основы CSS Grid</div>
            <p>Создание простой сетки с помощью <code>grid-template-columns</code> и <code>grid-template-rows</code>.</p>
            
            <div class="controls">
                <div class="control-group">
                    <label for="columns">Количество столбцов: <span id="columnsValue" class="value-display">3</span></label>
                    <input type="range" id="columns" min="1" max="6" value="3">
                </div>
                
                <div class="control-group">
                    <label for="rows">Количество строк: <span id="rowsValue" class="value-display">2</span></label>
                    <input type="range" id="rows" min="1" max="6" value="2">
                </div>
                
                <div class="control-group">
                    <label for="gapSize">Размер промежутков: <span id="gapValue" class="value-display">10</span>px</label>
                    <input type="range" id="gapSize" min="0" max="30" value="10">
                </div>
            </div>
            
            <div class="demo-container">
                <div class="grid-demo" id="basicGrid">
                    <!-- Элементы будут добавлены через JavaScript -->
                </div>
            </div>
            
            <div class="tip">
                <strong>Ключевые понятия:</strong>
                <ul>
                    <li><strong>Grid Container</strong> — элемент с <code>display: grid</code></li>
                    <li><strong>Grid Items</strong> — дочерние элементы внутри контейнера</li>
                    <li><strong>Grid Lines</strong> — линии, разделяющие сетку (нумерация начинается с 1)</li>
                    <li><strong>Grid Tracks</strong> — пространство между двумя линиями (столбцы/строки)</li>
                    <li><strong>Grid Cells</strong> — минимальная единица сетки</li>
                    <li><strong>Grid Areas</strong> — прямоугольные области из нескольких ячеек</li>
                </ul>
            </div>
        </section>
        
        <!-- Шаблоны сетки -->
        <section id="templates" class="demo-section" style="display: none;">
            <div class="demo-title">Шаблоны сетки</div>
            <p>Использование различных единиц измерения и функций для создания гибких сеток.</p>
            
            <div class="controls">
                <div class="control-group">
                    <label for="templateType">Тип шаблона:</label>
                    <select id="templateType">
                        <option value="fixed">Фиксированные размеры</option>
                        <option value="percentage">Проценты</option>
                        <option value="fractional">Дробные единицы (fr)</option>
                        <option value="minmax">Minmax()</option>
                        <option value="repeat">Repeat()</option>
                        <option value="auto-fit">Auto-fit</option>
                        <option value="auto-fill">Auto-fill</option>
                    </select>
                </div>
                
                <div class="control-group">
                    <label for="templateCode">CSS код:</label>
                    <input type="text" id="templateCode" readonly style="background: #f8f9fa; font-family: monospace;">
                </div>
            </div>
            
            <div class="demo-container">
                <div class="grid-demo" id="templateGrid">
                    <div class="grid-item item-1">1</div>
                    <div class="grid-item item-2">2</div>
                    <div class="grid-item item-3">3</div>
                    <div class="grid-item item-4">4</div>
                    <div class="grid-item item-5">5</div>
                    <div class="grid-item item-6">6</div>
                </div>
            </div>
            
            <div class="tip">
                <strong>Единицы измерения в Grid:</strong>
                <ul>
                    <li><code>px</code> — фиксированные пиксели</li>
                    <li><code>%</code> — проценты от размера контейнера</li>
                    <li><code>fr</code> — дробные единицы, делят свободное пространство</li>
                    <li><code>auto</code> — размер по содержимому</li>
                    <li><code>minmax(min, max)</code> — диапазон значений</li>
                    <li><code>repeat(n, size)</code> — повторение шаблона</li>
                </ul>
            </div>
        </section>
        
        <!-- Позиционирование элементов -->
        <section id="positioning" class="demo-section" style="display: none;">
            <div class="demo-title">Позиционирование элементов</div>
            <p>Размещение элементов в конкретных ячейках с помощью <code>grid-column</code> и <code>grid-row</code>.</p>
            
            <div class="controls">
                <div class="control-group">
                    <label for="itemSelect">Элемент:</label>
                    <select id="itemSelect">
                        <option value="1">Элемент 1</option>
                        <option value="2">Элемент 2</option>
                        <option value="3">Элемент 3</option>
                        <option value="4">Элемент 4</option>
                    </select>
                </div>
                
                <div class="control-group">
                    <label for="colStart">Начало столбца: <span id="colStartValue" class="value-display">auto</span></label>
                    <input type="range" id="colStart" min="1" max="5" value="1">
                </div>
                
                <div class="control-group">
                    <label for="colEnd">Конец столбца: <span id="colEndValue" class="value-display">auto</span></label>
                    <input type="range" id="colEnd" min="1" max="5" value="1">
                </div>
                
                <div class="control-group">
                    <label for="rowStart">Начало строки: <span id="rowStartValue" class="value-display">auto</span></label>
                    <input type="range" id="rowStart" min="1" max="5" value="1">
                </div>
                
                <div class="control-group">
                    <label for="rowEnd">Конец строки: <span id="rowEndValue" class="value-display">auto</span></label>
                    <input type="range" id="rowEnd" min="1" max="5" value="1">
                </div>
            </div>
            
            <div class="demo-container">
                <div class="grid-demo interactive-grid" id="positioningGrid">
                    <div class="grid-item item-1" id="pos-item-1">1</div>
                    <div class="grid-item item-2" id="pos-item-2">2</div>
                    <div class="grid-item item-3" id="pos-item-3">3</div>
                    <div class="grid-item item-4" id="pos-item-4">4</div>
                </div>
                
                <!-- Визуализация линий сетки -->
                <div class="grid-lines" style="grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(3, 100px);">
                    <div class="grid-line"></div><div class="grid-line"></div><div class="grid-line"></div><div class="grid-line"></div>
                    <div class="grid-line"></div><div class="grid-line"></div><div class="grid-line"></div><div class="grid-line"></div>
                    <div class="grid-line"></div><div class="grid-line"></div><div class="grid-line"></div><div class="grid-line"></div>
                </div>
            </div>
            
            <div class="tip">
                <strong>Синтаксис позиционирования:</strong>
                <pre>
/* Полная запись */
grid-column-start: 1;
grid-column-end: 3;
grid-row-start: 1;
grid-row-end: 2;

/* Сокращенная запись */
grid-column: 1 / 3;      /* от линии 1 до линии 3 */
grid-row: 1 / 2;

/* С помощью span */
grid-column: 1 / span 2; /* начинается с 1, занимает 2 трека */
grid-row: span 2;        /* занимает 2 строки */

/* Относительные значения */
grid-column: 1 / -1;     /* от первой до последней линии */
                </pre>
            </div>
        </section>
        
        <!-- Выравнивание -->
        <section id="alignment" class="demo-section" style="display: none;">
            <div class="demo-title">Выравнивание в Grid</div>
            <p>Два уровня выравнивания: всей сетки и отдельных элементов.</p>
            
            <div class="controls">
                <div class="control-group">
                    <label for="justifyContent">justify-content:</label>
                    <select id="justifyContent">
                        <option value="start">start</option>
                        <option value="end">end</option>
                        <option value="center" selected>center</option>
                        <option value="stretch">stretch</option>
                        <option value="space-around">space-around</option>
                        <option value="space-between">space-between</option>
                        <option value="space-evenly">space-evenly</option>
                    </select>
                </div>
                
                <div class="control-group">
                    <label for="alignContent">align-content:</label>
                    <select id="alignContent">
                        <option value="start">start</option>
                        <option value="end">end</option>
                        <option value="center" selected>center</option>
                        <option value="stretch">stretch</option>
                        <option value="space-around">space-around</option>
                        <option value="space-between">space-between</option>
                        <option value="space-evenly">space-evenly</option>
                    </select>
                </div>
                
                <div class="control-group">
                    <label for="justifyItems">justify-items:</label>
                    <select id="justifyItems">
                        <option value="start">start</option>
                        <option value="end">end</option>
                        <option value="center">center</option>
                        <option value="stretch" selected>stretch</option>
                    </select>
                </div>
                
                <div class="control-group">
                    <label for="alignItems">align-items:</label>
                    <select id="alignItems">
                        <option value="start">start</option>
                        <option value="end">end</option>
                        <option value="center">center</option>
                        <option value="stretch" selected>stretch</option>
                    </select>
                </div>
            </div>
            
            <div class="demo-container" style="height: 400px;">
                <div class="grid-demo" id="alignmentGrid" style="grid-template-columns: repeat(3, 100px); grid-template-rows: repeat(2, 80px);">
                    <div class="grid-item item-1">1</div>
                    <div class="grid-item item-2">2</div>
                    <div class="grid-item item-3">3</div>
                    <div class="grid-item item-4">4</div>
                    <div class="grid-item item-5">5</div>
                    <div class="grid-item item-6">6</div>
                </div>
            </div>
            
            <div class="tip">
                <strong>Разница между свойствами:</strong>
                <ul>
                    <li><code>justify-content</code> / <code>align-content</code> — выравнивание всей сетки внутри контейнера</li>
                    <li><code>justify-items</code> / <code>align-items</code> — выравнивание всех элементов внутри их ячеек</li>
                    <li><code>justify-self</code> / <code>align-self</code> — выравнивание отдельного элемента в его ячейке</li>
                    <li>Для блочной оси используется <code>align-*</code>, для строчной — <code>justify-*</code></li>
                </ul>
            </div>
        </section>
        
        <!-- Именованные области -->
        <section id="areas" class="demo-section" style="display: none;">
            <div class="demo-title">Именованные области (Grid Areas)</div>
            <p>Создание семантических макетов с помощью именованных областей.</p>
            
            <div class="controls">
                <div class="control-group">
                    <label for="layoutSelect">Шаблон макета:</label>
                    <select id="layoutSelect">
                        <option value="standard">Стандартный (header, sidebar, main, footer)</option>
                        <option value="holy-grail">Holy Grail (с двумя сайдбарами)</option>
                        <option value="magazine">Журнальный макет</option>
                        <option value="dashboard">Дашборд</option>
                    </select>
                </div>
                
                <div class="control-group">
                    <label for="areasCode">CSS Grid Areas:</label>
                    <textarea id="areasCode" rows="4" readonly style="background: #f8f9fa; font-family: monospace; resize: none;"></textarea>
                </div>
            </div>
            
            <div class="demo-container">
                <div class="named-areas" id="areasGrid">
                    <div class="grid-item area-header">Header</div>
                    <div class="grid-item area-sidebar">Sidebar</div>
                    <div class="grid-item area-main">Main Content</div>
                    <div class="grid-item area-ads">Ads</div>
                    <div class="grid-item area-footer">Footer</div>
                </div>
            </div>
            
            <div class="tip">
                <strong>Преимущества именованных областей:</strong>
                <ul>
                    <li>Семантичный и читаемый код</li>
                    <li>Легко менять макет без изменения HTML</li>
                    <li>Простая адаптивность через медиа-запросы</li>
                    <li>Наглядная визуализация структуры</li>
                </ul>
            </div>
        </section>
        
        <!-- Практические примеры -->
        <section id="examples" class="demo-section" style="display: none;">
            <div class="demo-title">Практические примеры использования CSS Grid</div>
            
            <div class="example-grid">
                <!-- Пример 1: Галерея изображений -->
                <div class="example-card">
                    <h3 class="example-title">Адаптивная галерея</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; height: 300px;">
                        <div style="background: #3498db; display: flex; align-items: center; justify-content: center; color: white; border-radius: 4px;">1</div>
                        <div style="background: #2ecc71; display: flex; align-items: center; justify-content: center; color: white; border-radius: 4px;">2</div>
                        <div style="background: #e74c3c; display: flex; align-items: center; justify-content: center; color: white; border-radius: 4px;">3</div>
                        <div style="background: #f39c12; display: flex; align-items: center; justify-content: center; color: white; border-radius: 4px;">4</div>
                        <div style="background: #9b59b6; display: flex; align-items: center; justify-content: center; color: white; border-radius: 4px;">5</div>
                        <div style="background: #1abc9c; display: flex; align-items: center; justify-content: center; color: white; border-radius: 4px;">6</div>
                    </div>
                    <code style="display: block; margin-top: 15px; padding: 10px; background: #f8f9fa; border-radius: 4px;">
grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
                    </code>
                </div>
                
                <!-- Пример 2: Макет страницы -->
                <div class="example-card">
                    <h3 class="example-title">Макет страницы</h3>
                    <div style="display: grid; grid-template-columns: 200px 1fr; grid-template-rows: 80px 1fr 60px; gap: 10px; height: 300px;">
                        <div style="background: #3498db; grid-column: 1 / -1; display: flex; align-items: center; justify-content: center; color: white; border-radius: 4px;">Header</div>
                        <div style="background: #2ecc71; display: flex; align-items: center; justify-content: center; color: white; border-radius: 4px;">Sidebar</div>
                        <div style="background: #f8f9fa; padding: 15px; border-radius: 4px; border: 1px solid #dee2e6;">
                            <h4>Основной контент</h4>
                            <p>Содержимое страницы...</p>
                        </div>
                        <div style="background: #34495e; grid-column: 1 / -1; display: flex; align-items: center; justify-content: center; color: white; border-radius: 4px;">Footer</div>
                    </div>
                    <code style="display: block; margin-top: 15px; padding: 10px; background: #f8f9fa; border-radius: 4px;">
grid-template-columns: 200px 1fr;
grid-template-rows: 80px 1fr 60px;
                    </code>
                </div>
                
                <!-- Пример 3: Форма -->
                <div class="example-card">
                    <h3 class="example-title">Сложная форма</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; padding: 15px; background: #f8f9fa; border-radius: 6px;">
                        <input type="text" placeholder="Имя" style="grid-column: 1; padding: 10px; border: 1px solid #ddd; border-radius: 4px;">
                        <input type="text" placeholder="Фамилия" style="grid-column: 2; padding: 10px; border: 1px solid #ddd; border-radius: 4px;">
                        <input type="email" placeholder="Email" style="grid-column: 1 / -1; padding: 10px; border: 1px solid #ddd; border-radius: 4px;">
                        <textarea placeholder="Сообщение" style="grid-column: 1 / -1; padding: 10px; border: 1px solid #ddd; border-radius: 4px; min-height: 100px;"></textarea>
                        <div style="grid-column: 1 / -1; display: flex; gap: 10px; justify-content: flex-end;">
                            <button style="padding: 10px 20px; background: #6c757d; color: white; border: none; border-radius: 4px;">Отмена</button>
                            <button style="padding: 10px 20px; background: #28a745; color: white; border: none; border-radius: 4px;">Отправить</button>
                        </div>
                    </div>
                    <code style="display: block; margin-top: 15px; padding: 10px; background: #f8f9fa; border-radius: 4px;">
display: grid;
grid-template-columns: 1fr 1fr;
gap: 15px;

/* Для элементов, занимающих обе колонки */
grid-column: 1 / -1;
                    </code>
                </div>
                
                <!-- Пример 4: Dashboard -->
                <div class="example-card">
                    <h3 class="example-title">Дашборд</h3>
                    <div style="display: grid; grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(3, 100px); gap: 10px; height: 350px;">
                        <div style="background: #3498db; grid-column: span 2; display: flex; align-items: center; justify-content: center; color: white; border-radius: 4px;">Статистика</div>
                        <div style="background: #2ecc71; display: flex; align-items: center; justify-content: center; color: white; border-radius: 4px;">Уведомления</div>
                        <div style="background: #e74c3c; display: flex; align-items: center; justify-content: center; color: white; border-radius: 4px;">Активность</div>
                        <div style="background: #f39c12; grid-row: span 2; display: flex; align-items: center; justify-content: center; color: white; border-radius: 4px;">График</div>
                        <div style="background: #9b59b6; display: flex; align-items: center; justify-content: center; color: white; border-radius: 4px;">Задачи</div>
                        <div style="background: #1abc9c; grid-column: span 2; display: flex; align-items: center; justify-content: center; color: white; border-radius: 4px;">Прогресс</div>
                        <div style="background: #34495e; display: flex; align-items: center; justify-content: center; color: white; border-radius: 4px;">Настройки</div>
                    </div>
                    <code style="display: block; margin-top: 15px; padding: 10px; background: #f8f9fa; border-radius: 4px;">
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(3, 100px);

/* Элементы могут занимать несколько ячеек */
grid-column: span 2;
grid-row: span 2;
                    </code>
                </div>
            </div>
            
            <div class="tip">
                <strong>Где использовать CSS Grid:</strong>
                <ul>
                    <li>Сложные макеты страниц (шапка, сайдбар, контент, футер)</li>
                    <li>Адаптивные галереи изображений</li>
                    <li>Дашборды и административные панели</li>
                    <li>Карточные интерфейсы</li>
                    <li>Формы с сложным расположением полей</li>
                    <li>Журнальные или редакционные макеты</li>
                </ul>
            </div>
        </section>
        
        <!-- Сравнительная таблица -->
        <section class="demo-section">
            <h2>Сводная таблица свойств CSS Grid</h2>
            
            <table class="comparison-table">
                <thead>
                    <tr>
                        <th>Свойство</th>
                        <th>Применяется к</th>
                        <th>Описание</th>
                        <th>Пример</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>display</code></td>
                        <td>Контейнер</td>
                        <td>Создает grid-контейнер</td>
                        <td><code>grid</code> или <code>inline-grid</code></td>
                    </tr>
                    <tr>
                        <td><code>grid-template-columns</code></td>
                        <td>Контейнер</td>
                        <td>Определяет столбцы сетки</td>
                        <td><code>1fr 2fr 1fr</code></td>
                    </tr>
                    <tr>
                        <td><code>grid-template-rows</code></td>
                        <td>Контейнер</td>
                        <td>Определяет строки сетки</td>
                        <td><code>100px auto 200px</code></td>
                    </tr>
                    <tr>
                        <td><code>grid-template-areas</code></td>
                        <td>Контейнер</td>
                        <td>Создает именованные области</td>
                        <td><code>"header header" "sidebar main"</code></td>
                    </tr>
                    <tr>
                        <td><code>gap</code></td>
                        <td>Контейнер</td>
                        <td>Промежутки между элементами</td>
                        <td><code>20px</code> или <code>10px 20px</code></td>
                    </tr>
                    <tr>
                        <td><code>justify-content</code></td>
                        <td>Контейнер</td>
                        <td>Выравнивание сетки по горизонтали</td>
                        <td><code>center</code>, <code>space-between</code></td>
                    </tr>
                    <tr>
                        <td><code>align-content</code></td>
                        <td>Контейнер</td>
                        <td>Выравнивание сетки по вертикали</td>
                        <td><code>center</code>, <code>space-around</code></td>
                    </tr>
                    <tr>
                        <td><code>grid-column</code></td>
                        <td>Элементы</td>
                        <td>Позиционирование по столбцам</td>
                        <td><code>1 / 3</code> или <code>span 2</code></td>
                    </tr>
                    <tr>
                        <td><code>grid-row</code></td>
                        <td>Элементы</td>
                        <td>Позиционирование по строкам</td>
                        <td><code>2 / 4</code> или <code>span 3</code></td>
                    </tr>
                    <tr>
                        <td><code>grid-area</code></td>
                        <td>Элементы</td>
                        <td>Привязка к именованной области</td>
                        <td><code>header</code> или <code>1 / 1 / 3 / 3</code></td>
                    </tr>
                    <tr>
                        <td><code>justify-self</code></td>
                        <td>Элементы</td>
                        <td>Выравнивание элемента в ячейке по горизонтали</td>
                        <td><code>start</code>, <code>center</code>, <code>end</code></td>
                    </tr>
                    <tr>
                        <td><code>align-self</code></td>
                        <td>Элементы</td>
                        <td>Выравнивание элемента в ячейке по вертикали</td>
                        <td><code>start</code>, <code>center</code>, <code>end</code></td>
                    </tr>
                </tbody>
            </table>
        </section>
        
        <!-- Grid vs Flexbox -->
        <section class="demo-section">
            <h2>Grid vs Flexbox: когда что использовать?</h2>
            
            <table class="comparison-table">
                <thead>
                    <tr>
                        <th>Критерий</th>
                        <th>CSS Grid</th>
                        <th>Flexbox</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Измерения</strong></td>
                        <td>Двумерный (строки и столбцы)</td>
                        <td>Одномерный (строка ИЛИ столбец)</td>
                    </tr>
                    <tr>
                        <td><strong>Подход</strong></td>
                        <td>Контейнер-ориентированный</td>
                        <td>Контент-ориентированный</td>
                    </tr>
                    <tr>
                        <td><strong>Использование</strong></td>
                        <td>Полноценные макеты страниц</td>
                        <td>Распределение пространства внутри компонентов</td>
                    </tr>
                    <tr>
                        <td><strong>Выравнивание</strong></td>
                        <td>Две оси одновременно</td>
                        <td>Одна ось за раз</td>
                    </tr>
                    <tr>
                        <td><strong>Примеры</strong></td>
                        <td>Макеты страниц, сетки, галереи</td>
                        <td>Навигация, карточки, формы</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="tip">
                <strong>Правило выбора:</strong>
                <ul>
                    <li>Используйте <strong>Grid</strong> для создания основного макета страницы</li>
                    <li>Используйте <strong>Flexbox</strong> для выравнивания элементов внутри компонентов</li>
                    <li>Не бойтесь комбинировать: Grid для общего макета, Flexbox для внутреннего расположения</li>
                </ul>
            </div>
        </section>
        
        <!-- Итоговые советы -->
        <section class="tip" style="margin-top: 40px;">
            <h3>📝 Практические советы по работе с CSS Grid:</h3>
            <ol>
                <li><strong>Начинайте с мобильной версии</strong> — используйте <code>auto-fill</code> и <code>minmax()</code> для адаптивности</li>
                <li><strong>Используйте именованные области</strong> для семантичных и поддерживаемых макетов</li>
                <li><strong>Комбинируйте Grid и Flexbox</strong> — Grid для макета, Flexbox для компонентов</li>
                <li><strong>Изучите Grid Inspector в DevTools</strong> — незаменимый инструмент для отладки</li>
                <li><strong>Используйте <code>gap</code> вместо margin</strong> — проще и чище</li>
                <li><strong>Экспериментируйте с <code>auto-fit</code> и <code>auto-fill</code></strong> — мощные инструменты адаптивности</li>
                <li><strong>Не забывайте про поддержку браузеров</strong> — Grid хорошо поддерживается во всех современных браузерах</li>
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
        
        // Базовая сетка
        const basicGrid = document.getElementById('basicGrid');
        const columnsInput = document.getElementById('columns');
        const rowsInput = document.getElementById('rows');
        const gapSizeInput = document.getElementById('gapSize');
        
        const columnsValue = document.getElementById('columnsValue');
        const rowsValue = document.getElementById('rowsValue');
        const gapValue = document.getElementById('gapValue');
        
        function updateBasicGrid() {
            const columns = parseInt(columnsInput.value);
            const rows = parseInt(rowsInput.value);
            const gap = parseInt(gapSizeInput.value);
            
            // Обновляем значения в интерфейсе
            columnsValue.textContent = columns;
            rowsValue.textContent = rows;
            gapValue.textContent = gap;
            
            // Создаем сетку
            basicGrid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
            basicGrid.style.gridTemplateRows = `repeat(${rows}, 100px)`;
            basicGrid.style.gap = `${gap}px`;
            
            // Создаем элементы сетки
            basicGrid.innerHTML = '';
            const totalItems = columns * rows;
            
            for (let i = 1; i <= totalItems; i++) {
                const item = document.createElement('div');
                item.className = `grid-item item-${(i % 9) + 1}`;
                item.textContent = i;
                basicGrid.appendChild(item);
            }
        }
        
        columnsInput.addEventListener('input', updateBasicGrid);
        rowsInput.addEventListener('input', updateBasicGrid);
        gapSizeInput.addEventListener('input', updateBasicGrid);
        
        // Шаблоны сетки
        const templateType = document.getElementById('templateType');
        const templateCode = document.getElementById('templateCode');
        const templateGrid = document.getElementById('templateGrid');
        
        const templates = {
            fixed: 'grid-template-columns: 100px 150px 200px;',
            percentage: 'grid-template-columns: 25% 50% 25%;',
            fractional: 'grid-template-columns: 1fr 2fr 1fr;',
            minmax: 'grid-template-columns: minmax(100px, 1fr) minmax(200px, 2fr);',
            repeat: 'grid-template-columns: repeat(3, 1fr);',
            'auto-fit': 'grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));',
            'auto-fill': 'grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));'
        };
        
        templateType.addEventListener('change', () => {
            const selectedTemplate = templateType.value;
            const css = templates[selectedTemplate];
            
            templateCode.value = css;
            
            // Применяем стили к сетке
            if (selectedTemplate === 'auto-fit' || selectedTemplate === 'auto-fill') {
                templateGrid.style.gridTemplateColumns = `repeat(${selectedTemplate}, minmax(150px, 1fr))`;
            } else {
                templateGrid.style = css;
            }
        });
        
        // Инициализация шаблонов
        templateType.dispatchEvent(new Event('change'));
        
        // Позиционирование элементов
        const itemSelect = document.getElementById('itemSelect');
        const colStart = document.getElementById('colStart');
        const colEnd = document.getElementById('colEnd');
        const rowStart = document.getElementById('rowStart');
        const rowEnd = document.getElementById('rowEnd');
        
        const colStartValue = document.getElementById('colStartValue');
        const colEndValue = document.getElementById('colEndValue');
        const rowStartValue = document.getElementById('rowStartValue');
        const rowEndValue = document.getElementById('rowEndValue');
        
        let selectedItem = document.getElementById('pos-item-1');
        
        function updatePositioning() {
            const itemId = itemSelect.value;
            selectedItem = document.getElementById(`pos-item-${itemId}`);
            
            // Сбрасываем выделение у всех элементов
            document.querySelectorAll('#positioningGrid .grid-item').forEach(item => {
                item.classList.remove('highlight');
            });
            
            // Выделяем выбранный элемент
            selectedItem.classList.add('highlight');
            
            // Обновляем значения в интерфейсе
            colStartValue.textContent = colStart.value;
            colEndValue.textContent = colEnd.value;
            rowStartValue.textContent = rowStart.value;
            rowEndValue.textContent = rowEnd.value;
            
            // Применяем позиционирование
            selectedItem.style.gridColumnStart = colStart.value === '1' ? '' : colStart.value;
            selectedItem.style.gridColumnEnd = colEnd.value === '1' ? '' : colEnd.value;
            selectedItem.style.gridRowStart = rowStart.value === '1' ? '' : rowStart.value;
            selectedItem.style.gridRowEnd = rowEnd.value === '1' ? '' : rowEnd.value;
        }
        
        itemSelect.addEventListener('change', updatePositioning);
        colStart.addEventListener('input', updatePositioning);
        colEnd.addEventListener('input', updatePositioning);
        rowStart.addEventListener('input', updatePositioning);
        rowEnd.addEventListener('input', updatePositioning);
        
        // Выравнивание
        const justifyContent = document.getElementById('justifyContent');
        const alignContent = document.getElementById('alignContent');
        const justifyItems = document.getElementById('justifyItems');
        const alignItems = document.getElementById('alignItems');
        const alignmentGrid = document.getElementById('alignmentGrid');
        
        function updateAlignment() {
            alignmentGrid.style.justifyContent = justifyContent.value;
            alignmentGrid.style.alignContent = alignContent.value;
            alignmentGrid.style.justifyItems = justifyItems.value;
            alignmentGrid.style.alignItems = alignItems.value;
        }
        
        justifyContent.addEventListener('change', updateAlignment);
        alignContent.addEventListener('change', updateAlignment);
        justifyItems.addEventListener('change', updateAlignment);
        alignItems.addEventListener('change', updateAlignment);
        
        // Именованные области
        const layoutSelect = document.getElementById('layoutSelect');
        const areasCode = document.getElementById('areasCode');
        const areasGrid = document.getElementById('areasGrid');
        
        const layouts = {
            'standard': {
                css: `grid-template-areas:
    "header header header"
    "sidebar main ads"
    "footer footer footer";`,
                columns: '1fr 2fr 1fr',
                rows: '80px 1fr 80px'
            },
            'holy-grail': {
                css: `grid-template-areas:
    "header header header"
    "nav main sidebar"
    "footer footer footer";`,
                columns: '200px 1fr 200px',
                rows: '80px 1fr 80px'
            },
            'magazine': {
                css: `grid-template-areas:
    "header header header"
    "featured featured sidebar"
    "content1 content2 sidebar"
    "footer footer footer";`,
                columns: '1fr 1fr 300px',
                rows: '80px 300px 200px 80px'
            },
            'dashboard': {
                css: `grid-template-areas:
    "stats stats stats alerts"
    "chart chart tasks alerts"
    "chart chart progress settings";`,
                columns: '1fr 1fr 1fr 1fr',
                rows: '150px 150px 150px'
            }
        };
        
        layoutSelect.addEventListener('change', () => {
            const layout = layouts[layoutSelect.value];
            areasCode.value = layout.css;
            
            // Обновляем стили сетки
            areasGrid.style.gridTemplateColumns = layout.columns;
            areasGrid.style.gridTemplateRows = layout.rows;
            areasGrid.style.gridTemplateAreas = layout.css
                .split('\n')
                .map(line => line.trim())
                .filter(line => line && line.includes('""'))
                .map(line => line.replace(/grid-template-areas:\s*|;/g, '').trim())
                .join(' ');
        });
        
        // Инициализация
        updateBasicGrid();
        updatePositioning();
        updateAlignment();
        layoutSelect.dispatchEvent(new Event('change'));
    </script>
</body>
</html>
```

## 7. Ключевые особенности и преимущества

### 1. Двумерность
```css
/* Grid работает с двумя осями одновременно */
.container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr; /* Колонки */
    grid-template-rows: 100px auto 200px; /* Строки */
}
```

### 2. Явное и неявное позиционирование
```css
/* Явное - через grid-template-* */
.container {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 100px);
}

/* Неявное - автоматически создаваемые треки */
.container {
    grid-auto-columns: 100px;
    grid-auto-rows: 50px;
    grid-auto-flow: row; /* или column */
}
```

### 3. Перекрытие элементов
```css
.item1 {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
    z-index: 1;
}

.item2 {
    grid-column: 2 / 4;
    grid-row: 2 / 4;
    z-index: 2;
}
```

### 4. Адаптивность
```css
.container {
    /* Адаптивная сетка */
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    
    /* Медиа-запросы */
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-areas:
            "header"
            "main"
            "sidebar"
            "footer";
    }
}
```

## 8. Распространенные паттерны

### 1. Holy Grail Layout
```css
.container {
    display: grid;
    grid-template:
        "header header header" 80px
        "nav main sidebar" 1fr
        "footer footer footer" 80px
        / 200px 1fr 200px;
    min-height: 100vh;
}

.header { grid-area: header; }
.nav { grid-area: nav; }
.main { grid-area: main; }
.sidebar { grid-area: sidebar; }
.footer { grid-area: footer; }
```

### 2. Карточная сетка
```css
.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
}
```

### 3. Форма с метками
```css
.form {
    display: grid;
    grid-template-columns: 150px 1fr;
    gap: 15px;
    align-items: center;
}

label {
    text-align: right;
}

input, textarea {
    grid-column: 2;
}
```

### 4. Dashboard
```css
.dashboard {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 150px 200px 150px;
    gap: 20px;
    
    grid-template-areas:
        "stats stats stats alerts"
        "chart chart tasks alerts"
        "chart chart progress settings";
}

.stats { grid-area: stats; }
.chart { grid-area: chart; }
.tasks { grid-area: tasks; }
.alerts { grid-area: alerts; }
.progress { grid-area: progress; }
.settings { grid-area: settings; }
```

## 9. Grid vs Flexbox

### Когда использовать Grid:
- **Макеты страниц** (шапка, сайдбар, контент, футер)
- **Двумерные сетки** (и строки, и столбцы)
- **Сложные выравнивания** по двум осям
- **Перекрывающиеся элементы**
- **Именованные области**

### Когда использовать Flexbox:
- **Одномерные раскладки** (только строка или только столбец)
- **Распределение пространства** внутри контейнера
- **Выравнивание элементов** по одной оси
- **Навигационные меню**
- **Карточки внутри строки**

### Комбинация Grid и Flexbox:
```css
/* Grid для основного макета */
.page {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 80px 1fr 60px;
}

/* Flexbox для компонентов внутри */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card {
    display: flex;
    flex-direction: column;
}
```

## 10. Поддержка браузерами

### Современная поддержка:
- **Chrome 57+** (2017)
- **Firefox 52+** (2017)
- **Safari 10.1+** (2017)
- **Edge 16+** (2017)
- **iOS Safari 10.3+**
- **Android Browser 67+**

### Автопрефиксер:
Для старых версий может потребоваться:
```css
.container {
    display: -ms-grid; /* IE 10-11 */
    display: grid;
    
    -ms-grid-columns: 1fr 1fr; /* IE 10-11 */
    grid-template-columns: 1fr 1fr;
}
```

**Рекомендация:** Используйте Autoprefixer для автоматического добавления префиксов.

## 11. Инструменты разработчика

### Chrome DevTools:
- **Grid Inspector** — визуализация сетки
- **Номера линий** — отображение номеров линий
- **Именованные области** — подсветка областей
- **Track sizing** — информация о размерах треков

### Firefox DevTools:
- **Grid Display Settings** — настройки отображения
- **Grid Overlays** — наложение сетки
- **Area Names** — имена областей

## 12. Лучшие практики

### Правильно:
```css
/* Используйте fr для гибких сеток */
.container {
    grid-template-columns: 1fr 2fr 1fr;
}

/* Используйте minmax() для адаптивности */
.responsive {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

/* Именованные области для семантики */
.layout {
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
}

/* gap вместо margin */
.container {
    gap: 20px;
}

/* Грид для макета, флекс для компонентов */
.page {
    display: grid; /* Макет страницы */
}

.nav {
    display: flex; /* Навигация внутри */
}
```

### Избегайте:
```css
/* Избыточные вложенные гриды */
.container > div {
    display: grid; /* Часто не нужно */
}

/* Фиксированные размеры без minmax */
.grid {
    grid-template-columns: 300px 300px 300px; /* Плохо для адаптивности */
}

/* Сложные вычисления в Grid */
.grid {
    grid-template-columns: calc(50% - 10px) calc(50% - 10px); /* Лучше использовать gap */
}

/* Избегайте !important с Grid свойствами */
.item {
    grid-column: 1 !important; /* Усложняет поддержку */
}
```

## 13. Практическое задание

Создайте адаптивный макет блога с помощью CSS Grid:
1. Шапка с навигацией (занимает всю ширину)
2. Основной контент с сайдбаром (3:1 соотношение на десктопе)
3. Сетку статей (3 в ряд на десктопе, 2 на планшете, 1 на мобильном)
4. Футер с 4 колонками на десктопе, 2 на планшете, 1 на мобильном
5. Используйте именованные области
6. Реализуйте адаптивность через медиа-запросы
7. Добавьте overlay меню на мобильных
8. Используйте Grid для макета, Flexbox для компонентов внутри

---

**Вопросы для самопроверки:**
1. Чем отличается `grid-template-columns` от `grid-auto-columns`?
2. Как создать адаптивную сетку без медиа-запросов?
3. Что такое `fr` единица и как она работает?
4. Как разместить элемент в конкретной ячейке сетки?
5. Чем Grid лучше Flexbox для создания макетов страниц?