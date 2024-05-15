<?php
session_start(); // Inicia una nueva sesión o reanuda la existente

$host = "localhost";
$dbUsername = "id21908626_root";
$dbPassword = "Alexander1$";
$dbName = "id21908626_vuelos";

$conexion = mysqli_connect($host, $dbUsername, $dbPassword, $dbName);

if (mysqli_connect_errno()) {
    die('Conexión fallida: ' . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = mysqli_real_escape_string($conexion, $_POST['username']);
    $password = mysqli_real_escape_string($conexion, $_POST['password']); // Considera usar hashing para las contraseñas

    $query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
    $result = mysqli_query($conexion, $query);

    if (mysqli_num_rows($result) == 1) {
        $_SESSION['loggedin'] = true; // Establece la variable de sesión
        $_SESSION['username'] = $username; // Almacena el nombre de usuario en la sesión
        header("location: ./index.html"); // Redirige a la página de bienvenida
    } else {
        echo "Usuario o contraseña incorrecta.";
    }
}
mysqli_close($conexion);
?>
