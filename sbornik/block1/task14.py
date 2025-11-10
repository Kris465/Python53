from math import sin, cos, radians, sqrt

x = int(input("Введите число x: "))
a = int(input("Введите число a: "))
n = int(input("Введите число n: "))
y = int(input("Введите число y: "))
b = int(input("Введите число b: "))


print(f"2 * x = {2 * x}")
print(f"sin(x) = {sin(radians(x))}")
print(f"a * a = {a * a}")
print(f"sqrt(x) = {sqrt(x)}")
print(f"abs(n) = {abs(n)}")
print(f"cos(y) = {cos(radians(y))}")
print(f"-7.5 * a * a = {-7.5 * a * a}")
print(f"3 * sqrt(x) = {3 * sqrt(x)}")
print(f"cos(b) * sin(a) + sin(b) * cos(a) = {cos(radians(b))}")
print(f"a * sqrt(2b) = {sqrt(b)}")
print(f"3 * sin(2 * a) * cos(3 * b) = {3 * sin(radians(2 * a)) * cos(radians(3 * b))}")
print(f"-5 * sqrt(x) * sqrt(y) = {sqrt(x) * y}")
