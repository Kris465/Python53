# Конспект лекции: 4.3 Наследование

## 1. Что такое наследование?

### Определение
**Наследование** — это механизм объектно-ориентированного программирования, который позволяет создавать новый класс (дочерний) на основе существующего (родительского), перенимая его атрибуты и методы.

### Аналогия из биологии
- **Родительский класс**: Млекопитающее (дышит воздухом, кормит молоком)
- **Дочерние классы**: Собака, Кошка, Человек (наследуют свойства млекопитающих, но добавляют свои особенности)

## 2. Базовый синтаксис наследования

```python
# Родительский (базовый) класс
class Animal:
    def __init__(self, name):
        self.name = name
        self.is_alive = True
    
    def eat(self):
        return f"{self.name} ест"
    
    def sleep(self):
        return f"{self.name} спит"

# Дочерний класс (наследует от Animal)
class Dog(Animal):  # В скобках указываем родительский класс
    pass  # Пока ничего не добавляем

# Создаем объект дочернего класса
dog = Dog("Барсик")
print(dog.name)        # Барсик (унаследовано от Animal)
print(dog.eat())       # Барсик ест (унаследовано от Animal)
print(dog.sleep())     # Барсик спит (унаследовано от Animal)
```

## 3. Зачем нужно наследование?

### Преимущества:
1. **Повторное использование кода** — не нужно копировать общую функциональность
2. **Расширяемость** — можно добавлять новую функциональность
3. **Организация кода** — логическая иерархия классов
4. **Полиморфизм** — объекты разных классов с общей базой можно использовать одинаково

## 4. Расширение функциональности в дочернем классе

```python
class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species
    
    def make_sound(self):
        return "Какой-то звук"

class Dog(Animal):
    # Добавляем новый атрибут
    def __init__(self, name, breed):
        # Вызываем конструктор родителя
        super().__init__(name, "Собака")
        self.breed = breed  # Новый атрибут
    
    # Добавляем новый метод
    def fetch(self, item):
        return f"{self.name} принес(ла) {item}"
    
    # Переопределяем унаследованный метод
    def make_sound(self):
        return "Гав!"

class Cat(Animal):
    def __init__(self, name, color):
        super().__init__(name, "Кошка")
        self.color = color
    
    def make_sound(self):
        return "Мяу!"
    
    def climb_tree(self):
        return f"{self.name} лезет на дерево"

# Использование
dog = Dog("Рекс", "Овчарка")
cat = Cat("Мурка", "рыжий")

print(dog.name, dog.species, dog.breed)  # Рекс Собака Овчарка
print(cat.name, cat.species, cat.color)  # Мурка Кошка рыжий

print(dog.make_sound())   # Гав! (переопределен)
print(cat.make_sound())   # Мяу! (переопределен)
print(dog.fetch("палку")) # Рекс принес(ла) палку (новый метод)
print(cat.climb_tree())   # Мурка лезет на дерево (новый метод)
```

## 5. Функция `super()` для доступа к методам родителя

### Что такое `super()`?
`super()` — это функция, которая возвращает прокси-объект, делегирующий вызовы методов родительскому классу.

### Когда использовать `super()`:
1. В конструкторе дочернего класса для вызова конструктора родителя
2. При переопределении методов для вызова родительской реализации

```python
class Vehicle:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year
        self.mileage = 0
    
    def start_engine(self):
        return "Двигатель запущен"
    
    def get_info(self):
        return f"{self.brand} {self.model} ({self.year})"

class Car(Vehicle):
    def __init__(self, brand, model, year, doors):
        # Вызываем конструктор родительского класса
        super().__init__(brand, model, year)
        # Добавляем свои атрибуты
        self.doors = doors
        self.fuel_type = "бензин"
    
    # Переопределяем метод с вызовом родительского
    def start_engine(self):
        # Сначала делаем что-то свое
        print("Проверка системы...")
        # Затем вызываем родительский метод
        parent_result = super().start_engine()
        # Возвращаем расширенный результат
        return f"{parent_result}. Автомобиль готов к поездке."
    
    # Расширяем родительский метод
    def get_info(self):
        # Используем родительскую реализацию
        base_info = super().get_info()
        # Добавляем свою информацию
        return f"{base_info}, {self.doors} дверей, топливо: {self.fuel_type}"

# Использование
car = Car("Toyota", "Camry", 2022, 4)
print(car.get_info())
# Toyota Camry (2022), 4 дверей, топливо: бензин

print(car.start_engine())
# Проверка системы...
# Двигатель запущен. Автомобиль готов к поездке.
```

## 6. Многоуровневое наследование

```python
# Уровень 1: Базовый класс
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def introduce(self):
        return f"Меня зовут {self.name}, мне {self.age} лет"

# Уровень 2: Наследуем от Person
class Employee(Person):
    def __init__(self, name, age, employee_id):
        super().__init__(name, age)
        self.employee_id = employee_id
        self.department = "Не назначен"
    
    def work(self):
        return f"{self.name} работает"

# Уровень 3: Наследуем от Employee
class Manager(Employee):
    def __init__(self, name, age, employee_id, team_size):
        super().__init__(name, age, employee_id)
        self.team_size = team_size
        self.department = "Управление"
    
    def manage(self):
        return f"{self.name} управляет командой из {self.team_size} человек"
    
    # Переопределяем метод work
    def work(self):
        base_work = super().work()
        return f"{base_work} как менеджер"

# Уровень 4: Наследуем от Manager
class SeniorManager(Manager):
    def __init__(self, name, age, employee_id, team_size, budget):
        super().__init__(name, age, employee_id, team_size)
        self.budget = budget
    
    def approve_budget(self):
        return f"{self.name} утверждает бюджет {self.budget} руб."

# Создаем объекты разных уровней
person = Person("Иван", 30)
emp = Employee("Анна", 25, "EMP001")
mgr = Manager("Петр", 40, "MGR001", 5)
senior = SeniorManager("Мария", 45, "SM001", 10, 1000000)

print(person.introduce())       # Меня зовут Иван, мне 30 лет
print(emp.work())               # Анна работает
print(mgr.manage())             # Петр управляет командой из 5 человек
print(senior.approve_budget())  # Мария утверждает бюджет 1000000 руб.
print(senior.introduce())       # Меня зовут Мария, мне 45 лет (унаследовано от Person)
```

## 7. Переопределение методов (Method Overriding)

```python
class PaymentMethod:
    def process_payment(self, amount):
        raise NotImplementedError("Этот метод должен быть переопределен")
    
    def get_fee(self, amount):
        return amount * 0.02  # 2% комиссия по умолчанию

class CreditCard(PaymentMethod):
    def process_payment(self, amount):
        # Полная замена родительского метода
        fee = self.get_fee(amount)
        total = amount + fee
        return f"Оплата картой: {amount} руб., комиссия: {fee} руб., итого: {total} руб."
    
    # Можно и не переопределять get_fee - будет использоваться родительский

class BankTransfer(PaymentMethod):
    def process_payment(self, amount):
        # Используем родительский метод для расчета комиссии
        fee = self.get_fee(amount)
        total = amount + fee
        return f"Банковский перевод: {amount} руб., комиссия: {fee} руб., итого: {total} руб."
    
    def get_fee(self, amount):
        # Переопределяем расчет комиссии
        if amount > 10000:
            return 100  # Фиксированная комиссия для крупных сумм
        return amount * 0.01  # 1% для небольших сумм

class Cash(PaymentMethod):
    def process_payment(self, amount):
        # Полностью своя логика
        return f"Наличная оплата: {amount} руб. (без комиссии)"
    
    def get_fee(self, amount):
        # Для наличных комиссии нет
        return 0

# Использование
payment_methods = [
    CreditCard(),
    BankTransfer(),
    Cash()
]

for method in payment_methods:
    print(method.process_payment(5000))
```

## 8. Проверка типа и иерархии

```python
class A:
    pass

class B(A):
    pass

class C(B):
    pass

# Создаем объекты
a = A()
b = B()
c = C()

# Проверка типа
print(isinstance(c, C))    # True
print(isinstance(c, B))    # True (наследует от B)
print(isinstance(c, A))    # True (наследует от A через B)
print(isinstance(c, object))  # True (все классы наследуют от object)

print(isinstance(a, C))    # False

# Проверка класса
print(type(c) == C)        # True
print(type(c) == B)        # False
print(type(c) == A)        # False

# Проверка наследования
print(issubclass(C, C))    # True
print(issubclass(C, B))    # True
print(issubclass(C, A))    # True
print(issubclass(B, A))    # True
print(issubclass(A, C))    # False
```

## 9. Практический пример: Библиотека документов

```python
class Document:
    def __init__(self, title, author, content):
        self.title = title
        self.author = author
        self.content = content
        self.created_date = "2024-01-15"
    
    def display(self):
        return f"{self.title}\nАвтор: {self.author}\n\n{self.content}"
    
    def word_count(self):
        return len(self.content.split())

class Book(Document):
    def __init__(self, title, author, content, isbn, genre):
        super().__init__(title, author, content)
        self.isbn = isbn
        self.genre = genre
        self.chapters = []
    
    def add_chapter(self, chapter_title, chapter_content):
        self.chapters.append({
            'title': chapter_title,
            'content': chapter_content
        })
    
    def display(self):
        base_info = super().display()
        chapters_info = "\n".join([f"Глава: {ch['title']}" 
                                  for ch in self.chapters])
        return f"{base_info}\n\nISBN: {self.isbn}\nЖанр: {self.genre}\n{chapters_info}"

class Report(Document):
    def __init__(self, title, author, content, department, confidential=False):
        super().__init__(title, author, content)
        self.department = department
        self.confidential = confidential
        self.approved = False
    
    def approve(self):
        self.approved = True
        return f"Отчет '{self.title}' утвержден"
    
    def display(self):
        base_info = super().display()
        status = "КОНФИДЕНЦИАЛЬНО" if self.confidential else "ОТКРЫТЫЙ"
        approved = "Утвержден" if self.approved else "На утверждении"
        return f"{base_info}\n\nОтдел: {self.department}\nСтатус: {status}\n{approved}"

class Email(Document):
    def __init__(self, title, author, content, recipient, priority="normal"):
        super().__init__(title, author, content)
        self.recipient = recipient
        self.priority = priority
        self.sent = False
    
    def send(self):
        self.sent = True
        return f"Письмо отправлено {self.recipient}"
    
    def display(self):
        base_info = super().display()
        return f"{base_info}\n\nКому: {self.recipient}\nПриоритет: {self.priority}\nОтправлено: {self.sent}"

# Использование
book = Book("Python для начинающих", "Иван Петров", 
            "Введение в Python...", "978-5-xxx-xxxxx-x", "Программирование")
book.add_chapter("Глава 1", "Введение")
book.add_chapter("Глава 2", "Основы Python")

report = Report("Итоги года", "Финансовый отдел", 
                "В этом году прибыль составила...", "Финансы", True)
report.approve()

email = Email("Встреча", "Анна", "Напоминаю о встрече...", "коллеги@company.com", "high")

# Все объекты можно обрабатывать как Document
documents = [book, report, email]

for doc in documents:
    print("=" * 50)
    print(doc.display())
    print(f"Количество слов: {doc.word_count()}")
```

## 10. Ключевые выводы

1. **Наследование** позволяет создавать новые классы на основе существующих
2. **Дочерний класс** получает все атрибуты и методы родительского
3. **`super()`** используется для доступа к методам родительского класса
4. **Переопределение методов** позволяет изменять поведение унаследованных методов
5. **Иерархия классов** организует код в логическую структуру
6. **Многоуровневое наследование** создает цепочки классов

**Вопросы для самопроверки:**
1. Что такое наследование и зачем оно нужно?
2. Как вызвать метод родительского класса из дочернего?
3. Что такое переопределение методов?
4. Можно ли наследовать от нескольких классов в Python?
5. Что вернет `isinstance(child_obj, ParentClass)`?