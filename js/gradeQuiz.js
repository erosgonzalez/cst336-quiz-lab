$(document).ready(function(){
    
    $("#logoutBtn").click( function() {
        window.location.href="logout.php";
        }
    );
    
    $("#goback").click( function() {
        window.location.href="login.php";
        }
    );
    
    var score = 0;
    $("form").submit(function(event) {
        event.preventDefault();
    
        var answer1 = $("input[name='question1']").val().trim();
        var answer2 = $("input[name='question2']:checked").val();
        var answer3 = $("input[name='question3']").val().trim();
        var answer4 = $("input[name='question4']").val().trim();
        
        console.log(answer1);
        console.log(answer2);
        console.log(answer3);
        console.log(answer4);
        
        
        if (answer1 === "1994") {
            correctAnswer($("#question1-feedback")); 
        } else {
            incorrectAnswer($("#question1-feedback"));
        }
        
        $("#question1-feedback").append("The answer is <strong>1994</strong>"); 
        
        
    
        if (answer2 === "C") {
            correctAnswer($("#question2-feedback")); 
        } else {
            incorrectAnswer($("#question2-feedback"));
        }
        
        $("#question2-feedback").append("The answer is <strong>Monte Rey</strong>"); 
        
        if (answer3 === "1970") {
            correctAnswer($("#question3-feedback")); 
        } else {
            incorrectAnswer($("#question3-feedback"));
        }
        
        $("#question3-feedback").append("The answer is <strong>1970</strong>"); 
        
        if (answer4 === "1492") {
            correctAnswer($("#question4-feedback")); 
        } else {
            incorrectAnswer($("#question4-feedback"));
        }
        
        $("#question4-feedback").append("The answer is <strong>1492</strong>"); 

        $('#score').html(score); 
        $("#waiting").html("<img src='img/loading.gif' alt='submitting data' />"); 
        $("input[type='submit']").css("display", "none"); 


        //Submits and stores score, retrieves average score
        $.ajax({
            type : "GET",
            url  : "submitScores.php",            
            dataType : "json",
            data : {"score" : score},            
            success : function(data){
                console.log("In success handler: "); 
                console.log(data); 
                
                $("#times").html(data.times); 
                $("#average").html(data.average); 
                $("#feedback").css("display", "block"); 
                $("#waiting").html(""); 
                $("input[type='submit']").css("display", ""); 
                
                console.log("old score: ", score); 
                score = 0; 
                
            },

        });//AJAX
        
    }); 
    function correctAnswer(questionFeedback){
        questionFeedback.html("Correct! ");
        questionFeedback.addClass("correct");
        questionFeedback.removeClass("incorrect");
        score++;
    }
    function incorrectAnswer(questionFeedback){
        questionFeedback.html("Incorrect! ");
        questionFeedback.addClass("incorrect");
        questionFeedback.removeClass("correct");
    }
    
});       