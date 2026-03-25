const students = {
  Іван: { math: 80, physics: 75, english: 90 },
  Олена: { math: 95, physics: 85, english: 88 },
  Петро: { math: 60, physics: 70, english: 65 }
};

const averages = Object.entries(students).map(([name, grades]) => {
  const vals = Object.values(grades);
  const avg = vals.reduce((a, b) => a + b, 0) / vals.length;
  return { name, avg };
});

averages.forEach(s => console.log(s.name + ": " + s.avg));