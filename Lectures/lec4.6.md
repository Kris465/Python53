# Конспект лекции: 4.6 Абстрактные классы и методы

## 1. Что такое абстрактные классы и методы?

### Определение
**Абстрактный класс** — это класс, который служит шаблоном для других классов, но не предназначен для создания объектов напрямую. Он может содержать **абстрактные методы** — методы, объявленные, но не реализованные.

### Аналогия
Представьте чертеж кухонного прибора:
- **Абстрактный класс** = Чертеж "электроприбор" (есть розетка, кнопка включения, но нет конкретной реализации)
- **Конкретный класс** = Чертеж "чайник" или "тостер" (конкретная реализация нагревательного элемента)

## 2. Зачем нужны абстрактные классы?

### Основные цели:
1. **Определение интерфейса** — задание обязательных методов
2. **Обеспечение контракта** — гарантия, что дочерние классы реализуют нужные методы
3. **Повторное использование кода** — общая логика в абстрактном классе
4. **Предотвращение ошибок** — нельзя создать объект незавершенного класса

## 3. Модуль `abc` (Abstract Base Classes)

Python предоставляет модуль `abc` для работы с абстрактными классами.

```python
from abc import ABC, abstractmethod

# Базовый абстрактный класс
class Shape(ABC):  # Наследуем от ABC
    """Абстрактный класс для геометрических фигур"""
    
    @abstractmethod
    def area(self):
        """Вычислить площадь (должен быть реализован в дочерних классах)"""
        pass
    
    @abstractmethod
    def perimeter(self):
        """Вычислить периметр (должен быть реализован в дочерних классах)"""
        pass
    
    # Неабстрактный метод - будет унаследован
    def describe(self):
        return f"Это фигура типа: {self.__class__.__name__}"

# Попытка создать объект абстрактного класса
try:
    shape = Shape()  # TypeError: Can't instantiate abstract class Shape...
except TypeError as e:
    print(f"Ошибка: {e}")
```

## 4. Создание конкретных классов

```python
from abc import ABC, abstractmethod
import math

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass
    
    @abstractmethod
    def perimeter(self):
        pass

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return math.pi * self.radius ** 2
    
    def perimeter(self):
        return 2 * math.pi * self.radius
    
    # Можно добавить свои методы
    def diameter(self):
        return 2 * self.radius

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height
    
    def perimeter(self):
        return 2 * (self.width + self.height)
    
    def is_square(self):
        return self.width == self.height

class Triangle(Shape):
    def __init__(self, a, b, c):
        # Проверяем, что треугольник существует
        if a + b <= c or a + c <= b or b + c <= a:
            raise ValueError("Треугольник с такими сторонами не существует")
        self.a = a
        self.b = b
        self.c = c
    
    def area(self):
        # Формула Герона
        s = self.perimeter() / 2
        return math.sqrt(s * (s - self.a) * (s - self.b) * (s - self.c))
    
    def perimeter(self):
        return self.a + self.b + self.c

# Теперь можно создавать объекты
circle = Circle(5)
rectangle = Rectangle(4, 6)
triangle = Triangle(3, 4, 5)

print(f"Круг: площадь={circle.area():.2f}, периметр={circle.perimeter():.2f}")
print(f"Прямоугольник: площадь={rectangle.area()}, периметр={rectangle.perimeter()}")
print(f"Треугольник: площадь={triangle.area():.2f}, периметр={triangle.perimeter()}")
```

## 5. Абстрактные свойства (`@abstractproperty`)

```python
from abc import ABC, abstractmethod, abstractproperty

class Vehicle(ABC):
    """Абстрактный класс для транспортных средств"""
    
    @abstractmethod
    def start_engine(self):
        pass
    
    @abstractproperty
    def max_speed(self):
        """Максимальная скорость (км/ч)"""
        pass
    
    @abstractproperty
    def fuel_type(self):
        """Тип топлива"""
        pass
    
    # Неабстрактное свойство с реализацией
    @property
    def vehicle_type(self):
        return self.__class__.__name__
    
    # Неабстрактный метод
    def get_info(self):
        return (f"{self.vehicle_type}: "
                f"макс. скорость {self.max_speed} км/ч, "
                f"топливо: {self.fuel_type}")

class Car(Vehicle):
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model
    
    def start_engine(self):
        return f"{self.brand} {self.model}: Двигатель запущен (врр-врр)"
    
    @property
    def max_speed(self):
        return 180  # Конкретное значение
    
    @property
    def fuel_type(self):
        return "бензин"

class ElectricScooter(Vehicle):
    def __init__(self, brand, battery_capacity):
        self.brand = brand
        self.battery_capacity = battery_capacity
    
    def start_engine(self):
        return f"{self.brand}: Электродвигатель активирован (шшшш)"
    
    @property
    def max_speed(self):
        # Зависит от заряда батареи
        return 25 if self.battery_capacity > 50 else 15
    
    @property
    def fuel_type(self):
        return "электричество"

# Использование
car = Car("Toyota", "Camry")
scooter = ElectricScooter("Xiaomi", 80)

print(car.start_engine())
print(car.get_info())  # Car: макс. скорость 180 км/ч, топливо: бензин

print(scooter.start_engine())
print(scooter.get_info())  # ElectricScooter: макс. скорость 25 км/ч, топливо: электричество
```

## 6. Множественные абстрактные методы и общая логика

```python
from abc import ABC, abstractmethod
from datetime import datetime

class Document(ABC):
    """Абстрактный класс для документов"""
    
    def __init__(self, title, author):
        self.title = title
        self.author = author
        self.created_date = datetime.now()
        self.modified_date = datetime.now()
        self._is_locked = False
    
    @abstractmethod
    def open(self):
        """Открыть документ"""
        pass
    
    @abstractmethod
    def save(self):
        """Сохранить документ"""
        pass
    
    @abstractmethod
    def print_document(self):
        """Распечатать документ"""
        pass
    
    @abstractmethod
    def get_content(self):
        """Получить содержимое"""
        pass
    
    # Общая логика для всех документов
    def lock(self):
        """Заблокировать документ от изменений"""
        self._is_locked = True
        return "Документ заблокирован"
    
    def unlock(self):
        """Разблокировать документ"""
        self._is_locked = True
        return "Документ разблокирован"
    
    def get_metadata(self):
        """Метаданные документа (общие для всех)"""
        return (f"Название: {self.title}\n"
                f"Автор: {self.author}\n"
                f"Создан: {self.created_date.strftime('%Y-%m-%d %H:%M')}\n"
                f"Изменен: {self.modified_date.strftime('%Y-%m-%d %H:%M')}\n"
                f"Заблокирован: {'Да' if self._is_locked else 'Нет'}")

class TextDocument(Document):
    def __init__(self, title, author, content=""):
        super().__init__(title, author)
        self._content = content
    
    def open(self):
        if self._is_locked:
            return "Документ заблокирован, открыть нельзя"
        return f"Открыт текстовый документ: {self.title}"
    
    def save(self):
        if self._is_locked:
            return "Документ заблокирован, сохранить нельзя"
        self.modified_date = datetime.now()
        return "Текстовый документ сохранен"
    
    def print_document(self):
        return f"Печать текстового документа:\n{self.get_content()}"
    
    def get_content(self):
        return self._content
    
    def edit_content(self, new_content):
        if self._is_locked:
            return "Документ заблокирован, редактировать нельзя"
        self._content = new_content
        self.modified_date = datetime.now()
        return "Содержимое обновлено"

class Spreadsheet(Document):
    def __init__(self, title, author, data=None):
        super().__init__(title, author)
        self._data = data or {}
    
    def open(self):
        return f"Открыта таблица: {self.title}"
    
    def save(self):
        self.modified_date = datetime.now()
        return "Таблица сохранена в формате .xlsx"
    
    def print_document(self):
        # Специфичная логика для таблиц
        rows = "\n".join([f"{k}: {v}" for k, v in self._data.items()])
        return f"Печать таблицы:\n{rows}"
    
    def get_content(self):
        return str(self._data)
    
    def add_data(self, cell, value):
        self._data[cell] = value
        self.modified_date = datetime.now()
        return f"Добавлено значение в ячейку {cell}"

# Использование
doc1 = TextDocument("Отчет", "Иван Иванов", "Это содержимое отчета...")
doc2 = Spreadsheet("Бюджет", "Анна Петрова", {"A1": "Доход", "B1": "50000"})

documents = [doc1, doc2]

for doc in documents:
    print("=" * 50)
    print(doc.open())
    print(doc.get_metadata())
    print(doc.print_document())
    print(doc.save())
```

## 7. Регистрация классов без наследования

```python
from abc import ABC, abstractmethod

class Plugin(ABC):
    """Абстрактный класс для плагинов"""
    
    @abstractmethod
    def execute(self, data):
        pass
    
    @abstractmethod
    def get_name(self):
        pass

# Класс не наследует от Plugin, но регистрируем его
class TextProcessor:
    def execute(self, data):
        return f"Обработка текста: {data.upper()}"
    
    def get_name(self):
        return "TextProcessor"

class ImageProcessor:
    def execute(self, data):
        return f"Обработка изображения: применение фильтра к {data}"
    
    def get_name(self):
        return "ImageProcessor"

# Регистрируем классы как виртуальные подклассы
Plugin.register(TextProcessor)
Plugin.register(ImageProcessor)

# Теперь они считаются подклассами Plugin
print(issubclass(TextProcessor, Plugin))  # True
print(issubclass(ImageProcessor, Plugin))  # True

# Можно использовать в полиморфной функции
def run_plugin(plugin: Plugin, data):
    print(f"Запуск плагина: {plugin.get_name()}")
    print(f"Результат: {plugin.execute(data)}")

run_plugin(TextProcessor(), "hello world")
run_plugin(ImageProcessor(), "photo.jpg")
```

## 8. Абстрактные классы с `__subclasshook__`

```python
from abc import ABC, abstractmethod, ABCMeta

class Drawable(ABC):
    """Абстрактный класс для объектов, которые можно нарисовать"""
    
    @abstractmethod
    def draw(self):
        pass
    
    @classmethod
    def __subclasshook__(cls, subclass):
        """Определяем, считается ли класс подклассом Drawable"""
        if cls is Drawable:
            # Проверяем, есть ли у класса метод draw
            if any("draw" in B.__dict__ for B in subclass.__mro__):
                return True
        return NotImplemented

# Классы, которые не наследуют от Drawable явно
class Circle:
    def draw(self):
        return "Рисуем круг"

class Square:
    def draw(self):
        return "Рисуем квадрат"

class Triangle:
    def draw(self):
        return "Рисуем треугольник"

# Класс без метода draw
class Point:
    def move(self):
        return "Точка перемещена"

# Проверяем
print(issubclass(Circle, Drawable))    # True (есть метод draw)
print(issubclass(Square, Drawable))    # True (есть метод draw)
print(issubclass(Triangle, Drawable))  # True (есть метод draw)
print(issubclass(Point, Drawable))     # False (нет метода draw)

# Можно использовать в полиморфной функции
def render(objects):
    for obj in objects:
        if isinstance(obj, Drawable):
            print(obj.draw())
        else:
            print(f"Объект {type(obj).__name__} нельзя нарисовать")

render([Circle(), Square(), Triangle(), Point()])
```

## 9. Полный пример: Система аутентификации

```python
from abc import ABC, abstractmethod
import hashlib
import time

class AuthenticationMethod(ABC):
    """Абстрактный класс для методов аутентификации"""
    
    def __init__(self, user_id):
        self.user_id = user_id
        self.created_at = time.time()
        self.failed_attempts = 0
        self.is_locked = False
    
    @abstractmethod
    def authenticate(self, credentials):
        """Аутентифицировать пользователя"""
        pass
    
    @abstractmethod
    def get_method_name(self):
        """Название метода аутентификации"""
        pass
    
    # Общая логика для всех методов
    def record_failed_attempt(self):
        """Записать неудачную попытку"""
        self.failed_attempts += 1
        if self.failed_attempts >= 3:
            self.is_locked = True
            return "Слишком много неудачных попыток. Метод заблокирован."
        return f"Неудачная попытка. Осталось попыток: {3 - self.failed_attempts}"
    
    def reset_attempts(self):
        """Сбросить счетчик неудачных попыток"""
        self.failed_attempts = 0
        self.is_locked = False
    
    def get_status(self):
        """Статус метода"""
        return (f"Метод: {self.get_method_name()}\n"
                f"Пользователь: {self.user_id}\n"
                f"Неудачных попыток: {self.failed_attempts}\n"
                f"Заблокирован: {'Да' if self.is_locked else 'Нет'}")

class PasswordAuth(AuthenticationMethod):
    def __init__(self, user_id, password_hash):
        super().__init__(user_id)
        self.password_hash = password_hash
    
    def authenticate(self, credentials):
        """Аутентификация по паролю"""
        if self.is_locked:
            return "Метод аутентификации заблокирован"
        
        password = credentials.get('password', '')
        input_hash = hashlib.sha256(password.encode()).hexdigest()
        
        if input_hash == self.password_hash:
            self.reset_attempts()
            return f"Пользователь {self.user_id} успешно аутентифицирован"
        else:
            return self.record_failed_attempt()
    
    def get_method_name(self):
        return "Пароль"

class TwoFactorAuth(AuthenticationMethod):
    def __init__(self, user_id, phone_number):
        super().__init__(user_id)
        self.phone_number = phone_number
        self._generated_code = None
        self._code_expiry = None
    
    def authenticate(self, credentials):
        """Двухфакторная аутентификация"""
        if self.is_locked:
            return "Метод аутентификации заблокирован"
        
        # Генерация кода при первой попытке
        if self._generated_code is None:
            self._generate_code()
            return f"Код отправлен на {self.phone_number}. Введите код."
        
        code = credentials.get('code', '')
        
        # Проверка срока действия
        if time.time() > self._code_expiry:
            self._generate_code()
            return "Код истек. Новый код отправлен."
        
        if code == self._generated_code:
            self.reset_attempts()
            self._generated_code = None
            return f"Пользователь {self.user_id} успешно аутентифицирован"
        else:
            return self.record_failed_attempt()
    
    def get_method_name(self):
        return "Двухфакторная аутентификация"
    
    def _generate_code(self):
        """Сгенерировать код подтверждения"""
        import random
        self._generated_code = str(random.randint(100000, 999999))
        self._code_expiry = time.time() + 300  # 5 минут
        # Здесь был бы вызов SMS API
        print(f"[DEBUG] Код {self._generated_code} отправлен на {self.phone_number}")

class BiometricAuth(AuthenticationMethod):
    def __init__(self, user_id, biometric_data):
        super().__init__(user_id)
        self.biometric_data = biometric_data  # В реальности это был бы хеш
    
    def authenticate(self, credentials):
        """Биометрическая аутентификация"""
        if self.is_locked:
            return "Метод аутентификации заблокирован"
        
        biometric_input = credentials.get('biometric', '')
        
        # Упрощенная проверка (в реальности сложнее)
        if biometric_input == self.biometric_data:
            self.reset_attempts()
            return f"Пользователь {self.user_id} успешно аутентифицирован"
        else:
            return self.record_failed_attempt()
    
    def get_method_name(self):
        return "Биометрическая аутентификация"

# Система аутентификации
class AuthenticationSystem:
    def __init__(self, user_id):
        self.user_id = user_id
        self.methods = []
    
    def add_method(self, method: AuthenticationMethod):
        """Добавить метод аутентификации"""
        if not isinstance(method, AuthenticationMethod):
            raise TypeError("Метод должен быть экземпляром AuthenticationMethod")
        self.methods.append(method)
    
    def authenticate_user(self, method_type, credentials):
        """Аутентифицировать пользователя указанным методом"""
        for method in self.methods:
            if method.get_method_name() == method_type:
                return method.authenticate(credentials)
        return f"Метод {method_type} не настроен для пользователя"
    
    def get_available_methods(self):
        """Получить список доступных методов"""
        return [method.get_method_name() for method in self.methods]
    
    def get_status(self):
        """Статус всех методов"""
        return "\n".join([method.get_status() for method in self.methods])

# Использование
# Создаем хеш пароля
password_hash = hashlib.sha256("mysecret123".encode()).hexdigest()

# Настраиваем систему аутентификации
auth_system = AuthenticationSystem("user123")
auth_system.add_method(PasswordAuth("user123", password_hash))
auth_system.add_method(TwoFactorAuth("user123", "+79161234567"))
auth_system.add_method(BiometricAuth("user123", "face_data_hash"))

print("Доступные методы:", auth_system.get_available_methods())
print("\n" + auth_system.get_status())

# Попытки аутентификации
print("\nПопытка 1 (неверный пароль):")
print(auth_system.authenticate_user("Пароль", {"password": "wrong"}))

print("\nПопытка 2 (верный пароль):")
print(auth_system.authenticate_user("Пароль", {"password": "mysecret123"}))

print("\nФинальный статус:")
print(auth_system.get_status())
```

## 10. Лучшие практики абстрактных классов

### Правильно:
```python
from abc import ABC, abstractmethod

# Определяйте четкий контракт
class DataSource(ABC):
    @abstractmethod
    def read(self):
        """Чтение данных - обязательный метод"""
        pass
    
    @abstractmethod
    def write(self, data):
        """Запись данных - обязательный метод"""
        pass
    
    # Неабстрактные методы для общей логики
    def validate(self, data):
        """Валидация данных (опционально переопределять)"""
        return isinstance(data, (str, bytes))
```

### Избегайте:
```python
# Не создавайте абстрактные классы без необходимости
class UnnecessaryAbstract(ABC):
    @abstractmethod
    def method1(self): pass
    
    @abstractmethod
    def method2(self): pass
    
    # Если все методы абстрактные - возможно, нужен интерфейс (Protocol)

# Не смешивайте абстрактные и обычные классы без причины
class MixedClass:
    def concrete_method(self):
        return "Реализация"
    
    @abstractmethod  # ОШИБКА: класс не наследует от ABC
    def abstract_method(self):
        pass
```

## 11. Ключевые выводы

1. **Абстрактный класс** — шаблон, от которого нельзя создавать объекты
2. **Абстрактный метод** — объявлен, но не реализован (`@abstractmethod`)
3. **Модуль `abc`** — содержит `ABC` и `abstractmethod`
4. **Конкретный класс** — реализует все абстрактные методы родителя
5. **`@abstractproperty`** — для абстрактных свойств (устаревшее, используйте `@property` с `@abstractmethod`)
6. **`register()`** — регистрация классов без наследования
7. **`__subclasshook__()`** — кастомная логика проверки подклассов

**Вопросы для самопроверки:**
1. Можно ли создать объект абстрактного класса?
2. Что произойдет, если не реализовать абстрактный метод в дочернем классе?
3. Чем отличается абстрактный класс от обычного?
4. Зачем нужен декоратор `@abstractmethod`?
5. Можно ли иметь неабстрактные методы в абстрактном классе?