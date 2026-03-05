number = int(input("Введите четырехзначное число: "))

num1 = number // 1000
num2 = (number // 100) % 10
num3 = (number // 10) % 10
num4 = number % 10

print(f"a) {num4}{num3}{num2}{num1}")
print(f"б) {num2}{num1}{num4}{num3}")
print(f"в) {num1}{num3}{num2}{num4}")
print(f"г) {num4}{num3}{num1}{num2}")