
<?php

@include 'config.php';

session_start();



   $name =$_POST['name'];
   $email =$_POST['email'];
   $pass = md5($_POST['password']);
   $select = " SELECT * FROM user_form WHERE email = '$email' && password = '$pass' ";

   $result = mysqli_query($conn, $select);

   if(mysqli_num_rows($result) == 0){
      $res=mysqli_query($conn,"INSERT INTO user_form values('','$name','$email','$pass')");
      if (mysqli_affected_rows($conn)!=-1){
         ?><script>document.getElementById('affich').innerHTML="Your Account has been created !";</script><?php
      }
      
   }else{
      $error[] = 'user already exist!';
   }
?>