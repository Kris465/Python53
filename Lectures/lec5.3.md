### **Лекция 5.3: SQL: Операторы INSERT, UPDATE, DELETE**

**Цель лекции:** Научиться манипулировать данными в таблицах с помощью операторов добавления, обновления и удаления записей. Понимать риски операций и важность транзакций.

#### **Теоретическая часть**

**1. Оператор `INSERT` — добавление новых записей**
Добавляет новые строки в таблицу.

**Синтаксис:**
```sql
-- Способ 1: С указанием столбцов (рекомендуется)
INSERT INTO имя_таблицы (столбец1, столбец2, ...)
VALUES (значение1, значение2, ...);

-- Способ 2: Без указания столбцов (только если значения для ВСЕХ столбцов)
INSERT INTO имя_таблицы
VALUES (значение1, значение2, ...);
```

**Примеры:**
```sql
-- Добавление одного студента
INSERT INTO students (first_name, last_name, age, group_name)
VALUES ('Александр', 'Васильев', 21, 'ИТ-101');

-- Добавление нескольких студентов за один запрос
INSERT INTO students (first_name, last_name, age, group_name)
VALUES 
    ('Екатерина', 'Федорова', 19, 'Л-201'),
    ('Михаил', 'Яковлев', 22, 'Ф-301');
```

**2. Оператор `UPDATE` — изменение существующих записей**
Изменяет значения в существующих строках таблицы.

**Синтаксис:**
```sql
UPDATE имя_таблицы
SET столбец1 = новое_значение1,
    столбец2 = новое_значение2,
    ...
WHERE условие; -- ВАЖНО: если нет WHERE, обновятся ВСЕ строки!
```

**Примеры:**
```sql
-- Изменить группу конкретному студенту (по id)
UPDATE students
SET group_name = 'ИТ-102'
WHERE id = 5;

-- Увеличить возраст всем студентам на 1 год
UPDATE students
SET age = age + 1;

-- Изменить несколько полей одновременно
UPDATE students
SET age = 20,
    group_name = 'ИТ-101'
WHERE first_name = 'Мария' AND last_name = 'Кузнецова';
```

⚠️ **ВНИМАНИЕ:** Без `WHERE` оператор `UPDATE` затронет ВСЕ строки таблицы!

**3. Оператор `DELETE` — удаление записей**
Удаляет строки из таблицы.

**Синтаксис:**
```sql
DELETE FROM имя_таблицы
WHERE условие; -- ВАЖНО: если нет WHERE, удалятся ВСЕ строки!
```

**Примеры:**
```sql
-- Удалить студента по id
DELETE FROM students
WHERE id = 10;

-- Удалить всех студентов из группы Ф-301
DELETE FROM students
WHERE group_name = 'Ф-301';

-- Удалить всех студентов младше 18 лет
DELETE FROM students
WHERE age < 18;
```

⚠️ **ВНИМАНИЕ:** Без `WHERE` оператор `DELETE` удалит ВСЕ данные из таблицы!

**4. Важные концепции:**

*   **Транзакции:** Группа операций, которая выполняется как единое целое. Либо все операции выполняются успешно, либо ни одна не применяется.
*   **Автоматическая генерация ID:** При `INSERT` в столбец с `INTEGER PRIMARY KEY` можно не указывать значение — SQLite сам подставит следующее уникальное число.
*   **Ограничения (CONSTRAINTS):** `NOT NULL`, `UNIQUE`, `PRIMARY KEY`, `FOREIGN KEY` контролируют целостность данных.

#### **Практическая часть: Симулятор управления студентами**

**Подготовка:**
1. Создайте новую базу данных `college.db` или используйте существующую `university.db`
2. Создайте таблицу `students` с расширенной структурой:

```sql
CREATE TABLE students (
    id INTEGER PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    age INTEGER CHECK (age >= 16 AND age <= 35),
    group_name TEXT NOT NULL,
    email TEXT UNIQUE,
    enrollment_date DATE DEFAULT CURRENT_DATE,
    scholarship BOOLEAN DEFAULT FALSE
);
```

**Задание 1: Чистый SQL (выполняем в DB Browser)**

Выполните последовательно эти запросы и наблюдайте за изменениями данных:

```sql
-- 1. Добавление студентов
INSERT INTO students (first_name, last_name, age, group_name, email, scholarship)
VALUES 
('Иван', 'Сидоров', 20, 'ИТ-101', 'ivan.sidorov@edu.ru', TRUE),
('Ольга', 'Иванова', 19, 'Л-201', 'olga.ivanova@edu.ru', FALSE),
('Алексей', 'Петров', 21, 'ИТ-101', 'alexey.petrov@edu.ru', TRUE),
('Мария', 'Смирнова', 22, 'Ф-301', 'maria.smirnova@edu.ru', FALSE);

-- Проверьте добавление
SELECT * FROM students;

-- 2. Обновление данных
-- Алексею Петрову исполнилось 22 года
UPDATE students
SET age = 22
WHERE first_name = 'Алексей' AND last_name = 'Петров';

-- Всем студентам ИТ-101 назначить стипендию
UPDATE students
SET scholarship = TRUE
WHERE group_name = 'ИТ-101';

-- Изменить email для Марии
UPDATE students
SET email = 'm.smirnova@edu.ru'
WHERE id = 4;

-- Проверьте изменения
SELECT first_name, last_name, age, scholarship FROM students;

-- 3. Удаление данных
-- Удалить студента, который ушёл из университета
DELETE FROM students
WHERE email = 'olga.ivanova@edu.ru';

-- Удалить всех без стипендии (будьте осторожны!)
DELETE FROM students
WHERE scholarship = FALSE;

-- Проверьте оставшихся студентов
SELECT COUNT(*) as total_students FROM students;
```

**Задание 2: Python-скрипт для управления студентами**

Создайте файл `student_manager.py` — консольное приложение для работы со студентами:

```python
import sqlite3
import datetime
from typing import Optional, List, Tuple

class StudentManager:
    def __init__(self, db_name: str = "college.db"):
        self.db_name = db_name
        self._init_database()
    
    def _init_database(self):
        """Инициализация базы данных и таблицы"""
        with sqlite3.connect(self.db_name) as conn:
            cursor = conn.cursor()
            # Создаём таблицу, если её нет
            cursor.execute('''
                CREATE TABLE IF NOT EXISTS students (
                    id INTEGER PRIMARY KEY,
                    first_name TEXT NOT NULL,
                    last_name TEXT NOT NULL,
                    age INTEGER CHECK (age >= 16 AND age <= 35),
                    group_name TEXT NOT NULL,
                    email TEXT UNIQUE,
                    enrollment_date DATE DEFAULT CURRENT_DATE,
                    scholarship BOOLEAN DEFAULT FALSE
                )
            ''')
            conn.commit()
    
    def add_student(self, first_name: str, last_name: str, age: int, 
                    group_name: str, email: Optional[str] = None, 
                    scholarship: bool = False) -> int:
        """Добавить нового студента"""
        try:
            with sqlite3.connect(self.db_name) as conn:
                cursor = conn.cursor()
                
                # Если email не указан, генерируем автоматически
                if not email:
                    email = f"{first_name.lower()}.{last_name.lower()}@edu.ru"
                
                cursor.execute('''
                    INSERT INTO students 
                    (first_name, last_name, age, group_name, email, scholarship)
                    VALUES (?, ?, ?, ?, ?, ?)
                ''', (first_name, last_name, age, group_name, email, scholarship))
                
                conn.commit()
                student_id = cursor.lastrowid
                print(f"✅ Студент {first_name} {last_name} добавлен с ID: {student_id}")
                return student_id
                
        except sqlite3.IntegrityError as e:
            print(f"❌ Ошибка: {e}")
            return -1
    
    def update_student_age(self, student_id: int, new_age: int) -> bool:
        """Обновить возраст студента"""
        with sqlite3.connect(self.db_name) as conn:
            cursor = conn.cursor()
            cursor.execute('''
                UPDATE students 
                SET age = ? 
                WHERE id = ?
            ''', (new_age, student_id))
            
            conn.commit()
            updated = cursor.rowcount > 0
            
            if updated:
                print(f"✅ Возраст студента с ID {student_id} изменён на {new_age}")
            else:
                print(f"⚠️  Студент с ID {student_id} не найден")
            
            return updated
    
    def transfer_student_group(self, student_id: int, new_group: str) -> bool:
        """Перевести студента в другую группу"""
        with sqlite3.connect(self.db_name) as conn:
            cursor = conn.cursor()
            cursor.execute('''
                UPDATE students 
                SET group_name = ? 
                WHERE id = ?
            ''', (new_group, student_id))
            
            conn.commit()
            return cursor.rowcount > 0
    
    def grant_scholarship_to_group(self, group_name: str) -> int:
        """Назначить стипендию всем студентам группы"""
        with sqlite3.connect(self.db_name) as conn:
            cursor = conn.cursor()
            cursor.execute('''
                UPDATE students 
                SET scholarship = TRUE 
                WHERE group_name = ?
            ''', (group_name,))
            
            conn.commit()
            count = cursor.rowcount
            print(f"✅ Стипендия назначена {count} студентам группы {group_name}")
            return count
    
    def remove_student(self, student_id: int) -> bool:
        """Удалить студента по ID"""
        confirmation = input(f"Вы уверены, что хотите удалить студента с ID {student_id}? (yes/no): ")
        
        if confirmation.lower() != 'yes':
            print("❌ Удаление отменено")
            return False
        
        with sqlite3.connect(self.db_name) as conn:
            cursor = conn.cursor()
            cursor.execute('''
                DELETE FROM students 
                WHERE id = ?
            ''', (student_id,))
            
            conn.commit()
            deleted = cursor.rowcount > 0
            
            if deleted:
                print(f"✅ Студент с ID {student_id} удалён")
            else:
                print(f"⚠️  Студент с ID {student_id} не найден")
            
            return deleted
    
    def clear_graduated_students(self, graduation_year: int = 2023) -> int:
        """Удалить студентов, которые должны были выпуститься"""
        # Простая логика: выпускаются те, кто поступил 4+ года назад
        with sqlite3.connect(self.db_name) as conn:
            cursor = conn.cursor()
            
            # Сначала посмотрим, кого удалим
            cursor.execute('''
                SELECT id, first_name, last_name, group_name 
                FROM students 
                WHERE CAST(strftime('%Y', enrollment_date) AS INTEGER) <= ?
            ''', (graduation_year - 4,))
            
            students_to_remove = cursor.fetchall()
            
            if not students_to_remove:
                print("✅ Нет студентов для выпуска")
                return 0
            
            print("Следующие студенты будут выпущены (удалены из базы):")
            for student in students_to_remove:
                print(f"  - {student[1]} {student[2]} ({student[3]})")
            
            confirmation = input("Подтвердите выпуск (yes/no): ")
            
            if confirmation.lower() != 'yes':
                print("❌ Выпуск отменён")
                return 0
            
            # Удаляем
            cursor.execute('''
                DELETE FROM students 
                WHERE CAST(strftime('%Y', enrollment_date) AS INTEGER) <= ?
            ''', (graduation_year - 4,))
            
            conn.commit()
            count = cursor.rowcount
            print(f"✅ Выпущено {count} студентов")
            return count
    
    def show_all_students(self):
        """Показать всех студентов"""
        with sqlite3.connect(self.db_name) as conn:
            cursor = conn.cursor()
            cursor.execute('''
                SELECT id, first_name, last_name, age, group_name, 
                       scholarship, enrollment_date 
                FROM students 
                ORDER BY group_name, last_name
            ''')
            
            students = cursor.fetchall()
            
            if not students:
                print("📭 В базе нет студентов")
                return
            
            print("\n" + "="*70)
            print("🎓 СПИСОК СТУДЕНТОВ")
            print("="*70)
            
            for student in students:
                scholarship = "✅" if student[5] else "❌"
                print(f"ID: {student[0]:3} | {student[1]:10} {student[2]:15} | "
                      f"Возраст: {student[3]:2} | Группа: {student[4]:6} | "
                      f"Стипендия: {scholarship} | Поступил: {student[6]}")
    
    def bulk_operations_demo(self):
        """Демонстрация пакетных операций с транзакцией"""
        print("\n" + "="*70)
        print("🔄 ДЕМО ПАКЕТНЫХ ОПЕРАЦИЙ С ТРАНЗАКЦИЕЙ")
        print("="*70)
        
        try:
            with sqlite3.connect(self.db_name) as conn:
                cursor = conn.cursor()
                
                # Начинаем транзакцию
                conn.execute("BEGIN TRANSACTION")
                
                print("1. Добавляем новых студентов...")
                new_students = [
                    ('Дарья', 'Николаева', 20, 'ИТ-102', 'darya@edu.ru', True),
                    ('Артём', 'Фролов', 21, 'ИТ-102', 'artem@edu.ru', False),
                    ('София', 'Захарова', 19, 'Л-202', 'sofia@edu.ru', True),
                ]
                
                cursor.executemany('''
                    INSERT INTO students 
                    (first_name, last_name, age, group_name, email, scholarship)
                    VALUES (?, ?, ?, ?, ?, ?)
                ''', new_students)
                
                print("2. Обновляем данные...")
                # Всем студентам ИТ-102 добавить 1 год
                cursor.execute('''
                    UPDATE students 
                    SET age = age + 1 
                    WHERE group_name = 'ИТ-102'
                ''')
                
                print("3. Удаляем тестовые записи...")
                cursor.execute('''
                    DELETE FROM students 
                    WHERE email LIKE '%test%'
                ''')
                
                # Подтверждаем транзакцию
                conn.commit()
                print("✅ Транзакция успешно завершена!")
                
        except Exception as e:
            print(f"❌ Ошибка в транзакции: {e}")
            print("⏪ Откат изменений...")
            conn.rollback()

def interactive_menu():
    """Интерактивное меню для управления студентами"""
    manager = StudentManager()
    
    while True:
        print("\n" + "="*70)
        print("🏛️  СИСТЕМА УПРАВЛЕНИЯ СТУДЕНТАМИ")
        print("="*70)
        print("1. Показать всех студентов")
        print("2. Добавить нового студента")
        print("3. Изменить возраст студента")
        print("4. Перевести студента в другую группу")
        print("5. Назначить стипендию всей группе")
        print("6. Удалить студента")
        print("7. Выпустить студентов (удалить выпускников)")
        print("8. Демо: пакетные операции")
        print("9. Выход")
        print("-"*70)
        
        choice = input("Выберите действие (1-9): ").strip()
        
        if choice == "1":
            manager.show_all_students()
        
        elif choice == "2":
            print("\n📝 ДОБАВЛЕНИЕ НОВОГО СТУДЕНТА")
            first_name = input("Имя: ").strip()
            last_name = input("Фамилия: ").strip()
            age = int(input("Возраст: ").strip())
            group_name = input("Группа: ").strip()
            email = input("Email (опционально): ").strip() or None
            scholarship = input("Стипендия (y/n): ").strip().lower() == 'y'
            
            manager.add_student(first_name, last_name, age, group_name, email, scholarship)
        
        elif choice == "3":
            student_id = int(input("ID студента: ").strip())
            new_age = int(input("Новый возраст: ").strip())
            manager.update_student_age(student_id, new_age)
        
        elif choice == "4":
            student_id = int(input("ID студента: ").strip())
            new_group = input("Новая группа: ").strip()
            if manager.transfer_student_group(student_id, new_group):
                print("✅ Студент переведён")
            else:
                print("❌ Студент не найден")
        
        elif choice == "5":
            group_name = input("Группа для назначения стипендии: ").strip()
            manager.grant_scholarship_to_group(group_name)
        
        elif choice == "6":
            student_id = int(input("ID студента для удаления: ").strip())
            manager.remove_student(student_id)
        
        elif choice == "7":
            year = input("Текущий год (по умолчанию 2023): ").strip()
            graduation_year = int(year) if year else 2023
            manager.clear_graduated_students(graduation_year)
        
        elif choice == "8":
            manager.bulk_operations_demo()
        
        elif choice == "9":
            print("👋 До свидания!")
            break
        
        else:
            print("❌ Неверный выбор. Попробуйте снова.")
        
        input("\nНажмите Enter для продолжения...")

if __name__ == "__main__":
    interactive_menu()
```

#### **Практическое задание для самопроверки**

**Часть 1: Работа с чистым SQL**
1. В DB Browser создайте базу `library.db` и таблицу `books`:
   ```sql
   CREATE TABLE books (
       book_id INTEGER PRIMARY KEY,
       title TEXT NOT NULL,
       author TEXT NOT NULL,
       year INTEGER,
       genre TEXT,
       price REAL,
       in_stock BOOLEAN DEFAULT TRUE
   );
   ```

2. Выполните последовательно:
   - Добавьте 5-7 книг разных жанров
   - Измените цену всех книг определенного автора
   - Отметьте некоторые книги как отсутствующие (`in_stock = FALSE`)
   - Удалите все книги, изданные до 2000 года
   - Добавьте скидку 20% на все книги определенного жанра

**Часть 2: Модификация Python-скрипта**
Создайте скрипт `library_manager.py` на основе `student_manager.py`, который будет управлять книгами. Добавьте функции:

1. `add_book_with_validation()` — проверяет, что год издания не в будущем
2. `apply_discount()` — применяет скидку к книгам определенного жанра
3. `restock_books()` — отмечает несколько книг как имеющиеся в наличии
4. `remove_out_of_print()` — удаляет книги, которых нет в наличии 2+ года

**Часть 3: Создание скрипта для резервного копирования**
Напишите скрипт `database_backup.py`, который:
1. Создает резервную копию всех данных перед опасными операциями
2. Сохраняет историю всех `INSERT`, `UPDATE`, `DELETE` операций в отдельную таблицу `audit_log`
3. Позволяет откатить последние изменения

**Пример таблицы для аудита:**
```sql
CREATE TABLE audit_log (
    log_id INTEGER PRIMARY KEY,
    operation TEXT,  -- 'INSERT', 'UPDATE', 'DELETE'
    table_name TEXT,
    record_id INTEGER,
    old_values TEXT,  -- JSON или текстовое представление
    new_values TEXT,
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user TEXT DEFAULT 'system'
);
```

**Вопросы для самопроверки:**
1. Что произойдет, если выполнить `UPDATE table SET column = value` без `WHERE`?
2. Как добавить сразу несколько записей одним запросом `INSERT`?
3. Почему важно использовать параметризованные запросы (`?`) в Python вместо форматирования строк?
4. Что такое транзакция и зачем она нужна?
5. Как безопасно удалить все данные из таблицы с возможностью восстановления?

**Дополнительное задание (по желанию):**
Создайте мини-приложение на Flask или FastAPI с CRUD операциями для управления студентами или книгами, где каждая операция будет использовать соответствующий SQL-запрос.