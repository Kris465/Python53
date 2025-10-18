k = int(input("Введите количество чисел K: "))

if k <= 0:
    print("Количество должно быть положительным")
else:
    fib = [0, 1]

    if k == 1:
        print(0)
    else:
        for i in range(2, k):
            next_fib = fib[i-1] + fib[i-2]
            fib.append(next_fib)

        print("Последовательность Фибоначчи:", ", ".join(map(str, fib[:k])))

# https://docs-python.ru/tutorial/vstroennye-funktsii-interpretatora-python/funktsija-map/
# https://docs-python.ru/tutorial/operatsii-tekstovymi-strokami-str-python/metod-str-join/
