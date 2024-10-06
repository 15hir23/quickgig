<?php

$servername = "localhost";
$username = "root";  
$password = "";     
$dbname = "quickgig"; 

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $name = mysqli_real_escape_string($conn, $_POST['supusername']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $phone = mysqli_real_escape_string($conn, $_POST['phone']);
    $reg_no = mysqli_real_escape_string($conn, $_POST['reg_no']);
    $password = mysqli_real_escape_string($conn, $_POST['suppassword']);

    $sql = "INSERT INTO user_details (user_name, user_mail, user_phone, user_reg, user_password)
            VALUES ('$name', '$email', '$phone', '$reg_no', '$password')";

    if ($conn->query($sql) === TRUE) {
        header("Location: signin.html"); 
    } else {
        header("Location: error.html"); 
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}


$conn->close();
?>
