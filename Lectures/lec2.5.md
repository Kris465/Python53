# Конспект лекции: 2.5 Блочная модель (Box Model)

## 1. Что такое блочная модель?

### Определение
**Блочная модель (Box Model)** — это фундаментальная концепция в CSS, которая описывает, как браузер рассчитывает размеры и расположение каждого элемента на веб-странице. Каждый элемент представляется в виде прямоугольного блока, состоящего из нескольких слоев.

### Аналогия
Представьте картину в рамке на стене:
- **Картина (content)** — само изображение
- **Паспарту (padding)** — промежуток между картиной и рамкой
- **Рамка (border)** — декоративная рамка
- **Стена вокруг (margin)** — пространство между рамкой и другими картинами

## 2. Компоненты блочной модели

### Структура блочной модели:
```
┌─────────────────────────────────────────┐
│                margin                    │
│  ┌───────────────────────────────────┐  │
│  │             border                │  │
│  │  ┌─────────────────────────────┐  │  │
│  │  │         padding             │  │  │
│  │  │  ┌───────────────────────┐  │  │  │
│  │  │  │       content         │  │  │  │
│  │  │  │                       │  │  │  │
│  │  │  │                       │  │  │  │
│  │  │  └───────────────────────┘  │  │  │
│  │  │                             │  │  │
│  │  └─────────────────────────────┘  │  │
│  │                                   │  │
│  └───────────────────────────────────┘  │
│                                         │
└─────────────────────────────────────────┘
```

## 3. Подробный разбор каждого компонента

### 1. Content (содержимое)
Область, где отображается текст, изображения или другой контент элемента.

```css
div {
    width: 200px;      /* Ширина content */
    height: 100px;     /* Высота content */
    background-color: lightblue;
}
```

**Свойства управления размером:**
```css
/* Фиксированные размеры */
width: 300px;
height: 200px;

/* Процентные размеры (относительно родителя) */
width: 50%;
height: 75%;

/* Автоматические размеры */
width: auto;      /* Занимает всю доступную ширину (блочные элементы) */
height: auto;     /* Подстраивается под содержимое */

/* Ограничения */
min-width: 100px;
max-width: 500px;
min-height: 50px;
max-height: 300px;
```

### 2. Padding (внутренний отступ)
Пространство между content и border. Увеличивает область фона элемента.

```css
div {
    padding: 20px;                    /* Все стороны: 20px */
    padding: 10px 20px;              /* Верх/низ: 10px, право/лево: 20px */
    padding: 10px 20px 15px 25px;    /* Верх:10px, Право:20px, Низ:15px, Лево:25px */
    
    /* Отдельные свойства */
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 15px;
    padding-left: 25px;
}
```

**Особенности padding:**
- Фон элемента распространяется на padding
- Не может быть отрицательным
- Кликабельная область включает padding
- Не схлопывается (в отличие от margin)

### 3. Border (граница)
Линия, окружающая padding и content.

```css
div {
    /* Короткая запись */
    border: 2px solid #333;
    
    /* Подробная запись */
    border-width: 2px;
    border-style: solid;
    border-color: #333;
    
    /* Отдельные стороны */
    border-top: 1px dashed red;
    border-right: 2px dotted blue;
    border-bottom: 3px double green;
    border-left: 4px groove purple;
    
    /* Скругленные углы */
    border-radius: 10px;
    border-top-left-radius: 5px;
}
```

**Типы границ (border-style):**
- `solid` — сплошная линия
- `dashed` — пунктирная
- `dotted` — точечная
- `double` — двойная линия
- `groove` — 3D-канавка
- `ridge` — 3D-гребень
- `inset` — 3D-вдавленная
- `outset` — 3D-выпуклая
- `none` — нет границы
- `hidden` — скрытая (как none, но влияет на таблицы)

### 4. Margin (внешний отступ)
Пространство между border элемента и соседними элементами.

```css
div {
    margin: 20px;                    /* Все стороны: 20px */
    margin: 10px auto;               /* Верх/низ: 10px, право/лево: auto (центрирование) */
    margin: 10px 20px 15px 25px;    /* Верх:10px, Право:20px, Низ:15px, Лево:25px */
    
    /* Отдельные свойства */
    margin-top: 10px;
    margin-right: 20px;
    margin-bottom: 15px;
    margin-left: 25px;
    
    /* Отрицательные значения */
    margin-left: -10px;  /* Смещает элемент влево */
    
    /* Автоматическое центрирование */
    margin: 0 auto;     /* Центрирование блочного элемента */
}
```

**Особенности margin:**
- Может быть отрицательным
- Не имеет фона (прозрачное)
- Может схлопываться с соседними margin
- Не влияет на размер элемента

## 4. Схлопывание margin (Margin Collapse)

### Что такое схлопывание?
Когда два вертикальных margin встречаются, они сливаются в один больший margin.

```css
/* Пример схлопывания */
.block1 {
    margin-bottom: 30px;
}

.block2 {
    margin-top: 20px;
}

/* Расстояние между блоками будет 30px (max(30, 20)), а не 50px */
```

### Когда происходит схлопывание:
1. **Соседние элементы** (один под другим)
2. **Родитель и первый/последний ребенок** (если нет border/padding)
3. **Пустые блоки** (без content, border, padding)

### Как предотвратить схлопывание:
```css
.parent {
    border-top: 1px solid transparent;    /* Добавить border */
    padding-top: 1px;                     /* Добавить padding */
    overflow: auto;                       /* Изменить overflow */
    display: flow-root;                   /* Современный способ */
}

/* Или использовать flex/grid */
.container {
    display: flex;
    flex-direction: column;
    gap: 20px;  /* Вместо margin */
}
```

## 5. Свойство `box-sizing`

### Проблема стандартной блочной модели:
По умолчанию `box-sizing: content-box` — width/height задают только размер content.

```css
div {
    width: 200px;
    padding: 20px;
    border: 5px solid black;
    /* Фактическая ширина: 200 + 20*2 + 5*2 = 250px */
}
```

### Решение: `box-sizing: border-box`
Ширина и высота включают padding и border.

```css
div {
    box-sizing: border-box;  /* Теперь width = content + padding + border */
    width: 200px;
    padding: 20px;
    border: 5px solid black;
    /* Фактическая ширина: 200px (content: 150px) */
}
```

### Глобальное применение:
```css
* {
    box-sizing: border-box;
}

/* Или лучше так: */
html {
    box-sizing: border-box;
}

*, *::before, *::after {
    box-sizing: inherit;
}
```

### Сравнение двух моделей:
```css
/* content-box (по умолчанию) */
.content-box {
    box-sizing: content-box;
    width: 200px;
    padding: 20px;
    border: 5px solid;
    /* Общая ширина: 200 + 40 + 10 = 250px */
}

/* border-box (рекомендуется) */
.border-box {
    box-sizing: border-box;
    width: 200px;
    padding: 20px;
    border: 5px solid;
    /* Общая ширина: 200px (content: 150px) */
}
```

## 6. Типы элементов по отображению

### Блочные элементы (display: block)
- Занимают всю доступную ширину
- Начинаются с новой строки
- Можно задавать width/height
- Примеры: `<div>`, `<p>`, `<h1>-<h6>`, `<section>`

```css
.block-element {
    display: block;
    width: 300px;
    height: 150px;
    margin: 10px 0;
}
```

### Строчные элементы (display: inline)
- Занимают только необходимую ширину
- Не начинают новую строку
- Нельзя задавать width/height, vertical margin/padding
- Примеры: `<span>`, `<a>`, `<strong>`, `<em>`

```css
.inline-element {
    display: inline;
    /* width и height не работают */
    margin: 10px;  /* Только горизонтальные margin работают */
    padding: 10px; /* Работает, но не влияет на вертикальное пространство */
}
```

### Строчно-блочные элементы (display: inline-block)
- Ведет себя как inline (не начинает новую строку)
- Но можно задавать width/height, margin/padding как у block
- Примеры: `<img>`, `<button>`, `<input>`

```css
.inline-block-element {
    display: inline-block;
    width: 150px;
    height: 50px;
    margin: 10px;
    padding: 10px;
}
```

## 7. Полный пример блочной модели

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Блочная модель CSS</title>
    <style>
        /* Глобальный сброс и box-sizing */
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
        }
        
        .container {
            max-width: 1000px;
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
        
        /* Пример блочной модели */
        .box-model-demo {
            background-color: white;
            border-radius: 8px;
            padding: 30px;
            margin-bottom: 40px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .box {
            width: 300px;
            height: 150px;
            margin: 20px auto;
            position: relative;
        }
        
        .content-area {
            width: 100%;
            height: 100%;
            background-color: #3498db;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            position: relative;
            z-index: 1;
        }
        
        .padding-area {
            position: absolute;
            top: -20px;
            left: -20px;
            right: -20px;
            bottom: -20px;
            background-color: rgba(52, 152, 219, 0.3);
            border: 2px dashed #2980b9;
            z-index: 0;
        }
        
        .border-area {
            position: absolute;
            top: -30px;
            left: -30px;
            right: -30px;
            bottom: -30px;
            border: 5px solid #e74c3c;
            z-index: -1;
        }
        
        .margin-area {
            position: absolute;
            top: -50px;
            left: -50px;
            right: -50px;
            bottom: -50px;
            border: 2px dotted #27ae60;
            z-index: -2;
        }
        
        .labels {
            position: absolute;
            font-size: 12px;
            font-weight: bold;
            color: #2c3e50;
        }
        
        .content-label { top: -15px; left: 50%; transform: translateX(-50%); }
        .padding-label { top: -45px; left: 50%; transform: translateX(-50%); }
        .border-label { top: -75px; left: 50%; transform: translateX(-50%); }
        .margin-label { top: -105px; left: 50%; transform: translateX(-50%); }
        
        /* Демонстрация box-sizing */
        .box-sizing-demo {
            display: flex;
            gap: 30px;
            margin-top: 20px;
        }
        
        .box-sizing-item {
            flex: 1;
            padding: 20px;
            border-radius: 6px;
            background-color: white;
            border: 1px solid #ddd;
        }
        
        .content-box {
            box-sizing: content-box;
            width: 200px;
            padding: 20px;
            border: 5px solid #e74c3c;
            background-color: #fadbd8;
        }
        
        .border-box {
            box-sizing: border-box;
            width: 200px;
            padding: 20px;
            border: 5px solid #2ecc71;
            background-color: #d5f4e6;
        }
        
        .size-info {
            margin-top: 10px;
            font-size: 14px;
            color: #666;
            padding: 10px;
            background-color: #f8f9fa;
            border-radius: 4px;
        }
        
        /* Демонстрация margin collapse */
        .margin-collapse-demo {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            margin-top: 30px;
            border: 1px solid #ddd;
        }
        
        .block-a, .block-b {
            padding: 20px;
            color: white;
            font-weight: bold;
        }
        
        .block-a {
            background-color: #3498db;
            margin-bottom: 30px;
        }
        
        .block-b {
            background-color: #e74c3c;
            margin-top: 20px;
        }
        
        .no-collapse {
            border-top: 1px solid transparent;
            padding-top: 1px;
        }
        
        /* Интерактивный редактор */
        .interactive-editor {
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
        
        input[type="range"] {
            width: 100%;
        }
        
        .value-display {
            display: inline-block;
            min-width: 30px;
            text-align: right;
        }
        
        .demo-box {
            width: 300px;
            height: 150px;
            margin: 20px auto;
            background-color: #3498db;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            transition: all 0.3s ease;
            position: relative;
        }
        
        .demo-box::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border: 2px dashed #2980b9;
            pointer-events: none;
        }
        
        .dimensions {
            text-align: center;
            margin-top: 10px;
            font-size: 14px;
            color: #666;
        }
        
        /* Таблица сравнения */
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
        
        code {
            background-color: #f8f9fa;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'Courier New', monospace;
            color: #e74c3c;
        }
        
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
    </style>
</head>
<body>
    <div class="container">
        <h1>Блочная модель CSS (Box Model)</h1>
        
        <section class="box-model-demo">
            <h2>1. Визуализация блочной модели</h2>
            
            <div class="box">
                <div class="margin-area"></div>
                <div class="border-area"></div>
                <div class="padding-area"></div>
                <div class="content-area">Content</div>
                
                <div class="labels">
                    <div class="content-label">Content</div>
                    <div class="padding-label">Padding</div>
                    <div class="border-label">Border</div>
                    <div class="margin-label">Margin</div>
                </div>
            </div>
            
            <div class="tip">
                <strong>Запомните:</strong> Каждый элемент состоит из 4 слоев:
                <ol>
                    <li><strong>Content</strong> — содержимое (текст, изображения)</li>
                    <li><strong>Padding</strong> — внутренний отступ (фон элемента)</li>
                    <li><strong>Border</strong> — граница вокруг элемента</li>
                    <li><strong>Margin</strong> — внешний отступ (прозрачный)</li>
                </ol>
            </div>
        </section>
        
        <section class="box-model-demo">
            <h2>2. Box-sizing: content-box vs border-box</h2>
            
            <div class="box-sizing-demo">
                <div class="box-sizing-item">
                    <h3>content-box (по умолчанию)</h3>
                    <div class="content-box">
                        width: 200px<br>
                        padding: 20px<br>
                        border: 5px solid
                    </div>
                    <div class="size-info">
                        <strong>Общая ширина:</strong> 250px<br>
                        200px (content) + 40px (padding) + 10px (border) = 250px
                    </div>
                </div>
                
                <div class="box-sizing-item">
                    <h3>border-box (рекомендуется)</h3>
                    <div class="border-box">
                        width: 200px<br>
                        padding: 20px<br>
                        border: 5px solid
                    </div>
                    <div class="size-info">
                        <strong>Общая ширина:</strong> 200px<br>
                        content: 150px + 40px (padding) + 10px (border) = 200px
                    </div>
                </div>
            </div>
            
            <div class="tip">
                <strong>Совет:</strong> Всегда используйте <code>box-sizing: border-box</code> для 
                предсказуемых размеров элементов. Добавьте в начало CSS:
                <pre style="background:#f8f9fa;padding:10px;border-radius:4px;">
* {
    box-sizing: border-box;
}</pre>
            </div>
        </section>
        
        <section class="margin-collapse-demo">
            <h2>3. Схлопывание margin (Margin Collapse)</h2>
            
            <p>Когда два вертикальных margin встречаются, они сливаются в один больший margin:</p>
            
            <div style="position: relative; height: 160px;">
                <div class="block-a">
                    Блок A<br>
                    margin-bottom: 30px
                </div>
                <div class="block-b">
                    Блок B<br>
                    margin-top: 20px
                </div>
                
                <div style="position: absolute; right: 0; top: 20px; background: white; padding: 10px; border: 1px solid #ddd; border-radius: 4px;">
                    <strong>Результат:</strong><br>
                    Расстояние = 30px<br>
                    (max(30, 20), а не 50px)
                </div>
            </div>
            
            <div class="tip">
                <strong>Как предотвратить схлопывание:</strong>
                <ul>
                    <li>Добавьте <code>border</code> или <code>padding</code> к родителю</li>
                    <li>Используйте <code>overflow: auto</code> или <code>display: flow-root</code></li>
                    <li>Используйте Flexbox или Grid с <code>gap</code></li>
                </ul>
            </div>
        </section>
        
        <section class="interactive-editor">
            <h2>4. Интерактивный редактор блочной модели</h2>
            
            <p>Измените значения и наблюдайте, как меняется элемент:</p>
            
            <div class="controls">
                <div class="control-group">
                    <label for="width">Width: <span id="widthValue" class="value-display">300</span>px</label>
                    <input type="range" id="width" min="100" max="500" value="300">
                </div>
                
                <div class="control-group">
                    <label for="padding">Padding: <span id="paddingValue" class="value-display">20</span>px</label>
                    <input type="range" id="padding" min="0" max="100" value="20">
                </div>
                
                <div class="control-group">
                    <label for="border">Border: <span id="borderValue" class="value-display">5</span>px</label>
                    <input type="range" id="border" min="0" max="20" value="5">
                </div>
                
                <div class="control-group">
                    <label for="margin">Margin: <span id="marginValue" class="value-display">20</span>px</label>
                    <input type="range" id="margin" min="0" max="50" value="20">
                </div>
                
                <div class="control-group">
                    <label for="boxSizing">Box Sizing:</label>
                    <select id="boxSizing">
                        <option value="content-box">content-box</option>
                        <option value="border-box" selected>border-box</option>
                    </select>
                </div>
            </div>
            
            <div class="demo-box" id="demoBox">
                Демо блок
            </div>
            
            <div class="dimensions" id="dimensions">
                Общая ширина: 370px (Content: 300px + Padding: 40px + Border: 10px + Margin: 40px)
            </div>
        </section>
        
        <section>
            <h2>5. Свойства блочной модели</h2>
            
            <table class="comparison-table">
                <thead>
                    <tr>
                        <th>Компонент</th>
                        <th>Свойства</th>
                        <th>Описание</th>
                        <th>Может быть отрицательным</th>
                        <th>Влияет на размер элемента</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Content</strong></td>
                        <td><code>width</code>, <code>height</code></td>
                        <td>Размеры содержимого</td>
                        <td>Нет</td>
                        <td>Да</td>
                    </tr>
                    <tr>
                        <td><strong>Padding</strong></td>
                        <td><code>padding</code>, <code>padding-top</code> и др.</td>
                        <td>Внутренний отступ, фон элемента</td>
                        <td>Нет</td>
                        <td>Да (зависит от box-sizing)</td>
                    </tr>
                    <tr>
                        <td><strong>Border</strong></td>
                        <td><code>border</code>, <code>border-width</code> и др.</td>
                        <td>Граница вокруг элемента</td>
                        <td>Нет</td>
                        <td>Да (зависит от box-sizing)</td>
                    </tr>
                    <tr>
                        <td><strong>Margin</strong></td>
                        <td><code>margin</code>, <code>margin-top</code> и др.</td>
                        <td>Внешний отступ, прозрачный</td>
                        <td>Да</td>
                        <td>Нет (только на положение)</td>
                    </tr>
                </tbody>
            </table>
        </section>
        
        <section class="tip" style="margin-top: 40px;">
            <h3>📝 Практические советы:</h3>
            <ol>
                <li>Всегда используйте <code>box-sizing: border-box</code> для предсказуемых размеров</li>
                <li>Для центрирования блока используйте <code>margin: 0 auto</code></li>
                <li>Избегайте фиксированных высот — пусть контент определяет высоту</li>
                <li>Используйте <code>min-width</code>/<code>max-width</code> для адаптивности</li>
                <li>Помните о схлопывании margin при верстке</li>
            </ol>
        </section>
    </div>

    <script>
        // Интерактивный редактор
        const demoBox = document.getElementById('demoBox');
        const widthInput = document.getElementById('width');
        const paddingInput = document.getElementById('padding');
        const borderInput = document.getElementById('border');
        const marginInput = document.getElementById('margin');
        const boxSizingSelect = document.getElementById('boxSizing');
        
        const widthValue = document.getElementById('widthValue');
        const paddingValue = document.getElementById('paddingValue');
        const borderValue = document.getElementById('borderValue');
        const marginValue = document.getElementById('marginValue');
        const dimensions = document.getElementById('dimensions');
        
        function updateBox() {
            const width = parseInt(widthInput.value);
            const padding = parseInt(paddingInput.value);
            const border = parseInt(borderInput.value);
            const margin = parseInt(marginInput.value);
            const boxSizing = boxSizingSelect.value;
            
            // Обновляем значения в интерфейсе
            widthValue.textContent = width;
            paddingValue.textContent = padding;
            borderValue.textContent = border;
            marginValue.textContent = margin;
            
            // Применяем стили к блоку
            demoBox.style.width = `${width}px`;
            demoBox.style.padding = `${padding}px`;
            demoBox.style.borderWidth = `${border}px`;
            demoBox.style.borderStyle = 'solid';
            demoBox.style.borderColor = '#e74c3c';
            demoBox.style.margin = `${margin}px auto`;
            demoBox.style.boxSizing = boxSizing;
            
            // Рассчитываем и показываем размеры
            const totalPadding = padding * 2;
            const totalBorder = border * 2;
            const totalMargin = margin * 2;
            
            let contentWidth, totalWidth;
            
            if (boxSizing === 'border-box') {
                contentWidth = width - totalPadding - totalBorder;
                totalWidth = width + totalMargin;
            } else {
                contentWidth = width;
                totalWidth = width + totalPadding + totalBorder + totalMargin;
            }
            
            dimensions.innerHTML = `
                <strong>Размеры:</strong><br>
                Content width: ${contentWidth}px<br>
                Общая ширина: ${totalWidth}px
                (Content: ${contentWidth}px + Padding: ${totalPadding}px + 
                Border: ${totalBorder}px + Margin: ${totalMargin}px)
            `;
        }
        
        // Назначаем обработчики событий
        widthInput.addEventListener('input', updateBox);
        paddingInput.addEventListener('input', updateBox);
        borderInput.addEventListener('input', updateBox);
        marginInput.addEventListener('input', updateBox);
        boxSizingSelect.addEventListener('change', updateBox);
        
        // Инициализация
        updateBox();
    </script>
</body>
</html>
```

## 8. Особенности работы с блочной моделью

### Размеры элементов
```css
/* Правильный расчет размеров */
.element {
    box-sizing: border-box;
    width: 100%;            /* 100% от родителя */
    max-width: 1200px;      /* Но не больше 1200px */
    padding: 20px;
    margin: 0 auto;         /* Центрирование */
}

/* Адаптивные padding/margin */
.container {
    padding: 20px;
}

@media (max-width: 768px) {
    .container {
        padding: 10px;      /* Меньше padding на мобильных */
    }
}
```

### Границы и скругления
```css
/* Современные границы */
.button {
    border: 2px solid transparent;  /* Зарезервировать место */
    border-radius: 8px;
    transition: border-color 0.3s;
}

.button:hover {
    border-color: #3498db;  /* Плавное изменение */
}

/* Множественные границы с box-shadow */
.card {
    border: 1px solid #ddd;
    box-shadow: 0 0 0 5px #f0f0f0;  /* Вторая "граница" */
}

/* Скругления отдельных углов */
.modal {
    border-radius: 10px 10px 0 0;  /* Только верхние углы */
}
```

### Отступы в Flexbox/Grid
```css
/* Старый способ (margin) */
.flex-container-old {
    display: flex;
}

.flex-container-old .item {
    margin-right: 20px;
}

.flex-container-old .item:last-child {
    margin-right: 0;  /* Убираем у последнего */
}

/* Новый способ (gap) */
.flex-container-new {
    display: flex;
    gap: 20px;  /* Проще и лучше */
}

/* Grid тоже поддерживает gap */
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
```

## 9. Распространенные проблемы и решения

### Проблема 1: Полосы прокрутки из-за padding
```css
/* Проблема: 100% + padding = полоса прокрутки */
.problem {
    width: 100%;
    padding: 20px;
    /* Ширина: 100% + 40px > 100% */
}

/* Решение: используем box-sizing */
.solution {
    box-sizing: border-box;
    width: 100%;
    padding: 20px;
    /* Ширина: 100% (включая padding) */
}
```

### Проблема 2: Центрирование элементов
```css
/* Для блочных элементов */
.block-center {
    width: 300px;
    margin: 0 auto;  /* Центрирование по горизонтали */
}

/* Для строчно-блочных */
.inline-block-center {
    display: inline-block;
    text-align: center;  /* В родительском элементе */
}

/* Современный способ с Flexbox */
.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

### Проблема 3: Выравнивание по вертикали
```css
/* Старый способ (фиксированная высота) */
.old-vertical {
    height: 100px;
    line-height: 100px;  /* Должно совпадать с height */
}

/* Современный способ */
.modern-vertical {
    display: flex;
    align-items: center;
    /* Или */
    display: grid;
    place-items: center;
}
```

## 10. Инструменты разработчика

### Chrome DevTools:
1. **Инспектор элементов** — показывает все компоненты блочной модели
2. **Box Model Diagram** — визуализация padding, border, margin
3. **Вычисленные стили** — показывает итоговые значения
4. **Изменение в реальном времени**

### Полезные комбинации клавиш:
- `Ctrl+Shift+C` — выбрать элемент
- `Esc` — открыть консоль
- `Ctrl+Shift+M` — режим адаптивности

## 11. Лучшие практики

### Правильно:
```css
/* Используйте border-box везде */
* {
    box-sizing: border-box;
}

/* Единицы измерения отступов */
.container {
    padding: 1rem;      /* Относительно шрифта */
    margin: 2em auto;   /* Относительно шрифта элемента */
    max-width: 1200px;
}

/* Адаптивные отступы */
.section {
    padding: clamp(1rem, 5vw, 3rem);  /* Минимум 1rem, максимум 3rem */
}

/* Используйте gap вместо margin для сеток */
.grid {
    display: grid;
    gap: 1.5rem;  /* И для Flexbox тоже работает */
}
```

### Избегайте:
```css
/* Фиксированные высоты (если не нужно) */
.element {
    height: 200px;  /* Плохо, если контент больше */
}

/* Чрезмерное вложение отступов */
.parent {
    padding: 20px;
}
.parent .child {
    margin: 20px;  /* Двойные отступы */
}

/* Жесткие margin для последних элементов */
.item {
    margin-right: 20px;
}
.item:last-child {
    margin-right: 0;  /* Лучше использовать gap */
}
```

## 12. Практическое задание

Создайте макет страницы с использованием блочной модели:
1. Шапка с логотипом и навигацией (padding, border-bottom)
2. Основной контент в центре (max-width, margin auto)
3. Боковая панель (фиксированная ширина, margin-left)
4. Карточки товаров (padding, border, border-radius, box-shadow)
5. Подвал (margin-top, padding, border-top)
6. Реализуйте адаптивность с помощью медиа-запросов
7. Используйте box-sizing: border-box
8. Продемонстрируйте схлопывание и предотвращение margin collapse

---

**Вопросы для самопроверки:**
1. Что такое схлопывание margin и когда оно происходит?
2. Чем отличается padding от margin?
3. Как box-sizing влияет на расчет размеров элемента?
4. Почему рекомендуется использовать border-box?
5. Как центрировать блочный элемент по горизонтали?