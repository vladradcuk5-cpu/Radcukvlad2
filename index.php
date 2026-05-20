<?php

session_start();

$login = "admin";
$password = "php123";

if (isset($_POST["logout"])) {
    session_destroy();
    header("Location: index.php");
    exit();
}

if (isset($_POST["username"]) && isset($_POST["password"])) {

    if ($_POST["username"] == $login && $_POST["password"] == $password) {

        $_SESSION["user"] = $_POST["username"];

    } else {

        $error = "Неправильний логін або пароль";

    }
}

$ip = $_SERVER["REMOTE_ADDR"];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PHP Login</title>
</head>
<body>

<?php if (isset($_SESSION["user"])) { ?>

    <h2>Вітаю, <?php echo $_SESSION["user"]; ?>!</h2>

    <form method="post">
        <button type="submit" name="logout">Вийти</button>
    </form>

<?php } else { ?>

    <h2>Авторизація</h2>

    <form method="post">

        <input type="text" name="username" placeholder="Логін">

        <br><br>

        <input type="password" name="password" placeholder="Пароль">

        <br><br>

        <button type="submit">Увійти</button>

    </form>

    <?php
    if (isset($error)) {
        echo "<p>$error</p>";
    }
    ?>

<?php } ?>

<h3>IP користувача:</h3>
<p><?php echo $ip; ?></p>

</body>
</html>
//https://vladislav.free.nf/index.php
