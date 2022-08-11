var clear = document.querySelector('#clear');
var back = document.querySelector('#back');
var highScore = document.querySelector('#highScore');

var userScores = localStorage.getItem("userScores");
userScores = JSON.parse(userScores);

//check that user scores is not empty
if (userScores !== null) {

    for (var i = 0; i < userScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = userScores[i].initials + " " + userScores[i].score;
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





