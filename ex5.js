const people = ["Іван", "Олена", "Петро", "Марія"];

const result = people.reduce((acc, name) => {
  acc[name] = name.length;
  return acc;
}, {});

console.log(result);