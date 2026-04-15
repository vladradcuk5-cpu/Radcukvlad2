<?php
// 1. Дані про людину
$first_name = "Влад";
$last_name = "Радчук";
$year_of_birth = 2004;

// поточний рік
$current_year = date("Y");

// обчислюємо вік
$age = $current_year - $year_of_birth;

// вивід
echo "ПІБ: $first_name $last_name<br>";
echo "Вік: $age років<br>";


// 2. Масив країн
$countries = ["Україна", "Польща", "Німеччина", "Франція"];

// нумерований список
echo "<ol>";
foreach ($countries as $country) {
    echo "<li>$country</li>";
}
echo "</ol>";


// 3. Міста і населення
$cities = [
    "Київ" => 3000000,
    "Львів" => 720000,
    "Одеса" => 1010000
];

// вивід міст з населенням більше 1 млн
foreach ($cities as $city => $population) {
    if ($population > 1000000) {
        echo "$city - $population<br>";
    }
}


// 4. Перевірка парності
$number = 8;

if ($number % 2 == 0) {
    echo "Парне число<br>";
} else {
    echo "Непарне число<br>";
}


// 5. Перевірка високосного року
$year = date("Y");

if ($year % 4 == 0) {
    echo "$year - високосний рік";
} else {
    echo "$year - не високосний рік";
}
?>