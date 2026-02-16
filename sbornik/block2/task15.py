number = int(input("Ведите трёхзначное число: "))

decytki_i_sotni = number // 10
edinici = number % 10

print(str(edinici) + str(decytki_i_sotni))
