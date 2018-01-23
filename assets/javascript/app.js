$(document).ready(function(){

    //display the start up screen with a play button
    function firstScreen() {
        playScreen = ("<div class='jumbotron'><h1class='display-4 font' id='header-one'>Welcome To Trivia</h1><br><a class='btn btn-primary btn-lg font' id='button' role='button'>Play</a></div>");
        $("#content").html(playScreen);

    }


    firstScreen();

    //make the button work when clicked to generate the html and display questions

    $("body").on("click", "#button", function(event){
        generateHTML();
    
        theTimer();
    
    }); // start button
    
    $("body").on("click", ".answer", function(event){
        answerChoice = $(this).text();
        if(answerChoice === correctAnswers[unansweredQuestions]) {
            clearInterval(clock);
            generateWin();
        }
        else {
            clearInterval(clock);
            generateLoss();
        }
    }); // answer click

    $("body").on("click", ".reset-button", function(event){
        resetGame();
    }); // Closes reset-button click
    

    

    function generateHTML() {
        gameHTML = "<p class='text-center timer'><span class='timer'>30</span></p><p class='text-center'>" + questions[unansweredQuestions] + "</p><p class='first-answer answer'>A. " + answers[unansweredQuestions][0]+ "</p><p class='answer'>B. "+answers[unansweredQuestions][1]+"</p><p class='answer'>C. "+answers[unansweredQuestions][2]+"</p><p class='answer'>D. "+answers[unansweredQuestions][3]+"</p>";
        $("#content").html(gameHTML);
    }

    function generateWin() {
        correctAnswers++;
        gameHTML = "<p class='text-center timer'><span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct!</p>";
        $("#content").html(gameHTML);
        setTimeout(pause, 4000);  
    }

    function generateLoss() {
        wrongAnswers++;
        gameHTML = "<p class='text-center timer'><span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[unansweredQuestions] + "</p>";
        $("#content").html(gameHTML);
        setTimeout(pause, 4000); 
    }

    function generateLossDueToTimeOut() {
        unansweredQuestions++;
        gameHTML = "<p class='text-center timer'><span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[unansweredQuestions] + "</p>" ;
        $("#content").html(gameHTML);
        setTimeout(pause, 4000); 
    }

    function pause() {
        if (questionsAnswered < 4) {
        unansweredQuestions++;
        generateHTML();
        counter = 30;
        theTimer();
        }
        else {
            finalScreen();
        }
    }

    function theTimer() {
        clock = setInterval(thirtySeconds, 1000);
        function thirtySeconds() {
            if (counter === 0) {
                clearInterval(clock);
                generateLossDueToTimeOut();
            }
            if (counter > 0) {
                counter--;
            }
            $(".timer").html(counter);
        }
    }

    function finalScreen() {
        gameHTML = "<p class='text-center timer-p font'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctAnswers + "</p>" + "<p>Wrong Answers: " + incorrectAnswers + "</p>" + "<p>Unanswered: " + unansweredQuestions + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button button' href='#' role='button'>Reset The Quiz!</a></p>";
        $(".content").html(gameHTML);
    }


    function resetGame() {
        questionsAnswered = 0;
        correctResponse = 0;
        wrongAnswers = 0;
        unansweredQuestions = 0;
        counter = 30;
        generateHTML();
        theTimer();
    }


    var gameHTML;
    var clock;
    var theTimer;
    var answerChoice;
    var questionsAnswered = 0;
    var correctResponse = 0;
    var wrongAnswers = 0;
    var unansweredQuestions= 0;
    var counter = 30;
    var questions = [
        "What famous actor became Governor of California in 2003?",
        "In the first two Jaws films, what was the police cheifs name?",
        "Which two actors directed themselves in movies and won Oscars for Best Actor?",
        "Who is the most nominated actor in Academy history?",
        "Which movie ends with this final line of dialogue: 'Why, she wouldn't even harm a fly?'"
    ];
    
    var answers = [
        ["Kevin Spacey", "Michael Cane", "Arnold Schwarzenegger", "George Clooney"],
        ["Martin Brody", "Matt Hopper", "Jack Dawson", "Michael Brody"],
        ["Al Pacino and Timothy Hutton","Jack Nicholson and Kevin Spacey", "Laurence Olivier and Roberto Benigni", "Tom Hanks and Paul Newman"],
        ["Jack Nicholson", "Laurence Olivier", "Spencer Tracy", "Paul Newman"],
        ["Diabolique (1996)", "Psycho (1960)", "To Die For (1995)", "Monster (2004)"]
    ];
    
    var correctAnswers = [
        "C. Arnold Schwarzenegger",
        "A. Martin Brody",
        "C. Laurence Olivier and Roberto Benigni",
        "A. Jack Nicholson",
        "B. Psycho (1960)"
    
    ];


});










