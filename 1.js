function getRandomNumber() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * 100) + 1);
        }, 1000);
    });
}

async function processNumber() {
    try {
        const number = await getRandomNumber();
        if (number < 50) {
            return Promise.resolve(number + 20);
        } else {
            return Promise.reject("Занадто велике число!");
        }
    } catch (error) {
        return "Оброблено помилку";
    }
}

processNumber().then(result => {
    console.log(result);
});