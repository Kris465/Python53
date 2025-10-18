purchase_amount = float(input("Введите сумму покупки: "))
is_regular = input("Вы постоянный клиент? (да/нет): ").lower()

# Базовая скидка
if purchase_amount >= 10000:
    discount = 15
elif purchase_amount >= 5000:
    discount = 10
elif purchase_amount >= 1000:
    discount = 5
else:
    discount = 0

# Дополнительная скидка для постоянных клиентов
if is_regular == "да":
    discount += 3

# Расчет итоговой суммы
if discount > 0:
    final_amount = purchase_amount * (1 - discount / 100)
    print(f"Скидка: {discount}%")
    print(f"Итоговая сумма: {final_amount:.2f}")
else:
    print("Скидка не предоставляется")
    print(f"Итоговая сумма: {purchase_amount:.2f}")
