number = input("Введите число: ")

total = 0
for digit in number:
    total += int(digit)

print(f"Сумма цифр числа {number}: {total}")
