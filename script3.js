let a = 8;
let b = 3;
let c = 10;

let max = a;
let min = a;

if (b > max) max = b;
if (c > max) max = c;

if (b < min) min = b;
if (c < min) min = c;

console.log(max);
console.log(min);

let even = a % 2 === 0 || b % 2 === 0 || c % 2 === 0;
console.log(even);

let condition = a > b && b < c;
console.log(condition);

let n = 7;
let prime = true;

if (n <= 1) {
prime = false;
}

for (let i = 2; i < n; i++) {
if (n % i === 0) {
prime = false;
break;
}
}

console.log(prime);