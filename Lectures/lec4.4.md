# Конспект лекции: 4.4 Инкапсуляция

## 1. Что такое инкапсуляция?

### Определение
**Инкапсуляция** — это механизм сокрытия внутренней реализации объекта и предоставления контролируемого доступа к его данным через публичные методы.

### Аналогия
Представьте банкомат:
- **Внутренняя реализация** (скрыта): механизм выдачи денег, счетчики купюр, системы безопасности
- **Публичный интерфейс** (доступен): экран, клавиатура, кардридер, купюроприемник

Пользователь взаимодействует только с публичным интерфейсом, не зная внутреннего устройства.

## 2. Зачем нужна инкапсуляция?

### Основные цели:
1. **Сокрытие сложности** — пользователь работает с простым интерфейсом
2. **Защита данных** — предотвращение некорректного изменения состояния
3. **Гибкость изменений** — можно менять внутреннюю реализацию, не ломая внешний код
4. **Валидация данных** — контроль над тем, как данные устанавливаются

## 3. Уровни доступа в Python

Python использует соглашения об именовании для обозначения уровня доступа:

| Уровень доступа | Синтаксис | Назначение |
|----------------|-----------|------------|
| Публичный (public) | `attr` | Доступен отовсюду |
| Защищенный (protected) | `_attr` | Для внутреннего использования, "не трогать" |
| Приватный (private) | `__attr` | Строго внутренний, доступ ограничен |

## 4. Публичные атрибуты и методы

```python
class BankAccount:
    def __init__(self, owner, balance):
        # Публичные атрибуты (можно менять напрямую)
        self.owner = owner
        self.balance = balance  # ОПАСНО: баланс можно изменить напрямую!
    
    # Публичные методы
    def deposit(self, amount):
        self.balance += amount
    
    def get_balance(self):
        return self.balance

# Проблема: можно изменить баланс напрямую
account = BankAccount("Иван", 1000)
account.balance = 1000000  # Мошенничество!
print(account.get_balance())  # 1000000 (хотя было 1000)
```

## 5. Защищенные атрибуты (`_attr`)

### Соглашение (convention), а не правило
Атрибуты с одним подчеркиванием в начале — это сигнал разработчикам: "это для внутреннего использования, не трогайте снаружи".

```python
class TemperatureSensor:
    def __init__(self):
        # Защищенный атрибут (внутренний)
        self._calibration_factor = 1.0
        self._last_reading = None
    
    def read_temperature(self):
        # Внутренний метод для чтения с датчика
        raw_value = self._read_raw_sensor()
        # Применяем калибровку
        calibrated = raw_value * self._calibration_factor
        self._last_reading = calibrated
        return calibrated
    
    def _read_raw_sensor(self):
        # Защищенный метод (только для внутреннего использования)
        # Эмулируем чтение с датчика
        import random
        return random.uniform(20, 25)
    
    # Публичный метод для калибровки
    def calibrate(self, reference_value):
        if self._last_reading is not None:
            self._calibration_factor = reference_value / self._last_reading
            return f"Калибровочный коэффициент установлен: {self._calibration_factor}"
        return "Нет данных для калибровки"

# Использование
sensor = TemperatureSensor()
print(sensor.read_temperature())  # 22.5 (пример)

# Можно получить доступ к защищенным атрибутам, но не нужно
print(sensor._calibration_factor)  # 1.0 (работает, но нарушает инкапсуляцию)
sensor._calibration_factor = 0.5   # Можем испортить калибровку
```

## 6. Приватные атрибуты (`__attr`)

### Механизм name mangling
Атрибуты с двойным подчеркиванием в начале получают модифицированные имена, что затрудняет доступ к ним извне класса.

```python
class SecureBankAccount:
    def __init__(self, owner, initial_balance, password):
        # Публичные атрибуты
        self.owner = owner
        
        # Приватные атрибуты (с двойным подчеркиванием)
        self.__balance = initial_balance
        self.__password_hash = hash(password)
        self.__transaction_history = []
        
        # Защищенный атрибут
        self._account_type = "standard"
    
    # Публичные методы для работы с приватными данными
    def deposit(self, amount, password):
        if self.__verify_password(password):
            if amount > 0:
                self.__balance += amount
                self.__add_transaction(f"Пополнение: +{amount}")
                return f"Баланс пополнен на {amount}. Текущий баланс: {self.__balance}"
            return "Сумма должна быть положительной"
        return "Неверный пароль"
    
    def withdraw(self, amount, password):
        if self.__verify_password(password):
            if 0 < amount <= self.__balance:
                self.__balance -= amount
                self.__add_transaction(f"Снятие: -{amount}")
                return f"Снято {amount}. Текущий баланс: {self.__balance}"
            return "Недостаточно средств или неверная сумма"
        return "Неверный пароль"
    
    def get_balance(self, password):
        if self.__verify_password(password):
            return f"Текущий баланс: {self.__balance}"
        return "Неверный пароль"
    
    def get_statement(self, password):
        if self.__verify_password(password):
            return "\n".join(self.__transaction_history)
        return "Неверный пароль"
    
    # Приватные методы (только для внутреннего использования)
    def __verify_password(self, password):
        return hash(password) == self.__password_hash
    
    def __add_transaction(self, description):
        from datetime import datetime
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        self.__transaction_history.append(f"{timestamp}: {description}")

# Использование
account = SecureBankAccount("Иван Иванов", 1000, "secret123")

print(account.deposit(500, "secret123"))  # Баланс пополнен на 500...
print(account.withdraw(200, "secret123")) # Снято 200...
print(account.get_balance("secret123"))   # Текущий баланс: 1300

# Попытка доступа к приватным атрибутам
try:
    print(account.__balance)  # Ошибка: атрибут не существует
except AttributeError as e:
    print(f"Ошибка: {e}")  # 'SecureBankAccount' object has no attribute '__balance'

# Но можно увидеть модифицированное имя
print(dir(account))  # Видим '_SecureBankAccount__balance', '__balance' нет

# Обход защиты (но так делать НЕЛЬЗЯ!)
print(account._SecureBankAccount__balance)  # 1300 (работает, но нарушает инкапсуляцию)
```

## 7. Свойства (property) для контролируемого доступа

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.__age = age  # Приватный атрибут
    
    # Getter для возраста
    @property
    def age(self):
        """Получить возраст (только чтение)"""
        return self.__age
    
    # Setter для возраста (с валидацией)
    @age.setter
    def age(self, value):
        """Установить возраст (с проверкой)"""
        if 0 <= value <= 150:
            self.__age = value
        else:
            raise ValueError("Возраст должен быть от 0 до 150 лет")
    
    # Еще одно свойство (вычисляемое)
    @property
    def is_adult(self):
        """Вычисляемое свойство: совершеннолетний ли"""
        return self.__age >= 18
    
    # Свойство только для записи (редкий случай)
    def _set_secret_code(self, code):
        self.__secret_code = code
    
    secret_code = property(fset=_set_secret_code)  # Только setter

# Использование
person = Person("Анна", 25)

# Используем как атрибут (на самом деле вызывается метод)
print(person.age)      # 25 (вызывается getter)
print(person.is_adult) # True (вызывается getter)

# Установка значения (вызывается setter)
person.age = 30        # OK
print(person.age)      # 30

try:
    person.age = 200   # Ошибка валидации
except ValueError as e:
    print(f"Ошибка: {e}")  # Возраст должен быть от 0 до 150 лет

# person.is_adult = False  # Ошибка: property без setter
person.secret_code = "123"  # OK (только запись)
# print(person.secret_code)  # Ошибка: нет getter
```

## 8. Полный пример с инкапсуляцией

```python
class MedicalRecord:
    def __init__(self, patient_id, patient_name):
        # Публичные атрибуты
        self.patient_name = patient_name
        
        # Защищенные атрибуты
        self._patient_id = patient_id
        self._doctor_notes = []
        
        # Приватные атрибуты
        self.__diagnoses = []
        self.__medications = []
        self.__test_results = {}
    
    # Публичный интерфейс для пациента
    @property
    def patient_id(self):
        return f"ID: {self._patient_id[:3]}..."  # Частично скрываем
    
    def get_patient_summary(self):
        """Краткая информация для пациента"""
        return f"Пациент: {self.patient_name}\n" \
               f"Количество диагнозов: {len(self.__diagnoses)}\n" \
               f"Количество лекарств: {len(self.__medications)}"
    
    # Публичный интерфейс для врачей
    def add_diagnosis(self, doctor_id, diagnosis, date):
        """Добавить диагноз (только для врачей)"""
        self.__verify_doctor(doctor_id)
        self.__diagnoses.append({
            'date': date,
            'diagnosis': diagnosis,
            'doctor': doctor_id
        })
        self._add_doctor_note(f"Добавлен диагноз: {diagnosis}")
    
    def prescribe_medication(self, doctor_id, medication, dosage):
        """Выписать лекарство (только для врачей)"""
        self.__verify_doctor(doctor_id)
        self.__medications.append({
            'medication': medication,
            'dosage': dosage,
            'prescribed_by': doctor_id
        })
        self._add_doctor_note(f"Выписано: {medication} ({dosage})")
    
    def add_test_result(self, doctor_id, test_name, result):
        """Добавить результаты анализов (только для врачей)"""
        self.__verify_doctor(doctor_id)
        self.__test_results[test_name] = result
        self._add_doctor_note(f"Добавлен результат теста: {test_name}")
    
    def get_full_record(self, requester_id):
        """Полная история болезни (только для врачей пациента)"""
        self.__verify_doctor(requester_id)
        return {
            'patient': self.patient_name,
            'diagnoses': self.__diagnoses,
            'medications': self.__medications,
            'test_results': self.__test_results,
            'doctor_notes': self._doctor_notes
        }
    
    # Защищенные методы (для внутреннего использования в пакете)
    def _add_doctor_note(self, note):
        """Добавить заметку врача"""
        from datetime import datetime
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M")
        self._doctor_notes.append(f"{timestamp}: {note}")
    
    # Приватные методы (строго внутренние)
    def __verify_doctor(self, doctor_id):
        """Проверить, что врач имеет доступ"""
        # В реальной системе здесь была бы проверка в базе данных
        authorized_doctors = ["DR001", "DR002", "DR003"]
        if doctor_id not in authorized_doctors:
            raise PermissionError(f"Врач {doctor_id} не имеет доступа к этой записи")

# Использование
record = MedicalRecord("PT123456", "Иванов Иван")

# Пациент видит только общую информацию
print(record.patient_name)           # Иванов Иван
print(record.patient_id)             # ID: PT1...
print(record.get_patient_summary())  # Пациент: Иванов Иван...

# Врач работает с полной записью
try:
    record.add_diagnosis("DR001", "Гипертония", "2024-01-15")
    record.prescribe_medication("DR001", "Лизиноприл", "10мг/день")
    record.add_test_result("DR001", "Анализ крови", "В норме")
    
    full_record = record.get_full_record("DR001")
    print(f"Диагнозы пациента: {len(full_record['diagnoses'])}")  # 1
except PermissionError as e:
    print(f"Ошибка доступа: {e}")

# Попытка несанкционированного доступа
try:
    record.add_diagnosis("DR999", "Фейковый диагноз", "2024-01-15")
except PermissionError as e:
    print(f"Защита сработала: {e}")  # Врач DR999 не имеет доступа...
```

## 9. Лучшие практики инкапсуляции

### Что делать:
```python
class WellEncapsulated:
    def __init__(self, public_data):
        # Публичные атрибуты - только для данных, которые безопасно менять
        self.public_data = public_data
        
        # Защищенные - для внутреннего состояния
        self._internal_state = "active"
        
        # Приватные - для критически важных данных
        self.__secret_key = "very_secret"
    
    # Предоставляйте публичные методы для работы с приватными данными
    @property
    def secret_key_preview(self):
        return f"{self.__secret_key[:3]}..."
    
    # Валидируйте входные данные
    def set_internal_state(self, new_state):
        allowed_states = ["active", "inactive", "paused"]
        if new_state in allowed_states:
            self._internal_state = new_state
        else:
            raise ValueError(f"Состояние должно быть одним из: {allowed_states}")
```

### Чего избегать:
```python
class PoorlyEncapsulated:
    def __init__(self):
        # Не делайте все публичным
        self.database_password = "12345"  # ОПАСНО!
        
        # Не полагайтесь только на соглашения
        self._supposedly_private = "но все равно доступно"
        
        # Не создавайте избыточных геттеров/сеттеров для всего
        self.__value = 0
    
    # Избыточный геттер/сеттер
    def get_value(self):
        return self.__value
    
    def set_value(self, value):
        self.__value = value  # Без валидации - какой смысл?
```

## 10. Ключевые выводы

1. **Инкапсуляция** скрывает сложность и защищает данные
2. **Публичные** атрибуты (`attr`) доступны всем
3. **Защищенные** атрибуты (`_attr`) — соглашение "не трогать"
4. **Приватные** атрибуты (`__attr`) используют name mangling для ограничения доступа
5. **Свойства** (`@property`) обеспечивают контролируемый доступ с валидацией
6. **Предоставляйте публичный интерфейс** для работы со скрытыми данными

**Вопросы для самопроверки:**
1. В чем разница между `_attr` и `__attr`?
2. Как работает name mangling для приватных атрибутов?
3. Можно ли получить доступ к приватному атрибуту извне класса?
4. Зачем нужны свойства (`@property`)?
5. Что такое "публичный интерфейс" класса?