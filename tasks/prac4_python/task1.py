age = int(input("Введите возраст: "))

if age < 18:
    print("Ребенок")
elif age <= 65:
    print("Взрослый")
else:
    print("Пенсионер")
