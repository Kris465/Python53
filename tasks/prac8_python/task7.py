def cipher(text, key):
    """
    Шифрует текст шифром Цезаря

    Args:
        text: текст для шифрования
        key: ключ шифрования (сдвиг)

    Returns:
        Зашифрованный текст
    """
    result = ""

    for char in text:
        if char.isalpha():
            # Определяем базовый код для алфавита
            # ord() возвращает числовой код символа
            if char.isupper():
                base = ord('A')  # Базовый код для заглавных букв
            else:
                base = ord('a')  # Базовый код для строчных букв

            # Сдвигаем символ и обеспечиваем циклический сдвиг с помощью %
            # % 26 гарантирует, что результат останется в пределах алфавита
            shifted = (ord(char) - base + key) % 26
            result += chr(shifted + base)
        else:
            # Не-буквенные символы остаются без изменений
            result += char

    return result


def decipher(text, key):
    """
    Дешифрует текст шифром Цезаря

    Args:
        text: зашифрованный текст
        key: ключ шифрования (сдвиг)

    Returns:
        Расшифрованный текст
    """
    # Дешифровка - это шифрование с отрицательным ключом
    return cipher(text, -key)


if __name__ == "__main__":
    print("=== Шифратор/дешифратор Цезаря ===")

    # Тестовый текст и ключ
    original_text = "Hello World! ABCxyz"
    key = 3

    print(f"Исходный текст: {original_text}")
    print(f"Ключ: {key}")

    # Шифруем
    encrypted = cipher(original_text, key)
    print(f"Зашифрованный:  {encrypted}")

    # Дешифруем
    decrypted = decipher(encrypted, key)
    print(f"Расшифрованный: {decrypted}")

    # Проверяем, что получился исходный текст
    print(f"\nСовпадение с исходным: {original_text == decrypted}")

    # Дополнительный пример с русским текстом
    print("\n=== Русский текст ===")
    russian_text = "Привет Мир"
    russian_encrypted = cipher(russian_text, 3)
    print(f"Исходный: {russian_text}")
    print(f"Зашифрованный: {russian_encrypted}")
    print(f"Расшифрованный: {decipher(russian_encrypted, 3)}")
