$(document).ready(function() {

    //global variables

    var targetNumber;
    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    //reset function
    function reset() {
        for (var i = 0; i < crystals.length; i++) {
            crystals[i].setAttribute("score", Math.floor(Math.random() * 20 + 1))
        }
        targetNumber = Math.floor(Math.random() * 111 + 19);
        userTotal = 0;
        $("#total-score").text(userTotal);
        $("target-score").text(targetNumber);
    }

    //initialize function
    function initialize() {
        crystals = document.getElementsByTagName("img")
        for (var i = 0; i < crystals.length; i++) {
            crystals[i].setAttribute("score", Math.floor(Math.random() * 20 + 1))
            crystals[i].addEventListener("click", (args) => {
                value = Math.round(args.target.getAttribute("score"))
                userTotal = userTotal + value;
                $("#total-score").text(userTotal);
                console.log(userTotal);
                logic();
            })
        }
        targetNumber = Math.floor(Math.random() * 111 + 19);
        $("#target-score").text(targetNumber);
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#total-score").text(userTotal);
    }

    //win, loss function
    function logic() {
        if (userTotal === targetNumber) {
            alert("You Win! :D");
            reset();
            wins++;
            $("#wins").text(wins);
        } else if (userTotal > targetNumber) {
            alert("You Lose! :(");
            reset();
            losses++;
            $("#losses").text(losses);
        }
    }
    initialize();
});