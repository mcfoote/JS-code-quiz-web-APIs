
var qIndex = 0;
var score = 0;

var current = document.querySelector("#timer");
var start = document.querySelector("#start"); 
var questionsEl = document.querySelector("#questions"); 
var gameWindow = document.querySelector("#gameWindow"); 

var timeLeft = 121;
var hold = 0; 
var penalty = 10;
var ulNew = document.createElement("ul");

//Array defining quiz questions and answers
var questions = [

    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ___.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ___.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ___ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },
    {
        title: "Inside which HTML element do we put the JavaScript?",
        choices: ["<javascript>", "<script>", "<js>", "<scripting>"],
        answer: "<script>"
    },
    {
        title: "JavaScript is a ___ -side programming language.",
        choices: ["Client", "Server", "Both", "None"],
        answer: "Both"

    },
    {
        title: "How do you find the minimum of x and y using JavaScript?",
        choices: ["min(x,y)", "Math.min(x,y)", "Math.min(xy)", "min(xy)"],
        answer: "Math.min(x,y)"
    },

];

//Add event listener for start button
start.addEventListener("click", function () {

    if (hold === 0) {
        hold = setInterval(function () {

            timeLeft--;
            current.textContent = "Time: " + timeLeft;

            if (timeLeft <= 0) {
                clearInterval(hold);
                finished();
                current.textContent = "Time's up!";
            }

        }, 1000);

    }

    render(qIndex);

});

//Renderer Function
function render(qIndex) {
    
    questionsEl.innerHTML = "";
    ulNew.innerHTML = "";
   
    for (var i = 0; i < questions.length; i++) {
   
        var userQ = questions[qIndex].title;
        var userAnswer = questions[qIndex].choices;
        questionsEl.textContent = userQ;

    }
    
    userAnswer.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsEl.appendChild(ulNew);
        ulNew.appendChild(listItem);
        listItem.addEventListener("click", (check));
    })
}

// Checks if chosen answer is correct
function check(event) {

    var element = event.target;

    if (element.matches("li")) {

        var newDiv = document.createElement("div");
        newDiv.setAttribute("id", "newDiv");
         
        if (element.textContent == questions[qIndex].answer) {
            score++;
            newDiv.textContent = "Correct! The answer is:  " + questions[qIndex].answer;
            
        } else {
            
            timeLeft -= penalty;
            newDiv.textContent = "Wrong! The correct answer is:  " + questions[qIndex].answer;
        }

    }

    qIndex++;

    if (qIndex >= questions.length) {
        
        finished();
        newDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
    } else {
        render(qIndex);
    }
    questionsEl.appendChild(newDiv);

}

//
function finished() {

    questionsEl.innerHTML = "";
    current.innerHTML = "";

    
    var newH1 = document.createElement("h1");
    newH1.setAttribute("id", "newH1");
    newH1.textContent = "Finished"

    questionsEl.appendChild(newH1);

    
    var newPara = document.createElement("p");
    newPara.setAttribute("id", "newPara");

    questionsEl.appendChild(newPara);

    
    if (timeLeft >= 0) {

        var remaining = timeLeft;
        var newPara2 = document.createElement("p");
        clearInterval(hold);
        newPara.textContent = "Your final score is: " + remaining;

        questionsEl.appendChild(newPara2);

    }

    var newLabel = document.createElement("label");
    newLabel.setAttribute("id", "newLabel");
    newLabel.textContent = "Enter your initials: ";

    questionsEl.appendChild(newLabel);

    var newInput = document.createElement("input");
    newInput.setAttribute("type", "text");
    newInput.setAttribute("id", "initials");
    newInput.textContent = "";

    questionsEl.appendChild(newInput);

    var newSubmit = document.createElement("button");
    newSubmit.setAttribute("type", "submit");
    newSubmit.setAttribute("id", "Submit");
    newSubmit.textContent = "Submit";

    questionsEl.appendChild(newSubmit);

    newSubmit.addEventListener("click", function () {
        var initials = newInput.value;

        if (initials === null) {

            console.log("No value entered!");

        } else {

            var finScore = {
                initials: initials,
                score: remaining
            }

            console.log(finScore);
            var playerScores = localStorage.getItem("playerScores");

            if (playerScores === null) {
                playerScores = [];
            } else {
                playerScores = JSON.parse(playerScores);
            }

            playerScores.push(finScore);
            var newScore = JSON.stringify(playerScores);
            localStorage.setItem("playerScores", newScore);
           
            window.location.replace("./assets/html/Scores.html");

        }
    });

}