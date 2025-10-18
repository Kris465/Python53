import random

secret_number = random.randint(1, 100)
attempts = 0

print("Загадано число от 1 до 100. Попробуйте угадать!")

while True:
    guess = int(input("Ваша попытка: "))
    attempts += 1

    if guess < secret_number:
        print("Больше!")
    elif guess > secret_number:
        print("Меньше!")
    else:
        print(f"Поздравляем! Вы угадали число {secret_number} за {attempts} попыток.")
        break
