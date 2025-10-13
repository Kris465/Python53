number = int(input("Введите число: "))

if number > 0:
    sign = "Положительное"
elif number < 0:
    sign = "Отрицательное"
else:
    sign = "Ноль"

if number % 2 == 0:
    chet_nechet = "Четное"
else:
    chet_nechet = "Нечетное"

if number == 0:
    print(f"{sign}")
else:
    print(f"{sign}, {chet_nechet}")
