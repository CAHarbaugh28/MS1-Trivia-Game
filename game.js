function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(function() {
    debugger;
    setNamesFromQueryString();
});

function quest(questionNum) { 
    let numberOfQuestions = 12;
    for (let index = 1; index < numberOfQuestions; index++) {
        let elementId = "q" + index;
        if(questionNum === index){
            document.getElementById(elementId).style.display="block";
        } else {       
            document.getElementById(elementId).style.display="none"; 
        }
    }
}

function setNamesFromQueryString() {
    debugger;
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });

      var playerCount = params.playerCount;
      var playerOneName = params.playerOneName;
      var playerTwoName = params.playerTwoName;

      document.getElementById("playerOneName").innerHTML = playerOneName;
      //initialize first player
      document.getElementById("currentPlayer").value = 1;

      if(playerCount === '2') {
        document.getElementById("playerTwoName").innerHTML = playerTwoName;
      }
}

function submitAnswer(questionNum, questionAmount){
    debugger;
    var currentPlayer = getCurrentPlayer();

    //do something with the answer such as calculate score
    setCurrentPlayerScore(questionAmount);

    //dimm out already asked questions

    setNewPlayerTurn(currentPlayer);
}


let setCurrentPlayer = number => document.getElementById("currentPlayer").value = number;

function setNewPlayerTurn(currentPlayer) {
    if(currentPlayer === '1') {
        setCurrentPlayer(2);
    } else {
        setCurrentPlayer(1);
    }
}

function setCurrentPlayerScore(questionAmount) {
    var currentPlayer = getCurrentPlayer();

    var currentScore = 0;

    if(currentPlayer === '1') {
        currentScore = document.getElementById("playerOneScore").innerHTML;
        document.getElementById("playerOneScore").innerHTML = currentScore + questionAmount;
    } else {
        currentScore = document.getElementById("playerTwoScore").innerHTML;
        document.getElementById("playerTwoScore").innerHTML = currentScore + questionAmount;
    }
}

function getCurrentPlayer() {
    return document.getElementById("currentPlayer").value;
}