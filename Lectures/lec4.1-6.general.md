# Конспект лекции: Объектно-Ориентированное Программирование (ООП) в Python

## 1. Введение в ООП

**Объектно-ориентированное программирование (ООП)** — это парадигма программирования, в которой программа организуется как совокупность объектов, каждый из которых представляет собой экземпляр определенного класса. Классы определяют структуру и поведение объектов.

### Основные преимущества ООП:
- **Структурированность**: Упрощает организацию сложных программ
- **Повторное использование**: Код можно использовать многократно
- **Масштабируемость**: Легко расширять функциональность
- **Упрощение поддержки**: Логически сгруппированный код

## 2. Основные концепции ООП

### 2.1. Класс (Class)

**Класс** — это шаблон или схема для создания объектов. Он определяет:
- **Атрибуты** (данные, характеристики)
- **Методы** (функции, поведение)

```python
# Пример определения класса
class Dog:
    """Класс, представляющий собаку"""
    
    # Конструктор класса (инициализатор)
    def __init__(self, name, breed, age):
        # Атрибуты объекта
        self.name = name    # Имя собаки
        self.breed = breed  # Порода
        self.age = age      # Возраст
    
    # Метод класса
    def bark(self):
        return f"{self.name} говорит: Гав!"
    
    def get_info(self):
        return f"{self.name}, {self.breed}, {self.age} лет"
```

### 2.2. Объект (Object)

**Объект** (или экземпляр) — это конкретная реализация класса. Каждый объект имеет:
- Свое состояние (значения атрибутов)
- Уникальный идентификатор в памяти

```python
# Создание объектов (экземпляров) класса Dog
dog1 = Dog("Барсик", "Лабрадор", 3)
dog2 = Dog("Мухтар", "Овчарка", 5)

# Использование объектов
print(dog1.bark())      # Барсик говорит: Гав!
print(dog2.get_info())  # Мухтар, Овчарка, 5 лет
```

### 2.3. Магические методы (Magic Methods)

**Магические методы** (или dunder-методы) — это специальные методы, которые начинаются и заканчиваются двойным подчеркиванием (`__`). Они позволяют определять поведение объектов в различных контекстах.

```python
class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages
    
    # Магический метод для строкового представления
    def __str__(self):
        return f"'{self.title}' автор {self.author}"
    
    # Магический метод для длины объекта
    def __len__(self):
        return self.pages
    
    # Магический метод для сравнения
    def __eq__(self, other):
        if isinstance(other, Book):
            return self.title == other.title and self.author == other.author
        return False

# Использование магических методов
book1 = Book("Война и мир", "Лев Толстой", 1225)
book2 = Book("Война и мир", "Лев Толстой", 1300)

print(str(book1))        # 'Война и мир' автор Лев Толстой
print(len(book1))        # 1225
print(book1 == book2)    # True (сравниваются title и author)
```

## 3. Три столпа ООП

### 3.1. Инкапсуляция (Encapsulation)

**Инкапсуляция** — это механизм сокрытия внутренней реализации объекта и предоставления контролируемого доступа к его данным через методы.

```python
class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.__balance = balance  # Приватный атрибут (два подчеркивания)
    
    # Публичный метод для доступа к приватным данным
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            return f"Пополнено: {amount}. Новый баланс: {self.__balance}"
        return "Сумма должна быть положительной"
    
    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
            return f"Снято: {amount}. Новый баланс: {self.__balance}"
        return "Недостаточно средств или неверная сумма"
    
    def get_balance(self):
        return f"Баланс счета: {self.__balance}"

# Использование
account = BankAccount("Иван Иванов", 1000)
print(account.deposit(500))     # Пополнено: 500. Новый баланс: 1500
print(account.withdraw(200))    # Снято: 200. Новый баланс: 1300
print(account.get_balance())    # Баланс счета: 1300

# Прямой доступ к приватному атрибуту невозможен
# print(account.__balance)  # Ошибка!
```

### 3.2. Наследование (Inheritance)

**Наследование** — это механизм создания нового класса на основе существующего, с возможностью переопределения или расширения его функциональности.

```python
# Базовый (родительский) класс
class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species
    
    def make_sound(self):
        return "Некоторый звук"
    
    def get_info(self):
        return f"{self.name}, вид: {self.species}"

# Дочерний класс (наследуется от Animal)
class Cat(Animal):
    def __init__(self, name, breed, color):
        # Вызов конструктора родительского класса
        super().__init__(name, "Кошка")
        self.breed = breed
        self.color = color
    
    # Переопределение метода родительского класса
    def make_sound(self):
        return "Мяу!"
    
    # Расширение функциональности
    def get_info(self):
        base_info = super().get_info()
        return f"{base_info}, порода: {self.breed}, цвет: {self.color}"

# Еще один дочерний класс
class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name, "Собака")
        self.breed = breed
    
    def make_sound(self):
        return "Гав!"

# Использование
cat = Cat("Мурзик", "Сиамская", "белый")
dog = Dog("Шарик", "Дворняга")

print(cat.get_info())     # Мурзик, вид: Кошка, порода: Сиамская, цвет: белый
print(cat.make_sound())   # Мяу!
print(dog.make_sound())   # Гав!
```

### 3.3. Полиморфизм (Polymorphism)

**Полиморфизм** — это способность объектов с одинаковым интерфейсом иметь различную реализацию.

```python
class Shape:
    def area(self):
        pass  # Абстрактный метод

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return 3.14159 * self.radius ** 2

# Полиморфизм в действии
shapes = [Rectangle(5, 10), Circle(7), Rectangle(3, 4)]

for shape in shapes:
    # Один и тот же метод area() работает по-разному для разных объектов
    print(f"Площадь: {shape.area()}")
```

## 4. Абстрактные методы и классы

**Абстрактный метод** — это метод, который объявлен, но не реализован в базовом классе. Реализация должна быть предоставлена в дочерних классах.

```python
from abc import ABC, abstractmethod

# Абстрактный базовый класс
class Vehicle(ABC):
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model
    
    @abstractmethod
    def start_engine(self):
        """Абстрактный метод - должен быть реализован в дочерних классах"""
        pass
    
    def get_info(self):
        return f"{self.brand} {self.model}"

# Конкретная реализация
class Car(Vehicle):
    def start_engine(self):
        return f"Автомобиль {self.brand} {self.model}: Двигатель запущен (врр-врр)"
    
    def honk(self):
        return "Би-бип!"

# Еще одна реализация
class Motorcycle(Vehicle):
    def start_engine(self):
        return f"Мотоцикл {self.brand} {self.model}: Двигатель запущен (др-др-др)"

# Использование
car = Car("Toyota", "Camry")
bike = Motorcycle("Harley-Davidson", "Sportster")

print(car.start_engine())   # Автомобиль Toyota Camry: Двигатель запущен (врр-врр)
print(bike.start_engine())  # Мотоцикл Harley-Davidson Sportster: Двигатель запущен (др-др-др)

# Нельзя создать объект абстрактного класса
# vehicle = Vehicle("Brand", "Model")  # Ошибка!
```

## 5. Композиция и агрегация

### Композиция — сильная связь (часть не существует без целого)

```python
class Engine:
    def __init__(self, power):
        self.power = power
    
    def start(self):
        return "Двигатель запущен"

class Car:
    def __init__(self, brand, power):
        self.brand = brand
        self.engine = Engine(power)  # Композиция: двигатель создается вместе с автомобилем
    
    def start(self):
        return f"{self.brand}: {self.engine.start()}"
```

### Агрегация — слабая связь (часть может существовать отдельно)

```python
class Driver:
    def __init__(self, name):
        self.name = name

class Taxi:
    def __init__(self, car, driver=None):  # Агрегация: водитель может быть независимым
        self.car = car
        self.driver = driver
    
    def assign_driver(self, driver):
        self.driver = driver
        return f"Водитель {driver.name} назначен на такси"
```

## 6. Практический пример: Библиотека

```python
class Library:
    def __init__(self):
        self.books = []
        self.readers = []
    
    def add_book(self, book):
        self.books.append(book)
        return f"Книга '{book.title}' добавлена в библиотеку"
    
    def find_book(self, title):
        for book in self.books:
            if book.title == title:
                return book
        return None

# Использование всей системы
library = Library()

# Создание книг
book1 = Book("1984", "Джордж Оруэлл", 328)
book2 = Book("Мастер и Маргарита", "Михаил Булгаков", 480)

# Добавление книг в библиотеку
library.add_book(book1)
library.add_book(book2)

# Работа с книгами
found_book = library.find_book("1984")
if found_book:
    print(f"Найдена книга: {found_book}")
    print(f"Количество страниц: {len(found_book)}")
```

## 7. Итог

### Ключевые термины:
1. **Класс** — шаблон для создания объектов
2. **Объект** — экземпляр класса с конкретными данными
3. **Магические методы** — специальные методы для определения поведения объектов
4. **Инкапсуляция** — сокрытие внутренней реализации
5. **Наследование** — создание новых классов на основе существующих
6. **Полиморфизм** — возможность объектов с одинаковым интерфейсом иметь разную реализацию
7. **Абстрактные методы** — методы, которые должны быть реализованы в дочерних классах

### Принципы хорошего ООП-дизайна:
- Каждый класс должен иметь одну четкую ответственность
- Классы должны быть открыты для расширения, но закрыты для модификации
- Использование композиции предпочтительнее наследования
- Зависимости должны быть на абстракциях, а не на конкретных реализациях