### **Конспект лекции: Коллекции в Python — Словари**

**Тема:** 1.11 Коллекции в Python: Словари  
**Цель:** Освоить создание и работу со словарями в Python: обращение к элементам по ключу, основные методы для работы с ключами, значениями и парами.

---

## **Введение в словари**

**Словарь (dict)** — это неупорядоченная изменяемая коллекция пар "ключ-значение".  
**Аналогия из жизни:** Толковый словарь (слово → определение), телефонная книга (имя → номер), база данных (ID → запись).

**Зачем нужны словари?**
- Хранение структурированных данных
- Быстрый доступ к значениям по ключу
- Организация данных с понятными идентификаторами
- Группировка связанной информации

**Особенности словарей:**
- Ключи должны быть уникальными и неизменяемыми
- Значения могут быть любого типа
- Не сохраняют порядок элементов (до Python 3.7)
- Динамически изменяемы

---

## **Создание словарей**

### **Способы создания словарей**

```python
# 1. Литерал словаря (рекомендуемый способ)
empty_dict = {}
person = {"name": "Анна", "age": 25, "city": "Москва"}

# 2. Функция dict()
empty_dict2 = dict()
person2 = dict(name="Иван", age=30, city="Санкт-Петербург")

# 3. Из списка кортежей
pairs = [("name", "Мария"), ("age", 28), ("city", "Казань")]
person3 = dict(pairs)

print(person)   # {'name': 'Анна', 'age': 25, 'city': 'Москва'}
print(person2)  # {'name': 'Иван', 'age': 30, 'city': 'Санкт-Петербург'}
print(person3)  # {'name': 'Мария', 'age': 28, 'city': 'Казань'}
```

### **Разнообразие ключей и значений**

```python
# Ключи: только неизменяемые типы
valid_dict = {
    "string_key": "значение",
    123: "числовой ключ",
    (1, 2, 3): "кортеж как ключ",
    True: "булев ключ"
}

# НЕВЕРНО (изменяемые типы не могут быть ключами):
# invalid_dict = {[1, 2]: "список как ключ"}  # TypeError

# Значения: любые типы данных
complex_dict = {
    "name": "Алексей",
    "scores": [5, 4, 3, 5, 4],
    "contacts": {"email": "alex@mail.com", "phone": "+79991234567"},
    "is_active": True,
    "metadata": None
}

print(complex_dict)
```

---

## **Обращение к элементам по ключу**

### **Базовые операции доступа**

```python
student = {
    "name": "Мария",
    "age": 20,
    "major": "Информатика",
    "grades": [5, 4, 5, 3, 5]
}

# Получение значения по ключу
print(student["name"])    # Мария
print(student["age"])     # 20
print(student["grades"])  # [5, 4, 5, 3, 5]

# Изменение значения
student["age"] = 21
print(student["age"])     # 21

# Добавление новой пары ключ-значение
student["scholarship"] = True
print(student)  # {'name': 'Мария', 'age': 21, 'major': 'Информатика', 
                #  'grades': [5, 4, 5, 3, 5], 'scholarship': True}
```

### **Безопасные способы доступа**

```python
config = {
    "host": "localhost",
    "port": 8080,
    "debug": True
}

# ОПАСНО: KeyError если ключа нет
# print(config["database"])  # KeyError

# БЕЗОПАСНО: метод get()
print(config.get("host"))      # localhost
print(config.get("database"))  # None (без ошибки)
print(config.get("database", "default_db"))  # default_db (значение по умолчанию)

# Проверка существования ключа
if "debug" in config:
    print("Режим отладки включен")
    
if "timeout" not in config:
    config["timeout"] = 30
```

### **Удаление элементов**

```python
user_settings = {
    "theme": "dark",
    "language": "ru",
    "notifications": True,
    "font_size": 14
}

# Удаление с возвратом значения
theme = user_settings.pop("theme")
print(theme)  # dark
print(user_settings)  # {'language': 'ru', 'notifications': True, 'font_size': 14}

# Удаление без возврата значения
del user_settings["font_size"]
print(user_settings)  # {'language': 'ru', 'notifications': True}

# Безопасное удаление
removed = user_settings.pop("timeout", None)
print(removed)  # None (без ошибки)

# Очистка всего словаря
user_settings.clear()
print(user_settings)  # {}
```

---

## **Методы словарей**

### **`keys()` — получение всех ключей**

```python
car = {
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "color": "black"
}

# Получение ключей
keys = car.keys()
print(keys)        # dict_keys(['brand', 'model', 'year', 'color'])
print(list(keys))  # ['brand', 'model', 'year', 'color']

# Использование в циклах
print("Характеристики автомобиля:")
for key in car.keys():
    print(f"- {key}")

# Динамическое обновление
car["price"] = 2500000
print(keys)  # dict_keys(['brand', 'model', 'year', 'color', 'price']) - обновилось!
```

### **`values()` — получение всех значений**

```python
product = {
    "name": "Ноутбук",
    "price": 75000,
    "in_stock": True,
    "category": "Электроника"
}

# Получение значений
values = product.values()
print(values)        # dict_values(['Ноутбук', 75000, True, 'Электроника'])
print(list(values))  # ['Ноутбук', 75000, True, 'Электроника']

# Использование в циклах
print("Значения продукта:")
for value in product.values():
    print(f"- {value}")

# Поиск по значениям
if 75000 in product.values():
    print("Найден товар с ценой 75000")
```

### **`items()` — получение пар ключ-значение**

```python
employee = {
    "name": "Петр",
    "position": "Разработчик",
    "salary": 120000,
    "skills": ["Python", "JavaScript", "SQL"]
}

# Получение пар
items = employee.items()
print(items)  # dict_items([('name', 'Петр'), ('position', 'Разработчик'), 
              #              ('salary', 120000), ('skills', ['Python', 'JavaScript', 'SQL'])])

# Использование в циклах (самый частый случай)
print("Информация о сотруднике:")
for key, value in employee.items():
    print(f"{key}: {value}")

# Распаковка в цикле
for attribute, val in employee.items():
    if isinstance(val, list):
        print(f"{attribute}: {', '.join(val)}")
    else:
        print(f"{attribute}: {val}")
```

---

## **Практические примеры**

### **Пример 1: База данных пользователей**

```python
# Система хранения пользователей
users = {
    1: {"name": "Анна", "email": "anna@mail.com", "age": 25},
    2: {"name": "Борис", "email": "boris@mail.com", "age": 30},
    3: {"name": "Виктор", "email": "viktor@mail.com", "age": 28}
}

# Добавление нового пользователя
users[4] = {"name": "Галина", "email": "galina@mail.com", "age": 22}

# Поиск пользователя по ID
def get_user(user_id):
    return users.get(user_id, "Пользователь не найден")

# Получение всех email
emails = [user["email"] for user in users.values()]
print("Все email:", emails)

# Статистика
print(f"Всего пользователей: {len(users)}")
print("Имена пользователей:", list(users.keys()))

# Обход всех пользователей
print("\nСписок пользователей:")
for user_id, user_info in users.items():
    print(f"ID: {user_id}, Имя: {user_info['name']}, Email: {user_info['email']}")
```

### **Пример 2: Система настроек приложения**

```python
# Конфигурация приложения
app_config = {
    "database": {
        "host": "localhost",
        "port": 5432,
        "name": "myapp_db",
        "user": "admin"
    },
    "server": {
        "host": "0.0.0.0",
        "port": 8000,
        "debug": True
    },
    "features": {
        "auth": True,
        "cache": False,
        "logging": True
    }
}

# Доступ к вложенным настройкам
db_host = app_config["database"]["host"]
server_port = app_config["server"]["port"]
is_auth_enabled = app_config["features"]["auth"]

print(f"База данных: {db_host}:{app_config['database']['port']}")
print(f"Сервер: {app_config['server']['host']}:{server_port}")
print(f"Аутентификация включена: {is_auth_enabled}")

# Изменение настроек
app_config["server"]["debug"] = False
app_config["features"]["cache"] = True

# Проверка всех включенных функций
print("\nВключенные функции:")
for feature, enabled in app_config["features"].items():
    if enabled:
        print(f"- {feature}")
```

### **Пример 3: Счетчик частоты слов**

```python
def count_words(text):
    """Подсчитывает частоту слов в тексте"""
    words = text.lower().split()
    word_count = {}
    
    for word in words:
        # Убираем знаки препинания
        word = word.strip('.,!?;:')
        if word:
            word_count[word] = word_count.get(word, 0) + 1
    
    return word_count

# Анализ текста
text = "Привет мир! Мир прекрасен. Привет всем в этом прекрасном мире."
frequency = count_words(text)

print("Частота слов:")
for word, count in frequency.items():
    print(f"'{word}': {count} раз(а)")

# Самые частые слова
sorted_words = sorted(frequency.items(), key=lambda x: x[1], reverse=True)
print("\nТоп-3 самых частых слов:")
for word, count in sorted_words[:3]:
    print(f"'{word}': {count}")
```

### **Пример 4: Телефонная книга**

```python
class PhoneBook:
    def __init__(self):
        self.contacts = {}
    
    def add_contact(self, name, phone):
        """Добавляет контакт в телефонную книгу"""
        self.contacts[name] = phone
        print(f"Контакт '{name}' добавлен")
    
    def find_contact(self, name):
        """Находит телефон по имени"""
        phone = self.contacts.get(name)
        if phone:
            return f"{name}: {phone}"
        else:
            return f"Контакт '{name}' не найден"
    
    def remove_contact(self, name):
        """Удаляет контакт"""
        if name in self.contacts:
            removed_phone = self.contacts.pop(name)
            print(f"Контакт '{name}' ({removed_phone}) удален")
        else:
            print(f"Контакт '{name}' не найден")
    
    def show_all(self):
        """Показывает все контакты"""
        if not self.contacts:
            print("Телефонная книга пуста")
            return
        
        print("\nТелефонная книга:")
        for name, phone in self.contacts.items():
            print(f"- {name}: {phone}")

# Использование
phone_book = PhoneBook()
phone_book.add_contact("Анна", "+79991234567")
phone_book.add_contact("Борис", "+79997654321")
phone_book.add_contact("Виктор", "+79999876543")

phone_book.show_all()
print(phone_book.find_contact("Анна"))
phone_book.remove_contact("Борис")
phone_book.show_all()
```

---

## **Распространенные ошибки**

### **1. Обращение к несуществующему ключу**

```python
user = {"name": "Анна", "age": 25}

# НЕПРАВИЛЬНО:
# print(user["email"])  # KeyError

# ПРАВИЛЬНО:
print(user.get("email", "Не указано"))  # Не указано

# Или с проверкой:
if "email" in user:
    print(user["email"])
else:
    print("Email не указан")
```

### **2. Использование изменяемых объектов как ключей**

```python
# НЕПРАВИЛЬНО:
# invalid_dict = {[1, 2]: "value"}  # TypeError

# ПРАВИЛЬНО:
valid_dict = {
    "string": "value",
    123: "value",
    (1, 2): "value",  # кортеж - неизменяемый
    True: "value"
}
```

### **3. Путаница между методами**

```python
data = {"a": 1, "b": 2, "c": 3}

# keys() - только ключи
print(data.keys())   # dict_keys(['a', 'b', 'c'])

# values() - только значения  
print(data.values()) # dict_values([1, 2, 3])

# items() - пары ключ-значение
print(data.items())  # dict_items([('a', 1), ('b', 2), ('c', 3)])
```

### **4. Изменение словаря во время итерации**

```python
data = {"a": 1, "b": 2, "c": 3}

# ОПАСНО (может привести к ошибкам):
# for key in data:
#     if key == "b":
#         del data[key]  # RuntimeError

# БЕЗОПАСНО (создаем копию ключей):
for key in list(data.keys()):
    if key == "b":
        del data[key]
print(data)  # {'a': 1, 'c': 3}
```

---

## **Итоги урока**

### **Ключевые моменты:**
- **Словари** — коллекции пар "ключ-значение" с быстрым доступом
- **Ключи** должны быть уникальными и неизменяемыми
- **`dict[key]`** — доступ к значению (может вызвать KeyError)
- **`dict.get(key, default)`** — безопасный доступ
- **`keys()`** — все ключи словаря
- **`values()`** — все значения словаря  
- **`items()`** — все пары ключ-значение

### **Практические рекомендации:**
1. Используйте **`get()`** для безопасного доступа к необязательным ключам
2. Применяйте **`items()`** для итерации по словарю в циклах
3. Проверяйте существование ключа через **`in`** перед доступом
4. Используйте словари для структурирования связанных данных
5. Помните об ограничениях на типы ключей
6. Используйте вложенные словари для сложных структур данных

### **Типичные сценарии применения:**
- **Конфигурации и настройки** — параметры приложения
- **Базы данных в памяти** — пользователи, товары, заказы
- **Кэширование** — хранение результатов вычислений
- **Счетчики и статистика** — частоты, количества
- **Параметры функций** — группировка связанных аргументов

**Совет:** Словари — один из самых мощных инструментов Python. Освойте их хорошо — они будут вашими верными помощниками в большинстве проектов!