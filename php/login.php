<?php
session_start(); // Inicia una nueva sesión o reanuda la existente

$host = "localhost";
$dbUsername = "id21908626_root";
$dbPassword = "Evo1404**";
$dbName = "id21908626_vuelos";

$conexion = mysqli_connect($host, $dbUsername, $dbPassword, $dbName);

if (mysqli_connect_errno()) {
    die('Conexión fallida: ' . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = mysqli_real_escape_string($conexion, $_POST['username']);
    $password = $_POST['password']; // Recibe la contraseña sin modificar para verificar el hash

    // Consulta segura usando preparación de sentencias
    $query = $conexion->prepare("SELECT clave FROM usuarios WHERE usuario = ?");
    $query->bind_param("s", $username);
    $query->execute();
    $result = $query->get_result();

    if ($result->num_rows == 1) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['clave'])) {
            $_SESSION['loggedin'] = true;
            $_SESSION['username'] = $username;
            header("location: ../index.html"); // Redirige a la página de bienvenida
            exit;
        } else {
            echo "Contraseña incorrecta.";
        }
    } else {
        echo "Usuario no encontrado.";
    }
}
mysqli_close($conexion);
?>