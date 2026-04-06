function fetchData(id) {
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 2000) + 1000;
        setTimeout(() => {
            resolve(`Data for ID: ${id} (after ${delay}ms)`);
        }, delay);
    });
}

async function processData() {
    console.log("=== Паралельне виконання ===");
    const parallelResults = await Promise.all([fetchData(1), fetchData(2), fetchData(3)]);
    console.log("Результати паралельного виконання:", parallelResults);

    console.log("=== Послідовне виконання ===");
    const sequentialIds = [4, 5, 6];
    for await (const id of sequentialIds.map(fetchData)) {
        console.log("Результат послідовного виконання:", id);
    }
}

processData();