mark = int(input("Введите балл: "))
if mark < 100 and mark > 0:
    if mark >= 90:
        grade = "A"
    elif mark >= 80:
        grade = "B"
    elif mark >= 70:
        grade = "C"
    elif mark >= 60:
        grade = "D"
    else:
        grade = "F"
else:
    print("Вы ошиблись!")

print(f"Оценка: {grade}")
