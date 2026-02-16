number = 324

units = number % 10

tens = (number // 10) % 10

hundreds = number // 100

print(f"а) Число единиц: {units}")

print(f"б) Число десятков: {tens}")

sum_of_digits = units + tens + hundreds

print(f"в) Сумма цифр: {sum_of_digits}")

product_of_digits = units * tens * hundreds
print(f"г) Произведение цифр: {product_of_digits}")
