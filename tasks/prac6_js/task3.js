function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function countdown() {
    for (let i = 10; i > 0; i--) {
        console.log(i);
        await sleep(1000);
    }
    console.log("Старт!");
}

countdown();

// https://learn.javascript.ru/function-basics
// https://learn.javascript.ru/promise-basics
// https://learn.javascript.ru/settimeout-setinterval