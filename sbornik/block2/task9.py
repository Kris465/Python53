n = int(input("Введите n: "))

x = (n + 1) % 12

if x == 0:
    x = 12

print(f"При n = {n} номер месяца x = {x}")
