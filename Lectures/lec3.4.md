**Конспект лекции: Формат JSON. Сериализация и десериализация**

---

### **Тема 3.4: Формат JSON. Сериализация и десериализация**

#### **1. Введение: Что такое JSON?**
* **JSON (JavaScript Object Notation)** — текстовый формат для хранения и передачи структурированных данных.
* **Основные характеристики:**
  * Легко читается людьми (human-readable)
  * Легко обрабатывается программами (machine-readable)
  * Независим от языка программирования (используется везде)
  * Имеет простой и понятный синтаксис
* **Основное применение:**
  * Обмен данными между клиентом и сервером (веб-API)
  * Конфигурационные файлы
  * Хранение данных (альтернатива CSV для сложных структур)
  * Сериализация объектов Python

#### **2. Структура JSON-объекта**

**Базовые типы данных в JSON:**

| Тип в JSON | Пример | Описание |
|------------|--------|----------|
| **Объект (object)** | `{"name": "John", "age": 30}` | Неупорядоченный набор пар "ключ: значение" |
| **Массив (array)** | `[1, 2, 3, "текст"]` | Упорядоченный список значений |
| **Строка (string)** | `"Привет мир"` | В **двойных** кавычках |
| **Число (number)** | `42`, `3.14`, `-10` | Целые или с плавающей точкой |
| **Логический (boolean)** | `true`, `false` | Только в нижнем регистре |
| **null** | `null` | Обозначение пустого значения |

**Пример валидного JSON:**
```json
{
  "user": {
    "name": "Анна",
    "age": 28,
    "is_active": true,
    "hobbies": ["чтение", "путешествия", "программирование"],
    "address": {
      "city": "Москва",
      "street": "Ленина"
    },
    "projects": null
  },
  "count": 5
}
```

#### **3. Соответствие типов Python ↔ JSON**

| Тип Python → Тип JSON | Тип JSON → Тип Python |
|------------------------|------------------------|
| `dict` → object | object → `dict` |
| `list`, `tuple` → array | array → `list` |
| `str` → string | string → `str` |
| `int`, `float` → number | number → `int` или `float` |
| `True` → true | true → `True` |
| `False` → false | false → `False` |
| `None` → null | null → `None` |

#### **4. Модуль `json` в Python**
Для работы с JSON в Python используется встроенный модуль `json`.

```python
import json
```

#### **5. Десериализация: JSON → Python-объект**

##### **`json.load()` — чтение из файла**
* Читает JSON из файлового объекта и преобразует в Python-объект

```python
import json

# Чтение JSON из файла
with open('данные.json', 'r', encoding='utf-8') as file:
    data = json.load(file)  # data будет dict или list
    
print(data['user']['name'])  # Доступ к данным
```

##### **`json.loads()` — чтение из строки**
* Преобразует JSON-строку в Python-объект
* `loads` = **load string**

```python
import json

json_string = '{"name": "Иван", "age": 25, "city": "Москва"}'
data = json.loads(json_string)  # data - словарь

print(data['name'])  # Иван
print(type(data))    # <class 'dict'>
```

#### **6. Сериализация: Python-объект → JSON**

##### **`json.dump()` — запись в файл**
* Преобразует Python-объект в JSON и записывает в файл

```python
import json

# Python-объект (словарь)
data = {
    "user": {
        "name": "Мария",
        "age": 30,
        "is_active": True,
        "skills": ["Python", "SQL", "Django"]
    }
}

# Запись в файл
with open('output.json', 'w', encoding='utf-8') as file:
    json.dump(data, file, ensure_ascii=False, indent=2)
```

**Параметры `json.dump()` и `json.dumps()`:**

| Параметр | Описание | Пример |
|----------|----------|--------|
| `indent` | Отступы для красивого форматирования | `indent=2` или `indent=4` |
| `ensure_ascii` | Сохранение кириллицы (False = сохранить как есть) | `ensure_ascii=False` |
| `sort_keys` | Сортировка ключей по алфавиту | `sort_keys=True` |
| `separators` | Разделители элементов | `separators=(',', ': ')` |

##### **`json.dumps()` — преобразование в строку**
* Преобразует Python-объект в JSON-строку
* `dumps` = **dump string**

```python
import json

data = {
    "name": "Петр",
    "age": 35,
    "hobbies": ["спорт", "музыка"]
}

# Преобразование в JSON-строку
json_str = json.dumps(data, ensure_ascii=False, indent=2)
print(json_str)
# Вывод:
# {
#   "name": "Петр",
#   "age": 35,
#   "hobbies": [
#     "спорт",
#     "музыка"
#   ]
# }

# Сохранение в компактном виде (без форматирования)
compact_json = json.dumps(data, ensure_ascii=False)
# {"name": "Петр", "age": 35, "hobbies": ["спорт", "музыка"]}
```

#### **7. Практические примеры**

##### **Пример 1: Чтение конфигурационного файла**
```python
import json

# config.json:
# {
#   "database": {
#     "host": "localhost",
#     "port": 5432
#   },
#   "debug": true
# }

with open('config.json', 'r') as config_file:
    config = json.load(config_file)

print(f"Подключаемся к {config['database']['host']}:{config['database']['port']}")
```

##### **Пример 2: Сохранение данных программы**
```python
import json

users = [
    {"id": 1, "name": "Алексей", "score": 85},
    {"id": 2, "name": "Ольга", "score": 92},
    {"id": 3, "name": "Дмитрий", "score": 78}
]

# Сохраняем в файл
with open('users.json', 'w', encoding='utf-8') as f:
    json.dump(users, f, ensure_ascii=False, indent=4)
```

##### **Пример 3: Работа с API (упрощенный пример)**
```python
import json
import requests

# Получаем данные с API
response = requests.get('https://api.example.com/data')
data = json.loads(response.text)  # Десериализуем ответ

# Обрабатываем данные
for item in data['results']:
    print(item['title'])
```

#### **8. Обработка ошибок**
```python
import json

try:
    data = json.loads('{"name": "Иван", "age": 30}')  # Валидный JSON
    print(data)
except json.JSONDecodeError as e:
    print(f"Ошибка в JSON: {e}")

try:
    data = json.loads('{name: "Иван"}')  # Невалидный JSON (нет кавычек)
except json.JSONDecodeError:
    print("Некорректный формат JSON")
```

#### **9. Что НЕЛЬЗЯ сериализовать в JSON?**
* Объекты классов Python (только если не реализован специальный метод)
* Функции
* Множества (`set`)
* Сложные типы данных (datetime, Decimal) — нужна специальная обработка

**Решение для сложных типов:** Использовать параметр `default` в `json.dump()` или создать собственный кодировщик.

---

### **Ключевые выводы:**
1. **JSON** — универсальный текстовый формат для обмена данными.
2. **Сериализация (Python → JSON):**
   * `json.dump(obj, file)` — запись в файл
   * `json.dumps(obj)` — преобразование в строку
3. **Десериализация (JSON → Python):**
   * `json.load(file)` — чтение из файла
   * `json.loads(string)` — чтение из строки
4. **Всегда используйте `ensure_ascii=False`** для сохранения кириллицы.
5. **Для красивого форматирования** используйте `indent=2`.
6. **Обрабатывайте ошибки** с помощью `try-except` и `JSONDecodeError`.
7. **JSON работает только с базовыми типами** данных (dict, list, str, int, float, bool, None).