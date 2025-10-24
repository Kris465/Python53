const prompt = require('prompt-sync')();

function filterProducts(products, minPrice = null, maxPrice = null, category = null) {
    /**
     * Фильтрует товары по заданным критериям
     * @param {Array} products - список товаров (каждый товар - объект)
     * @param {number|null} minPrice - минимальная цена (null если не задана)
     * @param {number|null} maxPrice - максимальная цена (null если не задана)  
     * @param {string|null} category - категория товара (null если не задана)
     * @returns {Array} Отфильтрованный список товаров
     */
    // Создаем копию массива, чтобы не изменять оригинал
    // filter() создает новый массив с элементами, прошедшими проверку
    let filtered = [...products];
    
    // Фильтруем по минимальной цене, если она задана
    // null проверяет, был ли передан параметр
    if (minPrice !== null) {
        filtered = filtered.filter(product => product.price >= minPrice);
    }
    
    // Фильтруем по максимальной цене, если она задана
    if (maxPrice !== null) {
        filtered = filtered.filter(product => product.price <= maxPrice);
    }
    
    // Фильтруем по категории, если она задана
    if (category !== null) {
        filtered = filtered.filter(product => product.category === category);
    }
    
    return filtered;
}

// Демонстрация работы
console.log("=== Фильтр товаров ===\n");

// Тестовые данные - массив товаров
const products = [
    {name: 'Ноутбук', price: 50000, category: 'electronics'},
    {name: 'Мышь', price: 1500, category: 'electronics'},
    {name: 'Книга', price: 500, category: 'books'},
    {name: 'Кофе', price: 300, category: 'food'},
    {name: 'Телефон', price: 30000, category: 'electronics'},
    {name: 'Ручка', price: 50, category: 'office'}
];

console.log("Все товары:");
products.forEach(product => {
    console.log(`  ${product.name} - ${product.price} руб. - ${product.category}`);
});

// Фильтр 1: Только электроника
console.log("\n1. Только электроника:");
const electronics = filterProducts(products, null, null, 'electronics');
electronics.forEach(product => {
    console.log(`  ${product.name} - ${product.price} руб.`);
});

// Фильтр 2: Товары от 1000 до 40000 рублей
console.log("\n2. Цена от 1000 до 40000:");
const priceFiltered = filterProducts(products, 1000, 40000, null);
priceFiltered.forEach(product => {
    console.log(`  ${product.name} - ${product.price} руб. - ${product.category}`);
});

// Фильтр 3: Электроника дороже 20000
console.log("\n3. Электроника дороже 20000:");
const expensiveElectronics = filterProducts(products, 20000, null, 'electronics');
expensiveElectronics.forEach(product => {
    console.log(`  ${product.name} - ${product.price} руб.`);
});

// Интерактивный фильтр
console.log("\n=== Интерактивный фильтр ===");
const userMinPrice = prompt("Введите минимальную цену (или Enter чтобы пропустить): ");
const userMaxPrice = prompt("Введите максимальную цену (или Enter чтобы пропустить): ");
const userCategory = prompt("Введите категорию (или Enter чтобы пропустить): ");

const minPrice = userMinPrice ? parseInt(userMinPrice) : null;
const maxPrice = userMaxPrice ? parseInt(userMaxPrice) : null;
const category = userCategory || null;

const userFiltered = filterProducts(products, minPrice, maxPrice, category);
console.log("\nРезультаты фильтрации:");
userFiltered.forEach(product => {
    console.log(`  ${product.name} - ${product.price} руб. - ${product.category}`);
});