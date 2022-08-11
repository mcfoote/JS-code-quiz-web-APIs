var clear = document.querySelector('#clear');
var back = document.querySelector('#back');
var highScore = document.querySelector('#highScore');

var playerScores = localStorage.getItem("playerScores");
playerScores = JSON.parse(playerScores);

//check that user scores is not empty
if (playerScores !== null) {

    for (var i = 0; i < playerScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = playerScores[i].initials + " " + playerScores[i].score;
        highScore.appendChild(createLi);

    }
}

back.addEventListener('click', function() {

    window.location.replace('../../index.html');

});

clear.addEventListener("click", function () {

    localStorage.clear();
    location.reload();

});





