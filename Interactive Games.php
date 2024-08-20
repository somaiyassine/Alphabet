<?php 
session_start();
include("config.php");     
$id = $_SESSION['id'];
$query = mysqli_query($conn,"SELECT * FROM user_form WHERE id=$id");

while($result = mysqli_fetch_assoc($query)){
    $res_Uname = $result['name'];
    $res_Email = $result['email'];
    $res_Age = $result['age'];
    $res_id = $result['id'];
}
            
?>
<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <link rel="shortcut icon" type="x-icon" href="images/A_Letter_LZNQBD.jpg">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <style>
      .hy h2 {
      text-align: center;
      color: #007BFF;
    }

    .hy {
      margin: 1%;
      padding: 2.5%;
      height: 130vh;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    }
    .wrapper{
    background:transparent;
    position:absolute;
    right: 4%;
    top:0%;
    width: 9.375rem;
    height: 6.25rem;
}
.ul_login{
    list-style: none;
}
.navbar{
    position:absolute;
    right: 4%;
    top: 0%;
    
    width: 9.375rem;
    height: 6.25rem;
}
.navbar .nav_right > ul{
	display: flex;
	align-items: center;
}

.navbar .nav_right ul li.nr_li{
	margin-left: 1.563rem;
	cursor: pointer;
	color: #fff;
	font-size: 1.25rem;
	position: relative;
}

.navbar .nav_right ul li.nr_li:hover {
    color: #cefffc;
}

.navbar .nav_right ul li img{
	width:5rem;
    height: 5rem;
	vertical-align: middle;
}

.navbar .dd_menu {
    position: absolute;
    right: -0.125rem;
    top: 6.25rem;
    display: flex;
    background: #fff;
    border-radius:0.938rem;
    box-shadow: 0px 0px 3px rgba(0,0,0,0.25);
    display: none;
}

.navbar .dd_menu .dd_left{
	background: #5ba3d6;
	padding: 1.25rem 1.25rem ;
	border-top-left-radius: 0.938rem;
	border-bottom-left-radius:0.938rem;

}

.navbar .dd_menu .dd_left li{
	color: rgb(230, 230, 230);
    text-transform: capitalize;
    text-decoration: none;
    
}

.navbar .dd_menu .dd_right{
	padding: 0.938rem 1.25rem;
    
}

.navbar .dd_menu li{
	margin-bottom: 0.625rem;
	color: #4a4343;
}

.navbar .dd_menu:before{
	content: "";
	position: absolute;
	top: -1.25rem;
	right: 1.875rem;
	border: 0.625rem solid black;
	border-color: transparent transparent #fff transparent;
}

.navbar .dd_main.active .dd_menu{
	display: flex;
}
.dd_menu a{
    text-decoration: none;
    color: #000;
}

    </style>
    <script defer src="js.js"></script>
    <title>Alphabet Learning Website</title>
</head>

<body>
    <div style="overflow: hidden;">
        <svg preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg"
            style="fill: #99c2cf; width: 164%; height: 117px;">
            <path
                d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
                opacity=".25" />
            <path
                d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
                opacity=".5" />
            <path
                d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
        </svg>
    </div>
    <script src="https://kit.fontawesome.com/b99e675b6e.js"></script>

<div class="wrapper">
	<div class="navbar">
		<div class="nav_right">
			<ul class="ul_login">
				<li class="nr_li dd_main">
					<img class="user_img" src="user.png" alt="profile_img">
					
					<div class="dd_menu">
						<div class="dd_left">
							<ul>
								<li>name</li>
								<li>email</li>
								<li>age</i></li>
								<li><a href="index.php"><i class="fas fa-sign-out-alt"></i></a></li>
							</ul>
						</div>
						<div class="dd_right">
							<ul>
                                <li><?php echo $res_Uname ?></li>
								<li><?php echo $res_Email ?></li>
								<li><?php echo $res_Age ?></li>
								<li><a href="index.php">Logout</a></li>
							</ul>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</div>
  <header>
    <h1>Hello <b><?php echo $res_Uname ?></b> Welcome to the Alphabet Learning Adventure!</h1>
    <p>Explore, learn, and have fun with the alphabet.</p>
  </header>

  <nav>
    <ul>
    <li><a href="table.php">Alphabet Table</a></li>
            <li><a href="Interactive Games.php">Interactive Games</a></li>
            <li><a href="songs.php">Alphabet Songs</a></li>
            <li><a href="Letter_Tracing.php">Letter Tracing</a></li>
            <li><a href="puzzles.php">Alphabet Puzzles</a></li>
            <li><a href="memcards.php">Memory Game</a></li>
            <li><a href="quiz.php">Alphabet Quiz</a></li>
    </ul>
</nav>
  <div class="hy">
    <h2>Interactive Alphabet Games</h2>
    <iframe src="wheel/index.html" width="100%" height="90%"></iframe>
  </div>

  <footer>
    <div class="foot">
      <p>&copy; 2023 Alphabet Learning Adventure</p>
    </div>
</footer>
</body>

</html>