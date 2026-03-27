let time = 0;
let interval = null;

let input = document.getElementById("timeInput");
let timer = document.getElementById("timer");
let message = document.getElementById("message");

document.getElementById("start").onclick = function () {
    if (time === 0) {
        time = Number(input.value);
    }

    if (time <= 0) {
        alert("Введи час");
        return;
    }

    if (interval) return;

    interval = setInterval(function () {
        time--;
        timer.innerText = time;

        if (time <= 0) {
            clearInterval(interval);
            interval = null;
            message.innerText = "Час вийшов";
        }
    }, 1000);
};

document.getElementById("pause").onclick = function () {
    clearInterval(interval);
    interval = null;
};

document.getElementById("plus").onclick = function () {
    time += 10;
    timer.innerText = time;
};

document.getElementById("minus").onclick = function () {
    if (time > 10) {
        time -= 10;
    } else {
        time = 0;
    }
    timer.innerText = time;
};

input.oninput = function () {
    timer.innerText = input.value;
    time = Number(input.value);
};