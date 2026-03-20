let target = Math.floor(Math.random() * 100) + 1;
let guess;

do {
    guess = Number(prompt("Вгадайте число від 1 до 100"));

    if (guess < target) {
        alert("Загадане число більше");
    } else if (guess > target) {
        alert("Загадане число менше");
    } else {
        alert("Ви вгадали");
    }

} while (guess !== target);