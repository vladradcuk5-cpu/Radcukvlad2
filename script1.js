let a = 10;
console.log(a, typeof a);

a = 25;
console.log(a, typeof a);

let b = 3.14;
console.log(b, typeof b);

b = 7.5;
console.log(b, typeof b);

let c = "Hello";
console.log(c, typeof c);

c = "World";
console.log(c, typeof c);

let d = true;
console.log(d, typeof d);

d = false;
console.log(d, typeof d);

let e = a + c;
console.log(e, typeof e);

let f = Number(d);
console.log(f, typeof f);

let g = String(a);
console.log(g, typeof g);

let h = Boolean(1);
console.log(h, typeof h);

let obj = {
name: "Vlad",
age: 17,
height: 1.85,
student: true
};

console.log(JSON.stringify(obj));