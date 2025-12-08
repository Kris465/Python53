# Конспект лекции: 2.2 Семантическая верстка

## 1. Что такое семантическая верстка?

### Определение
**Семантическая верстка** — это подход к созданию HTML-документов, при котором используются теги, соответствующие смыслу (семантике) содержащегося в них контента.

### Семантические vs Несемантические теги
```html
<!-- НЕСЕМАНТИЧЕСКИЕ (сказывают КАК отображать) -->
<div id="header">Шапка сайта</div>
<div class="navigation">Меню</div>
<div id="main-content">Основной контент</div>

<!-- СЕМАНТИЧЕСКИЕ (говорят ЧТО это) -->
<header>Шапка сайта</header>
<nav>Меню</nav>
<main>Основной контент</main>
```

### Почему это важно?
1. **Доступность** — скринридеры лучше понимают структуру
2. **SEO** — поисковые системы лучше индексируют контент
3. **Читаемость кода** — разработчикам легче понимать структуру
4. **Поддержка** — проще вносить изменения

## 2. Основные семантические теги HTML5

### Иерархия типичной веб-страницы:
```html
<body>
    <header>      <!-- Шапка сайта -->
    <nav>         <!-- Навигация -->
    <main>        <!-- Основное содержимое -->
        <section>   <!-- Секция -->
            <article> <!-- Статья -->
        <aside>    <!-- Боковая панель -->
    <footer>      <!-- Подвал -->
</body>
```

## 3. Детальный разбор семантических тегов

### `<header>` — шапка документа или раздела
Содержит вводную информацию или навигационные ссылки.

```html
<!-- Шапка всего сайта -->
<header>
    <h1>Название сайта</h1>
    <p>Краткое описание или слоган</p>
</header>

<!-- Шапка статьи -->
<article>
    <header>
        <h2>Заголовок статьи</h2>
        <p>Автор: Иван Иванов | Дата: 15.01.2024</p>
    </header>
    <p>Содержимое статьи...</p>
</article>
```

**Когда использовать:**
- Логотип и название сайта
- Заголовок статьи/раздела
- Элементы навигации в шапке

**Когда НЕ использовать:**
- Для обычных контейнеров
- Внутри `<footer>`, `<address>`, других `<header>`

### `<nav>` — навигационное меню
Содержит основные навигационные ссылки по сайту.

```html
<!-- Основная навигация -->
<nav>
    <ul>
        <li><a href="/">Главная</a></li>
        <li><a href="/about">О нас</a></li>
        <li><a href="/services">Услуги</a></li>
        <li><a href="/contact">Контакты</a></li>
    </ul>
</nav>

<!-- Дополнительная навигация в статье -->
<article>
    <h1>Статья о HTML</h1>
    <nav>
        <h2>Содержание статьи:</h2>
        <ul>
            <li><a href="#intro">Введение</a></li>
            <li><a href="#basics">Основы</a></li>
            <li><a href="#advanced">Продвинутые темы</a></li>
        </ul>
    </nav>
    <!-- Содержимое статьи -->
</article>
```

**Важно:** Не нужно оборачивать все ссылки в `<nav>`. Только основные блоки навигации.

### `<main>` — основное содержимое
Содержит уникальный контент страницы, который не повторяется на других страницах.

```html
<body>
    <header>...</header>
    <nav>...</nav>
    
    <main>
        <h1>Главный заголовок страницы</h1>
        <!-- Уникальное содержимое страницы -->
        <p>Этот контент есть только на этой странице</p>
    </main>
    
    <footer>...</footer>
</body>
```

**Правила:**
- Только один `<main>` на странице
- Не должен содержать повторяющийся контент (шапка, подвал, сайдбар)
- Не должен быть потомком `<article>`, `<aside>`, `<footer>`, `<header>`, `<nav>`

### `<article>` — независимый контент
Представляет самостоятельный, законченный фрагмент контента, который можно распространять независимо.

```html
<article>
    <header>
        <h2>Как создать семантическую верстку</h2>
        <p>Автор: Веб-разработчик | Дата: 15.01.2024</p>
    </header>
    
    <p>Семантическая верстка — это важно...</p>
    
    <footer>
        <p>Теги: HTML, семантика, доступность</p>
        <button>Поделиться</button>
    </footer>
</article>
```

**Примеры использования:**
- Пост в блоге
- Новостная статья
- Комментарий пользователя
- Виджет (если он самостоятельный)
- Запись в ленте социальной сети

### `<section>` — тематическая группа
Группирует связанный по смыслу контент, обычно с заголовком.

```html
<section>
    <h2>Наши услуги</h2>
    <p>Мы предоставляем следующие услуги:</p>
    
    <article>
        <h3>Веб-разработка</h3>
        <p>Создание современных веб-сайтов...</p>
    </article>
    
    <article>
        <h3>Дизайн</h3>
        <p>Разработка UI/UX дизайна...</p>
    </article>
</section>

<!-- Разные секции на странице -->
<section id="intro">
    <h2>Введение</h2>
    <p>Текст введения...</p>
</section>

<section id="main-content">
    <h2>Основное содержимое</h2>
    <p>Основной текст...</p>
</section>

<section id="conclusion">
    <h2>Заключение</h2>
    <p>Итоги и выводы...</p>
</section>
```

**Когда использовать:**
- Главы документа
- Вкладки в интерфейсе
- Разделы страницы с общей темой

### `<aside>` — дополнительный контент
Содержит информацию, косвенно связанную с основным контентом.

```html
<!-- Боковая панель -->
<main>
    <article>
        <h1>Основная статья</h1>
        <p>Содержимое статьи...</p>
    </article>
    
    <aside>
        <h3>Дополнительная информация</h3>
        <p>Похожие статьи:</p>
        <ul>
            <li><a href="#">HTML5 для начинающих</a></li>
            <li><a href="#">CSS3 новые возможности</a></li>
        </ul>
    </aside>
</main>

<!-- Внутри статьи -->
<article>
    <h1>Изучение HTML</h1>
    <p>HTML — это язык разметки...</p>
    
    <aside>
        <p><strong>Интересный факт:</strong> Первая версия HTML была создана в 1991 году.</p>
    </aside>
    
    <p>Продолжение статьи...</p>
</article>
```

**Примеры использования:**
- Боковая панель с виджетами
- Блок "Об авторе"
- Рекламные баннеры
- Дополнительные объяснения или примечания

### `<footer>` — подвал документа или раздела
Содержит информацию о разделе или странице: авторство, контакты, ссылки.

```html
<!-- Подвал всего сайта -->
<footer>
    <p>&copy; 2024 Мой сайт. Все права защищены.</p>
    <address>
        Контакты: <a href="mailto:info@example.com">info@example.com</a>
    </address>
    <nav>
        <a href="/privacy">Политика конфиденциальности</a> |
        <a href="/terms">Условия использования</a>
    </nav>
</footer>

<!-- Подвал статьи -->
<article>
    <h2>Заголовок статьи</h2>
    <p>Содержимое статьи...</p>
    
    <footer>
        <p>Опубликовано: 15 января 2024</p>
        <p>Автор: Иван Иванов</p>
        <button>Лайк</button>
        <button>Поделиться</button>
    </footer>
</article>
```

## 4. Другие важные семантические теги

### `<figure>` и `<figcaption>`
Для иллюстраций с подписями.

```html
<figure>
    <img src="diagram.png" alt="Диаграмма структуры HTML5">
    <figcaption>Рисунок 1: Семантические элементы HTML5</figcaption>
</figure>

<figure>
    <pre><code>
        &lt;section&gt;
            &lt;h2&gt;Заголовок&lt;/h2&gt;
            &lt;p&gt;Текст&lt;/p&gt;
        &lt;/section&gt;
    </code></pre>
    <figcaption>Пример HTML-кода</figcaption>
</figure>
```

### `<time>` — для дат и времени
```html
<p>Статья опубликована <time datetime="2024-01-15">15 января 2024</time></p>
<p>Начало мероприятия: <time datetime="2024-01-20T19:00">20 января в 19:00</time></p>
```

### `<mark>` — выделенный текст
```html
<p>Поисковый запрос: <mark>семантическая верстка</mark></p>
<p>Важно: <mark>Всегда используйте alt для изображений</mark></p>
```

### `<address>` — контактная информация
```html
<address>
    Автор: Иван Иванов<br>
    Email: <a href="mailto:ivan@example.com">ivan@example.com</a><br>
    Телефон: +7 (123) 456-78-90
</address>
```

## 5. Полный пример семантической верстки

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Блог о веб-разработке - Семантическая верстка</title>
    <meta name="description" content="Статья о важности семантической верстки в современной веб-разработке">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Шапка сайта -->
    <header class="site-header">
        <div class="logo">
            <h1><a href="/">WebDev Blog</a></h1>
            <p>Блог о веб-разработке и дизайне</p>
        </div>
        
        <!-- Основная навигация -->
        <nav aria-label="Основное меню">
            <ul>
                <li><a href="/">Главная</a></li>
                <li><a href="/articles">Статьи</a></li>
                <li><a href="/tutorials">Уроки</a></li>
                <li><a href="/about">О блоге</a></li>
                <li><a href="/contact">Контакты</a></li>
            </ul>
        </nav>
        
        <!-- Поиск по сайту -->
        <form role="search" aria-label="Поиск по сайту">
            <input type="search" placeholder="Поиск статей...">
            <button type="submit">Найти</button>
        </form>
    </header>

    <!-- Основное содержимое -->
    <main class="main-content">
        <!-- Хлебные крошки -->
        <nav aria-label="Хлебные крошки">
            <ul>
                <li><a href="/">Главная</a></li>
                <li><a href="/articles">Статьи</a></li>
                <li><span>Семантическая верстка</span></li>
            </ul>
        </nav>

        <!-- Основная статья -->
        <article class="main-article">
            <header>
                <h1>Семантическая верстка: почему это важно</h1>
                <div class="article-meta">
                    <address class="author">Автор: <a href="/author/anna">Анна Вебмастер</a></address>
                    <time datetime="2024-01-15" pubdate>Опубликовано: 15 января 2024</time>
                    <span class="reading-time">Время чтения: 5 минут</span>
                </div>
            </header>

            <!-- Содержание статьи -->
            <nav class="table-of-contents" aria-label="Содержание статьи">
                <h2>Содержание:</h2>
                <ol>
                    <li><a href="#what-is">Что такое семантическая верстка?</a></li>
                    <li><a href="#why-important">Почему это важно?</a></li>
                    <li><a href="#basic-tags">Основные семантические теги</a></li>
                    <li><a href="#seo-accessibility">Влияние на SEO и доступность</a></li>
                </ol>
            </nav>

            <!-- Секция 1 -->
            <section id="what-is">
                <h2>Что такое семантическая верстка?</h2>
                <p>Семантическая верстка — это подход к созданию HTML-документов, при котором используются теги, соответствующие смыслу содержащегося в них контента.</p>
                
                <figure>
                    <img src="semantic-structure.png" alt="Сравнение семантической и несемантической верстки">
                    <figcaption>Сравнение семантической и обычной верстки</figcaption>
                </figure>
                
                <p>Вместо обилия <code>&lt;div&gt;</code> и <code>&lt;span&gt;</code> с классами, мы используем теги с понятными названиями.</p>
            </section>

            <!-- Секция 2 -->
            <section id="why-important">
                <h2>Почему это важно?</h2>
                
                <article class="benefit">
                    <h3>Для доступности</h3>
                    <p>Скринридеры (программы для слабовидящих) лучше понимают структуру страницы.</p>
                </article>
                
                <article class="benefit">
                    <h3>Для SEO</h3>
                    <p>Поисковые системы <mark>лучше индексируют</mark> семантически размеченный контент.</p>
                </article>
                
                <article class="benefit">
                    <h3>Для разработчиков</h3>
                    <p>Код становится чище и понятнее для всей команды.</p>
                </article>
            </section>

            <!-- Секция 3 -->
            <section id="basic-tags">
                <h2>Основные семантические теги HTML5</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Тег</th>
                            <th>Назначение</th>
                            <th>Пример использования</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>&lt;header&gt;</code></td>
                            <td>Шапка документа или раздела</td>
                            <td>Логотип, навигация, заголовок статьи</td>
                        </tr>
                        <tr>
                            <td><code>&lt;nav&gt;</code></td>
                            <td>Основная навигация</td>
                            <td>Главное меню, оглавление</td>
                        </tr>
                        <tr>
                            <td><code>&lt;main&gt;</code></td>
                            <td>Основное содержимое</td>
                            <td>Уникальный контент страницы</td>
                        </tr>
                        <!-- и так далее -->
                    </tbody>
                </table>
            </section>

            <!-- Подвал статьи -->
            <footer class="article-footer">
                <div class="tags">
                    <strong>Теги:</strong>
                    <ul>
                        <li><a href="/tag/html">HTML</a></li>
                        <li><a href="/tag/semantics">Семантика</a></li>
                        <li><a href="/tag/accessibility">Доступность</a></li>
                        <li><a href="/tag/seo">SEO</a></li>
                    </ul>
                </div>
                
                <div class="share">
                    <button>Поделиться в Twitter</button>
                    <button>Поделиться в Facebook</button>
                    <button>Скопировать ссылку</button>
                </div>
            </footer>
        </article>

        <!-- Боковая панель -->
        <aside class="sidebar" aria-label="Дополнительная информация">
            <section class="about-author">
                <h2>Об авторе</h2>
                <address>
                    <strong>Анна Вебмастер</strong><br>
                    Веб-разработчик с 5-летним опытом<br>
                    Специализация: фронтенд, доступность<br>
                    <a href="mailto:anna@example.com">Связаться с автором</a>
                </address>
            </section>

            <section class="related-articles">
                <h2>Похожие статьи</h2>
                <ul>
                    <li><a href="/article/html5">Что нового в HTML5</a></li>
                    <li><a href="/article/accessibility">Основы доступности веб-сайтов</a></li>
                    <li><a href="/article/seo-basics">SEO для начинающих</a></li>
                </ul>
            </section>

            <section class="newsletter">
                <h2>Подписка на новости</h2>
                <p>Получайте новые статьи на почту</p>
                <form>
                    <input type="email" placeholder="Ваш email">
                    <button type="submit">Подписаться</button>
                </form>
            </section>
        </aside>
    </main>

    <!-- Подвал сайта -->
    <footer class="site-footer">
        <div class="footer-content">
            <section class="footer-links">
                <h2>Карта сайта</h2>
                <nav aria-label="Карта сайта">
                    <ul>
                        <li><a href="/">Главная</a></li>
                        <li><a href="/about">О нас</a></li>
                        <li><a href="/contact">Контакты</a></li>
                        <li><a href="/privacy">Политика конфиденциальности</a></li>
                    </ul>
                </nav>
            </section>

            <section class="social-media">
                <h2>Мы в соцсетях</h2>
                <nav aria-label="Социальные сети">
                    <ul>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">GitHub</a></li>
                    </ul>
                </nav>
            </section>

            <section class="contact-info">
                <h2>Контакты</h2>
                <address>
                    Email: <a href="mailto:info@webdevblog.com">info@webdevblog.com</a><br>
                    Телефон: +7 (123) 456-78-90<br>
                    Адрес: Москва, ул. Веб-разработчиков, 42
                </address>
            </section>
        </div>

        <div class="copyright">
            <p>&copy; 2024 WebDev Blog. Все права защищены.</p>
            <p>При использовании материалов ссылка на источник обязательна.</p>
        </div>
    </footer>

    <script src="scripts.js"></script>
</body>
</html>
```

## 6. Влияние на доступность (Accessibility)

### Атрибуты ARIA
Дополняют семантическую разметку для улучшения доступности:

```html
<!-- Улучшенная навигация для скринридеров -->
<nav aria-label="Основное меню">
    <ul role="menubar">
        <li role="menuitem"><a href="/">Главная</a></li>
        <li role="menuitem"><a href="/about">О нас</a></li>
    </ul>
</nav>

<!-- Информация о текущей странице -->
<nav aria-label="Хлебные крошки">
    <ol>
        <li><a href="/">Главная</a></li>
        <li><a href="/articles">Статьи</a></li>
        <li aria-current="page">Семантическая верстка</li>
    </ol>
</nav>

<!-- Описание изображения для скринридеров -->
<img src="chart.png" alt="Диаграмма роста продаж" aria-describedby="chart-description">
<p id="chart-description" class="visually-hidden">
    Диаграмма показывает рост продаж на 25% в 2024 году по сравнению с 2023.
</p>
```

## 7. Влияние на SEO (Search Engine Optimization)

### Почему семантическая верстка важна для SEO:

1. **Лучшее понимание структуры** поисковыми системами
2. **Правильное определение главного контента** (тег `<main>`)
3. **Выделение важных разделов** (`<article>`, `<section>`)
4. **Улучшенная индексация** связанного контента
5. **Снижение шансов штрафов** за некачественный код

```html
<!-- SEO-дружественная структура -->
<article itemscope itemtype="http://schema.org/Article">
    <header>
        <h1 itemprop="headline">Заголовок статьи</h1>
        <meta itemprop="datePublished" content="2024-01-15">
        <span itemprop="author" itemscope itemtype="http://schema.org/Person">
            <span itemprop="name">Иван Иванов</span>
        </span>
    </header>
    <div itemprop="articleBody">
        <p>Основной текст статьи...</p>
    </div>
</article>
```

## 8. Лучшие практики семантической верстки

### Правильно:
```html
<!-- Используйте иерархию заголовков -->
<h1>Главный заголовок</h1>
<section>
    <h2>Заголовок раздела</h2>
    <article>
        <h3>Заголовок статьи</h3>
    </article>
</section>

<!-- Группируйте связанный контент -->
<section>
    <h2>Наши услуги</h2>
    <article>...</article>
    <article>...</article>
</section>
```

### Избегайте:
```html
<!-- Не используйте семантические теги как обычные div -->
<header class="product-card"> <!-- НЕПРАВИЛЬНО -->
    <h3>Название товара</h3>
</header>

<!-- Не пропускайте уровни заголовков -->
<h1>Главный заголовок</h1>
<h3>Подзаголовок</h3> <!-- Пропущен h2! -->

<!-- Не вкладывайте main в другие семантические теги -->
<article>
    <main> <!-- НЕПРАВИЛЬНО: main не должен быть внутри article -->
        <p>Содержимое</p>
    </main>
</article>
```

## 9. Практическое задание

Создайте семантическую верстку для страницы интернет-магазина:
1. Используйте `<header>` для шапки с логотипом и основной навигацией
2. `<main>` для основного содержимого с несколькими `<section>`
3. Каждый товар оформите как `<article>`
4. Используйте `<aside>` для фильтров и дополнительной информации
5. `<footer>` для контактов и дополнительных ссылок
6. Добавьте микроразметку Schema.org для товаров
7. Используйте ARIA-атрибуты для улучшения доступности

---

**Вопросы для самопроверки:**
1. Чем отличается `<article>` от `<section>`?
2. Почему на странице должен быть только один `<main>`?
3. Как семантическая верстка помогает SEO?
4. Можно ли использовать несколько `<header>` на странице?
5. Для чего нужен атрибут `aria-label`?