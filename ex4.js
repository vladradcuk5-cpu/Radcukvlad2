const students = {
  Іван: { history: 10, biology: 9, geography: 11 },
  Олена: { history: 12, biology: 11, geography: 10 },
  Петро: { history: 7, biology: 8, geography: 6 }
};

const averages = Object.entries(students).map(([name, grades]) => {
  const vals = Object.values(grades);
  const avg = vals.reduce((a, b) => a + b, 0) / vals.length;
  return { name, avg };
});

averages.forEach(s => console.log(s.name + ": " + s.avg));