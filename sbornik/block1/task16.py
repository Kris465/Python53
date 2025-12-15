from math import sin, cos, radians, sqrt

a = int(input('Введите a'))
b = int(input('Введите b'))
c = int(input('Введите c'))
x = int(input('Введите x'))
s = int(input('Введите s'))
R = int(input('Введите R'))
d = int(input('Введите d'))

result1 = a / b / c
result2 = a * b / c
result3 = a / b * c
result4 = a + b / c 
result5 = a + b / c
result6 = a + b / b + c
result7 = a + b / b + c
result8 = a / sin(radians(b)) 
result9 = 1 / 2 * a * b * sin(radians(x)) 
result10 = 2 * b * c * cos(radians(a)) / 2 / b + c
result11 = 4 * R * sin(radians(a)) / 2 * sin(radians(b)) / 2 * sin(radians(c / 2))
result12 = a * x + b / c * x + d
result13 = 2 * sin(radians(a)) + b / 2 * cos(radians(a)) - b / 2
result14 = abs(radians(2)) * sin(radians(-3)) * abs(radians(x)) / 2

print(f"a / b / c = {result1}")
print(f" a * b / c = {result2}")
print(f"a / b * c = {result3}")
print(f"a + b / c = {result4}")
print(f"a + b  / c = {result5}")
print(f"a + b / b + c = {result6}")
print(f"a + b  / b + c = {result7}")
print(f"a / sin b  = {result8}")
print(f"1 / 2 * a * b * sin x = {result9}")
print(f"2 * b * c * cos  a / 2  / b + c  = {result10}")
print(f"  4 * R * sin a / 2 * sin b / 2 * sin c / 2 = {result11}")
print(f"a * x + b / cx + d = {result12}")
print(f"  2 * sin   a + b  / 2 *  cos a - b  / 2 = {result13}")
print(f" abs 2  * sin -3 * abs x / 2  = {result14}")
