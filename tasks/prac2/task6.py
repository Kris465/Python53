symbol = input("Введите букву: ")

original = ord(symbol)
new_code = (original - ord('a') + 3) % 26 + ord('a')
new_symbol = chr(new_code)
print(f"{symbol} -> {new_symbol}")
