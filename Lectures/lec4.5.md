# Конспект лекции: 4.5 Полиморфизм

## 1. Что такое полиморфизм?

### Определение
**Полиморфизм** (от греч. "много форм") — это способность объектов разных классов реагировать на одни и те же сообщения (вызовы методов) по-своему, но через единый интерфейс.

### Аналогия из жизни
Представьте разные транспортные средства:
- **Автомобиль** → `завести()` → "Двигатель запущен"
- **Велосипед** → `завести()` → "Крутите педали"
- **Электромобиль** → `завести()` → "Батарея активирована"

Одно действие (`завести()`), но разная реализация для разных типов транспорта.

## 2. Зачем нужен полиморфизм?

### Преимущества:
1. **Единый интерфейс** — упрощает использование разных объектов
2. **Гибкость кода** — можно легко добавлять новые типы
3. **Читаемость** — код становится более понятным и выразительным
4. **Снижение связанности** — код не зависит от конкретных классов

## 3. Виды полиморфизма в Python

### 3.1. Полиморфизм через наследование (переопределение методов)

```python
class Animal:
    def make_sound(self):
        return "Какой-то звук"
    
    def move(self):
        return "Двигается"

class Dog(Animal):
    def make_sound(self):
        return "Гав!"
    
    def move(self):
        return "Бежит на четырех лапах"

class Bird(Animal):
    def make_sound(self):
        return "Чик-чирик"
    
    def move(self):
        return "Летит"

class Fish(Animal):
    def make_sound(self):
        return "(молчание)"
    
    def move(self):
        return "Плывет"

# Полиморфизм в действии
animals = [Dog(), Bird(), Fish()]

for animal in animals:
    print(f"Звук: {animal.make_sound()}, Движение: {animal.move()}")
    # Вызов одного метода, разное поведение
```

### 3.2. Полиморфизм через утиную типизацию (Duck Typing)

Python использует подход "Если что-то ходит как утка и крякает как утка, то это утка".

```python
class TextFile:
    def read(self):
        return "Текст из файла"
    
    def write(self, data):
        return f"Записано в файл: {data}"

class Database:
    def read(self):
        return "Данные из базы"
    
    def write(self, data):
        return f"Сохранено в базе: {data}"

class API:
    def read(self):
        return "Данные из API"
    
    def write(self, data):
        return f"Отправлено через API: {data}"

# Все объекты имеют методы read() и write()
# Неважно, какого они класса - важно, что они умеют это делать
data_sources = [TextFile(), Database(), API()]

for source in data_sources:
    print(source.read())
    print(source.write("новые данные"))
```

## 4. Полиморфизм в действии: реальные примеры

### Пример 1: Система оплаты

```python
class PaymentProcessor:
    def process_payment(self, amount):
        """Абстрактный метод (в Python без @abstractmethod)"""
        raise NotImplementedError("Метод должен быть реализован")

class CreditCardPayment(PaymentProcessor):
    def process_payment(self, amount):
        # Специфичная логика для кредитной карты
        return f"Обработка платежа {amount} руб. через кредитную карту: " \
               f"1. Проверка карты\n2. Списание средств\n3. Подтверждение"

class PayPalPayment(PaymentProcessor):
    def process_payment(self, amount):
        # Специфичная логика для PayPal
        return f"Обработка платежа {amount} руб. через PayPal: " \
               f"1. Редрирект на PayPal\n2. Авторизация\n3. Возврат и подтверждение"

class BankTransferPayment(PaymentProcessor):
    def process_payment(self, amount):
        # Специфичная логика для банковского перевода
        return f"Обработка платежа {amount} руб. через банковский перевод: " \
               f"1. Генерация счета\n2. Ожидание оплаты\n3. Подтверждение из банка"

class CryptoPayment(PaymentProcessor):
    def process_payment(self, amount):
        # Специфичная логика для криптовалюты
        return f"Обработка платежа {amount} руб. в криптовалюте: " \
               f"1. Генерация адреса кошелька\n2. Ожидание транзакции\n3. Подтверждение в блокчейне"

# Использование - единый интерфейс для всех типов оплаты
def checkout(order_amount, payment_method):
    """Оформить заказ с любым способом оплаты"""
    print(f"Сумма заказа: {order_amount} руб.")
    print(payment_method.process_payment(order_amount))
    print("Заказ успешно оформлен!\n")

# Клиент выбирает способ оплаты
payment_methods = {
    'card': CreditCardPayment(),
    'paypal': PayPalPayment(),
    'bank': BankTransferPayment(),
    'crypto': CryptoPayment()
}

# Один и тот же код работает с любым способом оплаты
checkout(5000, payment_methods['card'])
checkout(3000, payment_methods['paypal'])
checkout(10000, payment_methods['crypto'])
```

### Пример 2: Система уведомлений

```python
class Notification:
    def send(self, message, recipient):
        raise NotImplementedError("Метод должен быть реализован")
    
    def format_message(self, message):
        return f"Уведомление: {message}"

class EmailNotification(Notification):
    def send(self, message, recipient):
        formatted = self.format_message(message)
        return f"📧 Отправка email на {recipient}:\n{formatted}\n" \
               f"Тема: Важное уведомление\nПодпись: Команда сервиса"

class SMSNotification(Notification):
    def send(self, message, recipient):
        formatted = self.format_message(message)
        # SMS имеют ограничение длины
        if len(formatted) > 160:
            formatted = formatted[:157] + "..."
        return f"📱 Отправка SMS на {recipient}:\n{formatted}"

class PushNotification(Notification):
    def send(self, message, recipient):
        formatted = self.format_message(message)
        return f"📲 Push-уведомление для {recipient}:\n{formatted}\n" \
               f"Звук: default\nВибрация: короткая"

class TelegramNotification(Notification):
    def format_message(self, message):
        # Переопределяем форматирование для Telegram
        return f"🔔 *{message}*"
    
    def send(self, message, recipient):
        formatted = self.format_message(message)
        return f"💬 Отправка в Telegram @{recipient}:\n{formatted}\n" \
               f"Форматирование: Markdown\nКнопка: Подробнее"

# Сервис уведомлений, который не зависит от конкретного типа
class NotificationService:
    def __init__(self):
        self.notifications_sent = 0
    
    def send_notification(self, notification_type, message, recipient):
        # Создаем нужный тип уведомления
        if notification_type == "email":
            notifier = EmailNotification()
        elif notification_type == "sms":
            notifier = SMSNotification()
        elif notification_type == "push":
            notifier = PushNotification()
        elif notification_type == "telegram":
            notifier = TelegramNotification()
        else:
            raise ValueError(f"Неизвестный тип уведомления: {notification_type}")
        
        # Отправляем уведомление
        result = notifier.send(message, recipient)
        self.notifications_sent += 1
        return result

# Использование
service = NotificationService()

messages = [
    ("email", "Ваш заказ №12345 готов к выдаче", "client@example.com"),
    ("sms", "Код подтверждения: 7842", "+79161234567"),
    ("push", "У вас новое сообщение", "user_device_123"),
    ("telegram", "Собрание через 15 минут", "ivan_petrov")
]

for msg_type, text, recipient in messages:
    print("=" * 50)
    print(service.send_notification(msg_type, text, recipient))

print(f"\nВсего отправлено уведомлений: {service.notifications_sent}")
```

## 5. Полиморфизм с магическими методами

```python
class Vector2D:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    # Полиморфизм через перегрузку операторов
    def __add__(self, other):
        """Сложение векторов"""
        if isinstance(other, Vector2D):
            return Vector2D(self.x + other.x, self.y + other.y)
        raise TypeError("Можно складывать только векторы")
    
    def __mul__(self, other):
        """Умножение вектора на число"""
        if isinstance(other, (int, float)):
            return Vector2D(self.x * other, self.y * other)
        raise TypeError("Вектор можно умножать только на число")
    
    def __str__(self):
        return f"Vector2D({self.x}, {self.y})"
    
    def __len__(self):
        """Длина вектора (норма)"""
        return int((self.x**2 + self.y**2)**0.5)

class ComplexNumber:
    def __init__(self, real, imag):
        self.real = real
        self.imag = imag
    
    def __add__(self, other):
        """Сложение комплексных чисел"""
        if isinstance(other, ComplexNumber):
            return ComplexNumber(self.real + other.real, 
                                 self.imag + other.imag)
        raise TypeError("Можно складывать только комплексные числа")
    
    def __mul__(self, other):
        """Умножение комплексных чисел"""
        if isinstance(other, ComplexNumber):
            real = self.real * other.real - self.imag * other.imag
            imag = self.real * other.imag + self.imag * other.real
            return ComplexNumber(real, imag)
        raise TypeError("Можно умножать только комплексные числа")
    
    def __str__(self):
        return f"{self.real} + {self.imag}i"

# Полиморфизм: один оператор '+', разное поведение
v1 = Vector2D(2, 3)
v2 = Vector2D(1, 4)
print(v1 + v2)  # Vector2D(3, 7)

c1 = ComplexNumber(2, 3)
c2 = ComplexNumber(1, 4)
print(c1 + c2)  # 3 + 7i
print(c1 * c2)  # -10 + 11i

# Один интерфейс - разные реализации
objects = [v1, c1]
for obj in objects:
    print(f"{obj} + {obj} = {obj + obj}")
```

## 6. Полиморфизм с функциями высшего порядка

```python
from math import pi

class Shape:
    def area(self):
        raise NotImplementedError
    
    def perimeter(self):
        raise NotImplementedError
    
    def describe(self):
        return f"Фигура: {self.__class__.__name__}"

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height
    
    def perimeter(self):
        return 2 * (self.width + self.height)

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return pi * self.radius ** 2
    
    def perimeter(self):
        return 2 * pi * self.radius

class Triangle(Shape):
    def __init__(self, a, b, c):
        self.a = a
        self.b = b
        self.c = c
    
    def area(self):
        # Формула Герона
        s = self.perimeter() / 2
        return (s * (s - self.a) * (s - self.b) * (s - self.c)) ** 0.5
    
    def perimeter(self):
        return self.a + self.b + self.c

# Функции, которые работают с любыми фигурами
def print_shape_info(shape):
    """Полиморфная функция - принимает любую фигуру"""
    print(f"{shape.describe()}")
    print(f"  Площадь: {shape.area():.2f}")
    print(f"  Периметр: {shape.perimeter():.2f}")

def total_area(shapes):
    """Суммарная площадь всех фигур"""
    return sum(shape.area() for shape in shapes)

def find_largest_shape(shapes):
    """Найти фигуру с максимальной площадью"""
    return max(shapes, key=lambda shape: shape.area())

# Создаем разные фигуры
shapes = [
    Rectangle(5, 10),
    Circle(7),
    Triangle(3, 4, 5),
    Rectangle(8, 6),
    Circle(3.5)
]

# Применяем полиморфные функции
print("Информация о всех фигурах:")
for shape in shapes:
    print_shape_info(shape)
    print()

print(f"Общая площадь всех фигур: {total_area(shapes):.2f}")

largest = find_largest_shape(shapes)
print(f"Самая большая фигура: {largest.describe()} с площадью {largest.area():.2f}")
```

## 7. Полиморфизм в коллекциях Python

Python сам использует полиморфизм встроенных типов:

```python
# Одна функция len() работает с разными типами
objects = [
    [1, 2, 3, 4, 5],           # список
    (1, 2, 3),                 # кортеж
    "Hello, World!",           # строка
    {"a": 1, "b": 2, "c": 3},  # словарь
    {1, 2, 3, 4, 5},           # множество
    range(10),                 # диапазон
    bytes([65, 66, 67])        # байты
]

for obj in objects:
    print(f"{type(obj).__name__}: {obj} → длина: {len(obj)}")
```

## 8. Полиморфизм с протоколами (структурная типизация)

Python 3.8+ поддерживает протоколы через `typing.Protocol`:

```python
from typing import Protocol

class Drawable(Protocol):
    """Протокол для объектов, которые можно нарисовать"""
    def draw(self) -> str:
        ...
    
    def get_position(self) -> tuple:
        ...

class Circle:
    def __init__(self, x, y, radius):
        self.x = x
        self.y = y
        self.radius = radius
    
    def draw(self):
        return f"Рисуем круг в ({self.x}, {self.y}) радиусом {self.radius}"
    
    def get_position(self):
        return (self.x, self.y)

class Rectangle:
    def __init__(self, x, y, width, height):
        self.x = x
        self.y = y
        self.width = width
        self.height = height
    
    def draw(self):
        return f"Рисуем прямоугольник в ({self.x}, {self.y}) " \
               f"размером {self.width}x{self.height}"
    
    def get_position(self):
        return (self.x, self.y)

class Text:
    def __init__(self, x, y, content):
        self.x = x
        self.y = y
        self.content = content
    
    def draw(self):
        return f"Рисуем текст '{self.content}' в ({self.x}, {self.y})"
    
    def get_position(self):
        return (self.x, self.y)

# Функция работает с любым Drawable объектом
def render_scene(drawable_objects):
    for obj in drawable_objects:
        print(obj.draw())

# Все объекты соответствуют протоколу Drawable
scene = [
    Circle(10, 20, 5),
    Rectangle(50, 60, 30, 40),
    Text(100, 150, "Hello, World!")
]

render_scene(scene)
```

## 9. Лучшие практики полиморфизма

### Правильно:
```python
# Используйте абстрактные базовые классы для явного контракта
from abc import ABC, abstractmethod

class Storage(ABC):
    @abstractmethod
    def save(self, data):
        pass
    
    @abstractmethod
    def load(self):
        pass

# Создавайте маленькие, сфокусированные интерфейсы
class Readable(ABC):
    @abstractmethod
    def read(self):
        pass

class Writable(ABC):
    @abstractmethod
    def write(self, data):
        pass

# Используйте композицию вместо наследования, когда это уместно
class Logger:
    def log(self, message):
        print(f"LOG: {message}")

class ServiceWithLogger:
    def __init__(self):
        self.logger = Logger()  # Композиция
    
    def do_work(self):
        self.logger.log("Работа начата")
        # ... работа
        self.logger.log("Работа завершена")
```

### Избегайте:
```python
# Не проверяйте типы вручную, если можно использовать полиморфизм
def process_data(data_source):
    # ПЛОХО:
    if isinstance(data_source, File):
        return data_source.read_file()
    elif isinstance(data_source, Database):
        return data_source.query()
    elif isinstance(data_source, API):
        return data_source.fetch()
    
    # ХОРОШО (предполагая, что все имеют метод get()):
    return data_source.get()

# Не создавайте гигантские иерархии наследования
# Вместо этого используйте композицию и миксины
```

## 10. Ключевые выводы

1. **Полиморфизм** — это "один интерфейс, много реализаций"
2. **Утиная типизация** в Python: важно поведение, а не тип
3. **Наследование** обеспечивает полиморфизм через переопределение методов
4. **Магические методы** позволяют перегружать операторы
5. **Протоколы** (структурная типизация) определяют ожидаемое поведение
6. **Полиморфизм делает код** более гибким, расширяемым и читаемым

**Вопросы для самопроверки:**
1. Что такое полиморфизм простыми словами?
2. Чем отличается полиморфизм от перегрузки операторов?
3. Что такое "утиная типизация" в Python?
4. Как полиморфизм помогает снизить связанность кода?
5. Может ли полиморфизм работать без наследования?