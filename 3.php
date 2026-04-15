<?php
// 1. Вартість 3 товарів
$item1 = 120;
$item2 = 250;
$item3 = 180;

// загальна сума
$total = $item1 + $item2 + $item3;

echo "Загальна вартість: $total грн<br>";


// 2. Масив улюблених фільмів
$movies = ["Titanic", "Avatar", "Inception", "Matrix", "Interstellar"];

// вивід через foreach
foreach ($movies as $movie) {
    echo "Фільм: $movie<br>";
}


// 3. Асоціативний масив користувача
$user = [
    "login" => "admin",
    "password" => "1234",
    "email" => "admin@gmail.com"
];

// вивід значень
foreach ($user as $key => $value) {
    echo "$key: $value<br>";
}


// 4. Знижка якщо більше 500 грн
if ($total > 500) {
    $discount = $total * 0.1; // 10% знижка
    $final_price = $total - $discount;
    echo "З урахуванням знижки: $final_price грн<br>";
} else {
    echo "Знижка не надається<br>";
}


// 5. Перевірка логіну і паролю
$input_login = "admin";
$input_password = "1234";

if ($input_login == $user["login"] && $input_password == $user["password"]) {
    echo "Вхід успішний";
} else {
    echo "Невірний логін або пароль";
}
?>