let x = 12;
let y = 7;
let z = 5;

let avg = (x + y + z) / 3;
console.log(avg);

let mod = Math.abs(x);
console.log(mod);

let up = Math.ceil(y);
console.log(up);

let down = Math.floor(z);
console.log(down);

let pow = Math.pow(x, 2);
console.log(pow);

console.log(mod % 5 === 0 || mod % 7 === 0);
console.log(up % 5 === 0 || up % 7 === 0);
console.log(down % 5 === 0 || down % 7 === 0);
console.log(pow % 5 === 0 || pow % 7 === 0);

let triangle = x + y > z && x + z > y && y + z > x;
console.log(triangle);