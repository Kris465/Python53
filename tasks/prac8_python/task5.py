def analyze_text(text):
    """
    Анализирует текст и возвращает статистику

    Args:
        text: строка для анализа

    Returns:
        Словарь со статистикой текста
    """
    # Убираем лишние пробелы в начале и конце
    text = text.strip()

    # Разбиваем текст на предложения по точкам
    # filter(None, ...) убирает пустые строки из результата
    sentences = [s.strip() for s in text.split('.') if s.strip()]

    # Разбиваем текст на слова по пробелам
    words = text.split()

    # Находим самую длинную и короткую фразу
    # max() и min() с key=len
    # находят элементы с максимальной/минимальной длиной
    longest_sentence = max(sentences, key=len) if sentences else ""
    shortest_sentence = min(sentences, key=len) if sentences else ""

    # Возвращаем словарь со всей статистикой
    return {
        'symbols': len(text),           # Общее количество символов
        'words': len(words),            # Количество слов
        'sentences': len(sentences),    # Количество предложений
        'longest': longest_sentence,    # Самое длинное предложение
        'shortest': shortest_sentence   # Самое короткое предложение
    }


if __name__ == "__main__":
    print("=== Анализатор текста ===\n")

    test_text = "Привет! Как дела? Все хорошо. \
        Это тестовый текст для проверки работы анализатора."

    print("Анализируемый текст:")
    print(test_text)
    print()

    stats = analyze_text(test_text)

    print("Результаты анализа:")
    print(f"Символов: {stats['symbols']}")
    print(f"Слов: {stats['words']}")
    print(f"Предложений: {stats['sentences']}")
    print(f"Самое длинное предложение: '{stats['longest']}'")
    print(f"Самое короткое предложение: '{stats['shortest']}'")

    # Дополнительный тест с пустым текстом
    print("\nТест с пустым текстом:")
    empty_stats = analyze_text("")
    print(empty_stats)
