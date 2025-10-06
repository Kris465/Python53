from math import pi


dlina = int(input("Введите длину прямоугольника: "))
shirina = int(input("Введите ширину прямоугольника: "))

result = dlina * shirina

rad = int(input("Введите радиус: "))

result = pi * rad ** 2
print(round(result, 2))
