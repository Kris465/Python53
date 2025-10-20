def generate_sequense(seq_type, first, difference, count):
    sequense = [first]
    if seq_type == 'арифметическая':
        for i in range(1, count):
            next_element = first + i * difference
            sequense.append(next_element)
    
    elif seq_type == 'геометрическая':
        for i in range(1, count):
            next_element = first * (difference ** i)
            sequense.append(next_element)
    else:
        return "Неизвестный тип последовательности"
    return sequense 
if __name__ == "__main__":
    print("=== Генератор прогрессий ===\n")
    print("Арифметическая прогрессия (2, 3, 5):")
    print(arithmetic)
    print("\nГеометрическая прогрессия (2, 3, 5):")
    geometric = generate_sequense('геометрическая', 2, 3, 5)
    print(geometric)
    print("\nПроверка на ошибку:")
    error_test = generate_sequense('неправильная', 1, 1, 5)
    print(error_test)