<?php
session_start();

$host = "localhost";
$dbUsername = "id21908626_root"; 
$dbPassword = "Evo1404**";
$dbName = "id21908626_vuelos";

$conexion = new mysqli($host, $dbUsername, $dbPassword, $dbName);

if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre_completo = $conexion->real_escape_string($_POST['nombre_completo']);
    $correo = $conexion->real_escape_string($_POST['correo']);
    $username = $conexion->real_escape_string($_POST['username']);
    $password = $conexion->real_escape_string($_POST['password']);
    $confirm_password = $conexion->real_escape_string($_POST['confirm_password']);

    if ($password !== $confirm_password) {
        die('Las contraseñas no coinciden.');
    }

    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    $checkUserQuery = "SELECT * FROM usuarios WHERE correo = '$correo' OR usuario = '$username'";
    $checkResult = $conexion->query($checkUserQuery);

    if ($checkResult->num_rows > 0) {
        die('El correo o usuario ya existe en la base de datos.');
    }

    $query = "INSERT INTO usuarios (nombre_completo, correo, usuario, clave) VALUES ('$nombre_completo', '$correo', '$username', '$hashed_password')";

    if ($conexion->query($query) === true) {
        $_SESSION['loggedin'] = true;
        $_SESSION['username'] = $username;
        header("Location: index.html");
        exit;
    } else {
        echo "Error al registrar el usuario: " . $conexion->error;
    }
}

$conexion->close();
?>
