**Конспект лекции: Менеджер пакетов npm (для JavaScript)**

---

### **Тема 3.7: Менеджер пакетов npm (для JavaScript)**

#### **1. Введение: Что такое npm?**
* **npm (Node Package Manager)** — стандартный менеджер пакетов для экосистемы JavaScript/Node.js.
* **Основные функции:**
  * Установка, обновление и удаление пакетов (библиотек)
  * Управление зависимостями проекта
  * Запуск скриптов и задач
  * Публикация собственных пакетов
* **npm vs pip:** Аналогичен pip в Python, но для JavaScript-проектов

#### **2. Инициализация проекта: `npm init`**

##### **Базовое создание проекта:**
```bash
# Создание нового проекта
npm init
```
**Процесс инициализации:** npm задаст серию вопросов:
```
package name: (my-project)       # Имя пакета
version: (1.0.0)                 # Версия
description:                     # Описание
entry point: (index.js)          # Главный файл
test command:                    # Команда для тестов
git repository:                  # Репозиторий Git
keywords:                        # Ключевые слова
author:                          # Автор
license: (ISC)                   # Лицензия
```

##### **Быстрая инициализация:**
```bash
# Пропустить все вопросы, использовать значения по умолчанию
npm init -y
# или
npm init --yes
```
Создает `package.json` с минимальной конфигурацией.

#### **3. Файл `package.json` — сердце проекта**

##### **Структура файла:**
```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "Мой JavaScript проект",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "keywords": ["javascript", "node"],
  "author": "Иван Иванов",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2",
    "lodash": "^4.17.21"
  },
  "devDependencies": {
    "nodemon": "^3.0.1",
    "jest": "^29.6.0"
  }
}
```

##### **Ключевые поля:**
| Поле | Описание | Пример |
|------|----------|--------|
| `name` | Имя пакета (только строчные буквы, дефисы) | `"my-awesome-app"` |
| `version` | Версия (семантическое версионирование) | `"1.0.0"` |
| `main` | Точка входа приложения | `"index.js"` |
| `scripts` | Пользовательские команды npm | `"start": "node app.js"` |
| `dependencies` | Зависимости для production | `{"express": "^4.18.2"}` |
| `devDependencies` | Зависимости для разработки | `{"jest": "^29.6.0"}` |

##### **Семантическое версионирование (SemVer):**
* `1.0.0` = `MAJOR.MINOR.PATCH`
* **MAJOR** — обратно несовместимые изменения
* **MINOR** — новая функциональность (обратная совместимость)
* **PATCH** — исправления багов (обратная совместимость)

#### **4. Установка пакетов: `npm install`**

##### **Установка пакетов в зависимости:**
```bash
# Установка пакета как dependency (для production)
npm install express
# Сокращенная версия:
npm i express

# Установка конкретной версии
npm install express@4.18.2

# Установка как devDependency (для разработки)
npm install --save-dev nodemon
npm i -D jest
```

##### **Флаги установки:**
| Команда | Сокращение | Описание |
|---------|------------|----------|
| `npm install --save` | `npm i -S` | В `dependencies` (по умолчанию) |
| `npm install --save-dev` | `npm i -D` | В `devDependencies` |
| `npm install --global` | `npm i -g` | Глобальная установка |
| `npm install --no-save` | | Установить без сохранения |

##### **Установка всех зависимостей проекта:**
```bash
# Установка всех зависимостей из package.json
npm install
# или
npm i
```
* Читает `package.json` и устанавливает все зависимости
* Создает папку `node_modules` (не добавлять в Git!)
* Создает/обновляет `package-lock.json`

#### **5. Папка `node_modules` и файл `package-lock.json`**

##### **`node_modules/`**
* Папка со всеми установленными пакетами и их зависимостями
* **Никогда не коммитить в Git!**
* Добавить в `.gitignore`:
  ```
  node_modules/
  ```

##### **`package-lock.json`**
* Автоматически генерируемый файл
* Фиксирует точные версии всех зависимостей
* Обеспечивает воспроизводимость сборок
* **Обязательно коммитить в Git!**

#### **6. Скрипты в `package.json`**

##### **Стандартные скрипты:**
```json
"scripts": {
  "start": "node app.js",
  "test": "jest",
  "build": "webpack --mode production",
  "dev": "nodemon app.js"
}
```

##### **Запуск скриптов:**
```bash
# Запуск скрипта "start"
npm start

# Запуск скрипта "test"
npm test
npm run test

# Запуск кастомного скрипта
npm run build
npm run dev
```

##### **Полезные скрипты для разработки:**
```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js",
  "test": "jest",
  "test:watch": "jest --watch",
  "lint": "eslint .",
  "format": "prettier --write .",
  "build": "webpack --mode production",
  "serve": "live-server dist"
}
```

#### **7. Удаление и обновление пакетов**

##### **Удаление пакетов:**
```bash
# Удаление пакета
npm uninstall express
npm un express

# Удаление devDependency
npm uninstall --save-dev jest
npm un -D jest
```

##### **Обновление пакетов:**
```bash
# Проверка устаревших пакетов
npm outdated

# Обновление одного пакета
npm update express

# Обновление всех пакетов
npm update

# Обновление до конкретной версии
npm install express@latest
```

#### **8. Глобальная установка пакетов**
```bash
# Установка глобально (доступно везде в системе)
npm install -g nodemon
npm i -g typescript

# Просмотр глобальных пакетов
npm list -g --depth=0

# Удаление глобального пакета
npm uninstall -g nodemon
```
**Использовать с осторожностью!** Лучше использовать локальную установку.

#### **9. Поиск пакетов**
```bash
# Поиск пакета
npm search express

# Просмотр информации о пакете
npm view express
npm info express

# Проверка доступных версий
npm view express versions
```

#### **10. npm vs npx**
* **npm** — для управления пакетами
* **npx** — для запуска пакетов без установки

```bash
# Запуск create-react-app без глобальной установки
npx create-react-app my-app

# Запуск локально установленного пакета
npx jest
```

#### **11. Практический пример: Создание веб-проекта**

```bash
# 1. Создаем папку проекта и переходим в нее
mkdir my-web-app
cd my-web-app

# 2. Инициализируем проект
npm init -y

# 3. Устанавливаем зависимости
npm install express
npm install -D nodemon

# 4. Создаем файл app.js
echo "const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Привет, мир!');
});

app.listen(PORT, () => {
  console.log('Сервер запущен на порту ' + PORT);
});" > app.js

# 5. Обновляем package.json
echo '{
  "name": "my-web-app",
  "version": "1.0.0",
  "description": "Мой веб-проект",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}' > package.json

# 6. Запускаем в режиме разработки
npm run dev
```

#### **12. Сравнение npm и pip**

| Аспект | npm (JavaScript) | pip (Python) |
|--------|------------------|--------------|
| Файл конфигурации | `package.json` | `requirements.txt` / `pyproject.toml` |
| Инициализация | `npm init` | - |
| Установка пакетов | `npm install <пакет>` | `pip install <пакет>` |
| Установка зависимостей | `npm install` | `pip install -r requirements.txt` |
| Виртуальное окружение | `node_modules/` | `venv/` или `virtualenv` |
| Фиксация версий | `package-lock.json` | `pip freeze > requirements.txt` |

#### **13. Лучшие практики**

1. **Всегда использовать `package-lock.json`** — коммитить в репозиторий
2. **Разделять зависимости** — `dependencies` и `devDependencies`
3. **Не коммитить `node_modules/`**
4. **Использовать скрипты** для автоматизации задач
5. **Проверять уязвимости:**
   ```bash
   npm audit
   npm audit fix
   ```
6. **Использовать `.npmrc`** для настройки npm
7. **Следить за размером пакетов** — могут быть очень большими

---

### **Ключевые выводы:**
1. **npm** — основной инструмент для управления зависимостями в JavaScript-проектах
2. **`npm init`** — создает `package.json` (аналог `pip freeze` но с метаданными)
3. **`npm install`** — устанавливает пакеты (аналог `pip install`)
4. **`package.json`** — описывает проект и его зависимости
5. **`node_modules/`** — локальное хранилище пакетов (аналог `site-packages` в виртуальном окружении)
6. **`package-lock.json`** — фиксирует точные версии зависимостей (аналог `requirements.txt` с точными версиями)
7. **Разделяйте зависимости:** production (`dependencies`) и development (`devDependencies`)
8. **Используйте скрипты** для автоматизации повторяющихся задач