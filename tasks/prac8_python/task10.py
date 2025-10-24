import random
import string


def generate_test_data(data_type, count):
    """
    Генерирует тестовые данные указанного типа

    Args:
        data_type: тип данных ('number', 'string', 'boolean')
        count: количество элементов для генерации

    Returns:
        Список сгенерированных данных или сообщение об ошибке
    """
    result = []

    for _ in range(count):
        if data_type == 'number':
            # Генерируем случайное число: 70% целых, 30% дробных
            if random.random() < 0.7:  # random() дает число от 0 до 1
                # Целое число от -100 до 100
                result.append(random.randint(-100, 100))
            else:
                # Дробное число от -100.0 до 100.0 с 2 знаками после запятой
                result.append(round(random.uniform(-100, 100), 2))

        elif data_type == 'string':
            # Генерируем случайную строку
            length = random.randint(3, 7)  # Длина от 3 до 7 символов
            # random.choices выбирает случайные символы из алфавита
            random_string = ''.join(random.choices(string.ascii_lowercase,
                                                   k=length))
            result.append(random_string)

        elif data_type == 'boolean':
            # Случайное булево значение
            result.append(random.choice([True, False]))
        else:
            return f"Неизвестный тип данных: {data_type}"

    return result


if __name__ == "__main__":
    print("=== Генератор тестовых данных ===\n")

    # Генерация чисел
    print("5 случайных чисел:")
    numbers = generate_test_data('number', 5)
    print(numbers)

    # Генерация строк
    print("\n5 случайных строк:")
    strings = generate_test_data('string', 5)
    print(strings)

    # Генерация булевых значений
    print("\n10 случайных булевых значений:")
    booleans = generate_test_data('boolean', 10)
    print(booleans)

    # Тест с ошибкой
    print("\nТест с неизвестным типом:")
    error_result = generate_test_data('unknown', 3)
    print(error_result)

    # Демонстрация для разных количеств
    print("\nРазные количества элементов:")
    for count in [1, 3, 5]:
        data = generate_test_data('number', count)
        print(f"{count} элементов: {data}")
