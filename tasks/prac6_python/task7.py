numbers = []

while True:
    num = int(input("Введите число (0 для завершения): "))
    if num == 0:
        break
    numbers.append(num)

if numbers:
    count = len(numbers)
    total = sum(numbers)
    average = total / count
    maximum = max(numbers)
    minimum = min(numbers)

    print(f"Количество чисел: {count}")
    print(f"Сумма: {total}")
    print(f"Среднее: {average:.2f}")
    print(f"Максимум: {maximum}")
    print(f"Минимум: {minimum}")
else:
    print("Числа не были введены.")

# https://pythonworld.ru/tipy-dannyx-v-python/spiski-list-funkcii-i-metody-spiskov.html
