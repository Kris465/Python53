### **Конспект лекции: Коллекции в JavaScript — Объекты**

**Тема:** 1.12 Коллекции в JavaScript: Объекты  
**Цель:** Освоить создание и работу с объектами в JavaScript: точечную и скобочную нотацию для доступа к свойствам, основные операции с объектами.

---

## **Введение в объекты**

**Объект** — это коллекция пар "ключ-значение", где ключи называются свойствами.  
**Аналогия из жизни:** Анкета пользователя (поле → значение), карточка товара (характеристика → описание), профиль в социальной сети.

**Зачем нужны объекты?**
- Структурированное хранение связанных данных
- Группировка характеристик одной сущности
- Организация данных с семантически понятными именами
- Моделирование реальных объектов предметной области

**Особенности объектов в JavaScript:**
- Свойства могут быть любого типа (строки, числа, функции, другие объекты)
- Динамическое добавление и удаление свойств
- Гибкий доступ к свойствам через разные нотации
- Объекты являются основой для многих конструкций языка

---

## **Создание объектов**

### **Способы создания объектов**

```javascript
// 1. Литерал объекта (рекомендуемый способ)
const emptyObj = {};
const person = {
    name: "Анна",
    age: 25,
    city: "Москва",
    isStudent: true
};

// 2. Конструктор Object (менее популярен)
const emptyObj2 = new Object();
const car = new Object();
car.brand = "Toyota";
car.model = "Camry";

// 3. Функция Object.create()
const prototypeObj = { type: "animal" };
const dog = Object.create(prototypeObj);
dog.name = "Бобик";
dog.age = 3;

console.log(person); // {name: "Анна", age: 25, city: "Москва", isStudent: true}
console.log(car);    // {brand: "Toyota", model: "Camry"}
console.log(dog);    // {name: "Бобик", age: 3} (с прототипом)
```

### **Разнообразие свойств объектов**

```javascript
// Объект с различными типами свойств
const user = {
    // Примитивные значения
    firstName: "Иван",
    lastName: "Петров", 
    age: 30,
    isActive: true,
    
    // Массивы
    hobbies: ["чтение", "программирование", "путешествия"],
    
    // Вложенные объекты
    address: {
        city: "Санкт-Петербург",
        street: "Невский проспект",
        building: 15
    },
    
    // Функции (методы)
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    
    // Свойства с специальными символами (в кавычках)
    "email-address": "ivan@mail.com",
    "date of birth": "1993-05-15"
};

console.log(user);
```

---

## **Точечная нотация**

### **Доступ к свойствам через точку**

```javascript
const product = {
    name: "Ноутбук",
    price: 75000,
    category: "Электроника",
    inStock: true,
    specifications: {
        processor: "Intel i5",
        ram: "16GB",
        storage: "512GB SSD"
    }
};

// Чтение свойств
console.log(product.name);        // "Ноутбук"
console.log(product.price);       // 75000
console.log(product.inStock);     // true

// Доступ к вложенным свойствам
console.log(product.specifications.processor);  // "Intel i5"
console.log(product.specifications.ram);        // "16GB"

// Изменение свойств
product.price = 70000;
product.inStock = false;

// Добавление новых свойств
product.brand = "Dell";
product.discount = 0.1;

console.log(product);
```

### **Вызов методов через точку**

```javascript
const calculator = {
    value: 0,
    
    add: function(num) {
        this.value += num;
        return this;
    },
    
    subtract: function(num) {
        this.value -= num;
        return this;
    },
    
    multiply: function(num) {
        this.value *= num;
        return this;
    },
    
    getValue: function() {
        return this.value;
    },
    
    reset: function() {
        this.value = 0;
        return this;
    }
};

// Использование методов
calculator.add(10);
console.log(calculator.getValue()); // 10

calculator.subtract(3).multiply(2);
console.log(calculator.getValue()); // 14

calculator.reset();
console.log(calculator.getValue()); // 0
```

---

## **Скобочная нотация**

### **Доступ к свойствам через квадратные скобки**

```javascript
const employee = {
    name: "Мария",
    position: "Разработчик",
    "work experience": 3,  // свойство с пробелом
    "email-address": "maria@company.com"
};

// Чтение свойств
console.log(employee["name"]);              // "Мария"
console.log(employee["position"]);          // "Разработчик"

// Особые случаи - свойства с пробелами или дефисами
console.log(employee["work experience"]);   // 3
console.log(employee["email-address"]);     // "maria@company.com"

// Изменение свойств
employee["position"] = "Старший разработчик";
employee["salary"] = 120000;  // добавление нового свойства

// Динамический доступ
const propertyName = "name";
console.log(employee[propertyName]);  // "Мария"
```

### **Динамическое обращение к свойствам**

```javascript
const config = {
    host: "localhost",
    port: 8080,
    database: "myapp",
    username: "admin"
};

// Динамический доступ через переменные
const setting = "port";
console.log(config[setting]);  // 8080

// Перебор всех свойств
for (const key in config) {
    console.log(`${key}: ${config[key]}`);
}

// Использование в функциях
function getConfigValue(key) {
    return config[key] || "Настройка не найдена";
}

console.log(getConfigValue("host"));     // "localhost"
console.log(getConfigValue("timeout"));  // "Настройка не найдена"
```

---

## **Сравнение точечной и скобочной нотации**

### **Когда что использовать?**

```javascript
const data = {
    firstName: "Алексей",
    lastName: "Сидоров",
    age: 28,
    "favorite color": "синий",
    "123special": "особое свойство"
};

// ТОЧЕЧНАЯ НОТАЦИЯ - когда имя свойства известно и валидно:
console.log(data.firstName);  // ✅
console.log(data.age);        // ✅
data.lastName = "Иванов";     // ✅

// СКОБОЧНАЯ НОТАЦИЯ - когда:
// 1. Свойство содержит пробелы или специальные символы:
console.log(data["favorite color"]);  // ✅
console.log(data["123special"]);      // ✅

// 2. Имя свойства хранится в переменной:
const prop = "firstName";
console.log(data[prop]);  // ✅

// 3. Динамическое создание имени свойства:
const dynamicProp = "score_" + Math.random();
data[dynamicProp] = 100;
console.log(data[dynamicProp]);  // ✅
```

### **Ограничения точечной нотации**

```javascript
const obj = {
    "normal-property": "значение1",
    "property with spaces": "значение2",
    "123numbers": "значение3",
    "special-chars!@#": "значение4"
};

// НЕВЕРНО с точечной нотацией:
// obj.normal-property        // SyntaxError
// obj.property with spaces   // SyntaxError  
// obj.123numbers             // SyntaxError
// obj.special-chars!@#       // SyntaxError

// ВЕРНО со скобочной нотацией:
console.log(obj["normal-property"]);        // ✅
console.log(obj["property with spaces"]);   // ✅
console.log(obj["123numbers"]);             // ✅
console.log(obj["special-chars!@#"]);       // ✅
```

---

## **Практические примеры**

### **Пример 1: Профиль пользователя**

```javascript
// Система управления пользователями
const userProfile = {
    personalInfo: {
        firstName: "Екатерина",
        lastName: "Иванова",
        age: 26,
        birthDate: "1997-03-15"
    },
    contactInfo: {
        email: "ekaterina@mail.com",
        phone: "+79991234567",
        address: {
            city: "Москва",
            street: "Тверская",
            building: "25",
            apartment: "14"
        }
    },
    preferences: {
        theme: "dark",
        language: "ru",
        notifications: true
    },
    
    // Методы
    getFullAddress: function() {
        const addr = this.contactInfo.address;
        return `г. ${addr.city}, ул. ${addr.street}, д. ${addr.building}, кв. ${addr.apartment}`;
    },
    
    updatePreference: function(key, value) {
        if (this.preferences.hasOwnProperty(key)) {
            this.preferences[key] = value;
            return `Настройка '${key}' обновлена`;
        } else {
            return `Настройка '${key}' не найдена`;
        }
    }
};

// Использование
console.log("Полное имя:", userProfile.personalInfo.firstName, userProfile.personalInfo.lastName);
console.log("Адрес:", userProfile.getFullAddress());
console.log(userProfile.updatePreference("theme", "light"));

// Динамическое обращение к настройкам
const settingKey = "language";
console.log("Текущий язык:", userProfile.preferences[settingKey]);
```

### **Пример 2: Корзина покупок**

```javascript
const shoppingCart = {
    items: [],
    total: 0,
    
    // Методы для работы с корзиной
    addItem: function(product, price, quantity = 1) {
        const item = {
            product: product,
            price: price,
            quantity: quantity,
            total: price * quantity
        };
        this.items.push(item);
        this.calculateTotal();
        console.log(`Добавлен: ${product} x${quantity}`);
    },
    
    removeItem: function(productName) {
        const index = this.items.findIndex(item => item.product === productName);
        if (index !== -1) {
            const removed = this.items.splice(index, 1)[0];
            this.calculateTotal();
            console.log(`Удален: ${removed.product}`);
            return removed;
        } else {
            console.log("Товар не найден в корзине");
            return null;
        }
    },
    
    calculateTotal: function() {
        this.total = this.items.reduce((sum, item) => sum + item.total, 0);
    },
    
    showCart: function() {
        console.log("\n=== КОРЗИНА ПОКУПОК ===");
        this.items.forEach((item, index) => {
            console.log(`${index + 1}. ${item.product} - ${item.quantity} x ${item.price} руб. = ${item.total} руб.`);
        });
        console.log(`ИТОГО: ${this.total} руб.`);
    },
    
    clearCart: function() {
        this.items = [];
        this.total = 0;
        console.log("Корзина очищена");
    }
};

// Использование
shoppingCart.addItem("Ноутбук", 75000, 1);
shoppingCart.addItem("Мышь", 1500, 2);
shoppingCart.addItem("Клавиатура", 3000, 1);

shoppingCart.showCart();
shoppingCart.removeItem("Мышь");
shoppingCart.showCart();
```

### **Пример 3: Система конфигурации**

```javascript
// Динамическая система настроек приложения
const appConfig = {
    // Базовые настройки
    settings: {
        "app.name": "MyApplication",
        "app.version": "1.0.0",
        "database.host": "localhost",
        "database.port": 5432,
        "cache.enabled": true,
        "cache.ttl": 3600,
        "security.ssl": false
    },
    
    // Методы для работы с настройками
    get: function(key) {
        return this.settings[key];
    },
    
    set: function(key, value) {
        this.settings[key] = value;
        console.log(`Настройка '${key}' установлена в '${value}'`);
    },
    
    getAll: function(prefix = "") {
        const result = {};
        for (const key in this.settings) {
            if (key.startsWith(prefix)) {
                result[key] = this.settings[key];
            }
        }
        return result;
    },
    
    // Динамическое создание геттеров/сеттеров
    setupDynamicAccessors: function() {
        for (const key in this.settings) {
            // Создаем свойство с геттером/сеттером
            Object.defineProperty(this, this.keyToPropertyName(key), {
                get: () => this.get(key),
                set: (value) => this.set(key, value),
                enumerable: true
            });
        }
    },
    
    keyToPropertyName: function(key) {
        // Преобразуем "app.name" в "appName"
        return key.replace(/\.(\w)/g, (_, letter) => letter.toUpperCase());
    }
};

// Инициализация динамических свойств
appConfig.setupDynamicAccessors();

// Использование
console.log("Имя приложения:", appConfig.appName);
console.log("Версия:", appConfig.appVersion);

appConfig.databaseHost = "192.168.1.100";
console.log("Хост БД:", appConfig.get("database.host"));

// Получение всех настроек базы данных
const dbSettings = appConfig.getAll("database");
console.log("Настройки БД:", dbSettings);
```

### **Пример 4: Работа с формами**

```javascript
// Обработка данных формы
const formData = {
    // Данные формы
    fields: {
        "user-name": "",
        "user-email": "",
        "user-age": "",
        "user-country": ""
    },
    
    // Валидация
    validationRules: {
        "user-name": { required: true, minLength: 2 },
        "user-email": { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
        "user-age": { required: true, min: 18, max: 100 },
        "user-country": { required: false }
    },
    
    // Методы
    setFieldValue: function(fieldName, value) {
        this.fields[fieldName] = value;
    },
    
    getFieldValue: function(fieldName) {
        return this.fields[fieldName];
    },
    
    validateField: function(fieldName) {
        const value = this.fields[fieldName];
        const rules = this.validationRules[fieldName];
        
        if (!rules) return true;
        
        if (rules.required && !value) {
            return `Поле '${fieldName}' обязательно для заполнения`;
        }
        
        if (rules.minLength && value.length < rules.minLength) {
            return `Минимальная длина: ${rules.minLength} символов`;
        }
        
        if (rules.pattern && !rules.pattern.test(value)) {
            return "Неверный формат";
        }
        
        if (rules.min && parseInt(value) < rules.min) {
            return `Минимальное значение: ${rules.min}`;
        }
        
        return null; // Валидация пройдена
    },
    
    validateAll: function() {
        const errors = {};
        for (const fieldName in this.validationRules) {
            const error = this.validateField(fieldName);
            if (error) {
                errors[fieldName] = error;
            }
        }
        return errors;
    },
    
    submit: function() {
        const errors = this.validateAll();
        if (Object.keys(errors).length === 0) {
            console.log("Форма успешно отправлена!");
            console.log("Данные:", this.fields);
            return true;
        } else {
            console.log("Ошибки валидации:", errors);
            return false;
        }
    }
};

// Заполнение формы
formData.setFieldValue("user-name", "Анна");
formData.setFieldValue("user-email", "anna@example.com");
formData.setFieldValue("user-age", "25");
formData.setFieldValue("user-country", "Россия");

// Проверка отдельных полей
console.log("Валидация email:", formData.validateField("user-email"));

// Отправка формы
formData.submit();
```

---

## **Распространенные ошибки**

### **1. Обращение к несуществующим свойствам**

```javascript
const obj = { name: "John", age: 30 };

// НЕПРАВИЛЬНО (без проверки):
// console.log(obj.address.city);  // TypeError

// ПРАВИЛЬНО (с проверкой):
if (obj.address && obj.address.city) {
    console.log(obj.address.city);
} else {
    console.log("Адрес не указан");
}

// Или с использованием опциональной цепочки (ES2020):
console.log(obj.address?.city); // undefined (без ошибки)
```

### **2. Путаница между нотациями**

```javascript
const data = {
    "first-name": "Анна",
    lastName: "Иванова"
};

// НЕПРАВИЛЬНО:
// data.first-name  // SyntaxError

// ПРАВИЛЬНО:
console.log(data["first-name"]);  // "Анна"
console.log(data.lastName);       // "Иванова"

// Динамический доступ:
const prop = "lastName";
console.log(data[prop]);          // "Иванова"
```

### **3. Изменение const объектов**

```javascript
const person = { name: "Анна", age: 25 };

// ЭТО РАБОТАЕТ (можно изменять свойства):
person.age = 26;          // ✅
person.city = "Москва";   // ✅
delete person.name;       // ✅

// ЭТО НЕ РАБОТАЕТ (нельзя переопределить):
// person = { name: "Борис" };  // ❌ TypeError
```

### **4. Использование зарезервированных слов**

```javascript
// НЕПРАВИЛЬНО (в строгом режиме):
// const obj = { class: "user", function: "admin" };  // SyntaxError в strict mode

// ПРАВИЛЬНО (со скобочной нотацией или другими именами):
const obj = {
    "class": "user",           // ✅ в нестрогом режиме
    userClass: "user",         // ✅ лучше
    userFunction: "admin"      // ✅ лучше
};
```

---

## **Итоги урока**

### **Ключевые моменты:**
- **Объекты** — коллекции свойств "ключ-значение" для структурирования данных
- **Точечная нотация** — для простых имен свойств: `object.property`
- **Скобочная нотация** — для сложных имен и динамического доступа: `object["property"]`
- **Свойства** могут содержать любые типы данных, включая функции (методы)
- **Объекты** являются mutable (изменяемыми) даже при объявлении через `const`

### **Практические рекомендации:**
1. Используйте **точечную нотацию** для простых и валидных имен свойств
2. Применяйте **скобочную нотацию** для свойств с пробелами, спецсимволами или динамических имен
3. Проверяйте существование свойств перед доступом к вложенным объектам
4. Используйте объекты для группировки связанных данных и функциональности
5. Помните о различии между `const` объектом и его изменяемыми свойствами
6. Используйте методы объектов для инкапсуляции связанной логики

### **Когда что использовать:**
- **Точечная нотация** — когда имена свойств известны заранее и являются валидными идентификаторами
- **Скобочная нотация** — когда имена свойств содержат спецсимволы, пробелы или определяются динамически
- **Объекты** — для представления сущностей предметной области, конфигураций, состояний

**Совет:** Объекты — фундаментальная структура в JavaScript. Освойте обе нотации доступа — они важны и используются в разных сценариях!