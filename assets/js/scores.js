var clear = document.querySelector('#clear');
var back = document.querySelector('#back');
var highScore = document.querySelector('#highScore');

var playerScores = localStorage.getItem("playerScores");
playerScores = JSON.parse(playerScores);

//check that user scores is not empty and print contents
if (playerScores !== null) {

    for (var i = 0; i < playerScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = playerScores[i].initials + " " + playerScores[i].score;
        highScore.appendChild(createLi);

    }
}

//Button to go back to index
back.addEventListener('click', function() {

    window.location.replace('../../index.html');

});

//Button to clear scores from local storage
clear.addEventListener("click", function () {

    localStorage.clear();
    location.reload();

});





