<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "quickgig";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $input_username = $_POST['cusername'];
    $input_password = $_POST['cpassword'];

    $stmt = $conn->prepare("SELECT * FROM user_details WHERE user_name = ? AND user_password = ?");
    $stmt->bind_param("ss", $input_username, $input_password);
    
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $_SESSION['loggedin'] = true;
        $_SESSION['username'] = htmlspecialchars($input_username);
        header("Location: page1.html");
        exit();
    } else {
        header("Location: error.html");
        echo "Invalid username or password. Please try again.";
    }

    $stmt->close();
}

$conn->close();
?>
