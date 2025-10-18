password = input("Введите пароль: ")

has_length = len(password) >= 8
has_digit = any(char.isdigit() for char in password)
has_upper = any(char.isupper() for char in password)

# https://docs-python.ru/tutorial/vstroennye-funktsii-interpretatora-python/funktsija-len/
# https://docs-python.ru/tutorial/operatsii-tekstovymi-strokami-str-python/metod-str-isdigit/
# https://docs-python.ru/tutorial/operatsii-tekstovymi-strokami-str-python/metod-str-isupper/

if not has_length:
    print("Ошибка: пароль должен содержать не менее 8 символов")
elif not has_digit:
    print("Ошибка: пароль должен содержать хотя бы одну цифру")
elif not has_upper:
    print("Ошибка: пароль должен содержать хотя бы одну заглавную букву")
else:
    print("Пароль надежный!")
