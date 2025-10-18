start = int(input("Введите начало диапазона: "))
end = int(input("Введите конец диапазона: "))

total = 0
for i in range(start, end + 1):
    total += i

print(f"Сумма чисел от {start} до {end}: {total}")
