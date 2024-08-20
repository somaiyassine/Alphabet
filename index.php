
<?php
session_start();
@include 'config.php';

if(isset($_POST['submitr'])){

   $name =$_POST['name'];
   $email = $_POST['email'];
   $pass = $_POST['password'];
   $age = $_POST['age'];
   
   $select = " SELECT * FROM user_form WHERE email = '$email' && password = '$pass' ";
   $result = mysqli_query($conn, $select);

   $row = mysqli_fetch_assoc($result);
    if(is_array($row) && !empty($row)){
        $_SESSION['id'] = $row['id'];
    }
   if(mysqli_num_rows($result) != 0 ||  $name==""){
            echo "<div class='message'>
                  <p>This email is used, Try another One Please!</p>
              </div> <br>";
   }else{
         $insert = "INSERT INTO user_form(name, email, password,age) VALUES('$name','$email','$pass','$age')";
         mysqli_query($conn, $insert);
         $select = " SELECT * FROM user_form WHERE email = '$email' && password = '$pass' ";
        $result = mysqli_query($conn, $select);

        $row = mysqli_fetch_assoc($result);
            if(is_array($row) && !empty($row)){
                $_SESSION['id'] = $row['id'];
            }
         echo "<div class='message'>
                  <p>Registration successfully!</p>
              </div> <br>";
         header("Location: home.php");
   }
    
};

if(isset($_POST['submits'])){
    $email = $_POST['email'];
    $pass = $_POST['password'];
    $select = " SELECT * FROM user_form WHERE email = '$email' && password = '$pass' ";
    $result = mysqli_query($conn, $select);
    $row = mysqli_fetch_assoc($result);
    if(is_array($row) && !empty($row)){
        $_SESSION['id'] = $row['id'];
    }
    if(mysqli_num_rows($result) == 0){
        echo "<div class='message'>
                  <p>user not exist please go to sign up</p>
              </div> <br>";
    }else{
        header("Location: home.php");
    }
    
 };


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="shortcut icon" type="x-icon" href="images/A_Letter_LZNQBD.jpg">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <link rel="stylesheet" href="styles.css">
    <title>Login Page</title>
</head>

<body>
    <div class="container" id="container">
        <div class="form-container sign-up">
            <form action="" method="post" >
                <h1>Create Account</h1>
                <input type="text" placeholder="Username" name="name">
                <input type="email" placeholder="Email" name="email">
                <input type="number" placeholder="Age" name="age">
                <input type="password" placeholder="Password" name="password">
                <button type="submit" name="submitr">Sign Up</button>
            </form>
        </div>





        <div class="form-container sign-in">
            <form action="" method="post" >
                <h1>Sign In</h1>
                <input type="email" placeholder="Email" name="email">
                <input type="password" placeholder="Password" name="password">
                <button type="submit" name="submits">Sign In</button>
            </form>
        </div>
        <div class="toggle-container">
            <div class="toggle">
                <div class="toggle-panel toggle-left">
                    <h1>Welcome Back!</h1>
                    <p>Enter your personal details to use all of site features</p>
                    <button class="hidden" id="login">Sign In</button>
                </div>
                <div class="toggle-panel toggle-right">
                    <h1>Hello, Friend!</h1>
                    <p>Register with your personal details to use all of site features</p>
                    <button class="hidden" id="register" >Sign Up</button>
                </div>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>

</html>