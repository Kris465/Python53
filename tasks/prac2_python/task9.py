number = float(input("Введите число с плавающей точкой: "))

rounded_number = round(number)

result = number + rounded_number
print(f"Исходное число: {number}")
print(f"Округленное число: {rounded_number}")
print(f"Сумма: {result}")
