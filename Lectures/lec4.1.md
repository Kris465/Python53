# Конспект лекции: 4.1 Введение в ООП. Классы и объекты

## 1. Основная концепция: Класс как "чертеж", Объект как "экземпляр"

### Аналогия из жизни
Представьте, что вы архитектор:

- **Класс** = Чертеж дома (описание: сколько комнат, этажей, материал)
- **Объект** = Конкретный дом, построенный по этому чертежу

Один чертеж можно использовать для строительства многих домов. Каждый дом будет иметь одинаковую структуру, но разное содержимое (разные жильцы, мебель, цвет стен).

## 2. Определение класса в Python

```python
# Создаем "чертеж" (класс) для студента
class Student:
    """Класс, описывающий студента"""
    
    # Атрибут класса (общий для всех студентов)
    university = "Национальный Университет"
    
    def __init__(self, name, age):
        # Атрибуты экземпляра (уникальные для каждого студента)
        self.name = name
        self.age = age
        self.grades = []  # Пустой список для оценок
```

## 3. Создание объектов (экземпляров)

```python
# Создаем конкретных студентов (объекты)
student1 = Student("Анна", 20)  # Первый экземпляр
student2 = Student("Иван", 21)  # Второй экземпляр
student3 = Student("Мария", 19) # Третий экземпляр

print(type(student1))  # <class '__main__.Student'>
print(type(student2))  # <class '__main__.Student'>
```

## 4. Атрибуты класса vs атрибуты экземпляра

### Атрибуты класса
- Принадлежат самому классу
- Общие для всех объектов этого класса
- Изменяются для всех объектов сразу

```python
class Car:
    # Атрибуты класса
    wheels = 4
    engine_type = "combustion"
    
    def __init__(self, brand, model):
        # Атрибуты экземпляра
        self.brand = brand
        self.model = model

# Создаем объекты
car1 = Car("Toyota", "Camry")
car2 = Car("BMW", "X5")

print(car1.wheels)  # 4 (берет из класса)
print(car2.wheels)  # 4 (берет из класса)

# Меняем атрибут класса
Car.wheels = 6
print(car1.wheels)  # 6 (изменилось у всех!)
print(car2.wheels)  # 6
```

### Атрибуты экземпляра
- Принадлежат конкретному объекту
- Уникальны для каждого объекта
- Создаются в методе `__init__` через `self.`

```python
class Book:
    def __init__(self, title, author):
        # Атрибуты экземпляра (уникальные)
        self.title = title
        self.author = author
        self.is_borrowed = False

book1 = Book("1984", "Оруэлл")
book2 = Book("Мастер и Маргарита", "Булгаков")

# У каждого объекта свои значения
print(book1.title)  # 1984
print(book2.title)  # Мастер и Маргарита

# Меняем только у book1
book1.is_borrowed = True
print(book1.is_borrowed)  # True
print(book2.is_borrowed)  # False (не изменилось!)
```

## 5. Ключевое слово `self`

### Что такое `self`?
`self` — это ссылка на текущий экземпляр класса. Python автоматически передает ее как первый аргумент в методы экземпляра.

```python
class Person:
    def __init__(self, name):
        # self ссылается на создаваемый объект
        self.name = name
    
    def introduce(self):
        # self позволяет обратиться к данным КОНКРЕТНОГО объекта
        return f"Меня зовут {self.name}"

# Создаем объекты
person1 = Person("Анна")
person2 = Person("Иван")

# Когда вызываем person1.introduce(), Python делает:
# Person.introduce(person1)
print(person1.introduce())  # Меня зовут Анна
print(person2.introduce())  # Меня зовут Иван
```

### Почему `self` важен?
Без `self` мы не могли бы различать, чьи данные использовать:

```python
class WithoutSelf:
    def set_name(wrong_param, name):
        # ОШИБКА! Должно быть self
        wrong_param.name = name  # Не сработает правильно
    
    def get_name(wrong_param):
        return wrong_param.name

# Правильно:
class WithSelf:
    def set_name(self, name):
        self.name = name
    
    def get_name(self):
        return self.name
```

## 6. Методы экземпляра

### Что такое метод экземпляра?
Это функция, определенная внутри класса, которая работает с данными конкретного объекта.

```python
class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    
    # Метод экземпляра
    def deposit(self, amount):
        """Пополнить счет"""
        self.balance += amount
        return f"Баланс: {self.balance}"
    
    # Еще один метод экземпляра
    def withdraw(self, amount):
        """Снять со счета"""
        if amount <= self.balance:
            self.balance -= amount
            return f"Снято {amount}. Баланс: {self.balance}"
        return "Недостаточно средств"
    
    # Метод для получения информации
    def get_info(self):
        return f"Владелец: {self.owner}, Баланс: {self.balance}"

# Использование
account = BankAccount("Иван Иванов", 1000)
print(account.deposit(500))   # Баланс: 1500
print(account.withdraw(200))  # Снято 200. Баланс: 1300
print(account.get_info())     # Владелец: Иван Иванов, Баланс: 1300
```

## 7. Полный пример

```python
class LibraryBook:
    # Атрибут класса
    library_name = "Центральная библиотека"
    
    def __init__(self, title, author, year):
        # Атрибуты экземпляра
        self.title = title
        self.author = author
        self.year = year
        self.is_available = True
        self.borrower = None
    
    # Методы экземпляра
    def borrow(self, reader_name):
        """Выдать книгу читателю"""
        if self.is_available:
            self.is_available = False
            self.borrower = reader_name
            return f"Книга '{self.title}' выдана {reader_name}"
        return f"Книга уже выдана {self.borrower}"
    
    def return_book(self):
        """Вернуть книгу в библиотеку"""
        if not self.is_available:
            previous_borrower = self.borrower
            self.is_available = True
            self.borrower = None
            return f"Книга возвращена от {previous_borrower}"
        return "Книга уже в библиотеке"
    
    def get_info(self):
        """Получить информацию о книге"""
        status = "доступна" if self.is_available else f"выдана {self.borrower}"
        return (f"'{self.title}' ({self.year}), {self.author}. "
                f"Статус: {status}. Библиотека: {self.library_name}")

# Создаем объекты-книги
book1 = LibraryBook("Преступление и наказание", "Достоевский", 1866)
book2 = LibraryBook("Война и мир", "Толстой", 1869)

# Работаем с объектами
print(book1.borrow("Анна"))      # Книга 'Преступление и наказание' выдана Анна
print(book1.get_info())          # ... Статус: выдана Анна ...
print(book2.get_info())          # ... Статус: доступна ...

# Меняем атрибут класса
LibraryBook.library_name = "Главная библиотека"
print(book1.get_info())  # У всех объектов обновилось название библиотеки
```

## 8. Ключевые выводы

1. **Класс** — это шаблон/чертеж, описывающий структуру и поведение
2. **Объект (экземпляр)** — конкретная реализация класса
3. **Атрибуты класса** — общие данные для всех объектов
4. **Атрибуты экземпляра** — уникальные данные каждого объекта
5. **`self`** — ссылка на текущий объект, через которую работают методы
6. **Методы экземпляра** — функции, которые работают с данными конкретного объекта

**Вопросы для самопроверки:**
1. Чем отличается класс от объекта?
2. Зачем нужен параметр `self` в методах?
3. Что произойдет, если изменить атрибут класса после создания объектов?
4. Можно ли создать объект без вызова `__init__`?