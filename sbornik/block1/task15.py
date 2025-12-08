

x = int(input("Введите х: "))
a = int(input("Введите a: "))
b = int(input("Введите b: "))
c = int(input("Введите c: "))
n = int(input("Введите n: "))
m = int(input("Введите m: "))

result1 = -1 / pow(2, x)
result2 = a / (b * c)
result3 = (a / b) * c
result4 = (a + b) / 2
result5 = 5.45 * (a + 2 * b) / (2 - a)
result6 = (-b + (b * b) - 4 * a * c) ** 0.5 / (2 * a)
result7 = (-b + (1 / a)) / (2 / c)
result8 = 1 / (1 + (a + b) / 2)
result9 = 1 / (1 + 1 / (2 + 1 / (2 + 3 / 5)))
result10 = pow(pow(n, m), 2)

print(f"-1 / pow(2, x) = {result1}")
print(f"a / (b * c) = {result2}")
print(f"(a / b) * c = {result3}")
print(f"(a + b) / 2 = {result4}")
print(f"5.45 * (a + 2 * b) / (2 - a) = {result5}")
print(f"(-b + (b * b) - 4 * a * c) ** 0.5 / (2 * a) = {result6}")
print(f"(-b + (1 / a)) / (2 / c) = {result7}")
print(f"1 / (1 + (a + b) / 2) = {result8}")
print(f"1 / (1 + 1 / (2 + 1 / (2 + 3 / 5))) = {result9}")
print(f"pow(pow(n, m), 2) = {result10}")
