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
    setNamesFromQueryString();
});

const quizAnswers={1:"Finding Nemo", 2:"Michael", 3:"New Hampshire", 4:"Kanye West", 5:"Avatar", 6:"201", 7:"Europe and Asia", 8:"Lady Gaga", 9:"Mary Poppins", 10:"Pennsylvania", 11:"Canada", 12:"Chevrolet"}



function quest(questionNum) { 
    let numberOfQuestions = 13;
    const buttons = document.querySelectorAll('.q1btn');
    buttons.forEach((button, index) =>{
        if (questionNum == index+1 || button.classList.contains("answeredQuest")) {
            button.setAttribute("disabled", true);
            button.classList.remove("red");
            button.classList.add("answeredQuest")
        }
    })
   
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
    var currentPlayer = getCurrentPlayer();
    
    let ele = document.querySelectorAll(".answer")
        for (let i = 0; i < ele.length; i++) {
            if (ele[i].checked){
                answer = ele[i].value
              
            }
        }
    setCurrentPlayerScore(questionNum, questionAmount, answer);

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

function setCurrentPlayerScore(questionNum, questionAmount, answer) {
    var currentPlayer = getCurrentPlayer();
    var currentScore = 0;
    console.log(typeof quizAnswers[questionNum])
    if(currentPlayer === '1' && answer === quizAnswers[questionNum]) {
        currentScore = document.getElementById("playerOneScore").innerHTML;
        document.getElementById("playerOneScore").innerHTML = +currentScore + +questionAmount;
    } else if(answer === quizAnswers[questionNum]) {
        currentScore = document.getElementById("playerTwoScore").innerHTML;
        document.getElementById("playerTwoScore").innerHTML = +currentScore + +questionAmount;
    }
}

function getCurrentPlayer() {
    return document.getElementById("currentPlayer").value;
}

let oneWins = document.getElementById("playerOneWins")
let twoWins = document.getElementById("playerTwoWins")
    if (button.classList.contains("answeredQuest") == false && "playerOneScore" > "playerTwoScore") {
        document.getElementById(oneWins).style.display="block";
    } else {
        document.getElementById(twoWins).style.display="block";
    }