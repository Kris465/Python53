def filter_products(products, min_price=None, max_price=None, category=None):
    """
    Фильтрует товары по заданным критериям

    Args:
        products: список товаров (каждый товар - словарь)
        min_price: минимальная цена (None если не задана)
        max_price: максимальная цена (None если не задана)
        category: категория товара (None если не задана)

    Returns:
        Отфильтрованный список товаров
    """
    # Создаем копию списка, чтобы не изменять оригинал
    filtered = products.copy()

    # Фильтруем по минимальной цене, если она задана
    # None проверяет, был ли передан параметр
    if min_price is not None:
        # list comprehension с условием
        filtered = [p for p in filtered if p['price'] >= min_price]

    # Фильтруем по максимальной цене, если она задана
    if max_price is not None:
        filtered = [p for p in filtered if p['price'] <= max_price]

    # Фильтруем по категории, если она задана
    if category:
        filtered = [p for p in filtered if p['category'] == category]

    return filtered


if __name__ == "__main__":
    print("=== Фильтр товаров ===\n")

    # Тестовые данные - список товаров
    products = [
        {'name': 'Ноутбук', 'price': 50000, 'category': 'electronics'},
        {'name': 'Мышь', 'price': 1500, 'category': 'electronics'},
        {'name': 'Книга', 'price': 500, 'category': 'books'},
        {'name': 'Кофе', 'price': 300, 'category': 'food'},
        {'name': 'Телефон', 'price': 30000, 'category': 'electronics'},
        {'name': 'Ручка', 'price': 50, 'category': 'office'}
    ]

    print("Все товары:")
    for product in products:
        print(f"{product['name']} - {product['price']} руб. - {product['category']}")

    # Фильтр 1: Только электроника
    print("\n1. Только электроника:")
    electronics = filter_products(products, category='electronics')
    for product in electronics:
        print(f"  {product['name']} - {product['price']} руб.")

    # Фильтр 2: Товары от 1000 до 40000 рублей
    print("\n2. Цена от 1000 до 40000:")
    price_filtered = filter_products(products, min_price=1000, max_price=40000)
    for product in price_filtered:
        print(f"{product['name']} - {product['price']} руб. - {product['category']}")

    # Фильтр 3: Электроника дороже 20000
    print("\n3. Электроника дороже 20000:")
    expensive_electronics = filter_products(
        products,
        min_price=20000,
        category='electronics'
    )
    for product in expensive_electronics:
        print(f"  {product['name']} - {product['price']} руб.")
