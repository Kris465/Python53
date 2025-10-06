minut = int(input("Введите количество минут: "))

chasov = minut // 60
ostalos_minut = minut % 60
print(f"{minut} минут = {chasov} часов {ostalos_minut} минут")
