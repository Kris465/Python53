calculation_history = []


def calculate(a, b, operator):
    # Проверяем оператор и выполняем  соответствующее действие  
    if operator == '+':
        result = a + b
    elif operator == "-":
        result = a - b
    elif operator == '*':
        result = a * b
    elif operator == '/':
        # Проверяем деление на ноль
        if b == 0:
            return " Ошибка: деление на ноль"
        result = a / b
    else:
        return "Неизвестная функция"

# Формируем строку с описанием операции для истории
    operation_str = f"{a}{operator}{b} = {result}"
# Добавляем операцию в начало списка
    calculation_history.insert(0, operation_str)

# Ограничиваем историю 3 последними операциями
    if len(calculation_history) > 3:
        calculation_history.pop()  # Удаляем самую старую операцию
    return result


def show_history():
    """Показывает три последние операции из истории"""
    if not calculation_history:
        print("История пуста")
        return
    print("Последние операции:")
    # enumerate добавляет номер к каждой  операции, начиеая с 1
    for i, operation in enumerate(calculation_history, 1):
        print(f"{i}.{operation}")
        # Демонстрация работы


if __name__ == "__main__":
    print("=== Умный калькулятор===/n")
    # Текстовые вычисления
    print(" 5 + 3 =", calculate(5, 3, '+'))
    print("10 / 2 =", calculate(10, 2, '/'))
    print("7 * 4 =", calculate(7, 4, '*'))
    # Показываtм историю
    show_history()          
    # Ещё одно вычисление - должно вытеснить
    print("\n8 - 2 =", calculate(8, 2, '-'))
    show_history()
