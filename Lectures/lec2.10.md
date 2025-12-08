# Конспект лекции: 2.10 Трансформации и переходы (CSS Transforms & Transitions)

## 1. Что такое CSS трансформации и переходы?

### Определение
**CSS трансформации (transforms)** — это свойства, которые позволяют изменять форму, размер и положение элементов в 2D и 3D пространстве.

**CSS переходы (transitions)** — это механизм плавного изменения свойств CSS от одного состояния к другому в течение заданного времени.

### Аналогия
Представьте анимационный фильм:
- **Начальный кадр** — исходное состояние элемента
- **Конечный кадр** — конечное состояние после трансформации
- **Трансформации** — как герой меняет позу или положение
- **Переходы** — плавное движение между кадрами (анимация)

## 2. CSS Transform - 2D трансформации

### Базовый синтаксис
```css
.element {
    transform: функция(значение);
}
```

### Основные 2D-функции:

#### 1. `translate()` — перемещение
```css
/* Перемещение по осям X и Y */
.translate {
    transform: translate(50px, 100px); /* X, Y */
}

/* Отдельно по осям */
.translate-x {
    transform: translateX(50px); /* Только по X */
}

.translate-y {
    transform: translateY(100px); /* Только по Y */
}

/* Проценты от собственного размера элемента */
.translate-percent {
    transform: translate(50%, 50%); /* 50% от ширины и высоты элемента */
}
```

#### 2. `scale()` — масштабирование
```css
/* Масштабирование по обеим осям */
.scale {
    transform: scale(1.5); /* Увеличение в 1.5 раза */
}

/* Разное масштабирование по осям */
.scale-xy {
    transform: scale(2, 0.5); /* X: 2x, Y: 0.5x */
}

/* Отдельно по осям */
.scale-x {
    transform: scaleX(2); /* Только по X */
}

.scale-y {
    transform: scaleY(0.5); /* Только по Y */
}
```

#### 3. `rotate()` — вращение
```css
/* Вращение в градусах */
.rotate {
    transform: rotate(45deg); /* 45 градусов по часовой стрелке */
}

/* Вращение в других единицах */
.rotate-rad {
    transform: rotate(0.785rad); /* Радианы */
}

.rotate-turn {
    transform: rotate(0.25turn); /* 1 turn = 360deg */
}
```

#### 4. `skew()` — наклон (искажение)
```css
/* Наклон по обеим осям */
.skew {
    transform: skew(30deg, 20deg); /* X, Y */
}

/* Отдельно по осям */
.skew-x {
    transform: skewX(30deg); /* Наклон по X */
}

.skew-y {
    transform: skewY(20deg); /* Наклон по Y */
}
```

#### 5. `matrix()` — матричная трансформация
```css
/* Матрица преобразования: scaleX, skewY, skewX, scaleY, translateX, translateY */
.matrix {
    transform: matrix(1, 0.5, -0.5, 1, 50, 100);
}
```

### Комбинирование трансформаций:
```css
.element {
    transform: translate(50px, 100px) rotate(45deg) scale(1.5);
    /* Порядок важен! */
}
```

## 3. CSS Transform - 3D трансформации

### 3D пространство:
- **X** — горизонтальная ось (влево/вправо)
- **Y** — вертикальная ось (вверх/вниз)  
- **Z** — ось глубины (ближе/дальше)

### Свойство `transform-style`:
```css
.container {
    transform-style: preserve-3d; /* Сохраняет 3D пространство для детей */
}
```

### 3D-функции:

#### 1. `translate3d()` — 3D перемещение
```css
.translate-3d {
    transform: translate3d(50px, 100px, 200px); /* X, Y, Z */
}

.translate-z {
    transform: translateZ(100px); /* Только по Z */
}
```

#### 2. `scale3d()` — 3D масштабирование
```css
.scale-3d {
    transform: scale3d(1.5, 1, 2); /* X, Y, Z */
}

.scale-z {
    transform: scaleZ(2); /* Только по Z */
}
```

#### 3. `rotate3d()` — 3D вращение
```css
/* Вращение вокруг произвольной оси */
.rotate-3d {
    transform: rotate3d(1, 1, 1, 45deg); /* X, Y, Z, угол */
}

.rotate-x {
    transform: rotateX(45deg); /* Вращение вокруг оси X */
}

.rotate-y {
    transform: rotateY(45deg); /* Вращение вокруг оси Y */
}

.rotate-z {
    transform: rotateZ(45deg); /* Вращение вокруг оси Z (как rotate()) */
}
```

#### 4. `perspective()` — перспектива
```css
/* Добавляет перспективу элементу */
.perspective {
    transform: perspective(500px) rotateY(45deg);
}
```

### Свойство `perspective`:
```css
/* Применяется к родителю 3D-сцены */
.scene {
    perspective: 1000px; /* Расстояние от зрителя */
    perspective-origin: 50% 50%; /* Точка схода (по умолчанию центр) */
}
```

### Свойство `backface-visibility`:
```css
.card {
    backface-visibility: hidden; /* Скрывает обратную сторону */
}
```

## 4. CSS Transition - переходы

### Базовый синтаксис
```css
.element {
    transition: свойство длительность функция-времени задержка;
}
```

### Составляющие перехода:

#### 1. `transition-property` — какие свойства анимировать
```css
.transition {
    transition-property: all; /* Все изменяемые свойства */
    transition-property: transform, opacity; /* Только указанные */
    transition-property: none; /* Никакие свойства */
}
```

#### 2. `transition-duration` — длительность анимации
```css
.transition {
    transition-duration: 1s; /* 1 секунда */
    transition-duration: 500ms; /* 500 миллисекунд */
    transition-duration: 0.5s; /* 0.5 секунды */
}
```

#### 3. `transition-timing-function` — функция времени
```css
.transition {
    transition-timing-function: ease; /* По умолчанию */
    transition-timing-function: linear; /* Постоянная скорость */
    transition-timing-function: ease-in; /* Медленно начинает */
    transition-timing-function: ease-out; /* Медленно заканчивает */
    transition-timing-function: ease-in-out; /* Медленно начинает и заканчивает */
    transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1); /* Пользовательская */
    transition-timing-function: steps(4, end); /* Ступенчатая */
}
```

#### 4. `transition-delay` — задержка перед началом
```css
.transition {
    transition-delay: 0.5s; /* Задержка 0.5 секунды */
    transition-delay: 200ms; /* 200 миллисекунд */
}
```

### Сокращенная запись:
```css
.element {
    /* свойство | длительность | функция-времени | задержка */
    transition: all 0.3s ease-in-out 0.1s;
    
    /* Несколько свойств */
    transition: transform 0.5s ease, opacity 0.3s linear;
}
```

### Что можно анимировать?
```css
.element {
    /* Размеры и положение */
    transition: width 0.3s, height 0.3s, margin 0.3s, padding 0.3s;
    
    /* Цвета */
    transition: color 0.3s, background-color 0.3s, border-color 0.3s;
    
    /* Трансформации */
    transition: transform 0.5s;
    
    /* Прозрачность */
    transition: opacity 0.3s;
    
    /* Тени */
    transition: box-shadow 0.3s, text-shadow 0.3s;
    
    /* Фильтры */
    transition: filter 0.3s;
}
```

## 5. Триггеры анимаций

### 1. Псевдоклассы
```css
.button {
    transition: transform 0.3s;
}

.button:hover {
    transform: scale(1.1);
}

.button:active {
    transform: scale(0.95);
}
```

### 2. Добавление/удаление классов через JavaScript
```css
.modal {
    transform: translateY(-100%);
    transition: transform 0.5s ease;
}

.modal.active {
    transform: translateY(0);
}
```

```javascript
// JavaScript
document.querySelector('.modal').classList.add('active');
```

### 3. Изменение атрибутов
```css
.tab-content {
    opacity: 0;
    transition: opacity 0.3s;
}

.tab-content[aria-hidden="false"] {
    opacity: 1;
}
```

## 6. Полный интерактивный пример

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Transforms & Transitions</title>
    <style>
        /* Сброс и базовые стили */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        h1 {
            color: white;
            text-align: center;
            margin-bottom: 30px;
            font-size: 2.5rem;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }
        
        h2 {
            color: white;
            margin: 30px 0 20px 0;
            padding-bottom: 10px;
            border-bottom: 2px solid rgba(255, 255, 255, 0.2);
        }
        
        h3 {
            color: white;
            margin: 20px 0 15px 0;
        }
        
        /* Навигация */
        .nav-tabs {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-bottom: 30px;
            flex-wrap: wrap;
        }
        
        .tab-btn {
            padding: 12px 24px;
            background: rgba(255, 255, 255, 0.1);
            color: white;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            font-weight: 500;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }
        
        .tab-btn:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
        }
        
        .tab-btn.active {
            background: white;
            color: #764ba2;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        /* Демо-секции */
        .demo-section {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 15px;
            padding: 30px;
            margin-bottom: 40px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            display: none;
        }
        
        .demo-section.active {
            display: block;
            animation: fadeIn 0.5s ease;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .demo-title {
            color: #764ba2;
            margin-bottom: 25px;
            font-size: 1.5rem;
        }
        
        /* Демо-контейнеры */
        .demo-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin: 25px 0;
        }
        
        .demo-card {
            background: white;
            border-radius: 10px;
            padding: 25px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            border: 1px solid #eee;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .demo-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
        
        .demo-element {
            width: 150px;
            height: 150px;
            margin: 0 auto 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 1.2rem;
            transition: all 0.5s ease;
        }
        
        /* Контролы */
        .controls {
            background: #f8f9fa;
            border-radius: 10px;
            padding: 20px;
            margin-top: 20px;
        }
        
        .control-group {
            margin-bottom: 15px;
        }
        
        label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
            color: #333;
        }
        
        input[type="range"] {
            width: 100%;
            height: 6px;
            border-radius: 3px;
            background: #ddd;
            outline: none;
            -webkit-appearance: none;
        }
        
        input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #667eea;
            cursor: pointer;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }
        
        .value-display {
            display: inline-block;
            min-width: 40px;
            text-align: right;
            font-weight: bold;
            color: #667eea;
        }
        
        .code-block {
            background: #2d2d2d;
            color: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            margin-top: 15px;
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
            overflow-x: auto;
        }
        
        /* Специфичные стили для демонстраций */
        
        /* Translate демо */
        #translate-demo .demo-element {
            transition: transform 0.5s ease;
        }
        
        /* Scale демо */
        #scale-demo .demo-element {
            transition: transform 0.5s ease;
        }
        
        /* Rotate демо */
        #rotate-demo .demo-element {
            transition: transform 0.5s ease;
        }
        
        /* Skew демо */
        #skew-demo .demo-element {
            transition: transform 0.5s ease;
        }
        
        /* 3D демо */
        #three-d-demo .scene {
            perspective: 1000px;
            width: 200px;
            height: 200px;
            margin: 0 auto;
        }
        
        #three-d-demo .demo-element {
            width: 200px;
            height: 200px;
            transform-style: preserve-3d;
            transition: transform 0.8s ease;
        }
        
        /* Transition демо */
        #transition-demo .demo-element {
            width: 100%;
            height: 200px;
            position: relative;
            overflow: hidden;
        }
        
        .ball {
            position: absolute;
            width: 50px;
            height: 50px;
            background: #667eea;
            border-radius: 50%;
            top: 10px;
            left: 10px;
        }
        
        .transition-controls {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
        }
        
        select {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            background: white;
            font-size: 0.9rem;
        }
        
        /* Интерактивная демонстрация */
        #interactive-demo .demo-element {
            width: 100%;
            height: 300px;
            position: relative;
            background: #f8f9fa;
            border: 2px dashed #ddd;
        }
        
        .interactive-box {
            position: absolute;
            width: 100px;
            height: 100px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 10px;
            cursor: move;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            user-select: none;
            transition: transform 0.3s ease;
        }
        
        /* Галерея эффектов */
        .effects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }
        
        .effect-card {
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            cursor: pointer;
        }
        
        .effect-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }
        
        .effect-preview {
            height: 150px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 1.5rem;
        }
        
        .effect-info {
            padding: 15px;
        }
        
        .effect-info h4 {
            margin-bottom: 10px;
            color: #333;
        }
        
        .effect-info p {
            color: #666;
            font-size: 0.9rem;
            line-height: 1.4;
        }
        
        /* Информационные блоки */
        .tip {
            background: #e8f4fc;
            border-left: 4px solid #3498db;
            padding: 15px;
            margin: 20px 0;
            border-radius: 0 8px 8px 0;
        }
        
        .tip strong {
            color: #2c3e50;
        }
        
        .warning {
            background: #fde8e8;
            border-left: 4px solid #e74c3c;
            padding: 15px;
            margin: 20px 0;
            border-radius: 0 8px 8px 0;
        }
        
        code {
            background: #f8f9fa;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'Courier New', monospace;
            color: #e74c3c;
        }
        
        /* Адаптивность */
        @media (max-width: 768px) {
            .demo-container {
                grid-template-columns: 1fr;
            }
            
            .nav-tabs {
                flex-direction: column;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>CSS Transforms & Transitions</h1>
        
        <!-- Навигация -->
        <div class="nav-tabs">
            <button class="tab-btn active" data-target="translate">Translate</button>
            <button class="tab-btn" data-target="scale">Scale</button>
            <button class="tab-btn" data-target="rotate">Rotate</button>
            <button class="tab-btn" data-target="skew">Skew</button>
            <button class="tab-btn" data-target="three-d">3D Transform</button>
            <button class="tab-btn" data-target="transition">Transitions</button>
            <button class="tab-btn" data-target="interactive">Интерактивная</button>
            <button class="tab-btn" data-target="gallery">Галерея</button>
        </div>
        
        <!-- Translate демо -->
        <section id="translate" class="demo-section active">
            <h2 class="demo-title">Translate - Перемещение</h2>
            <p>Перемещает элемент по осям X и Y относительно его текущего положения.</p>
            
            <div class="demo-container">
                <div class="demo-card">
                    <div class="demo-element" id="translate-element">translate()</div>
                    <div class="controls">
                        <div class="control-group">
                            <label>translateX: <span id="translateXValue" class="value-display">0</span>px</label>
                            <input type="range" id="translateX" min="-100" max="100" value="0">
                        </div>
                        <div class="control-group">
                            <label>translateY: <span id="translateYValue" class="value-display">0</span>px</label>
                            <input type="range" id="translateY" min="-100" max="100" value="0">
                        </div>
                    </div>
                </div>
                
                <div class="demo-card">
                    <h3>Примеры использования</h3>
                    <div class="code-block">
/* Перемещение на 50px вправо и 100px вниз */
.element {
    transform: translate(50px, 100px);
}

/* Только по горизонтали */
.element {
    transform: translateX(50px);
}

/* Только по вертикали */
.element {
    transform: translateY(100px);
}

/* В процентах от собственного размера */
.element {
    transform: translate(50%, 50%);
}
                    </div>
                    
                    <div class="tip">
                        <strong>Важно:</strong> <code>translate()</code> не влияет на поток документа, 
                        в отличие от <code>position: absolute</code> или <code>margin</code>.
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Scale демо -->
        <section id="scale" class="demo-section">
            <h2 class="demo-title">Scale - Масштабирование</h2>
            <p>Изменяет размер элемента относительно его центра.</p>
            
            <div class="demo-container">
                <div class="demo-card">
                    <div class="demo-element" id="scale-element">scale()</div>
                    <div class="controls">
                        <div class="control-group">
                            <label>scaleX: <span id="scaleXValue" class="value-display">1.0</span></label>
                            <input type="range" id="scaleX" min="0" max="3" step="0.1" value="1">
                        </div>
                        <div class="control-group">
                            <label>scaleY: <span id="scaleYValue" class="value-display">1.0</span></label>
                            <input type="range" id="scaleY" min="0" max="3" step="0.1" value="1">
                        </div>
                    </div>
                </div>
                
                <div class="demo-card">
                    <h3>Примеры использования</h3>
                    <div class="code-block">
/* Увеличение в 1.5 раза */
.element {
    transform: scale(1.5);
}

/* Уменьшение в 2 раза */
.element {
    transform: scale(0.5);
}

/* Разное масштабирование по осям */
.element {
    transform: scale(2, 0.5); /* X: 2x, Y: 0.5x */
}

/* Зеркальное отражение */
.element {
    transform: scaleX(-1); /* Отражает по горизонтали */
}
                    </div>
                    
                    <div class="tip">
                        <strong>Совет:</strong> Используйте <code>transform-origin</code> для изменения 
                        точки, относительно которой происходит масштабирование.
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Rotate демо -->
        <section id="rotate" class="demo-section">
            <h2 class="demo-title">Rotate - Вращение</h2>
            <p>Вращает элемент вокруг точки преобразования.</p>
            
            <div class="demo-container">
                <div class="demo-card">
                    <div class="demo-element" id="rotate-element">rotate()</div>
                    <div class="controls">
                        <div class="control-group">
                            <label>Угол: <span id="rotateValue" class="value-display">0</span>°</label>
                            <input type="range" id="rotate" min="0" max="360" value="0">
                        </div>
                        <div class="control-group">
                            <label>Единицы измерения:</label>
                            <select id="rotateUnit">
                                <option value="deg">Градусы (deg)</option>
                                <option value="rad">Радианы (rad)</option>
                                <option value="turn">Обороты (turn)</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <div class="demo-card">
                    <h3>Примеры использования</h3>
                    <div class="code-block">
/* Вращение на 45 градусов */
.element {
    transform: rotate(45deg);
}

/* Вращение на π/4 радиан */
.element {
    transform: rotate(0.785rad);
}

/* Вращение на четверть оборота */
.element {
    transform: rotate(0.25turn);
}

/* Отрицательное вращение */
.element {
    transform: rotate(-90deg);
}
                    </div>
                    
                    <div class="tip">
                        <strong>Запомните:</strong> 
                        <ul>
                            <li>360deg = 2π rad = 1turn</li>
                            <li>Положительные значения - по часовой стрелке</li>
                            <li>Отрицательные значения - против часовой стрелки</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Skew демо -->
        <section id="skew" class="demo-section">
            <h2 class="demo-title">Skew - Наклон (искажение)</h2>
            <p>Наклоняет элемент по осям X и Y.</p>
            
            <div class="demo-container">
                <div class="demo-card">
                    <div class="demo-element" id="skew-element">skew()</div>
                    <div class="controls">
                        <div class="control-group">
                            <label>skewX: <span id="skewXValue" class="value-display">0</span>°</label>
                            <input type="range" id="skewX" min="-45" max="45" value="0">
                        </div>
                        <div class="control-group">
                            <label>skewY: <span id="skewYValue" class="value-display">0</span>°</label>
                            <input type="range" id="skewY" min="-45" max="45" value="0">
                        </div>
                    </div>
                </div>
                
                <div class="demo-card">
                    <h3>Примеры использования</h3>
                    <div class="code-block">
/* Наклон по обеим осям */
.element {
    transform: skew(30deg, 20deg);
}

/* Только по горизонтали */
.element {
    transform: skewX(30deg);
}

/* Только по вертикали */
.element {
    transform: skewY(20deg);
}

/* Создание параллелограмма */
.parallelogram {
    transform: skew(20deg);
}
                    </div>
                    
                    <div class="tip">
                        <strong>Применение:</strong> <code>skew()</code> часто используется для создания 
                        эффектов наклона, искажения текста или элементов интерфейса.
                    </div>
                </div>
            </div>
        </section>
        
        <!-- 3D Transform демо -->
        <section id="three-d" class="demo-section">
            <h2 class="demo-title">3D Transform - 3D трансформации</h2>
            <p>Трансформации в трёхмерном пространстве.</p>
            
            <div class="demo-container">
                <div class="demo-card">
                    <div class="scene">
                        <div class="demo-element" id="three-d-element">3D</div>
                    </div>
                    <div class="controls">
                        <div class="control-group">
                            <label>rotateX: <span id="rotateXValue" class="value-display">0</span>°</label>
                            <input type="range" id="rotateX" min="0" max="360" value="0">
                        </div>
                        <div class="control-group">
                            <label>rotateY: <span id="rotateYValue" class="value-display">0</span>°</label>
                            <input type="range" id="rotateY" min="0" max="360" value="0">
                        </div>
                        <div class="control-group">
                            <label>rotateZ: <span id="rotateZValue" class="value-display">0</span>°</label>
                            <input type="range" id="rotateZ" min="0" max="360" value="0">
                        </div>
                        <div class="control-group">
                            <label>perspective: <span id="perspectiveValue" class="value-display">1000</span>px</label>
                            <input type="range" id="perspective" min="200" max="2000" value="1000">
                        </div>
                    </div>
                </div>
                
                <div class="demo-card">
                    <h3>Примеры использования</h3>
                    <div class="code-block">
/* 3D сцена */
.scene {
    perspective: 1000px;
    perspective-origin: 50% 50%;
}

/* 3D трансформации */
.element {
    transform-style: preserve-3d;
    transform: rotateX(45deg) rotateY(45deg);
}

/* Перемещение по оси Z */
.element {
    transform: translateZ(100px);
}

/* Вращение вокруг произвольной оси */
.element {
    transform: rotate3d(1, 1, 1, 45deg);
}
                    </div>
                    
                    <div class="tip">
                        <strong>Ключевые свойства 3D:</strong>
                        <ul>
                            <li><code>perspective</code> — задаёт глубину сцены</li>
                            <li><code>transform-style: preserve-3d</code> — сохраняет 3D пространство</li>
                            <li><code>backface-visibility</code> — управляет видимостью обратной стороны</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Transition демо -->
        <section id="transition" class="demo-section">
            <h2 class="demo-title">Transitions - Переходы</h2>
            <p>Плавная анимация изменения свойств CSS.</p>
            
            <div class="demo-container">
                <div class="demo-card">
                    <div class="demo-element" id="transition-element">
                        <div class="ball" id="transition-ball"></div>
                    </div>
                    <div class="controls">
                        <div class="transition-controls">
                            <div class="control-group">
                                <label>Свойство:</label>
                                <select id="transitionProperty">
                                    <option value="all">all</option>
                                    <option value="transform">transform</option>
                                    <option value="opacity">opacity</option>
                                    <option value="background-color">background-color</option>
                                </select>
                            </div>
                            <div class="control-group">
                                <label>Длительность: <span id="durationValue" class="value-display">0.5</span>s</label>
                                <input type="range" id="duration" min="0.1" max="3" step="0.1" value="0.5">
                            </div>
                            <div class="control-group">
                                <label>Функция времени:</label>
                                <select id="timingFunction">
                                    <option value="ease">ease</option>
                                    <option value="linear">linear</option>
                                    <option value="ease-in">ease-in</option>
                                    <option value="ease-out">ease-out</option>
                                    <option value="ease-in-out">ease-in-out</option>
                                    <option value="cubic-bezier(0.68, -0.55, 0.27, 1.55)">bounce</option>
                                </select>
                            </div>
                            <div class="control-group">
                                <label>Задержка: <span id="delayValue" class="value-display">0</span>s</label>
                                <input type="range" id="delay" min="0" max="2" step="0.1" value="0">
                            </div>
                        </div>
                        <button id="playTransition" style="width: 100%; padding: 12px; background: #667eea; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold; margin-top: 10px;">
                            Запустить анимацию
                        </button>
                    </div>
                </div>
                
                <div class="demo-card">
                    <h3>Примеры использования</h3>
                    <div class="code-block">
/* Базовый переход */
.element {
    transition: all 0.3s ease;
}

.element:hover {
    transform: scale(1.1);
    background-color: blue;
}

/* Несколько свойств с разными настройками */
.element {
    transition: 
        transform 0.5s ease-in-out,
        opacity 0.3s linear 0.2s,
        background-color 0.4s ease;
}

/* Ступенчатая анимация */
.element {
    transition: transform 1s steps(4, end);
}

/* Кастомная timing function */
.element {
    transition: transform 0.5s 
               cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
                    </div>
                    
                    <div class="tip">
                        <strong>Что можно анимировать:</strong> Любое свойство CSS, которое имеет 
                        промежуточные значения (цвета, размеры, положение, прозрачность и т.д.).
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Интерактивная демонстрация -->
        <section id="interactive" class="demo-section">
            <h2 class="demo-title">Интерактивная демонстрация</h2>
            <p>Комбинируйте трансформации и создавайте сложные анимации.</p>
            
            <div class="demo-container">
                <div class="demo-card">
                    <div class="demo-element" id="interactive-demo-element">
                        <div class="interactive-box" id="interactive-box">
                            Drag me
                        </div>
                    </div>
                    <div class="controls">
                        <div class="control-group">
                            <label>Комбинация трансформаций:</label>
                            <textarea id="transformInput" rows="3" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px; font-family: monospace;" placeholder="Например: translate(50px, 50px) rotate(45deg) scale(1.5)">translate(0px, 0px) rotate(0deg) scale(1)</textarea>
                        </div>
                        <div class="control-group">
                            <label>transition:</label>
                            <input type="text" id="transitionInput" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px; font-family: monospace;" value="all 0.5s ease">
                        </div>
                        <button id="applyTransform" style="width: 100%; padding: 12px; background: #667eea; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold; margin-top: 10px;">
                            Применить трансформации
                        </button>
                    </div>
                </div>
                
                <div class="demo-card">
                    <h3>Готовые пресеты</h3>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 15px;">
                        <button class="preset-btn" data-transform="translate(50px, 50px)">Сдвиг</button>
                        <button class="preset-btn" data-transform="rotate(45deg)">Вращение</button>
                        <button class="preset-btn" data-transform="scale(1.5)">Увеличение</button>
                        <button class="preset-btn" data-transform="skew(20deg, 10deg)">Наклон</button>
                        <button class="preset-btn" data-transform="translate(50px, 50px) rotate(45deg)">Сдвиг + Вращение</button>
                        <button class="preset-btn" data-transform="scale(1.5) rotate(45deg)">Увеличение + Вращение</button>
                    </div>
                    
                    <div class="tip" style="margin-top: 20px;">
                        <strong>Совет:</strong> Порядок трансформаций имеет значение! 
                        <code>translate(50px) rotate(45deg)</code> даст другой результат, чем 
                        <code>rotate(45deg) translate(50px)</code>.
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Галерея эффектов -->
        <section id="gallery" class="demo-section">
            <h2 class="demo-title">Галерея эффектов</h2>
            <p>Готовые примеры использования трансформаций и переходов.</p>
            
            <div class="effects-grid">
                <!-- Эффект 1 -->
                <div class="effect-card" data-effect="hover-scale">
                    <div class="effect-preview">
                        Hover Scale
                    </div>
                    <div class="effect-info">
                        <h4>Увеличение при наведении</h4>
                        <p>Плавное увеличение элемента при наведении курсора.</p>
                        <div class="code-block" style="margin-top: 10px; font-size: 0.8rem;">
transition: transform 0.3s ease;<br>
:hover { transform: scale(1.1); }
                        </div>
                    </div>
                </div>
                
                <!-- Эффект 2 -->
                <div class="effect-card" data-effect="press-down">
                    <div class="effect-preview">
                        Press Effect
                    </div>
                    <div class="effect-info">
                        <h4>Эффект нажатия</h4>
                        <p>Элемент "утапливается" при клике, как настоящая кнопка.</p>
                        <div class="code-block" style="margin-top: 10px; font-size: 0.8rem;">
transition: transform 0.1s ease;<br>
:active { transform: scale(0.95); }
                        </div>
                    </div>
                </div>
                
                <!-- Эффект 3 -->
                <div class="effect-card" data-effect="flip-card">
                    <div class="effect-preview">
                        Flip Card
                    </div>
                    <div class="effect-info">
                        <h4>Переворачивающаяся карточка</h4>
                        <p>3D эффект переворота карточки при наведении.</p>
                        <div class="code-block" style="margin-top: 10px; font-size: 0.8rem;">
transform-style: preserve-3d;<br>
transition: transform 0.6s;<br>
:hover { transform: rotateY(180deg); }
                        </div>
                    </div>
                </div>
                
                <!-- Эффект 4 -->
                <div class="effect-card" data-effect="bounce">
                    <div class="effect-preview">
                        Bounce
                    </div>
                    <div class="effect-info">
                        <h4>Прыгающий эффект</h4>
                        <p>Элемент подпрыгивает с эффектом упругости.</p>
                        <div class="code-block" style="margin-top: 10px; font-size: 0.8rem;">
transition: transform 0.5s <br>  cubic-bezier(0.68, -0.55, 0.27, 1.55);
                        </div>
                    </div>
                </div>
                
                <!-- Эффект 5 -->
                <div class="effect-card" data-effect="shake">
                    <div class="effect-preview">
                        Shake
                    </div>
                    <div class="effect-info">
                        <h4>Трясущийся эффект</h4>
                        <p>Элемент трясётся из стороны в сторону.</p>
                        <div class="code-block" style="margin-top: 10px; font-size: 0.8rem;">
@keyframes shake {<br>
  0%, 100% { transform: translateX(0); }<br>
  25% { transform: translateX(-5px); }<br>
  75% { transform: translateX(5px); }<br>
}
                        </div>
                    </div>
                </div>
                
                <!-- Эффект 6 -->
                <div class="effect-card" data-effect="pulse">
                    <div class="effect-preview">
                        Pulse
                    </div>
                    <div class="effect-info">
                        <h4>Пульсирующий эффект</h4>
                        <p>Элемент плавно пульсирует, привлекая внимание.</p>
                        <div class="code-block" style="margin-top: 10px; font-size: 0.8rem;">
@keyframes pulse {<br>
  0% { transform: scale(1); }<br>
  50% { transform: scale(1.05); }<br>
  100% { transform: scale(1); }<br>
}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Итоговая информация -->
        <div class="tip" style="margin-top: 40px; background: rgba(255, 255, 255, 0.95);">
            <h3>📝 Ключевые принципы работы с Transforms & Transitions:</h3>
            <ol>
                <li><strong>Transforms не влияют на поток документа</strong> — элементы остаются на своих местах в DOM</li>
                <li><strong>Порядок трансформаций важен</strong> — выполняются последовательно</li>
                <li><strong>Transitions требуют триггера</strong> — изменение состояния (hover, focus, классы)</li>
                <li><strong>Используйте hardware acceleration</strong> — анимируйте <code>transform</code> и <code>opacity</code> для лучшей производительности</li>
                <li><strong>Тестируйте на мобильных</strong> — некоторые трансформации могут быть ресурсоёмкими</li>
                <li><strong>Не переусердствуйте</strong> — умеренность в анимациях улучшает UX</li>
            </ol>
        </div>
    </div>

    <script>
        // Навигация между вкладками
        const tabBtns = document.querySelectorAll('.tab-btn');
        const demoSection = document.querySelectorAll('.demo-section');
        
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Убираем активный класс у всех кнопок и секций
                tabBtns.forEach(b => b.classList.remove('active'));
                demoSection.forEach(s => s.classList.remove('active'));
                
                // Добавляем активный класс текущим
                btn.classList.add('active');
                const targetId = btn.getAttribute('data-target');
                document.getElementById(targetId).classList.add('active');
            });
        });
        
        // Translate демо
        const translateElement = document.getElementById('translate-element');
        const translateXInput = document.getElementById('translateX');
        const translateYInput = document.getElementById('translateY');
        const translateXValue = document.getElementById('translateXValue');
        const translateYValue = document.getElementById('translateYValue');
        
        function updateTranslate() {
            const x = translateXInput.value;
            const y = translateYInput.value;
            
            translateXValue.textContent = x;
            translateYValue.textContent = y;
            translateElement.style.transform = `translate(${x}px, ${y}px)`;
        }
        
        translateXInput.addEventListener('input', updateTranslate);
        translateYInput.addEventListener('input', updateTranslate);
        
        // Scale демо
        const scaleElement = document.getElementById('scale-element');
        const scaleXInput = document.getElementById('scaleX');
        const scaleYInput = document.getElementById('scaleY');
        const scaleXValue = document.getElementById('scaleXValue');
        const scaleYValue = document.getElementById('scaleYValue');
        
        function updateScale() {
            const x = parseFloat(scaleXInput.value).toFixed(1);
            const y = parseFloat(scaleYInput.value).toFixed(1);
            
            scaleXValue.textContent = x;
            scaleYValue.textContent = y;
            scaleElement.style.transform = `scale(${x}, ${y})`;
        }
        
        scaleXInput.addEventListener('input', updateScale);
        scaleYInput.addEventListener('input', updateScale);
        
        // Rotate демо
        const rotateElement = document.getElementById('rotate-element');
        const rotateInput = document.getElementById('rotate');
        const rotateUnit = document.getElementById('rotateUnit');
        const rotateValue = document.getElementById('rotateValue');
        
        function updateRotate() {
            const angle = rotateInput.value;
            const unit = rotateUnit.value;
            
            rotateValue.textContent = unit === 'deg' ? angle : 
                                    unit === 'rad' ? (angle * Math.PI / 180).toFixed(2) : 
                                    (angle / 360).toFixed(2);
            
            rotateElement.style.transform = `rotate(${angle}${unit})`;
        }
        
        rotateInput.addEventListener('input', updateRotate);
        rotateUnit.addEventListener('change', updateRotate);
        
        // Skew демо
        const skewElement = document.getElementById('skew-element');
        const skewXInput = document.getElementById('skewX');
        const skewYInput = document.getElementById('skewY');
        const skewXValue = document.getElementById('skewXValue');
        const skewYValue = document.getElementById('skewYValue');
        
        function updateSkew() {
            const x = skewXInput.value;
            const y = skewYInput.value;
            
            skewXValue.textContent = x;
            skewYValue.textContent = y;
            skewElement.style.transform = `skew(${x}deg, ${y}deg)`;
        }
        
        skewXInput.addEventListener('input', updateSkew);
        skewYInput.addEventListener('input', updateSkew);
        
        // 3D демо
        const threeDElement = document.getElementById('three-d-element');
        const rotateXInput = document.getElementById('rotateX');
        const rotateYInput = document.getElementById('rotateY');
        const rotateZInput = document.getElementById('rotateZ');
        const perspectiveInput = document.getElementById('perspective');
        
        const rotateXValue = document.getElementById('rotateXValue');
        const rotateYValue = document.getElementById('rotateYValue');
        const rotateZValue = document.getElementById('rotateZValue');
        const perspectiveValue = document.getElementById('perspectiveValue');
        
        function update3D() {
            const x = rotateXInput.value;
            const y = rotateYInput.value;
            const z = rotateZInput.value;
            const p = perspectiveInput.value;
            
            rotateXValue.textContent = x;
            rotateYValue.textContent = y;
            rotateZValue.textContent = z;
            perspectiveValue.textContent = p;
            
            threeDElement.parentElement.style.perspective = `${p}px`;
            threeDElement.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
        }
        
        rotateXInput.addEventListener('input', update3D);
        rotateYInput.addEventListener('input', update3D);
        rotateZInput.addEventListener('input', update3D);
        perspectiveInput.addEventListener('input', update3D);
        
        // Transition демо
        const transitionBall = document.getElementById('transition-ball');
        const playTransitionBtn = document.getElementById('playTransition');
        const transitionProperty = document.getElementById('transitionProperty');
        const durationInput = document.getElementById('duration');
        const timingFunction = document.getElementById('timingFunction');
        const delayInput = document.getElementById('delay');
        
        const durationValue = document.getElementById('durationValue');
        const delayValue = document.getElementById('delayValue');
        
        function updateTransitionValues() {
            durationValue.textContent = durationInput.value;
            delayValue.textContent = delayInput.value;
        }
        
        durationInput.addEventListener('input', updateTransitionValues);
        delayInput.addEventListener('input', updateTransitionValues);
        
        playTransitionBtn.addEventListener('click', () => {
            // Сбрасываем анимацию
            transitionBall.style.transition = 'none';
            transitionBall.style.transform = 'translate(0, 0)';
            transitionBall.style.opacity = '1';
            transitionBall.style.backgroundColor = '#667eea';
            
            // Принудительный reflow
            void transitionBall.offsetWidth;
            
            // Применяем новые настройки transition
            const property = transitionProperty.value;
            const duration = durationInput.value + 's';
            const timing = timingFunction.value;
            const delay = delayInput.value + 's';
            
            transitionBall.style.transition = `${property} ${duration} ${timing} ${delay}`;
            
            // Запускаем анимацию
            setTimeout(() => {
                const maxX = document.getElementById('transition-element').offsetWidth - 60;
                const maxY = document.getElementById('transition-element').offsetHeight - 60;
                
                if (property === 'all' || property === 'transform') {
                    transitionBall.style.transform = `translate(${maxX}px, ${maxY}px)`;
                }
                if (property === 'all' || property === 'opacity') {
                    transitionBall.style.opacity = '0.5';
                }
                if (property === 'all' || property === 'background-color') {
                    transitionBall.style.backgroundColor = '#764ba2';
                }
                
                // Возвращаем в исходное состояние
                setTimeout(() => {
                    transitionBall.style.transition = `${property} ${duration} ${timing} ${delay}`;
                    transitionBall.style.transform = 'translate(0, 0)';
                    transitionBall.style.opacity = '1';
                    transitionBall.style.backgroundColor = '#667eea';
                }, parseFloat(durationInput.value) * 1000 + parseFloat(delayInput.value) * 1000 + 100);
            }, 10);
        });
        
        // Интерактивная демонстрация
        const interactiveBox = document.getElementById('interactive-box');
        const transformInput = document.getElementById('transformInput');
        const transitionInput = document.getElementById('transitionInput');
        const applyTransformBtn = document.getElementById('applyTransform');
        const presetBtns = document.querySelectorAll('.preset-btn');
        
        // Drag and drop
        let isDragging = false;
        let startX, startY, initialX = 0, initialY = 0;
        
        interactiveBox.addEventListener('mousedown', startDrag);
        interactiveBox.addEventListener('touchstart', startDrag);
        
        function startDrag(e) {
            isDragging = true;
            const clientX = e.clientX || e.touches[0].clientX;
            const clientY = e.clientY || e.touches[0].clientY;
            
            startX = clientX;
            startY = clientY;
            
            // Получаем текущие значения translate из transform
            const style = window.getComputedStyle(interactiveBox);
            const matrix = new WebKitCSSMatrix(style.transform);
            initialX = matrix.m41;
            initialY = matrix.m42;
            
            document.addEventListener('mousemove', drag);
            document.addEventListener('touchmove', drag);
            document.addEventListener('mouseup', stopDrag);
            document.addEventListener('touchend', stopDrag);
            
            e.preventDefault();
        }
        
        function drag(e) {
            if (!isDragging) return;
            
            const clientX = e.clientX || e.touches[0].clientX;
            const clientY = e.clientY || e.touches[0].clientY;
            
            const deltaX = clientX - startX;
            const deltaY = clientY - startY;
            
            const newX = initialX + deltaX;
            const newY = initialY + deltaY;
            
            // Обновляем текстовое поле
            const currentTransform = transformInput.value;
            const newTransform = currentTransform.replace(
                /translate\([^)]*\)/,
                `translate(${newX}px, ${newY}px)`
            );
            
            transformInput.value = newTransform;
            interactiveBox.style.transform = newTransform;
        }
        
        function stopDrag() {
            isDragging = false;
            document.removeEventListener('mousemove', drag);
            document.removeEventListener('touchmove', drag);
            document.removeEventListener('mouseup', stopDrag);
            document.removeEventListener('touchend', stopDrag);
        }
        
        applyTransformBtn.addEventListener('click', () => {
            interactiveBox.style.transition = transitionInput.value;
            interactiveBox.style.transform = transformInput.value;
        });
        
        presetBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const transform = btn.getAttribute('data-transform');
                transformInput.value = transform;
                interactiveBox.style.transition = transitionInput.value;
                interactiveBox.style.transform = transform;
            });
        });
        
        // Галерея эффектов
        const effectCards = document.querySelectorAll('.effect-card');
        
        effectCards.forEach(card => {
            const preview = card.querySelector('.effect-preview');
            const effect = card.getAttribute('data-effect');
            
            // Применяем эффекты к preview
            switch(effect) {
                case 'hover-scale':
                    preview.style.transition = 'transform 0.3s ease';
                    card.addEventListener('mouseenter', () => {
                        preview.style.transform = 'scale(1.1)';
                    });
                    card.addEventListener('mouseleave', () => {
                        preview.style.transform = 'scale(1)';
                    });
                    break;
                    
                case 'press-down':
                    preview.style.transition = 'transform 0.1s ease';
                    card.addEventListener('mousedown', () => {
                        preview.style.transform = 'scale(0.95)';
                    });
                    card.addEventListener('mouseup', () => {
                        preview.style.transform = 'scale(1)';
                    });
                    card.addEventListener('mouseleave', () => {
                        preview.style.transform = 'scale(1)';
                    });
                    break;
                    
                case 'flip-card':
                    preview.style.transformStyle = 'preserve-3d';
                    preview.style.transition = 'transform 0.6s';
                    card.addEventListener('mouseenter', () => {
                        preview.style.transform = 'rotateY(180deg)';
                    });
                    card.addEventListener('mouseleave', () => {
                        preview.style.transform = 'rotateY(0deg)';
                    });
                    break;
                    
                case 'bounce':
                    preview.style.transition = 'transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
                    card.addEventListener('mouseenter', () => {
                        preview.style.transform = 'scale(1.2)';
                    });
                    card.addEventListener('mouseleave', () => {
                        preview.style.transform = 'scale(1)';
                    });
                    break;
                    
                case 'shake':
                    preview.style.animation = 'shake 0.5s ease infinite';
                    card.addEventListener('mouseenter', () => {
                        const style = document.createElement('style');
                        style.textContent = `
                            @keyframes shake {
                                0%, 100% { transform: translateX(0); }
                                25% { transform: translateX(-5px); }
                                75% { transform: translateX(5px); }
                            }
                        `;
                        document.head.appendChild(style);
                    });
                    card.addEventListener('mouseleave', () => {
                        preview.style.animation = 'none';
                    });
                    break;
                    
                case 'pulse':
                    preview.style.animation = 'pulse 2s ease-in-out infinite';
                    card.addEventListener('mouseenter', () => {
                        const style = document.createElement('style');
                        style.textContent = `
                            @keyframes pulse {
                                0% { transform: scale(1); }
                                50% { transform: scale(1.05); }
                                100% { transform: scale(1); }
                            }
                        `;
                        document.head.appendChild(style);
                    });
                    card.addEventListener('mouseleave', () => {
                        preview.style.animation = 'none';
                    });
                    break;
            }
        });
        
        // Инициализация
        updateTranslate();
        updateScale();
        updateRotate();
        updateSkew();
        update3D();
        updateTransitionValues();
    </script>
</body>
</html>
```

## 7. Ключевые особенности и лучшие практики

### 1. transform-origin
```css
/* Изменяет точку, относительно которой происходит трансформация */
.element {
    transform-origin: center center; /* По умолчанию */
    transform-origin: top left; /* Верхний левый угол */
    transform-origin: 50px 100px; /* Конкретные координаты */
    transform-origin: 0% 100%; /* Проценты */
}
```

### 2. Hardware Acceleration
```css
/* Используйте transform и opacity для лучшей производительности */
.element {
    /* ХОРОШО: анимируйте эти свойства */
    transition: transform 0.3s, opacity 0.3s;
    
    /* ПЛОХО: избегайте анимации этих свойств */
    transition: margin 0.3s, padding 0.3s, width 0.3s;
}
```

### 3. will-change
```css
/* Подсказка браузеру, что элемент будет анимироваться */
.element {
    will-change: transform, opacity;
    /* Используйте осторожно, только для элементов, которые точно будут анимироваться */
}
```

### 4. Сложные анимации
```css
/* Каскадные анимации */
.button {
    transition: transform 0.3s ease 0s, 
                background-color 0.3s ease 0.1s,
                color 0.3s ease 0.1s;
}

.button:hover {
    transform: scale(1.1);
    background-color: #3498db;
    color: white;
}
```

## 8. Распространенные паттерны

### 1. Карточка с эффектом поднятия
```css
.card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}
```

### 2. Кнопка с эффектом нажатия
```css
.button {
    transition: transform 0.1s ease;
}

.button:active {
    transform: scale(0.95);
}
```

### 3. Переворачивающаяся карточка
```css
.flip-card {
    perspective: 1000px;
}

.flip-card-inner {
    transition: transform 0.6s;
    transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
    backface-visibility: hidden;
}

.flip-card-back {
    transform: rotateY(180deg);
}
```

### 4. Модальное окно с анимацией
```css
.modal {
    transform: translateY(-100%);
    transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.modal.active {
    transform: translateY(0);
}
```

### 5. Аккордеон/выпадающий список
```css
.accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, opacity 0.3s ease;
    opacity: 0;
}

.accordion-content.open {
    max-height: 500px;
    opacity: 1;
}
```

## 9. CSS Transforms vs CSS Animations

### Когда использовать Transitions:
- **Простые анимации** между двумя состояниями
- **Интерактивные элементы** (hover, focus, active)
- **Изменение состояния** при добавлении/удалении класса
- **Короткие анимации** (до 1 секунды)

### Когда использовать Animations:
- **Сложные анимации** с множеством ключевых кадров
- **Повторяющиеся анимации** (бесконечные или несколько раз)
- **Анимации без триггера** (автоматически запускающиеся)
- **Последовательности анимаций**

### Пример комбинации:
```css
.element {
    /* Простая анимация при наведении */
    transition: transform 0.3s ease;
}

.element:hover {
    transform: scale(1.1);
}

/* Сложная анимация при загрузке */
@keyframes appear {
    0% {
        opacity: 0;
        transform: translateY(50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.element.loaded {
    animation: appear 0.5s ease forwards;
}
```

## 10. Производительность и оптимизация

### 1. Используйте transform и opacity
```css
/* ХОРОШО: GPU acceleration */
.optimized {
    transition: transform 0.3s, opacity 0.3s;
}

/* ПЛОХО: вызывает repaint */
.not-optimized {
    transition: margin 0.3s, width 0.3s, height 0.3s;
}
```

### 2. Избегайте одновременной анимации многих элементов
```css
/* Если нужно анимировать много элементов, делайте это с задержкой */
.item {
    transition: transform 0.3s ease;
}

.item:nth-child(1) { transition-delay: 0.1s; }
.item:nth-child(2) { transition-delay: 0.2s; }
.item:nth-child(3) { transition-delay: 0.3s; }
```

### 3. prefers-reduced-motion
```css
/* Уважайте пользовательские настройки */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
```

### 4. Тестирование производительности
- **Chrome DevTools** → Performance tab
- **Firefox DevTools** → Performance
- **Проверка FPS** (кадров в секунду)

## 11. Поддержка браузеров

### Современная поддержка:
- **CSS Transforms 2D**: все современные браузеры
- **CSS Transforms 3D**: все современные браузеры (кроме IE 10-)
- **CSS Transitions**: все современные браузеры

### Префиксы для старых браузеров:
```css
.element {
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    
    -webkit-transform: translateX(50px);
    -ms-transform: translateX(50px); /* IE 9 */
    transform: translateX(50px);
}
```

**Рекомендация:** Используйте Autoprefixer для автоматического добавления префиксов.

## 12. Лучшие практики

### Правильно:
```css
/* Анимируйте transform и opacity */
.element {
    transition: transform 0.3s ease, opacity 0.3s ease;
}

/* Используйте cubic-bezier для естественных анимаций */
.natural {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Mobile First анимации */
@media (prefers-reduced-motion: no-preference) {
    .element {
        transition: transform 0.3s ease;
    }
}

/* Оптимизируйте сложные анимации */
.complex-animation {
    will-change: transform, opacity;
}
```

### Избегайте:
```css
/* Слишком долгие анимации */
.slow {
    transition: all 2s; /* Максимум 0.5-1 секунда */
}

/* Анимация слишком многих свойств */
.too-many {
    transition: all 0.3s; /* Анимирует ВСЕ свойства */
}

/* Сложные вычисления в transition */
.complex {
    transition: transform 0.3s cubic-bezier(0.1, 0.7, 1.0, 0.1) 0.5s;
    /* Слишком сложно для чтения и поддержки */
}

/* !important в transition */
.element {
    transition: transform 0.3s !important; /* Избегайте */
}
```

## 13. Инструменты для работы

### DevTools браузера:
- **Анимационная панель** в Chrome/Firefox
- **Инспектор CSS transitions/transforms**
- **Профилирование производительности**

## 14. Практическое задание

Создайте интерактивный интерфейс с использованием transforms и transitions:
1. Навигационное меню с плавным выездом
2. Карточки продуктов с эффектом поднятия при наведении
3. Кнопки с эффектом нажатия
4. Модальное окно с анимацией появления
5. Аккордеон с плавным раскрытием
6. Галерею с 3D эффектом переворота карточек
7. Индикатор загрузки с вращающейся анимацией
8. Форму с анимацией полей при фокусе
9. Реализуйте:
   - Разные easing функции для разных элементов
   - Каскадные анимации с задержками
   - Адаптивные анимации (упрощенные на мобильных)
   - Поддержку prefers-reduced-motion
10. Протестируйте производительность

---

**Вопросы для самопроверки:**
1. Чем отличается `translate()` от изменения `margin` или `position`?
2. Как создать плавную анимацию изменения цвета фона?
3. Что такое `transform-origin` и как оно влияет на трансформации?
4. Как сделать анимацию "отскока" (bounce effect)?
5. Какие свойства лучше анимировать для оптимальной производительности?