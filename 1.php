<?php
// 1. Створюємо змінні
$name = "Влад";        // ім'я
$age = 22;             // вік
$is_student = true;    // чи студент

// Виводимо речення
echo "Мене звати $name, мені $age років. ";
if ($is_student) {
    echo "Я студент.<br>";
} else {
    echo "Я не студент.<br>";
}


// 2. Масив чисел від 1 до 5
$numbers = [1, 2, 3, 4, 5];  // створення масиву
$sum = 0;                    // змінна для суми

// рахуємо суму
foreach ($numbers as $num) {
    $sum += $num;
}

echo "Сума чисел: $sum <br>";


// 3. Асоціативний масив
$user = [
    "name" => "Влад",
    "email" => "Vlad@email.com",
    "phone" => "+380183457426"
];

// Виводимо у вигляді списку
echo "<ul>";
foreach ($user as $key => $value) {
    echo "<li>$key: $value</li>";
}
echo "</ul>";


// 4. Перевірка віку
if ($age > 18) {
    echo "Вам більше 18 років.<br>";
} else {
    echo "Вам менше або рівно 18 років.<br>";
}


// 5. Оцінка
$grade = 75;  // оцінка

if ($grade >= 90) {
    echo "Відмінно";
} elseif ($grade >= 70) {
    echo "Добре";
} elseif ($grade >= 50) {
    echo "Задовільно";
} else {
    echo "Незадовільно";
}
?>