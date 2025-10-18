n = int(input("Введите число N: "))

print(f"Простые числа от 2 до {n}:")
for num in range(2, n + 1):
    is_prime = True
    for divisor in range(2, int(num ** 0.5) + 1):
        if num % divisor == 0:
            is_prime = False
            break
    if is_prime:
        print(num, end=" ")
print()

# https://docs-python.ru/tutorial/vstroennye-funktsii-interpretatora-python/funktsija-print/
