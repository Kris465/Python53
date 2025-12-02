**Конспект лекции: Формат CSV. Модуль `csv`**

---

### **Тема 3.5: Формат CSV. Модуль `csv`**

#### **1. Введение: Что такое CSV?**
* **CSV (Comma-Separated Values)** — текстовый формат для представления табличных данных.
* **Основные характеристики:**
  * Каждая строка файла — одна строка таблицы
  * Значения разделены **разделителем** (обычно запятая, но может быть точка с запятой, табуляция)
  * Первая строка часто содержит **заголовки столбцов**
* **Преимущества:**
  * Простота и человекочитаемость
  * Поддерживается всему табличными процессорами (Excel, Google Sheets)
  * Малый размер файла
* **Недостатки:**
  * Нет стандартизации (проблемы с кодировками, разделителями)
  * Не поддерживает сложные структуры данных (вложенные объекты)

#### **2. Структура CSV-файла**
**Пример CSV-файла `employees.csv`:**
```csv
id,name,department,salary,hire_date
1,Иванов Иван,IT,75000,2020-03-15
2,Петрова Анна,HR,65000,2019-08-22
3,Сидоров Петр,IT,80000,2021-01-10
```
* Разделитель: `,` (запятая)
* Заголовки: `id, name, department, salary, hire_date`
* 3 строки данных
* Все значения — строки (даже числа)

#### **3. Модуль `csv` в Python**
Для работы с CSV используется встроенный модуль `csv`:
```python
import csv
```

#### **4. Диалекты CSV (проблема стандартизации)**
**Проблема:** CSV имеет множество вариаций:
* Разные разделители: `,` `;` `\t` (табуляция)
* Разные символы кавычек для строк: `"` `'`
* Разное экранирование спецсимволов

**Решение:** Использовать правильный **диалект (dialect)** или указать параметры явно.

**Основные диалекты:**
| Диалект | Разделитель | Кавычки | Описание |
|---------|-------------|---------|----------|
| `excel` | `,` | `"` | Стандарт Excel (по умолчанию) |
| `excel-tab` | `\t` | `"` | Табуляция как разделитель |
| `unix` | `,` | `"` | Строки заканчиваются `\n` |

**Создание своего диалекта:**
```python
import csv

# Регистрация нового диалекта
csv.register_dialect('mydialect', delimiter=';', quotechar='"')
```

#### **5. Чтение CSV-файлов**

##### **`csv.reader()` — базовое чтение**
```python
import csv

with open('employees.csv', 'r', encoding='utf-8') as file:
    csv_reader = csv.reader(file)
    
    # Чтение построчно
    for row in csv_reader:
        print(row)  # Каждая строка как список
```

**Результат:**
```python
['id', 'name', 'department', 'salary', 'hire_date']
['1', 'Иванов Иван', 'IT', '75000', '2020-03-15']
['2', 'Петрова Анна', 'HR', '65000', '2019-08-22']
['3', 'Сидоров Петр', 'IT', '80000', '2021-01-10']
```

##### **`csv.DictReader()` — чтение как словарей (рекомендуется!)**
* Каждая строка преобразуется в словарь
* Ключи — заголовки столбцов

```python
import csv

with open('employees.csv', 'r', encoding='utf-8') as file:
    csv_reader = csv.DictReader(file)
    
    for row in csv_reader:
        print(f"{row['name']} работает в {row['department']}")
        # Доступ по имени столбца, а не по индексу
```

**Преимущества `DictReader`:**
* Код более читаемый (обращение по именам столбцов)
* Не зависит от порядка столбцов
* Легче обрабатывать файлы без заголовков (параметр `fieldnames`)

##### **Чтение с другими разделителями**
```python
# Файл с разделителем точка с запятой
with open('data.csv', 'r', encoding='utf-8') as file:
    csv_reader = csv.reader(file, delimiter=';')
    # или
    # csv_reader = csv.DictReader(file, delimiter=';')

# Файл с табуляцией
with open('data.tsv', 'r', encoding='utf-8') as file:
    csv_reader = csv.reader(file, delimiter='\t')
```

#### **6. Запись CSV-файлов**

##### **`csv.writer()` — базовая запись**
```python
import csv

data = [
    ['id', 'name', 'age'],
    [1, 'Иван', 25],
    [2, 'Мария', 30],
    [3, 'Алексей', 28]
]

with open('output.csv', 'w', encoding='utf-8', newline='') as file:
    csv_writer = csv.writer(file)
    csv_writer.writerows(data)  # Запись всех строк
```

**Важно:** Параметр `newline=''` для корректной работы в Windows!

##### **`csv.DictWriter()` — запись из словарей**
```python
import csv

# Данные в виде словарей
employees = [
    {'id': 1, 'name': 'Иванов Иван', 'department': 'IT', 'salary': 75000},
    {'id': 2, 'name': 'Петрова Анна', 'department': 'HR', 'salary': 65000},
    {'id': 3, 'name': 'Сидоров Петр', 'department': 'IT', 'salary': 80000}
]

with open('employees_output.csv', 'w', encoding='utf-8', newline='') as file:
    # Определяем заголовки
    fieldnames = ['id', 'name', 'department', 'salary']
    
    csv_writer = csv.DictWriter(file, fieldnames=fieldnames)
    
    # Записываем заголовок
    csv_writer.writeheader()
    
    # Записываем данные
    csv_writer.writerows(employees)
```

##### **Запись по одной строке**
```python
with open('data.csv', 'w', encoding='utf-8', newline='') as file:
    csv_writer = csv.writer(file)
    
    # Заголовок
    csv_writer.writerow(['id', 'name', 'age'])
    
    # Данные построчно
    csv_writer.writerow([1, 'Иван', 25])
    csv_writer.writerow([2, 'Мария', 30])
```

#### **7. Параметры чтения/записи**

| Параметр | Описание | Пример |
|----------|----------|--------|
| `delimiter` | Разделитель | `delimiter=';'` |
| `quotechar` | Символ кавычек | `quotechar='"'` |
| `quoting` | Когда использовать кавычки | `quoting=csv.QUOTE_ALL` |
| `skipinitialspace` | Игнорировать пробелы после разделителя | `skipinitialspace=True` |

**Константы для `quoting`:**
* `csv.QUOTE_ALL` — все значения в кавычках
* `csv.QUOTE_MINIMAL` — только при необходимости (по умолчанию)
* `csv.QUOTE_NONNUMERIC` — все нечисловые значения в кавычках
* `csv.QUOTE_NONE` — без кавычек (нужно указать `escapechar`)

#### **8. Практические примеры**

##### **Пример 1: Фильтрация данных**
```python
import csv

# Чтение и фильтрация сотрудников из IT-отдела
it_employees = []

with open('employees.csv', 'r', encoding='utf-8') as file:
    reader = csv.DictReader(file)
    
    for row in reader:
        if row['department'] == 'IT':
            it_employees.append(row)

print(f"Найдено {len(it_employees)} IT-сотрудников")
```

##### **Пример 2: Конвертация данных**
```python
import csv

# Чтение CSV, преобразование зарплаты и запись в новый файл
with open('employees.csv', 'r', encoding='utf-8') as infile, \
     open('employees_processed.csv', 'w', encoding='utf-8', newline='') as outfile:
    
    reader = csv.DictReader(infile)
    writer = csv.DictWriter(outfile, fieldnames=['name', 'department', 'salary_usd'])
    
    writer.writeheader()
    
    for row in reader:
        # Конвертируем рубли в доллары (условно)
        salary_usd = int(row['salary']) / 75
        writer.writerow({
            'name': row['name'],
            'department': row['department'],
            'salary_usd': round(salary_usd, 2)
        })
```

##### **Пример 3: Анализ данных**
```python
import csv

# Подсчет средней зарплаты по отделам
department_stats = {}

with open('employees.csv', 'r', encoding='utf-8') as file:
    reader = csv.DictReader(file)
    
    for row in reader:
        dept = row['department']
        salary = int(row['salary'])
        
        if dept not in department_stats:
            department_stats[dept] = {'total': 0, 'count': 0}
        
        department_stats[dept]['total'] += salary
        department_stats[dept]['count'] += 1

# Вывод результатов
for dept, stats in department_stats.items():
    avg = stats['total'] / stats['count']
    print(f"{dept}: средняя зарплата = {avg:.2f}")
```

#### **9. Обработка ошибок и крайние случаи**
```python
import csv

# Работа с файлами без заголовков
with open('data_no_header.csv', 'r', encoding='utf-8') as file:
    reader = csv.DictReader(file, fieldnames=['id', 'name', 'age'])
    # Теперь можно работать как с обычным DictReader

# Файл с разным количеством столбцов
with open('irregular.csv', 'r', encoding='utf-8') as file:
    reader = csv.reader(file)
    for row in reader:
        # Обработка строк с разным количеством элементов
        if len(row) == 3:
            id, name, age = row
        elif len(row) == 2:
            id, name = row
            age = 'не указано'
```

#### **10. CSV vs JSON: Когда что использовать?**
* **Используйте CSV, когда:**
  * Данные табличные (строка/столбец)
  * Нужна совместимость с Excel
  * Важен минимальный размер файла
  * Простота чтения человеком

* **Используйте JSON, когда:**
  * Данные имеют сложную иерархическую структуру
  * Нужны вложенные объекты/массивы
  * Работаете с веб-API
  * Требуется строгая типизация данных

---

### **Ключевые выводы:**
1. **CSV** — простой формат для табличных данных.
2. **Всегда указывайте кодировку** `encoding='utf-8'`.
3. **Для записи в Windows** используйте `newline=''`.
4. **Рекомендуемые методы:**
   * Для чтения: `csv.DictReader()` (удобный доступ по именам столбцов)
   * Для записи: `csv.DictWriter()` (структурированная запись)
5. **Обращайте внимание на разделители** — используйте `delimiter` параметр.
6. **Для сложных случаев** настройте диалект CSV.
7. **CSV хранит все как строки** — при необходимости конвертируйте типы данных.