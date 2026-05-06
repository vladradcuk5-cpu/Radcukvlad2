<?php
session_start();

if (!isset($_SESSION['name']) || !isset($_SESSION['email'])) {
    header("Location: register.php");
    exit();
}

$name = $_SESSION['name'];
$email = $_SESSION['email'];
?>

<!DOCTYPE html>
<html>
<head>
    <title>Профіль</title>
</head>
<body>
    <h2>Профіль користувача</h2>

    <p>Ім'я: <?php echo $name; ?></p>
    <p>Email: <?php echo $email; ?></p>

    <?php
    if (isset($_COOKIE['user_email'])) {
        echo "<p>Ваш email запам'ятали: " . $_COOKIE['user_email'] . "</p>";
    }
    ?>

    <br>
    <a href="logout.php">Вийти</a>
</body>
</html>