def validate_user(name, age, email):
    errors = []
    if not name or name.strip() == "":
        errors.append("Имя не может быть пустым")
    if not (0 <= age <= 120):
        errors.append("Возраст должен быть от 0 до 120")
    if "@" not in email:
        errors.append("Email должен содержать @")
    return {
        "is_valid": len(errors) == 0,
        "errors": errors
                }


if __name__ == "__main__":
    print("=== Валидатор данных пользователя ===/n")
    print("тест 1 (неправильные данные):")
    result1 = validate_user("", 150, "invalid")
    print(f"is_valid: {result1["is_valid"]}")
    print("ошибки: ", result1["errors"])
    print("\nТест2 (правильные данные")
    result2 = validate_user("Иван", 25, "test@mail.com")
    print(f"is_valid: {result2["is_valid"]}")
    print("Ошибки: ", result2["errors"])
    print("\nТест3 (частично правильные):")
    result3 = validate_user(" ", 25, "test@mail.com")
    print(f"is_valid: {result3["is_valid"]}")
    print("Ошибки: ", result3["errors"])
