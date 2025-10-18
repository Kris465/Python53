const prompt = require('prompt-sync')();

const purchaseAmount = parseFloat(prompt("Введите сумму покупки: "));
const isRegular = prompt("Вы постоянный клиент? (да/нет): ").toLowerCase();

let discount = 0;

// Базовая скидка
if (purchaseAmount >= 10000) {
    discount = 15;
} else if (purchaseAmount >= 5000) {
    discount = 10;
} else if (purchaseAmount >= 1000) {
    discount = 5;
}

// Дополнительная скидка для постоянных клиентов
if (isRegular === "да") {
    discount += 3;
}

// Расчет итоговой суммы
if (discount > 0) {
    const finalAmount = purchaseAmount * (1 - discount / 100);
    console.log(`Скидка: ${discount}%`);
    console.log(`Итоговая сумма: ${finalAmount.toFixed(2)}`);
} else {
    console.log("Скидка не предоставляется");
    console.log(`Итоговая сумма: ${purchaseAmount.toFixed(2)}`);
}