# Конспект лекции: 2.3 Формы в HTML

## 1. Что такое формы в HTML?

### Определение
**HTML-формы** — это элементы веб-страницы, которые позволяют пользователям вводить данные и отправлять их на сервер для обработки. Формы — основной способ взаимодействия пользователя с веб-приложением.

### Аналогия
Представьте формы как цифровые анкеты или бланки:
- **Поля ввода** = вопросы в анкете
- **Кнопка отправки** = кнопка "Отправить" внизу анкеты
- **Сервер** = отдел обработки анкет

## 2. Базовый тег `<form>`

### Структура формы
```html
<form action="/обработчик" method="POST">
    <!-- Поля формы здесь -->
    <button type="submit">Отправить</button>
</form>
```

### Атрибуты тега `<form>`

#### `action` — куда отправлять данные
```html
<!-- Отправка на сервер -->
<form action="https://example.com/process-form" method="POST">

<!-- Отправка на тот же сервер (относительный путь) -->
<form action="/api/submit" method="POST">

<!-- Обработка на клиенте (JavaScript) -->
<form action="javascript:void(0);">
```

#### `method` — способ отправки данных
```html
<!-- GET - данные в URL (для поиска, фильтров) -->
<form action="/search" method="GET">
    <input type="text" name="query">
    <!-- Результат: /search?query=значение -->
</form>

<!-- POST - данные в теле запроса (для логинов, регистрации) -->
<form action="/login" method="POST">
    <input type="text" name="username">
    <input type="password" name="password">
</form>
```

#### `name` — имя формы (для JavaScript)
```html
<form name="contactForm" action="/submit" method="POST">
```

#### Другие важные атрибуты
```html
<!-- Валидация в браузере -->
<form novalidate>
    <!-- Браузер не будет проверять данные -->

<!-- Кодировка данных (для файлов) -->
<form enctype="multipart/form-data">

<!-- Автозаполнение -->
<form autocomplete="on">  <!-- или "off" -->
```

## 3. Элементы форм: `<input>`

### Общая структура элемента `<input>`
```html
<input type="тип" name="имя" id="идентификатор" value="значение" required>
```

### Основные типы input

#### 1. Текстовые поля
```html
<!-- Однострочный текст -->
<label for="username">Имя пользователя:</label>
<input type="text" id="username" name="username" placeholder="Введите имя">

<!-- Пароль (скрытый текст) -->
<label for="password">Пароль:</label>
<input type="password" id="password" name="password">

<!-- Многострочный текст (textarea вместо input) -->
<label for="bio">О себе:</label>
<textarea id="bio" name="bio" rows="4" cols="50"></textarea>
```

#### 2. Числовые поля
```html
<!-- Целое число -->
<label for="age">Возраст:</label>
<input type="number" id="age" name="age" min="0" max="120" step="1">

<!-- Ползунок для чисел -->
<label for="volume">Громкость:</label>
<input type="range" id="volume" name="volume" min="0" max="100" value="50">

<!-- Скрытое поле (не видно пользователю) -->
<input type="hidden" name="user_id" value="12345">
```

#### 3. Даты и время
```html
<!-- Дата -->
<label for="birthdate">Дата рождения:</label>
<input type="date" id="birthdate" name="birthdate">

<!-- Время -->
<label for="meeting-time">Время встречи:</label>
<input type="time" id="meeting-time" name="meeting-time" value="09:00">

<!-- Дата и время -->
<label for="event">Дата и время события:</label>
<input type="datetime-local" id="event" name="event">

<!-- Месяц -->
<label for="month">Месяц:</label>
<input type="month" id="month" name="month">

<!-- Неделя -->
<label for="week">Неделя:</label>
<input type="week" id="week" name="week">
```

#### 4. Выбор из вариантов
```html
<!-- Радиокнопки (выбор одного из нескольких) -->
<fieldset>
    <legend>Выберите пол:</legend>
    
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">Мужской</label><br>
    
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Женский</label><br>
    
    <input type="radio" id="other" name="gender" value="other">
    <label for="other">Другой</label>
</fieldset>

<!-- Чекбоксы (выбор нескольких) -->
<fieldset>
    <legend>Выберите интересы:</legend>
    
    <input type="checkbox" id="sports" name="interests" value="sports">
    <label for="sports">Спорт</label><br>
    
    <input type="checkbox" id="music" name="interests" value="music">
    <label for="music">Музыка</label><br>
    
    <input type="checkbox" id="books" name="interests" value="books">
    <label for="books">Книги</label>
</fieldset>
```

#### 5. Файлы и цвета
```html
<!-- Загрузка файла -->
<label for="avatar">Аватар:</label>
<input type="file" id="avatar" name="avatar" accept=".jpg,.png,.gif">

<!-- Выбор цвета -->
<label for="color">Любимый цвет:</label>
<input type="color" id="color" name="color" value="#ff0000">
```

#### 6. Специальные типы
```html
<!-- Email с валидацией -->
<label for="email">Email:</label>
<input type="email" id="email" name="email" required>

<!-- URL с валидацией -->
<label for="website">Веб-сайт:</label>
<input type="url" id="website" name="website">

<!-- Телефон (формат зависит от браузера) -->
<label for="phone">Телефон:</label>
<input type="tel" id="phone" name="phone" pattern="[0-9]{10}">

<!-- Поиск -->
<label for="search">Поиск:</label>
<input type="search" id="search" name="search">
```

### Важные атрибуты `<input>`

```html
<!-- Обязательное поле -->
<input type="text" name="username" required>

<!-- Значение по умолчанию -->
<input type="text" name="city" value="Москва">

<!-- Подсказка (placeholder) -->
<input type="text" name="name" placeholder="Иван Иванов">

<!-- Минимальная и максимальная длина -->
<input type="text" name="code" minlength="4" maxlength="8">

<!-- Минимальное и максимальное значение (для чисел) -->
<input type="number" name="quantity" min="1" max="10">

<!-- Шаг изменения (для чисел, дат) -->
<input type="number" name="age" step="5">
<input type="datetime-local" name="time" step="3600"> <!-- 1 час -->

<!-- Регулярное выражение для проверки -->
<input type="text" name="zipcode" pattern="[0-9]{6}">

<!-- Автозаполнение -->
<input type="text" name="name" autocomplete="name">
<input type="email" name="email" autocomplete="email">

<!-- Отключенное поле -->
<input type="text" name="readonly_field" disabled value="Нельзя изменить">

<!-- Только для чтения -->
<input type="text" name="readonly_field" readonly value="Только чтение">

<!-- Автофокус -->
<input type="text" name="first_field" autofocus>
```

## 4. Элемент `<select>` — выпадающий список

```html
<label for="country">Страна:</label>
<select id="country" name="country">
    <option value="">-- Выберите страну --</option>
    <option value="ru">Россия</option>
    <option value="us">США</option>
    <option value="de">Германия</option>
    <option value="fr">Франция</option>
</select>

<!-- Множественный выбор -->
<label for="languages">Языки программирования:</label>
<select id="languages" name="languages" multiple size="4">
    <option value="python">Python</option>
    <option value="javascript">JavaScript</option>
    <option value="java">Java</option>
    <option value="csharp">C#</option>
    <option value="php">PHP</option>
</select>

<!-- Группировка опций -->
<label for="car">Автомобиль:</label>
<select id="car" name="car">
    <optgroup label="Немецкие марки">
        <option value="bmw">BMW</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
    </optgroup>
    <optgroup label="Японские марки">
        <option value="toyota">Toyota</option>
        <option value="honda">Honda</option>
        <option value="nissan">Nissan</option>
    </optgroup>
</select>
```

## 5. Элемент `<textarea>` — многострочный текст

```html
<label for="message">Сообщение:</label>
<textarea 
    id="message" 
    name="message" 
    rows="5" 
    cols="40"
    placeholder="Введите ваше сообщение..."
    minlength="10"
    maxlength="500"
    wrap="soft">Значение по умолчанию</textarea>
```

**Атрибуты:**
- `rows` — количество строк (высота)
- `cols` — количество колонок (ширина)
- `wrap` — перенос строк (`soft`, `hard`)

## 6. Элемент `<button>` — кнопки

```html
<!-- Кнопка отправки формы -->
<button type="submit">Отправить форму</button>

<!-- Кнопка сброса формы -->
<button type="reset">Очистить форму</button>

<!-- Обычная кнопка (для JavaScript) -->
<button type="button" onclick="alert('Привет!')">Нажми меня</button>

<!-- Кнопка с иконкой -->
<button type="submit">
    <img src="send-icon.png" alt="Отправить" width="16" height="16">
    Отправить
</button>

<!-- Отключенная кнопка -->
<button type="submit" disabled>Отправить (недоступно)</button>
```

## 7. Элемент `<label>` — метки полей

```html
<!-- Способ 1: id и for -->
<label for="username">Имя пользователя:</label>
<input type="text" id="username" name="username">

<!-- Способ 2: обертка -->
<label>
    <input type="checkbox" name="subscribe">
    Подписаться на рассылку
</label>

<!-- Способ 3: сложная метка -->
<label for="terms">
    <input type="checkbox" id="terms" name="terms">
    Я согласен с 
    <a href="/terms">условиями использования</a>
</label>
```

## 8. Элемент `<fieldset>` и `<legend>` — группировка

```html
<fieldset>
    <legend>Контактная информация</legend>
    
    <label for="name">Имя:</label>
    <input type="text" id="name" name="name"><br><br>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email"><br><br>
    
    <label for="phone">Телефон:</label>
    <input type="tel" id="phone" name="phone">
</fieldset>
```

## 9. Полный пример формы

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Форма регистрации</title>
    <style>
        * { box-sizing: border-box; }
        body { font-family: Arial, sans-serif; margin: 40px; }
        .form-container { max-width: 600px; margin: 0 auto; }
        .form-group { margin-bottom: 20px; }
        label { display: block; margin-bottom: 5px; font-weight: bold; }
        input, select, textarea { 
            width: 100%; 
            padding: 10px; 
            border: 1px solid #ddd; 
            border-radius: 4px; 
        }
        fieldset { 
            border: 1px solid #ddd; 
            padding: 20px; 
            margin-bottom: 20px; 
            border-radius: 4px; 
        }
        legend { 
            padding: 0 10px; 
            font-weight: bold; 
        }
        button { 
            padding: 12px 24px; 
            background: #007bff; 
            color: white; 
            border: none; 
            border-radius: 4px; 
            cursor: pointer; 
            font-size: 16px; 
        }
        button:hover { background: #0056b3; }
        .required::after { 
            content: " *"; 
            color: red; 
        }
        .error { 
            color: red; 
            font-size: 14px; 
            margin-top: 5px; 
            display: none; 
        }
        input:invalid { border-color: red; }
        input:valid { border-color: green; }
    </style>
</head>
<body>
    <div class="form-container">
        <h1>Регистрация пользователя</h1>
        
        <form id="registrationForm" action="/api/register" method="POST" novalidate>
            <!-- Личная информация -->
            <fieldset>
                <legend>Личная информация</legend>
                
                <div class="form-group">
                    <label for="fullName" class="required">ФИО:</label>
                    <input type="text" 
                           id="fullName" 
                           name="fullName" 
                           placeholder="Иванов Иван Иванович"
                           required
                           minlength="2"
                           maxlength="100">
                    <div class="error" id="fullNameError">
                        Поле обязательно для заполнения (2-100 символов)
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="birthDate" class="required">Дата рождения:</label>
                    <input type="date" 
                           id="birthDate" 
                           name="birthDate" 
                           required
                           min="1900-01-01"
                           max="2024-01-01">
                </div>
                
                <div class="form-group">
                    <label>Пол:</label>
                    <div>
                        <input type="radio" id="genderMale" name="gender" value="male" checked>
                        <label for="genderMale">Мужской</label>
                        
                        <input type="radio" id="genderFemale" name="gender" value="female">
                        <label for="genderFemale">Женский</label>
                    </div>
                </div>
            </fieldset>
            
            <!-- Контактная информация -->
            <fieldset>
                <legend>Контактная информация</legend>
                
                <div class="form-group">
                    <label for="email" class="required">Email:</label>
                    <input type="email" 
                           id="email" 
                           name="email" 
                           placeholder="example@domain.com"
                           required
                           autocomplete="email">
                    <div class="error" id="emailError">
                        Введите корректный email адрес
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="phone">Телефон:</label>
                    <input type="tel" 
                           id="phone" 
                           name="phone" 
                           placeholder="+7 (999) 123-45-67"
                           pattern="^\+7\s?[0-9]{3}\s?[0-9]{3}-[0-9]{2}-[0-9]{2}$">
                    <small>Формат: +7 (999) 123-45-67</small>
                </div>
                
                <div class="form-group">
                    <label for="country">Страна:</label>
                    <select id="country" name="country" required>
                        <option value="">-- Выберите страну --</option>
                        <option value="ru" selected>Россия</option>
                        <option value="by">Беларусь</option>
                        <option value="kz">Казахстан</option>
                        <option value="ua">Украина</option>
                        <option value="other">Другая</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="city">Город:</label>
                    <input type="text" 
                           id="city" 
                           name="city" 
                           list="cities"
                           placeholder="Начните вводить название">
                    <datalist id="cities">
                        <option value="Москва">
                        <option value="Санкт-Петербург">
                        <option value="Новосибирск">
                        <option value="Екатеринбург">
                        <option value="Казань">
                    </datalist>
                </div>
            </fieldset>
            
            <!-- Учетные данные -->
            <fieldset>
                <legend>Учетные данные</legend>
                
                <div class="form-group">
                    <label for="username" class="required">Имя пользователя:</label>
                    <input type="text" 
                           id="username" 
                           name="username" 
                           placeholder="Придумайте логин"
                           required
                           minlength="3"
                           maxlength="20"
                           pattern="[a-zA-Z0-9_]+">
                    <small>Только латинские буквы, цифры и нижнее подчеркивание</small>
                </div>
                
                <div class="form-group">
                    <label for="password" class="required">Пароль:</label>
                    <input type="password" 
                           id="password" 
                           name="password" 
                           required
                           minlength="8"
                           pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}">
                    <small>Минимум 8 символов, одна заглавная буква, одна цифра</small>
                </div>
                
                <div class="form-group">
                    <label for="confirmPassword" class="required">Подтвердите пароль:</label>
                    <input type="password" 
                           id="confirmPassword" 
                           name="confirmPassword" 
                           required>
                </div>
            </fieldset>
            
            <!-- Дополнительная информация -->
            <fieldset>
                <legend>Дополнительная информация</legend>
                
                <div class="form-group">
                    <label for="bio">О себе:</label>
                    <textarea id="bio" 
                              name="bio" 
                              rows="4" 
                              placeholder="Расскажите о себе..."
                              maxlength="500"></textarea>
                    <small>Максимум 500 символов</small>
                </div>
                
                <div class="form-group">
                    <label>Интересы:</label>
                    <div>
                        <input type="checkbox" id="interestSports" name="interests" value="sports">
                        <label for="interestSports">Спорт</label><br>
                        
                        <input type="checkbox" id="interestMusic" name="interests" value="music">
                        <label for="interestMusic">Музыка</label><br>
                        
                        <input type="checkbox" id="interestBooks" name="interests" value="books">
                        <label for="interestBooks">Книги</label><br>
                        
                        <input type="checkbox" id="interestTravel" name="interests" value="travel">
                        <label for="interestTravel">Путешествия</label>
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="experience">Уровень опыта:</label>
                    <input type="range" 
                           id="experience" 
                           name="experience" 
                           min="0" 
                           max="10" 
                           value="5"
                           oninput="expValue.value = value">
                    <output id="expValue">5</output> из 10
                </div>
                
                <div class="form-group">
                    <label for="avatar">Аватар:</label>
                    <input type="file" 
                           id="avatar" 
                           name="avatar" 
                           accept=".jpg,.jpeg,.png,.gif"
                           multiple>
                    <small>Можно выбрать несколько файлов (jpg, png, gif)</small>
                </div>
            </fieldset>
            
            <!-- Соглашения -->
            <fieldset>
                <legend>Соглашения</legend>
                
                <div class="form-group">
                    <label for="newsletter">
                        <input type="checkbox" id="newsletter" name="newsletter" checked>
                        Подписаться на новостную рассылку
                    </label>
                </div>
                
                <div class="form-group">
                    <label for="terms" class="required">
                        <input type="checkbox" id="terms" name="terms" required>
                        Я согласен с 
                        <a href="/terms" target="_blank">условиями использования</a>
                        и 
                        <a href="/privacy" target="_blank">политикой конфиденциальности</a>
                    </label>
                    <div class="error" id="termsError">
                        Необходимо принять условия использования
                    </div>
                </div>
            </fieldset>
            
            <!-- Скрытые поля -->
            <input type="hidden" name="registration_source" value="website_form">
            <input type="hidden" name="referrer" id="referrerField">
            
            <!-- Кнопки формы -->
            <div class="form-group">
                <button type="submit">Зарегистрироваться</button>
                <button type="reset">Очистить форму</button>
                <button type="button" onclick="fillDemoData()">Заполнить демо-данные</button>
            </div>
        </form>
    </div>

    <script>
        // Сохраняем источник перехода
        document.getElementById('referrerField').value = document.referrer;
        
        // Валидация паролей
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');
        
        function validatePasswords() {
            if (password.value !== confirmPassword.value) {
                confirmPassword.setCustomValidity('Пароли не совпадают');
            } else {
                confirmPassword.setCustomValidity('');
            }
        }
        
        password.onchange = validatePasswords;
        confirmPassword.onkeyup = validatePasswords;
        
        // Заполнение демо-данных
        function fillDemoData() {
            document.getElementById('fullName').value = 'Иванов Иван Иванович';
            document.getElementById('birthDate').value = '1990-05-15';
            document.getElementById('email').value = 'demo@example.com';
            document.getElementById('phone').value = '+7 (999) 123-45-67';
            document.getElementById('city').value = 'Москва';
            document.getElementById('username').value = 'demo_user';
            document.getElementById('password').value = 'Demo1234';
            document.getElementById('confirmPassword').value = 'Demo1234';
            document.getElementById('bio').value = 'Демонстрационный пользователь';
            document.getElementById('terms').checked = true;
        }
        
        // Показ ошибок при отправке
        document.getElementById('registrationForm').addEventListener('submit', function(event) {
            if (!this.checkValidity()) {
                event.preventDefault();
                // Показать все ошибки
                const errors = this.querySelectorAll(':invalid');
                errors.forEach(error => {
                    const errorElement = document.getElementById(error.id + 'Error');
                    if (errorElement) {
                        errorElement.style.display = 'block';
                    }
                });
            }
        });
    </script>
</body>
</html>
```

## 10. Новые элементы HTML5

### `<datalist>` — список подсказок
```html
<label for="browser">Любимый браузер:</label>
<input list="browsers" id="browser" name="browser">

<datalist id="browsers">
    <option value="Chrome">
    <option value="Firefox">
    <option value="Safari">
    <option value="Edge">
    <option value="Opera">
</datalist>
```

### `<output>` — вывод результата
```html
<label for="price">Цена: <output id="priceOutput">100</output> руб.</label>
<input type="range" id="price" name="price" min="0" max="1000" value="100" 
       oninput="priceOutput.value = this.value">
```

### `<progress>` и `<meter>` — индикаторы
```html
<!-- Прогресс загрузки -->
<label for="file">Загрузка файла:</label>
<progress id="file" value="70" max="100">70%</progress>

<!-- Измеритель -->
<label for="fuel">Уровень топлива:</label>
<meter id="fuel" value="0.6" min="0" max="1" low="0.2" high="0.8" optimum="0.5">
    60%
</meter>
```

## 11. Валидация форм

### Встроенная валидация браузера
```html
<!-- required - обязательно для заполнения -->
<input type="text" required>

<!-- pattern - регулярное выражение -->
<input type="text" pattern="[A-Za-z]{3,}" 
       title="Только латинские буквы, минимум 3 символа">

<!-- minlength и maxlength -->
<input type="text" minlength="2" maxlength="50">

<!-- min и max для чисел -->
<input type="number" min="1" max="100">

<!-- type="email" и type="url" -->
<input type="email" required>
<input type="url">
```

### Кастомные сообщения об ошибках
```html
<input type="text" id="username" required 
       oninvalid="this.setCustomValidity('Пожалуйста, введите имя пользователя')"
       oninput="this.setCustomValidity('')">
```

## 12. Отправка данных формы

### Формат данных при отправке

**GET-запрос:**
```
/search?query=html+forms&page=1&sort=relevance
```

**POST-запрос:**
```
Content-Type: application/x-www-form-urlencoded

username=ivan&email=ivan%40example.com&password=secret123
```

**Для файлов:**
```html
<form enctype="multipart/form-data" method="POST">
    <input type="file" name="file">
</form>
```

## 13. Лучшие практики

### Правильно:
```html
<!-- Всегда связывайте label с input -->
<label for="email">Email:</label>
<input type="email" id="email" name="email">

<!-- Группируйте связанные поля -->
<fieldset>
    <legend>Контактная информация</legend>
    <!-- поля -->
</fieldset>

<!-- Используйте правильные типы input -->
<input type="email" name="email">  <!-- вместо type="text" -->
<input type="tel" name="phone">    <!-- вместо type="text" -->

<!-- Добавляйте placeholder как подсказку -->
<input type="text" name="name" placeholder="Иван Иванов">
```

### Избегайте:
```html
<!-- Не используйте одинаковые id -->
<input id="field" name="field1">
<input id="field" name="field2">  <!-- ОШИБКА: дублирование id -->

<!-- Не забывайте name у полей формы -->
<input type="text">  <!-- БЕЗ name - данные не отправятся -->

<!-- Не полагайтесь только на placeholder -->
<input type="text" placeholder="Имя">  <!-- НУЖЕН label -->
```

## 14. Практическое задание

Создайте форму обратной связи для сайта:
1. Поля: имя, email, тема сообщения, текст сообщения
2. Добавьте выбор категории проблемы (выпадающий список)
3. Приоритет (радиокнопки: низкий, средний, высокий)
4. Прикрепление файла (до 5MB)
5. Подписка на ответ (чекбокс)
6. Кнопки: Отправить, Очистить
7. Добавьте валидацию всех полей
8. Реализуйте проверку совпадения email (поле "подтвердите email")

---

**Вопросы для самопроверки:**
1. В чем разница между GET и POST методами формы?
2. Зачем нужен атрибут `name` у полей формы?
3. Как связать `<label>` с `<input>`?
4. Чем отличается `<textarea>` от `<input type="text">`?
5. Как запретить отправку пустой формы?