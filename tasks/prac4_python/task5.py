num1 = float(input("Введите первое число: "))
num2 = float(input("Введите второе число: "))
operation = input("Введите операцию (+, -, *, /): ")

if operation == "+":
    result = num1 + num2
    print(f"Результат: {result}")
elif operation == "-":
    result = num1 - num2
    print(f"Результат: {result}")
elif operation == "*":
    result = num1 * num2
    print(f"Результат: {result}")
elif operation == "/":
    if num2 != 0:
        result = num1 / num2
        print(f"Результат: {result}")
    else:
        print("Ошибка: деление на ноль!")
else:
    print("Неизвестная операция")
