num1 = int(input("Введите первое число: "))
num2 = int(input("Введите второе число: "))

chetnoe = num1 % 2 == 0
polozitelnoe = num2 > 0

print(f"Первое число четное: {chetnoe}")
print(f"Второе число положительное: {polozitelnoe}")
