**Конспект лекции: Практика: Чтение/запись данных**

---

### **Тема 3.6: Практика: Чтение/запись данных**

#### **1. Цель практики**
Закрепить навыки работы с файлами разных форматов:
1. **Текстовые файлы** — базовые операции чтения/записи
2. **JSON** — работа со структурированными данными
3. **CSV** — обработка табличных данных

Разработать скрипты для решения реальных задач обработки данных.

#### **2. Типовой процесс работы с файлами**

**Общая схема:**
```
1. Открытие файла (чтение) → 2. Обработка данных → 3. Сохранение результатов (запись)
```

**Безопасный паттерн:**
```python
# Чтение
with open('входной_файл', 'r', encoding='utf-8') as file:
    данные = обработка_чтения(file)

# Обработка
результаты = обработка_данных(данные)

# Запись
with open('выходной_файл', 'w', encoding='utf-8') as file:
    обработка_записи(file, результаты)
```

#### **3. Практические задачи**

##### **Задача 1: Анализ лог-файла (текстовый формат)**
**Цель:** Проанализировать файл с логами сервера и найти ошибки.

```python
# log_analyzer.py
def analyze_server_log(input_file, output_file):
    """
    Анализирует лог-файл сервера и сохраняет ошибки в отдельный файл
    """
    errors = []
    
    # Чтение лог-файла
    with open(input_file, 'r', encoding='utf-8') as log_file:
        for line_number, line in enumerate(log_file, 1):
            # Поиск строк с ошибками
            if 'ERROR' in line.upper() or 'EXCEPTION' in line.upper():
                errors.append({
                    'line': line_number,
                    'content': line.strip(),
                    'timestamp': line[:19] if len(line) >= 19 else 'N/A'
                })
    
    # Запись результатов
    with open(output_file, 'w', encoding='utf-8') as result_file:
        result_file.write(f"Всего найдено ошибок: {len(errors)}\n")
        result_file.write("=" * 50 + "\n\n")
        
        for error in errors:
            result_file.write(f"Строка {error['line']}: {error['content']}\n")
            result_file.write(f"Время: {error['timestamp']}\n")
            result_file.write("-" * 30 + "\n")
    
    # Дополнительно: сохранение статистики в JSON
    import json
    
    stats = {
        'total_errors': len(errors),
        'errors_by_hour': {},  # можно дополнить анализом
        'input_file': input_file,
        'analysis_date': '2024-01-15'
    }
    
    with open('log_stats.json', 'w', encoding='utf-8') as json_file:
        json.dump(stats, json_file, ensure_ascii=False, indent=2)
    
    print(f"Анализ завершен. Найдено {len(errors)} ошибок.")
    return errors

# Использование
if __name__ == "__main__":
    analyze_server_log('server.log', 'errors_report.txt')
```

##### **Задача 2: Конвертер данных CSV → JSON**
**Цель:** Преобразовать CSV-файл с пользователями в JSON-формат с группировкой.

```python
# csv_to_json_converter.py
import csv
import json

def convert_csv_to_json(csv_file, json_file):
    """
    Конвертирует CSV-файл с пользователями в структурированный JSON
    """
    users_by_department = {}
    
    # Чтение CSV
    with open(csv_file, 'r', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        
        for row in reader:
            # Обработка данных
            department = row['department']
            user = {
                'id': int(row['id']),
                'name': row['name'],
                'salary': int(row['salary']),
                'hire_date': row['hire_date'],
                'email': row.get('email', f"{row['name'].split()[0].lower()}@company.com")
            }
            
            # Группировка по отделам
            if department not in users_by_department:
                users_by_department[department] = []
            
            users_by_department[department].append(user)
    
    # Подготовка итоговой структуры
    result = {
        'company': 'Example Corp',
        'total_employees': sum(len(users) for users in users_by_department.values()),
        'departments': []
    }
    
    for dept, users in users_by_department.items():
        dept_info = {
            'name': dept,
            'employee_count': len(users),
            'total_salary': sum(user['salary'] for user in users),
            'avg_salary': sum(user['salary'] for user in users) / len(users),
            'employees': users
        }
        result['departments'].append(dept_info)
    
    # Запись JSON
    with open(json_file, 'w', encoding='utf-8') as file:
        json.dump(result, file, ensure_ascii=False, indent=2)
    
    print(f"Конвертация завершена. Создан файл: {json_file}")
    return result

# Использование
if __name__ == "__main__":
    convert_csv_to_json('employees.csv', 'employees.json')
```

##### **Задача 3: Генератор отчетов из JSON**
**Цель:** Создать текстовый отчет на основе данных в JSON.

```python
# report_generator.py
import json

def generate_report(json_file, report_file):
    """
    Генерирует текстовый отчет из JSON-данных
    """
    with open(json_file, 'r', encoding='utf-8') as file:
        data = json.load(file)
    
    with open(report_file, 'w', encoding='utf-8') as report:
        # Заголовок отчета
        report.write(f"ОТЧЕТ ПО КОМПАНИИ: {data['company']}\n")
        report.write("=" * 50 + "\n\n")
        
        report.write(f"Общее количество сотрудников: {data['total_employees']}\n\n")
        
        # Информация по отделам
        report.write("СТАТИСТИКА ПО ОТДЕЛАМ:\n")
        report.write("-" * 40 + "\n")
        
        for dept in data['departments']:
            report.write(f"\nОтдел: {dept['name']}\n")
            report.write(f"  Сотрудников: {dept['employee_count']}\n")
            report.write(f"  Общий фонд зарплат: {dept['total_salary']:,} руб.\n")
            report.write(f"  Средняя зарплата: {dept['avg_salary']:,.2f} руб.\n")
            
            # Список сотрудников
            report.write("  Сотрудники:\n")
            for emp in dept['employees']:
                report.write(f"    - {emp['name']} (ID: {emp['id']}, ЗП: {emp['salary']:,} руб.)\n")
        
        # Итоги
        report.write("\n" + "=" * 50 + "\n")
        report.write("ИТОГИ:\n")
        
        total_salary = sum(dept['total_salary'] for dept in data['departments'])
        report.write(f"Общие расходы на зарплаты: {total_salary:,} руб.\n")
        
        avg_salary_company = total_salary / data['total_employees']
        report.write(f"Средняя зарплата по компании: {avg_salary_company:,.2f} руб.\n")
    
    print(f"Отчет создан: {report_file}")

# Использование
if __name__ == "__main__":
    generate_report('employees.json', 'company_report.txt')
```

##### **Задача 4: Универсальный обработчик данных**
**Цель:** Скрипт для множественного преобразования данных.

```python
# data_processor.py
import csv
import json
from datetime import datetime

class DataProcessor:
    def __init__(self):
        self.stats = {
            'processed_files': 0,
            'total_records': 0,
            'errors': []
        }
    
    def process_file(self, input_file, output_format='json'):
        """
        Обрабатывает файл и конвертирует в указанный формат
        """
        file_extension = input_file.split('.')[-1].lower()
        
        try:
            if file_extension == 'csv':
                data = self._read_csv(input_file)
            elif file_extension == 'json':
                data = self._read_json(input_file)
            elif file_extension == 'txt':
                data = self._read_text(input_file)
            else:
                raise ValueError(f"Неподдерживаемый формат: {file_extension}")
            
            # Обработка данных
            processed_data = self._process_data(data)
            
            # Сохранение в нужном формате
            output_file = input_file.replace(f'.{file_extension}', f'_processed.{output_format}')
            
            if output_format == 'json':
                self._save_json(processed_data, output_file)
            elif output_format == 'csv':
                self._save_csv(processed_data, output_file)
            elif output_format == 'txt':
                self._save_text(processed_data, output_file)
            
            # Обновление статистики
            self.stats['processed_files'] += 1
            if isinstance(data, list):
                self.stats['total_records'] += len(data)
            
            print(f"Файл обработан: {input_file} -> {output_file}")
            
        except Exception as e:
            error_msg = f"Ошибка обработки {input_file}: {str(e)}"
            self.stats['errors'].append(error_msg)
            print(error_msg)
    
    def _read_csv(self, filepath):
        with open(filepath, 'r', encoding='utf-8') as file:
            return list(csv.DictReader(file))
    
    def _read_json(self, filepath):
        with open(filepath, 'r', encoding='utf-8') as file:
            return json.load(file)
    
    def _read_text(self, filepath):
        with open(filepath, 'r', encoding='utf-8') as file:
            return file.readlines()
    
    def _process_data(self, data):
        """Пример обработки: добавление метаданных"""
        if isinstance(data, list):
            for item in data:
                if isinstance(item, dict):
                    item['processed_date'] = datetime.now().isoformat()
                    item['processed_by'] = 'DataProcessor'
        return data
    
    def _save_json(self, data, filepath):
        with open(filepath, 'w', encoding='utf-8') as file:
            json.dump(data, file, ensure_ascii=False, indent=2)
    
    def _save_csv(self, data, filepath):
        if data and isinstance(data, list) and isinstance(data[0], dict):
            with open(filepath, 'w', encoding='utf-8', newline='') as file:
                writer = csv.DictWriter(file, fieldnames=data[0].keys())
                writer.writeheader()
                writer.writerows(data)
    
    def _save_text(self, data, filepath):
        with open(filepath, 'w', encoding='utf-8') as file:
            if isinstance(data, list):
                for item in data:
                    file.write(str(item) + '\n')
            else:
                file.write(str(data))
    
    def save_stats(self):
        """Сохранение статистики работы"""
        stats_file = f'processor_stats_{datetime.now().strftime("%Y%m%d_%H%M%S")}.json'
        with open(stats_file, 'w', encoding='utf-8') as file:
            json.dump(self.stats, file, ensure_ascii=False, indent=2)
        print(f"Статистика сохранена: {stats_file}")

# Использование
if __name__ == "__main__":
    processor = DataProcessor()
    
    # Обработка нескольких файлов
    files_to_process = [
        'employees.csv',
        'config.json',
        'server.log'
    ]
    
    for file in files_to_process:
        processor.process_file(file, output_format='json')
    
    # Сохранение статистики
    processor.save_stats()
```

#### **4. Лучшие практики и советы**

##### **1. Организация кода**
```python
# Хорошая структура
import csv
import json
import os

class DataHandler:
    def __init__(self, input_dir='input', output_dir='output'):
        self.input_dir = input_dir
        self.output_dir = output_dir
        os.makedirs(output_dir, exist_ok=True)
    
    def process_all_files(self):
        for filename in os.listdir(self.input_dir):
            if filename.endswith('.csv'):
                self.process_csv(filename)
```

##### **2. Обработка ошибок**
```python
def safe_file_operation(filepath, operation):
    try:
        with open(filepath, 'r', encoding='utf-8') as file:
            return operation(file)
    except FileNotFoundError:
        print(f"Файл не найден: {filepath}")
        return None
    except UnicodeDecodeError:
        print(f"Ошибка кодировки: {filepath}")
        return None
    except Exception as e:
        print(f"Неизвестная ошибка: {e}")
        return None
```

##### **3. Валидация данных**
```python
def validate_csv_row(row, required_fields):
    missing = [field for field in required_fields if field not in row]
    if missing:
        raise ValueError(f"Отсутствуют поля: {missing}")
    
    # Проверка типов данных
    if 'salary' in row and not row['salary'].isdigit():
        raise ValueError(f"Некорректная зарплата: {row['salary']}")
    
    return True
```

##### **4. Работа с путями**
```python
import os

# Создание уникального имени файла
def get_unique_filename(base_name, extension, directory='output'):
    counter = 1
    while True:
        filename = f"{base_name}_{counter}.{extension}"
        full_path = os.path.join(directory, filename)
        if not os.path.exists(full_path):
            return full_path
        counter += 1
```

#### **5. Домашнее задание**
Разработать систему управления библиотекой:
1. **books.csv** — информация о книгах (ID, название, автор, год, жанр)
2. **users.json** — информация о пользователях
3. Написать скрипты:
   - Добавление новой книги
   - Поиск книг по автору/жанру
   - Генерация отчета по популярным жанрам
   - Экспорт данных в разные форматы

---

### **Ключевые выводы:**
1. **Используйте контекстные менеджеры** (`with open()`) для безопасной работы с файлами.
2. **Выбирайте формат по задаче:**
   - CSV — для табличных данных, Excel
   - JSON — для структурированных, вложенных данных
   - Текст — для логов, отчетов
3. **Всегда указывайте кодировку** `utf-8`.
4. **Обрабатывайте ошибки** — файлы могут отсутствовать или быть повреждены.
5. **Документируйте** форматы данных и структуры файлов.
6. **Разделяйте логику:** чтение → обработка → запись.
7. **Тестируйте** на разных данных и граничных случаях.