// Varibles

let button0 = document.getElementById("button0");

//Texts
let playerRollText = document.getElementById("playerRollText");
let computerRollText = document.getElementById("computerRollText");
let gameResultText = document.getElementById("gameResultText");


//Data
let playerRoll = 0;
let computerRoll = 0;


//Processes
button0.addEventListener("click", function() {
getRandomNumberOneToSixForPlayer();
showPlayerRollResult ();
showComputerRollResult ();
determineWinner();

});

//Controlles
function getRandomNumberOneToSixForPlayer(){
  playerRoll = Math.floor(Math.random() *6) +1;
  computerRoll = Math.floor(Math.random() * 6) + 1;
}

//Views
function showPlayerRollResult() {
  playerRollText.innerText = playerRoll;
}

function showComputerRollResult() {
  computerRollText.innerText = computerRoll;
}

// Determine Winner
function determineWinner() {
  if (playerRoll > computerRoll) {
    gameResultText.innerText = "Result: You win!";
  } else if (playerRoll < computerRoll) {
    gameResultText.innerText = "Result: Computer wins!";
  } else {
    gameResultText.innerText = "Result: It's a tie!";
  }
}
