<?php
// 1. Змінні і обчислення
$a = 8;
$b = 4;

echo "Сума: " . ($a + $b) . "<br>";
echo "Різниця: " . ($a - $b) . "<br>";
echo "Добуток: " . ($a * $b) . "<br>";
echo "Ділення: " . ($a / $b) . "<br>";


// 2. Масив днів тижня
$days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// виводимо 3-й і 5-й день
echo "3-й день: " . $days[2] . "<br>";
echo "5-й день: " . $days[4] . "<br>";


// 3. Асоціативний масив товарів
$products = [
    "Хліб" => 30,
    "Молоко" => 45,
    "Сир" => 110
];

// вивід товарів і цін
foreach ($products as $name => $price) {
    echo "Товар: $name, ціна: $price грн<br>";
}


// 4. switch для дня тижня
$day = "Friday";

switch ($day) {
    case "Monday":
        echo "Початок тижня<br>";
        break;
    case "Friday":
        echo "Скоро вихідні<br>";
        break;
    case "Saturday":
    case "Sunday":
        echo "Вихідний<br>";
        break;
    default:
        echo "Звичайний день<br>";
}


// 5. Перевірка парності
$x = 22;

if ($x % 2 == 0) {
    echo "$x - парне число";
} else {
    echo "$x - непарне число";
}
?>