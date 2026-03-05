number = int(input("Введите четырехзначное число: "))

num1 = number // 1000
num2 = (number // 100) % 10
num3 = (number // 10) % 10
num4 = number % 10
print(num1 + num2 + num3 + num4)
print(num1 * num2 * num3 * num4)