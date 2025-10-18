a = int(input("Введите сторону A: "))
b = int(input("Введите сторону B: "))
c = int(input("Введите сторону C: "))

if a + b <= c or a + c <= b or b + c <= a:
    triangle_type = "не треугольник"
elif a == b == c:
    triangle_type = "Равносторонний треугольник"
elif a == b or a == c or b == c:
    triangle_type = "Равнобедренный треугольник"
else:
    triangle_type = "Разносторонний треугольник"

print(triangle_type)
