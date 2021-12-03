<?php
  if($_SERVER["REQUEST_METHOD"] == "POST")
  {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "skj_users";
  
    $connect = mysqli_connect($servername , $username , $password , $database);
  
    $email = $_POST["user_email"];
    $password = $_POST["password"];
    // $hash = password_hash($password , PASSWORD_DEFAULT);

    $sql = "SELECT * from `users` WHERE `email`= '$email' AND `password` = '$password'";
    $results = mysqli_query($connect , $sql);
    $num = mysqli_num_rows($results);
    if($num == 1)
    {
      echo '<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Suscess!</strong> Login is successful .
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>';
      $details = mysqli_fetch_assoc($results);
      session_start();
      $_SESSION['names'] = $details['name'];
      $_SESSION['loggedin'] = true;
      $_SESSION['email'] = $email;
      $_SESSION['phone'] = $details['phone'];
      $_SESSION['street'] = $details['street'];
      $_SESSION['city'] = $details['city'];

      header("location: /foodipy/php/profile.php");
    }
    else 
    {
      echo '<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Alert!</strong> Invalid Imformation , Try again.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>';
    }
  }
?>

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  </head>
  <body>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    -->
  </body>
</html>