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
    $title = mysqli_real_escape_string($conn, $_POST['gig-title']);
    $desc = mysqli_real_escape_string($conn, $_POST['gig-description']);
    $price = mysqli_real_escape_string($conn, $_POST['gig-price']);
    $category = mysqli_real_escape_string($conn, $_POST['gig-category']);
    $skill = mysqli_real_escape_string($conn, $_POST['gig-skills']);
    $deadline = mysqli_real_escape_string($conn, $_POST['gig-deadline']);

    $sql = "INSERT INTO postgig (title, descrip, price, category, skills, deadline)
            VALUES ('$title', '$desc', '$price', '$category', '$skill', '$deadline')";

    if ($conn->query($sql) === TRUE) {
        header("Location: thankyou.html");
    } else {
        header("Location: error.html");
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
