temp = float(input("Введите температуру: "))
scale = input("Введите шкалу (C/F): ").upper()

if scale == "C":
    fahrenheit = temp * 9/5 + 32
    print(f"{temp}°C = {fahrenheit:.1f}°F")
elif scale == "F":
    celsius = (temp - 32) * 5/9
    print(f"{temp}°F = {celsius:.1f}°C")
else:
    print("Неверная шкала. Используйте C или F")

# https://pythonworld.ru/osnovy/formatirovanie-strok-operator.html
