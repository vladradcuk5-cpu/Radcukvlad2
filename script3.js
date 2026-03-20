let n = +prompt("n:");
let f = 1;
let i = 1;

while (i <= n) {
  f *= i;
  i++;
}

console.log(f);