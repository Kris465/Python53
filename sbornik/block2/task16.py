number = int(input("Ведите трёхзначное число: "))

num1 = number // 100
print(num1)
num2 = (number // 10) % 10
print(num2)
num3 = number % 10
print(num3)
print(num2, num1, num3)
