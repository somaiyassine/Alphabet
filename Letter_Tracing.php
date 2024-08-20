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
  <section id="tracing">
    <h2>Letter Tracing</h2>
    <p>Practice tracing the letter A.</p>
    <div id="tracing-container">
      <div id="letter-container">
        <div id="letter">A</div>
      </div>
      <canvas id="tracing-canvas" width="400" height="200"></canvas>
      <button onclick="reloadTracinga()">Reload</button>
    </div>


    <p>Practice tracing the letter B.</p>
    <div id="tracing-container">
      <div id="letter-container">
        <div id="letter">B</div>
      </div>
      <canvas id="tracing-canvasb" width="400" height="200"></canvas>
      <button onclick="reloadTracingb()">Reload</button>
    </div>



    <p>Practice tracing the letter C.</p>
    <div id="tracing-container">
      <div id="letter-container">
        <div id="letter">C</div>
      </div>
      <canvas id="tracing-canvasc" width="400" height="200"></canvas>
      <button onclick="reloadTracingc()">Reload</button>
    </div>


    <p>Practice tracing the letter D.</p>
    <div id="tracing-container">
      <div id="letter-container">
        <div id="letter">D</div>
      </div>
      <canvas id="tracing-canvasd" width="400" height="200"></canvas>
      <button onclick="reloadTracingd()">Reload</button>
    </div>

    <p>Practice tracing the letter E.</p>
    <div id="tracing-container">
      <div id="letter-container">
        <div id="letter">E</div>
      </div>
      <canvas id="tracing-canvase" width="400" height="200"></canvas>
      <button onclick="reloadTracinge()">Reload</button>
    </div>


    <p>Practice tracing the letter F.</p>
    <div id="tracing-container">
      <div id="letter-container">
        <div id="letter">F</div>
      </div>
      <canvas id="tracing-canvasf" width="400" height="200"></canvas>
      <button onclick="reloadTracingf()">Reload</button>
    </div>



    <p>Practice tracing the letter G.</p>
    <div id="tracing-container">
      <div id="letter-container">
        <div id="letter">G</div>
      </div>
      <canvas id="tracing-canvasg" width="400" height="200"></canvas>
      <button onclick="reloadTracingg()">Reload</button>
    </div>


    <p>Practice tracing the letter H.</p>
    <div id="tracing-container">
      <div id="letter-container">
        <div id="letter">H</div>
      </div>
      <canvas id="tracing-canvash" width="400" height="200"></canvas>
      <button onclick="reloadTracingh()">Reload</button>
    </div>


    <p>Practice tracing the letter I.</p>
    <div id="tracing-container">
      <div id="letter-container">
        <div id="letter">I</div>
      </div>
      <canvas id="tracing-canvasi" width="400" height="200"></canvas>
      <button onclick="reloadTracingi()">Reload</button>
    </div>


    <p>Practice tracing the letter J.</p>
    <div id="tracing-container">
      <div id="letter-container">
        <div id="letter">J</div>
      </div>
      <canvas id="tracing-canvasj" width="400" height="200"></canvas>
      <button onclick="reloadTracingj()">Reload</button>
    </div>



    <p>Practice tracing the letter K.</p>
    <div id="tracing-container">
      <div id="letter-container">
        <div id="letter">K</div>
      </div>
      <canvas id="tracing-canvask" width="400" height="200"></canvas>
    <button onclick="reloadTracingk()">Reload</button>

    </div>

    <p>Practice tracing the letter L.</p>
    <div id="tracing-container">
      <div id="letter-container">
        <div id="letter">L</div>
      </div>
      <canvas id="tracing-canvasl" width="400" height="200"></canvas>
      <button onclick="reloadTracingl()">Reload</button>
    </div>

    <p>Practice tracing the letter M.</p>
    <div id="tracing-container">
      <div id="letter-container">
        <div id="letter">M</div>
      </div>
      <canvas id="tracing-canvasm" width="400" height="200"></canvas>
      <button onclick="reloadTracingm()">Reload</button>
    </div>


    <p>Practice tracing the letter N.</p>
    <div id="tracing-container">
      <div id="letter-container">
        <div id="letter">N</div>
      </div>
      <canvas id="tracing-canvasn" width="400" height="200"></canvas>
      <button onclick="reloadTracingn()">Reload</button>
    </div>



    <p>Practice tracing the letter O.</p>
    <div id="tracing-container">
      <div id="letter-container">
        <div id="letter">O</div>
      </div>
      <canvas id="tracing-canvaso" width="400" height="200"></canvas>
      <button onclick="reloadTracingo()">Reload</button>
    </div>


    <p>Practice tracing the letter P.</p>
    <div id="tracing-container">
      <div id="letter-container">
        <div id="letter">P</div>
      </div>
      <canvas id="tracing-canvasp" width="400" height="200"></canvas>
      <button onclick="reloadTracingp()">Reload</button>
    </div>

    <p>Practice tracing the letter Q.</p>
    <div id="tracing-container">
      <div id="letter-container">
        <div id="letter">Q</div>
      </div>
      <canvas id="tracing-canvasq" width="400" height="200"></canvas>
      <button onclick="reloadTracingq()">Reload</button>
    </div>


    <p>Practice tracing the letter R.</p>
    <div id="tracing-container">
      <div id="letter-container">
        <div id="letter">R</div>
      </div>
      <canvas id="tracing-canvasr" width="400" height="200"></canvas>
      <button onclick="reloadTracingr()">Reload</button>
    </div>

    <p>Practice tracing the letter S.</p>
    <div id="tracing-container">
      <div id="letter-container">
        <div id="letter">S</div>
      </div>
      <canvas id="tracing-canvass" width="400" height="200"></canvas>
      <button onclick="reloadTracings()">Reload</button>
    </div>


    <p>Practice tracing the letter T.</p>
    <div id="tracing-container">
      <div id="letter-container">
        <div id="letter">T</div>
      </div>
      <canvas id="tracing-canvast" width="400" height="200"></canvas>
      <button onclick="reloadTracingt()">Reload</button>
    </div>

    <p>Practice tracing the letter U.</p>
    <div id="tracing-container">
      <div id="letter-container">
        <div id="letter">U</div>
      </div>
      <canvas id="tracing-canvasu" width="400" height="200"></canvas>
      <button onclick="reloadTracingu()">Reload</button>
    </div>


    <p>Practice tracing the letter V.</p>
    <div id="tracing-container">
      <div id="letter-container">
        <div id="letter">V</div>
      </div>
      <canvas id="tracing-canvasv" width="400" height="200"></canvas>
      <button onclick="reloadTracingv()">Reload</button>
    </div>
    <p>Practice tracing the letter W.</p>
    <div id="tracing-container">
      <div id="letter-container">
        <div id="letter">W</div>
      </div>
      <canvas id="tracing-canvasw" width="400" height="200"></canvas>
      <button onclick="reloadTracingw()">Reload</button>
    </div>


    <p>Practice tracing the letter X.</p>
    <div id="tracing-container">
      <div id="letter-container">
        <div id="letter">X</div>
      </div>
      <canvas id="tracing-canvasx" width="400" height="200"></canvas>
      <button onclick="reloadTracingx()">Reload</button>
    </div>

    <p>Practice tracing the letter Y.</p>
    <div id="tracing-container">
      <div id="letter-container">
        <div id="letter">Y</div>
      </div>
      <canvas id="tracing-canvasy" width="400" height="200"></canvas>
      <button onclick="reloadTracingy()">Reload</button>
    </div>


    <p>Practice tracing the letter Z.</p>
    <div id="tracing-container">
      <div id="letter-container">
        <div id="letter">Z</div>
      </div>
      <canvas id="tracing-canvasz" width="400" height="200"></canvas>
      <button onclick="reloadTracingz()">Reload</button>
    </div>
  </section>

  <footer>
    <div class="foot">
      <p>&copy; 2023 Alphabet Learning Adventure</p>
    </div>
</footer>
</body>

</html>