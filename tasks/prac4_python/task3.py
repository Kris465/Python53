month = int(input("Введите номер месяца: "))

if month == 12 or month == 1 or month == 2:
    season = "Зима"
elif 3 <= month <= 5:  # 3 <= month and month <= 5
    season = "Весна"
elif 6 <= month <= 8:
    season = "Лето"
elif 9 <= month <= 11:
    season = "Осень"
else:
    season = "Такого месяца нет!"

print(season)
