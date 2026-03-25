const users = [
  { name: "Влад", age: 17 },
  { name: "Рома", age: 22 },
  { name: "Саша", age: 19 },
  { name: "Марія", age: 15 }
];

const adults = users.filter(u => u.age > 18);
const names = users.map(u => u.name);
const avgAge = users.reduce((a, u) => a + u.age, 0) / users.length;

console.log(adults);
console.log(names);
console.log(avgAge);