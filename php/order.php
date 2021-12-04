<?php
  if($_SERVER["REQUEST_METHOD"] == "POST")
  {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "skj_users";
  
    $connect = mysqli_connect($servername , $username , $password , $database);
    
    $name = $_POST["name"];
    $email = $_POST["email"];
    $card_no = $_POST["card_no"];
    $address_1 = $_POST["address_1"];
    $address_2 = $_POST["address_2"];
    $branch_name = $_POST["branch_name"];
    $ifsc = $_POST["ifsc"];
    $cvv = $_POST["cvv"];

    $sql = "INSERT INTO `order`(`name` ,`email`, `credit_card_no`  ,`Branch` ,`IFSC` ,`CVV`,`address`,`date`) VALUES ('$name' , '$email' , '$card_no','$branch_name' , '$ifsc', '$cvv', '$address_1.$address_2' ,current_timestamp())";
     $results = mysqli_query($connect ,$sql);

     if($results)
     {
        echo '<div class="alert alert-success alert-dismissible fade show" role="alert">
         <strong>Suscess!</strong> Your Order is placed and delivered in 15 minutes.
         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
     </div>';
     }
     else 
     {
        echo '<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Failed!</strong> Your Order is not placed . Please try again.
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