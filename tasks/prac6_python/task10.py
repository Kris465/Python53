text = input("Введите строку: ")

char_count = len(text)
word_count = len(text.split())
vowels = "aeiouаеёиоуыэюя"
vowel_count = 0

for char in text.lower():
    if char in vowels:
        vowel_count += 1

print(f"Символов: {char_count}")
print(f"Слов: {word_count}")
print(f"Гласных: {vowel_count}")

# https://docs-python.ru/tutorial/operatsii-tekstovymi-strokami-str-python/metod-str-split/
