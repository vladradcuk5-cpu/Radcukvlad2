const numbers = [12, 5, 8, 20, 3, 15, 7];

const sum = numbers.reduce((a, b) => a + b, 0);
const average = sum / numbers.length;

const max = Math.max(...numbers);
const min = Math.min(...numbers);

const sorted = [...numbers].sort((a, b) => a - b);

console.log("Середнє:", average);
console.log("Максимум:", max);
console.log("Мінімум:", min);
console.log("Відсортований масив:", sorted);