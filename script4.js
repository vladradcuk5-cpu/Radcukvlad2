let a = Number(prompt("Введіть перше число"));
let b = Number(prompt("Введіть друге число"));
let op = prompt("Введіть операцію (+, -, *, /)");

let result;

switch(op) {
    case "+":
        result = a + b;
        break;
    case "-":
        result = a - b;
        break;
    case "*":
        result = a * b;
        break;
    case "/":
        result = b !== 0 ? a / b : "Помилка";
        break;
    default:
        result = "Невідома операція";
}

alert(result);