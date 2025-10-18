number = int(input("Введите число: "))

for i in range(1, 11):
    if i == 5:
        continue
    result = number * i
    print(f"{number} × {i} = {result}")

# https://pythonworld.ru/osnovy/cikly-for-i-while-operatory-break-i-continue-volshebnoe-slovo-else.html
