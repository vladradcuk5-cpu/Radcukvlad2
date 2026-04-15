<?php
// 1. Дві змінні і пошук макс/мін
$a = 14;
$b = 9;

if ($a > $b) {
    $max = $a;
    $min = $b;
} else {
    $max = $b;
    $min = $a;
}

echo "Максимум: $max<br>";
echo "Мінімум: $min<br>";


// 2. Масив чисел і середнє арифметичне
$numbers = [10, 20, 30, 40, 50];
$sum = 0;

// рахуємо суму
foreach ($numbers as $num) {
    $sum += $num;
}

// середнє
$average = $sum / count($numbers);

echo "Середнє арифметичне: $average<br>";


// 3. Асоціативний масив студентів
$students = [
    "Іван Петренко" => 85,
    "Марія Іваненко" => 78,
    "Олег Сидоренко" => 92
];

// виводимо тих, у кого більше 80
foreach ($students as $name => $grade) {
    if ($grade > 80) {
        echo "$name має бал: $grade<br>";
    }
}


// 4. Перевірка кратності
$num = 12;

if ($num % 3 == 0 || $num % 5 == 0) {
    echo "$num кратне 3 або 5<br>";
} else {
    echo "$num не кратне 3 і 5<br>";
}


// 5. Таблиця множення для 7
for ($i = 1; $i <= 10; $i++) {
    echo "7 x $i = " . (7 * $i) . "<br>";
}
?>