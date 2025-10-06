zena = int(input("Введите цену: "))
skidka = int(input("Введите процент скидки: "))

novaya_zena = zena * (1 - skidka / 100)
print(f"Цена после скидки: {novaya_zena}")

samaya_novaya_zena = novaya_zena - 10
print(f"Цена после купона {samaya_novaya_zena}")
