# Конспект лекции: 2.9 Адаптивная верстка. Медиазапросы

## 1. Что такое адаптивная верстка?

### Определение
**Адаптивная верстка (Responsive Web Design, RWD)** — это подход к веб-разработке, при котором дизайн и верстка сайта автоматически подстраиваются под размер экрана и устройство пользователя.

### Аналогия
Представьте воду в разных сосудах:
- **Вода (контент)** — остается тем же
- **Сосуд (устройство)** — разной формы и размера
- **Адаптивность** — вода принимает форму сосуда, не теряя своих свойств

### Три столпа адаптивной верстки:
1. **Гибкая сетка (Flexible Grid)** — пропорциональные размеры
2. **Гибкие изображения (Flexible Images)** — масштабируемые медиа
3. **Медиазапросы (Media Queries)** — адаптация стилей

## 2. Mobile First vs Desktop First

### Mobile First (сначала мобильные)
```css
/* Базовые стили для мобильных */
body { font-size: 14px; }

/* Планшеты */
@media (min-width: 768px) {
    body { font-size: 16px; }
}

/* Десктопы */
@media (min-width: 1024px) {
    body { font-size: 18px; }
}
```

### Desktop First (сначала десктоп)
```css
/* Базовые стили для десктопов */
body { font-size: 18px; }

/* Планшеты */
@media (max-width: 1023px) {
    body { font-size: 16px; }
}

/* Мобильные */
@media (max-width: 767px) {
    body { font-size: 14px; }
}
```

**Преимущества Mobile First:**
- Лучшая производительность на мобильных
- Прогрессивное улучшение
- Современный подход
- Рекомендуется Google

## 3. Viewport - метатег для мобильных

### Без viewport:
```html
<!-- Сайт будет отображаться как на десктопе -->
<!-- На мобильном будет мелкий текст и потребуется масштабирование -->
```

### С viewport:
```html
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
```

**Параметры viewport:**
- `width=device-width` — ширина по размеру устройства
- `initial-scale=1.0` — начальный масштаб
- `maximum-scale=1.0` — запрет масштабирования (не рекомендуется)
- `user-scalable=no` — запрет масштабирования (не рекомендуется для доступности)

## 4. Медиазапросы (Media Queries)

### Базовый синтаксис
```css
@media [тип медиа] [логическое условие] {
    /* CSS правила */
}
```

### Типы медиа:
- `all` — все устройства (по умолчанию)
- `screen` — экраны
- `print` — принтеры
- `speech` — скринридеры

### Логические операторы:
- `and` — и
- `,` — или (запятая)
- `not` — не
- `only` — только

## 5. Брейкпоинты (Breakpoints)

### Общепринятые брейкпоинты:
```css
/* Мобильные (до 576px) - обычно стили по умолчанию */

/* Планшеты (портрет) */
@media (min-width: 576px) { /* или (max-width: 767px) */ }

/* Планшеты (альбом) и маленькие ноутбуки */
@media (min-width: 768px) { /* или (max-width: 991px) */ }

/* Ноутбуки и десктопы */
@media (min-width: 992px) { /* или (max-width: 1199px) */ }

/* Большие экраны */
@media (min-width: 1200px) { }
```

### Содержимое-ориентированные брейкпоинты:
```css
/* Брейкпоинт, когда контент начинает "ломаться" */
.container {
    display: flex;
    flex-wrap: wrap;
}

/* Когда элементы перестают помещаться в строку */
@media (max-width: 650px) {
    .item {
        flex-basis: 100%;
    }
}
```

## 6. Основные свойства для адаптивности

### 1. Процентные размеры и max-width
```css
.container {
    width: 100%;
    max-width: 1200px; /* Не больше 1200px */
    margin: 0 auto;
}

.column {
    width: 50%; /* Всегда половина родителя */
}

img {
    max-width: 100%; /* Не больше родителя */
    height: auto; /* Сохраняет пропорции */
}
```

### 2. Flexbox для адаптивных сеток
```css
/* Мобильные: в колонку */
.menu {
    display: flex;
    flex-direction: column;
}

/* Десктоп: в строку */
@media (min-width: 768px) {
    .menu {
        flex-direction: row;
    }
}
```

### 3. Grid для сложных макетов
```css
/* Мобильные: одна колонка */
.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}

/* Планшеты: две колонки */
@media (min-width: 768px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Десктоп: три колонки */
@media (min-width: 1024px) {
    .grid {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

### 4. Относительные единицы
```css
body {
    font-size: 16px; /* Базовый размер */
}

h1 {
    font-size: 2rem; /* 32px при 16px базовом */
}

.container {
    padding: 2em; /* Относительно font-size элемента */
    margin: 5vw; /* 5% от ширины viewport */
    width: 80%; /* 80% от родителя */
}
```

## 7. Адаптивная типографика

### Viewport единицы:
```css
h1 {
    font-size: 5vw; /* 5% от ширины viewport */
}

.sidebar {
    width: 20vw; /* 20% от ширины viewport */
}

.hero {
    height: 50vh; /* 50% от высоты viewport */
}
```

### clamp() для плавного изменения:
```css
h1 {
    /* Минимум 24px, предпочитаемый 5vw, максимум 48px */
    font-size: clamp(24px, 5vw, 48px);
}

.container {
    /* Адаптивный padding */
    padding: clamp(10px, 5vw, 40px);
}
```

### fluid typography:
```css
:root {
    --min-font-size: 16px;
    --max-font-size: 24px;
    --min-screen: 320px;
    --max-screen: 1200px;
}

body {
    font-size: calc(
        var(--min-font-size) + 
        (var(--max-font-size) - var(--min-font-size)) * 
        ((100vw - var(--min-screen)) / (var(--max-screen) - var(--min-screen)))
    );
}
```

## 8. Адаптивные изображения

### 1. max-width: 100%
```css
img {
    max-width: 100%;
    height: auto;
}
```

### 2. srcset для разных разрешений
```html
<img 
    src="image-small.jpg"
    srcset="image-small.jpg 320w,
            image-medium.jpg 768w,
            image-large.jpg 1200w"
    sizes="(max-width: 768px) 100vw,
           (max-width: 1200px) 50vw,
           33vw"
    alt="Описание изображения">
```

### 3. picture для арт-дирекшна
```html
<picture>
    <source media="(min-width: 1200px)" srcset="desktop-large.jpg">
    <source media="(min-width: 768px)" srcset="tablet.jpg">
    <source media="(max-width: 767px)" srcset="mobile.jpg">
    <img src="fallback.jpg" alt="Описание">
</picture>
```

### 4. object-fit для обрезки
```css
.cover-image {
    width: 100%;
    height: 300px;
    object-fit: cover; /* cover, contain, fill */
}
```

## 9. Полный интерактивный пример

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Адаптивная верстка и медиазапросы</title>
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
            background-color: #f8f9fa;
            font-size: 16px;
        }
        
        .container {
            width: 100%;
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        h1 {
            color: #2c3e50;
            margin-bottom: 30px;
            text-align: center;
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
        .main-nav {
            background-color: #2c3e50;
            padding: 15px 0;
            position: sticky;
            top: 0;
            z-index: 1000;
        }
        
        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            color: white;
            font-size: 1.5rem;
            font-weight: bold;
            text-decoration: none;
        }
        
        .nav-menu {
            display: flex;
            list-style: none;
            gap: 30px;
        }
        
        .nav-menu a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
        }
        
        .nav-menu a:hover {
            color: #3498db;
        }
        
        .menu-toggle {
            display: none;
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
        }
        
        /* Герой-секция */
        .hero {
            background: linear-gradient(135deg, #3498db, #2c3e50);
            color: white;
            padding: 80px 0;
            text-align: center;
        }
        
        .hero h1 {
            color: white;
            font-size: clamp(2rem, 5vw, 3.5rem);
            margin-bottom: 20px;
        }
        
        .hero p {
            font-size: clamp(1rem, 2.5vw, 1.2rem);
            max-width: 700px;
            margin: 0 auto 30px;
        }
        
        .btn {
            display: inline-block;
            padding: 12px 30px;
            background-color: #e74c3c;
            color: white;
            text-decoration: none;
            border-radius: 4px;
            font-weight: 500;
            transition: background-color 0.3s;
        }
        
        .btn:hover {
            background-color: #c0392b;
        }
        
        /* Сетка карточек */
        .cards-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin: 40px 0;
        }
        
        .card {
            background-color: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }
        
        .card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        
        .card-content {
            padding: 20px;
        }
        
        .card h3 {
            margin-bottom: 10px;
            color: #2c3e50;
        }
        
        /* Адаптивная таблица */
        .responsive-table {
            width: 100%;
            overflow-x: auto;
            margin: 30px 0;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            background-color: white;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        
        th {
            background-color: #f2f2f2;
            font-weight: bold;
        }
        
        /* Демонстрация медиазапросов */
        .media-query-demo {
            background-color: white;
            border-radius: 8px;
            padding: 30px;
            margin: 40px 0;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .mq-box {
            width: 100%;
            height: 200px;
            background-color: #3498db;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 1.2rem;
            transition: all 0.3s ease;
        }
        
        .mq-info {
            margin-top: 20px;
            padding: 15px;
            background-color: #f8f9fa;
            border-radius: 6px;
            font-family: monospace;
            display: none;
        }
        
        .mq-info.active {
            display: block;
        }
        
        /* Футер */
        footer {
            background-color: #2c3e50;
            color: white;
            padding: 40px 0;
            margin-top: 60px;
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;
        }
        
        .footer-section h3 {
            color: white;
            margin-bottom: 20px;
            font-size: 1.2rem;
        }
        
        .footer-section ul {
            list-style: none;
        }
        
        .footer-section a {
            color: #bdc3c7;
            text-decoration: none;
            display: block;
            margin-bottom: 10px;
            transition: color 0.3s;
        }
        
        .footer-section a:hover {
            color: white;
        }
        
        /* Индикатор текущего размера экрана */
        .screen-size-indicator {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: rgba(44, 62, 80, 0.9);
            color: white;
            padding: 10px 15px;
            border-radius: 4px;
            font-size: 0.9rem;
            z-index: 1000;
            display: none;
        }
        
        .screen-size-indicator.show {
            display: block;
        }
        
        /* Медиазапросы */
        
        /* Планшеты (портрет) */
        @media (max-width: 991px) {
            .footer-content {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .mq-box {
                background-color: #2ecc71;
                font-size: 1.1rem;
            }
        }
        
        /* Планшеты (альбом) и маленькие ноутбуки */
        @media (max-width: 768px) {
            .menu-toggle {
                display: block;
            }
            
            .nav-menu {
                position: fixed;
                top: 70px;
                left: 0;
                width: 100%;
                background-color: #2c3e50;
                flex-direction: column;
                align-items: center;
                padding: 20px 0;
                gap: 0;
                transform: translateY(-100%);
                opacity: 0;
                transition: all 0.3s ease;
            }
            
            .nav-menu.show {
                transform: translateY(0);
                opacity: 1;
            }
            
            .nav-menu li {
                width: 100%;
                text-align: center;
                padding: 15px 0;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }
            
            .hero {
                padding: 60px 0;
            }
            
            .mq-box {
                background-color: #e74c3c;
                font-size: 1rem;
                height: 150px;
            }
        }
        
        /* Мобильные устройства */
        @media (max-width: 576px) {
            body {
                font-size: 14px;
            }
            
            .container {
                padding: 0 15px;
            }
            
            .cards-grid {
                grid-template-columns: 1fr;
                gap: 20px;
            }
            
            .hero {
                padding: 40px 0;
            }
            
            .hero h1 {
                font-size: 1.8rem;
            }
            
            .footer-content {
                grid-template-columns: 1fr;
            }
            
            .mq-box {
                background-color: #f39c12;
                font-size: 0.9rem;
                height: 120px;
            }
            
            .btn {
                width: 100%;
                text-align: center;
            }
        }
        
        /* Очень маленькие экраны */
        @media (max-width: 360px) {
            .hero h1 {
                font-size: 1.5rem;
            }
            
            .card img {
                height: 150px;
            }
            
            .mq-box {
                background-color: #9b59b6;
                font-size: 0.8rem;
            }
        }
        
        /* Высокие экраны (ландшафт) */
        @media (min-height: 700px) and (orientation: landscape) {
            .hero {
                min-height: 80vh;
                display: flex;
                align-items: center;
            }
            
            .mq-box {
                height: 250px;
            }
        }
        
        /* Тёмная тема */
        @media (prefers-color-scheme: dark) {
            body {
                background-color: #1a1a1a;
                color: #f0f0f0;
            }
            
            .card, .media-query-demo, table {
                background-color: #2d2d2d;
                color: #f0f0f0;
            }
            
            th {
                background-color: #3d3d3d;
            }
            
            .mq-info {
                background-color: #3d3d3d;
            }
        }
        
        /* Печать */
        @media print {
            .main-nav, footer, .btn, .screen-size-indicator {
                display: none !important;
            }
            
            body {
                font-size: 12pt;
                line-height: 1.4;
                color: black;
                background: white;
            }
            
            .container {
                max-width: 100%;
                padding: 0;
            }
            
            a {
                text-decoration: none;
                color: black;
            }
            
            .card {
                break-inside: avoid;
                box-shadow: none;
                border: 1px solid #ddd;
            }
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
    </style>
</head>
<body>
    <!-- Индикатор размера экрана -->
    <div class="screen-size-indicator" id="screenSize">
        Ширина: <span id="screenWidth">0</span>px
    </div>
    
    <!-- Навигация -->
    <nav class="main-nav">
        <div class="container nav-container">
            <a href="#" class="logo">RWD Demo</a>
            
            <button class="menu-toggle" id="menuToggle">
                ☰
            </button>
            
            <ul class="nav-menu" id="navMenu">
                <li><a href="#home">Главная</a></li>
                <li><a href="#about">О нас</a></li>
                <li><a href="#services">Услуги</a></li>
                <li><a href="#portfolio">Портфолио</a></li>
                <li><a href="#contact">Контакты</a></li>
            </ul>
        </div>
    </nav>
    
    <!-- Герой-секция -->
    <section class="hero" id="home">
        <div class="container">
            <h1>Адаптивная верстка</h1>
            <p>Изучите, как создавать сайты, которые идеально выглядят на любом устройстве: от смартфона до широкоэкранного монитора.</p>
            <a href="#demo" class="btn">Начать изучение</a>
        </div>
    </section>
    
    <!-- Основной контент -->
    <main class="container">
        <section id="demo">
            <h2>Демонстрация медиазапросов</h2>
            <p>Изменяйте размер окна браузера и наблюдайте, как меняется цвет и размер блока в зависимости от ширины экрана:</p>
            
            <div class="media-query-demo">
                <div class="mq-box" id="mqBox">
                    Медиазапрос активен
                </div>
                
                <div class="mq-info" id="mqInfoDefault">
                    <strong>Текущий медиазапрос:</strong> Десктоп (ширина > 992px)<br>
                    <code>@media (min-width: 992px) { ... }</code>
                </div>
                
                <div class="mq-info" id="mqInfoTablet">
                    <strong>Текущий медиазапрос:</strong> Планшет (ширина ≤ 991px)<br>
                    <code>@media (max-width: 991px) { ... }</code>
                </div>
                
                <div class="mq-info" id="mqInfoMobileLandscape">
                    <strong>Текущий медиазапрос:</strong> Мобильные (ширина ≤ 768px)<br>
                    <code>@media (max-width: 768px) { ... }</code>
                </div>
                
                <div class="mq-info" id="mqInfoMobilePortrait">
                    <strong>Текущий медиазапрос:</strong> Маленькие мобильные (ширина ≤ 576px)<br>
                    <code>@media (max-width: 576px) { ... }</code>
                </div>
                
                <div class="mq-info" id="mqInfoTiny">
                    <strong>Текущий медиазапрос:</strong> Очень маленькие экраны (ширина ≤ 360px)<br>
                    <code>@media (max-width: 360px) { ... }</code>
                </div>
            </div>
        </section>
        
        <section>
            <h2>Адаптивная сетка карточек</h2>
            <p>Карточки автоматически перестраиваются в зависимости от доступного пространства:</p>
            
            <div class="cards-grid">
                <div class="card">
                    <img src="https://via.placeholder.com/400x200/3498db/ffffff?text=Изображение+1" alt="Карточка 1">
                    <div class="card-content">
                        <h3>Адаптивные изображения</h3>
                        <p>Изображения масштабируются пропорционально, используя <code>max-width: 100%</code> и <code>height: auto</code>.</p>
                    </div>
                </div>
                
                <div class="card">
                    <img src="https://via.placeholder.com/400x200/2ecc71/ffffff?text=Изображение+2" alt="Карточка 2">
                    <div class="card-content">
                        <h3>Гибкая сетка</h3>
                        <p>CSS Grid с <code>auto-fit</code> и <code>minmax()</code> создаёт адаптивную сетку без медиазапросов.</p>
                    </div>
                </div>
                
                <div class="card">
                    <img src="https://via.placeholder.com/400x200/e74c3c/ffffff?text=Изображение+3" alt="Карточка 3">
                    <div class="card-content">
                        <h3>Mobile First</h3>
                        <p>Сначала стили для мобильных, затем улучшения для больших экранов через <code>min-width</code>.</p>
                    </div>
                </div>
            </div>
        </section>
        
        <section>
            <h2>Адаптивная таблица</h2>
            <p>На мобильных таблица становится прокручиваемой по горизонтали:</p>
            
            <div class="responsive-table">
                <table>
                    <thead>
                        <tr>
                            <th>Устройство</th>
                            <th>Ширина экрана</th>
                            <th>Брейкпоинт</th>
                            <th>Подход</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Мобильные</td>
                            <td>до 576px</td>
                            <td><code>max-width: 576px</code></td>
                            <td>Одна колонка</td>
                        </tr>
                        <tr>
                            <td>Планшеты</td>
                            <td>576px - 768px</td>
                            <td><code>min-width: 576px</code></td>
                            <td>Две колонки</td>
                        </tr>
                        <tr>
                            <td>Ноутбуки</td>
                            <td>768px - 992px</td>
                            <td><code>min-width: 768px</code></td>
                            <td>Три колонки</td>
                        </tr>
                        <tr>
                            <td>Десктопы</td>
                            <td>992px+</td>
                            <td><code>min-width: 992px</code></td>
                            <td>Четыре колонки</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        
        <section class="tip">
            <h3>📝 Ключевые принципы адаптивной верстки:</h3>
            <ol>
                <li><strong>Mobile First</strong> — начинайте с мобильной версии</li>
                <li><strong>Гибкие сетки</strong> — используйте проценты, fr, grid, flexbox</li>
                <li><strong>Гибкие изображения</strong> — <code>max-width: 100%</code></li>
                <li><strong>Медиазапросы</strong> — адаптация под разные устройства</li>
                <li><strong>Относительные единицы</strong> — em, rem, %, vw, vh</li>
                <li><strong>Тестируйте</strong> — на реальных устройствах и в инструментах разработчика</li>
            </ol>
        </section>
        
        <section>
            <h2>Примеры медиазапросов</h2>
            
            <h3>1. Mobile First подход</h3>
            <pre>
/* Базовые стили для мобильных */
.container { padding: 10px; }
.menu { flex-direction: column; }

/* Планшеты */
@media (min-width: 768px) {
    .container { padding: 20px; }
    .menu { flex-direction: row; }
}

/* Десктопы */
@media (min-width: 1024px) {
    .container { max-width: 1200px; }
    .menu { gap: 40px; }
}
            </pre>
            
            <h3>2. Адаптивная типографика</h3>
            <pre>
/* Плавное изменение размера шрифта */
h1 {
    font-size: clamp(1.5rem, 5vw, 3rem);
}

/* Адаптивные отступы */
.section {
    padding: clamp(1rem, 5vw, 3rem);
}

/* Fluid typography */
:root {
    --min-size: 16px;
    --max-size: 22px;
}

body {
    font-size: calc(
        var(--min-size) + 
        (var(--max-size) - var(--min-size)) * 
        ((100vw - 320px) / (1200 - 320))
    );
}
            </pre>
            
            <h3>3. Сложные условия</h3>
            <pre>
/* Только для экранов и только для печати */
@media screen { ... }
@media print { ... }

/* Комбинации условий */
@media (min-width: 768px) and (max-width: 1024px) { ... }

/* Ориентация устройства */
@media (orientation: portrait) { ... }
@media (orientation: landscape) { ... }

/* Высокое разрешение (Retina) */
@media (-webkit-min-device-pixel-ratio: 2), 
       (min-resolution: 192dpi) { ... }

/* Тёмная тема */
@media (prefers-color-scheme: dark) { ... }

/* Режим уменьшенного движения */
@media (prefers-reduced-motion: reduce) {
    * { animation: none; transition: none; }
}
            </pre>
        </section>
    </main>
    
    <!-- Футер -->
    <footer>
        <div class="container footer-content">
            <div class="footer-section">
                <h3>О нас</h3>
                <ul>
                    <li><a href="#">Компания</a></li>
                    <li><a href="#">Команда</a></li>
                    <li><a href="#">Карьера</a></li>
                    <li><a href="#">Блог</a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h3>Услуги</h3>
                <ul>
                    <li><a href="#">Веб-разработка</a></li>
                    <li><a href="#">Дизайн</a></li>
                    <li><a href="#">SEO</a></li>
                    <li><a href="#">Консалтинг</a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h3>Ресурсы</h3>
                <ul>
                    <li><a href="#">Документация</a></li>
                    <li><a href="#">Туториалы</a></li>
                    <li><a href="#">Форум</a></li>
                    <li><a href="#">Поддержка</a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h3>Контакты</h3>
                <ul>
                    <li><a href="mailto:info@example.com">info@example.com</a></li>
                    <li><a href="tel:+71234567890">+7 (123) 456-78-90</a></li>
                    <li><a href="#">Москва, ул. Примерная, 123</a></li>
                </ul>
            </div>
        </div>
    </footer>

    <script>
        // Мобильное меню
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');
        
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
            menuToggle.textContent = navMenu.classList.contains('show') ? '✕' : '☰';
        });
        
        // Закрытие меню при клике на ссылку
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('show');
                menuToggle.textContent = '☰';
            });
        });
        
        // Отображение текущего размера экрана
        const screenSize = document.getElementById('screenSize');
        const screenWidth = document.getElementById('screenWidth');
        
        function updateScreenSize() {
            const width = window.innerWidth;
            screenWidth.textContent = width;
            
            // Показываем индикатор при изменении размера
            screenSize.classList.add('show');
            
            // Скрываем через 2 секунды
            clearTimeout(window.screenSizeTimeout);
            window.screenSizeTimeout = setTimeout(() => {
                screenSize.classList.remove('show');
            }, 2000);
            
            // Обновляем информацию о медиазапросах
            updateMediaQueryInfo(width);
        }
        
        function updateMediaQueryInfo(width) {
            // Скрываем все информационные блоки
            document.querySelectorAll('.mq-info').forEach(info => {
                info.classList.remove('active');
            });
            
            // Показываем соответствующий блок
            if (width <= 360) {
                document.getElementById('mqInfoTiny').classList.add('active');
            } else if (width <= 576) {
                document.getElementById('mqInfoMobilePortrait').classList.add('active');
            } else if (width <= 768) {
                document.getElementById('mqInfoMobileLandscape').classList.add('active');
            } else if (width <= 991) {
                document.getElementById('mqInfoTablet').classList.add('active');
            } else {
                document.getElementById('mqInfoDefault').classList.add('active');
            }
        }
        
        // Инициализация
        window.addEventListener('resize', updateScreenSize);
        window.addEventListener('load', updateScreenSize);
        updateScreenSize();
        
        // Плавная прокрутка
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Демонстрация prefers-color-scheme
        const colorSchemeDemo = document.createElement('div');
        colorSchemeDemo.innerHTML = `
            <div style="margin: 20px 0; padding: 15px; border-radius: 6px; background: #f8f9fa; border: 1px solid #dee2e6;">
                <h3>Демонстрация prefers-color-scheme</h3>
                <p>Попробуйте изменить тему вашей системы (светлая/тёмная) и обновите страницу.</p>
                <p>Текущая тема: <span id="currentTheme">светлая</span></p>
                <p><small>Медиазапрос: <code>@media (prefers-color-scheme: dark)</code></small></p>
            </div>
        `;
        
        document.querySelector('main').appendChild(colorSchemeDemo);
        
        // Определяем текущую тему
        const currentTheme = document.getElementById('currentTheme');
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            currentTheme.textContent = 'тёмная';
        }
        
        // Слушаем изменения темы
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            currentTheme.textContent = e.matches ? 'тёмная' : 'светлая';
        });
    </script>
</body>
</html>
```

## 10. Современные подходы к адаптивности

### 1. Container Queries
```css
/* Стили зависят от размера контейнера, а не viewport */
@container (min-width: 400px) {
    .card {
        display: flex;
        flex-direction: row;
    }
}
```

### 2. CSS Grid с auto-fit/auto-fill
```css
/* Автоматическая адаптивность без медиазапросов */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}
```

### 3. clamp() для fluid design
```css
/* Плавные изменения без резких скачков */
h1 {
    font-size: clamp(2rem, 5vw, 4rem);
    margin: clamp(1rem, 3vw, 3rem);
}
```

### 4. Адаптивные utility-классы
```css
/* Tailwind-like подход */
.container { width: 100%; max-width: 1200px; margin: 0 auto; }
.p-4 { padding: 1rem; }
.md\:p-8 { padding: 2rem; } /* На средних экранах */

@media (min-width: 768px) {
    .md\:p-8 { padding: 2rem; }
}
```

## 11. Тестирование адаптивности

### Инструменты разработчика:
- **Режим адаптивного дизайна** в Chrome/Firefox
- **Эмуляция устройств**
- **Network throttling** для тестирования на медленных соединениях

### Реальные устройства:
- Телефоны и планшеты разных размеров
- Разные браузеры и ОС
- Разные ориентации экрана

## 12. Производительность адаптивных сайтов

### Оптимизация изображений:
```html
<!-- Современный подход -->
<picture>
    <source type="image/webp" srcset="image.webp">
    <source type="image/jpeg" srcset="image.jpg">
    <img src="image.jpg" alt="Описание">
</picture>
```

### Ленивая загрузка:
```html
<img src="placeholder.jpg" data-src="real-image.jpg" loading="lazy" alt="Описание">
```

### Критический CSS:
```html
<!-- Встраиваем критически важные стили -->
<style>
    /* Минимальные стили для первого экрана */
</style>

<!-- Остальные стили загружаем асинхронно -->
<link rel="stylesheet" href="styles.css" media="print" onload="this.media='all'">
```

## 13. Лучшие практики

### Правильно:
```css
/* Mobile First */
.base-styles { /* для мобильных */ }

@media (min-width: 768px) {
    .tablet-styles { /* улучшения для планшетов */ }
}

@media (min-width: 1024px) {
    .desktop-styles { /* улучшения для десктопов */ }
}

/* Используйте относительные единицы */
.container {
    width: 90%;
    max-width: 1200px;
    padding: 2rem;
    margin: 0 auto;
}

/* Адаптивные изображения */
img {
    max-width: 100%;
    height: auto;
}

/* Тестируйте на реальных устройствах */
```

### Избегайте:
```css
/* Фиксированные ширины */
.element {
    width: 300px; /* Плохо для адаптивности */
}

/* Слишком много брейкпоинтов */
@media (max-width: 1234px) { ... }
@media (max-width: 987px) { ... }
@media (max-width: 765px) { ... }
/* Лучше: 576px, 768px, 992px, 1200px */

/* Скрытие контента display: none */
.hide-on-mobile {
    display: none; /* Плохо для SEO и доступности */
}

/* !important в медиазапросах */
@media (max-width: 768px) {
    .element {
        width: 100% !important; /* Избегайте */
    }
}
```

## 14. Практическое задание

Создайте адаптивный сайт-портфолио:
1. Mobile First подход
2. Адаптивная навигация (гамбургер-меню на мобильных)
3. Герой-секция с адаптивной типографикой
4. Сетка проектов (4 в ряд на десктопе, 2 на планшете, 1 на мобильном)
5. Адаптивная контактная форма
6. Футер с адаптивным расположением колонок
7. Реализуйте:
   - Адаптивные изображения с srcset
   - Тёмную тему с prefers-color-scheme
   - Плавные анимации с prefers-reduced-motion
   - Адаптивные таблицы
8. Протестируйте на разных размерах экрана
9. Добавьте print styles

---

**Вопросы для самопроверки:**
1. В чем разница между Mobile First и Desktop First?
2. Для чего нужен viewport метатег?
3. Как создать адаптивную сетку без медиазапросов?
4. Что такое брейкпоинты и как их выбирать?
5. Как оптимизировать производительность адаптивного сайта?