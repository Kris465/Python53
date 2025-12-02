**Конспект лекции: Магические методы в Python. `__str__` vs `__repr__`**

---

### **Тема 3.8: Магические методы в Python. `__str__` vs `__repr__`**

#### **1. Введение: Что такое магические методы?**
* **Магические методы (dunder methods)** — специальные методы в Python, которые начинаются и заканчиваются двойным подчеркиванием (`__метод__`).
* **Название:** "Dunder" = **D**ouble **Under**score
* **Назначение:** Позволяют классам определять поведение для встроенных операций и функций:
  * Арифметические операции (`+`, `-`, `*`, `/`)
  * Сравнение (`==`, `<`, `>`)
  * Индексирование и срезы (`[]`)
  * Преобразование в строку
  * И многое другое

#### **2. Основные группы магических методов**

| Категория | Примеры | Описание |
|-----------|---------|----------|
| **Создание и инициализация** | `__new__`, `__init__`, `__del__` | Создание и удаление объектов |
| **Строковое представление** | `__str__`, `__repr__`, `__format__` | Преобразование в строку |
| **Арифметические операции** | `__add__`, `__sub__`, `__mul__` | Математические операции |
| **Сравнение** | `__eq__`, `__lt__`, `__gt__` | Операторы сравнения |
| **Доступ к атрибутам** | `__getattr__`, `__setattr__`, `__delattr__` | Работа с атрибутами |
| **Коллекции** | `__len__`, `__getitem__`, `__setitem__` | Поведение как у коллекций |

#### **3. `__str__()` — для пользователя (human-readable)**

##### **Назначение:**
* Возвращает **"красивое"** строковое представление объекта
* Предназначен для **конечных пользователей**
* Используется функциями `print()` и `str()`

##### **Пример без `__str__`:**
```python
class Book:
    def __init__(self, title, author, year):
        self.title = title
        self.author = author
        self.year = year

book = Book("Преступление и наказание", "Достоевский Ф.М.", 1866)
print(book)  # Вывод: <__main__.Book object at 0x7f8c12345678>
```

##### **Пример с `__str__`:**
```python
class Book:
    def __init__(self, title, author, year):
        self.title = title
        self.author = author
        self.year = year
    
    def __str__(self):
        return f'Книга "{self.title}" (автор: {self.author}, {self.year} г.)'

book = Book("Преступление и наказание", "Достоевский Ф.М.", 1866)
print(book)  # Вывод: Книга "Преступление и наказание" (автор: Достоевский Ф.М., 1866 г.)
print(str(book))  # Тот же результат
```

#### **4. `__repr__()` — для разработчика (unambiguous)**

##### **Назначение:**
* Возвращает **однозначное** строковое представление объекта
* Предназначен для **разработчиков** (для отладки)
* Должен содержать достаточно информации для воссоздания объекта
* Используется функцией `repr()`, в отладчиках, в REPL

##### **Требования к `__repr__`:**
* **Однозначность** — можно понять, что за объект
* **Полезность** — содержит важную информацию
* **Идеально:** строка, которую можно выполнить через `eval()` для создания объекта

##### **Пример с `__repr__`:**
```python
class Book:
    def __init__(self, title, author, year):
        self.title = title
        self.author = author
        self.year = year
    
    def __str__(self):
        return f'Книга "{self.title}" автора {self.author}'
    
    def __repr__(self):
        return f"Book('{self.title}', '{self.author}', {self.year})"

book = Book("Преступление и наказание", "Достоевский Ф.М.", 1866)

print(str(book))   # Книга "Преступление и наказание" автора Достоевский Ф.М.
print(repr(book))  # Book('Преступление и наказание', 'Достоевский Ф.М.', 1866)

# Проверка воссоздания объекта (если __repr__ написан правильно)
book_repr = repr(book)
# eval(book_repr)  # Создаст новый объект Book (осторожно с eval!)
```

#### **5. Сравнение `__str__` и `__repr__`**

| Критерий | `__str__` | `__repr__` |
|----------|-----------|------------|
| **Целевая аудитория** | Конечные пользователи | Разработчики |
| **Назначение** | "Красивый" вывод для пользователя | Однозначное представление для отладки |
| **Вызывается** | `print()`, `str()` | `repr()`, в консоли Python, отладчике |
| **Обязательность** | Необязательный | **Обязательный!** Если не определен, Python использует базовый |
| **Требования** | Читаемость, понятность | Однозначность, полнота информации |
| **Идеальный результат** | "Книга 'Война и мир' (Толстой Л.Н.)" | `Book("Война и мир", "Толстой Л.Н.", 1869)` |

#### **6. Когда что используется?**

##### **Примеры вызова:**
```python
book = Book("Война и мир", "Толстой Л.Н.", 1869)

# Вызов __str__
print(book)                    # Неявно
print(str(book))               # Явно
f"Информация: {book}"          # В f-строках

# Вызов __repr__
book                          # В консоли Python (REPL)
print(repr(book))             # Явно
[book, book]                  # В списках и коллекциях
```

##### **Приоритет вызова:**
```python
class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author
    
    def __repr__(self):
        return f"Book('{self.title}', '{self.author}')"
    # __str__ не определен

book = Book("1984", "Оруэлл Дж.")

print(book)        # Используется __repr__, так как __str__ нет
# Вывод: Book('1984', 'Оруэлл Дж.')
```

#### **7. Лучшие практики**

##### **Правило "пиццы":**
```python
import datetime

now = datetime.datetime.now()

print(str(now))   # "2024-01-15 14:30:25.123456" - для пользователя
print(repr(now))  # "datetime.datetime(2024, 1, 15, 14, 30, 25, 123456)" - для разработчика
```

##### **Реализация обоих методов:**
```python
class Product:
    def __init__(self, name, price, sku):
        self.name = name
        self.price = price
        self.sku = sku
    
    def __str__(self):
        return f"{self.name} - {self.price:.2f} руб."
    
    def __repr__(self):
        return f"Product(name='{self.name}', price={self.price}, sku='{self.sku}')"
    
    def __eq__(self, other):
        # Пример другого магического метода
        return self.sku == other.sku

# Использование
product = Product("Ноутбук", 75000.0, "NB-001")
print(str(product))   # Ноутбук - 75000.00 руб.
print(repr(product))  # Product(name='Ноутбук', price=75000.0, sku='NB-001')
```

##### **Если реализован только `__repr__`:**
```python
class User:
    def __init__(self, username, email):
        self.username = username
        self.email = email
    
    def __repr__(self):
        return f"User('{self.username}', '{self.email}')"
    # __str__ не определен

user = User("ivan_ivanov", "ivan@example.com")
print(user)  # Использует __repr__ как запасной вариант
# Вывод: User('ivan_ivanov', 'ivan@example.com')
```

#### **8. Расширенный пример с несколькими магическими методами**
```python
class Vector:
    """Класс для работы с 2D векторами"""
    
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __str__(self):
        return f"Вектор({self.x}, {self.y})"
    
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
    
    def __add__(self, other):
        """Сложение векторов: v1 + v2"""
        return Vector(self.x + other.x, self.y + other.y)
    
    def __mul__(self, scalar):
        """Умножение вектора на число: v * 3"""
        return Vector(self.x * scalar, self.y * scalar)
    
    def __len__(self):
        """Длина вектора (модуль)"""
        return int((self.x**2 + self.y**2)**0.5)
    
    def __eq__(self, other):
        """Сравнение векторов"""
        return self.x == other.x and self.y == other.y

# Использование
v1 = Vector(2, 3)
v2 = Vector(1, 1)

print(v1)           # Вектор(2, 3)
print(repr(v1))     # Vector(2, 3)

v3 = v1 + v2        # Использует __add__
print(v3)           # Вектор(3, 4)

v4 = v1 * 2         # Использует __mul__
print(v4)           # Вектор(4, 6)

print(len(v1))      # 3 (использует __len__)
print(v1 == v2)     # False (использует __eq__)
```

#### **9. Распространенные ошибки**

##### **Ошибка 1: Путаница в назначении**
```python
# ПЛОХО:
class BadExample:
    def __str__(self):
        return "ClassName(id=123)"  # Слишком технично для пользователя
    
    def __repr__(self):
        return "Красивый вывод"     # Слишком размыто для разработчика

# ХОРОШО:
class GoodExample:
    def __str__(self):
        return "Информация для пользователя"
    
    def __repr__(self):
        return "GoodExample(param1='value', param2=123)"
```

##### **Ошибка 2: Бесконечная рекурсия**
```python
# ОПАСНО:
class Dangerous:
    def __str__(self):
        return str(self)  # Бесконечная рекурсия!
    
    def __repr__(self):
        return repr(self)  # Бесконечная рекурсия!

# БЕЗОПАСНО:
class Safe:
    def __str__(self):
        return "Safe object"
    
    def __repr__(self):
        return f"Safe(id={id(self)})"
```

#### **10. Тестирование правильности реализации**

```python
def test_string_representations():
    """Тест для проверки __str__ и __repr__"""
    
    class TestClass:
        def __init__(self, value):
            self.value = value
        
        def __str__(self):
            return f"Значение: {self.value}"
        
        def __repr__(self):
            return f"TestClass({self.value})"
    
    obj = TestClass(42)
    
    # Проверка __str__
    assert str(obj) == "Значение: 42"
    assert f"{obj}" == "Значение: 42"
    
    # Проверка __repr__
    assert repr(obj) == "TestClass(42)"
    
    # Проверка, что repr можно использовать для создания объекта
    import re
    match = re.match(r"TestClass\((\d+)\)", repr(obj))
    assert match is not None
    assert int(match.group(1)) == 42
    
    print("Все тесты пройдены!")

test_string_representations()
```

---

### **Ключевые выводы:**
1. **Магические методы** (`__метод__`) позволяют переопределять поведение объектов в Python.
2. **`__str__`** — для "красивого" отображения пользователю:
   - Используется в `print()`, `str()`, f-строках
   - Должен быть понятным и читаемым
3. **`__repr__`** — для однозначного представления разработчику:
   - Используется в `repr()`, консоли Python, отладчике
   - Должен содержать достаточно информации для воссоздания объекта
   - **Всегда определяйте `__repr__`!**
4. **Приоритет:** Если `__str__` не определен, Python использует `__repr__`.
5. **Идеальный `__repr__`** — строка, которую можно выполнить через `eval()` для создания копии объекта.
6. **Используйте оба метода** для профессиональных классов.