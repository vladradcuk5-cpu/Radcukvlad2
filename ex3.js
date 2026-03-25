const products = [
  { name: "Ноутбук", category: "Техніка" },
  { name: "Телефон", category: "Техніка" },
  { name: "Хліб", category: "Продукти" },
  { name: "Молоко", category: "Продукти" }
];

const grouped = products.reduce((acc, item) => {
  if (!acc[item.category]) acc[item.category] = [];
  acc[item.category].push(item.name);
  return acc;
}, {});

console.log(grouped);