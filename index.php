<?php
session_start();

function displayQuiz(){
    if(isset($_SESSION['username'])){
        include 'quiz.php';
    }else{
        header("Location: login.php");
    }
}
function destroy(){
    unset($_SESSION['username']);
    $message = "destroy";
    echo "<script type='text/javascript'>alert('$message');</script>";
}
?>

<!DOCTYPE html>
<html>
    <head>
        <title>CSUMB Online Quiz</title>
        <link href="css/styles.css" rel="stylesheet" type="text/css" />
    </head>
    
    <body>
        <div class="user-menu">
            <?php echo "Welcome ".$_SESSION['username']."! ";?> 
            <input type="button" id="logoutBtn" value="Logout" />    
        </div>
        
        <div class="content-wrapper">
             <div id="quiz">
                <h1>Quiz</h1>
                <?=displayQuiz()?>
                
                <div id="feedback">
                    <h2>Your final score is <span id="score">score</span></h2>
                    
                    You've taken this quiz <strong id="times"></strong> time(s). <br/> <br/>
                    
                    Your average score was <strong id="average"></strong>
                </div>
            </div>
            <div id="mascot">
                <img src="img/mascot.png" alt="CSUMB Mascot" width="350" />
            </div>
        </div>
    
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="js/gradeQuiz.js"></script>
    </body>
</html>