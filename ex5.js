const people = ["Влад", "Рома", "Саша", "Марія"];

const result = people.reduce((acc, name) => {
  acc[name] = name.length;
  return acc;
}, {});

console.log(result);