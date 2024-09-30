// Variables

let button0 = document.getElementById("button0");

//Texts
let playerRollText = document.getElementById("playerRollText");
let computerRollText = document.getElementById("computerRollText");
let gameResultText = document.getElementById("gameResultText");
let drawsText = document.getElementById("drawsText");
let resultText  = document.getElementById("resultText");

//Data
let playerRoll = 0;
let computerRoll = 0;
let playerWins = 0;
let computerWins = 0;
let draws = 0;

loadGame();
updateScoreBoard();

//Processes
button0.addEventListener("click", function() {
getRandomNumberOneToSixForPlayer();
showPlayerRollResult ();
showComputerRollResult ();
determineWinner();
updateScoreBoard();
saveAsCookie();
});

button0.addEventListener('click', function() {
  // Animate the image to move to the right
  button0.animate([
    { transform: 'translateX(0px)' },
    { transform: 'translateX(25px)' },
    { transform: 'translateX(-20px)' },
    { transform: 'translateX(0px)' }

  ], {
    duration: 500, // Half a second
    easing: 'ease-in-out',
    fill: 'forwards' // Ensure the image stays at the final position
  });
});

//Controlles
function getRandomNumberOneToSixForPlayer(){
  playerRoll = Math.floor(Math.random() *6) +1;
  computerRoll = Math.floor(Math.random() * 6) + 1;
}

//Views
function showPlayerRollResult() {
  playerRollText.innerText = "Player Roll:" + playerRoll;

}

function showComputerRollResult() {
  computerRollText.innerText = "Computer Roll: " + computerRoll;
}

// Determine Winner
function determineWinner() {
  if (playerRoll > computerRoll) {
    gameResultText.innerText = "Result: You win!";
    playerWins++;
  } else if (playerRoll < computerRoll) {
    gameResultText.innerText = "Result: Computer wins!";
    computerWins++;
  } else {
    gameResultText.innerText = "Result: It's a tie!";
    draws++;
  }
}
// Update Scoreboard
function updateScoreBoard() {
  drawsText.innerText = "Draws: " + draws;
  resultText.innerText = "Player Wins " + playerWins + " : " + computerWins + " Computer Wins"
}

//COOKIE
function saveAsCookie() {
  document.cookie = "playerWins=" + playerWins + "; expires=Thu, 18 Dec 2025 12:00:00 UTC";
  document.cookie = "computerWins=" + computerWins + "; expires=Thu, 18 Dec 2025 12:00:00 UTC";
  document.cookie = "draws=" + draws + "; expires=Thu, 18 Dec 2025 12:00:00 UTC";
}

function loadGame() {
  playerWins = getCookie ("playerWins");
  computerWins = getCookie ("computerWins");
  draws = getCookie ("draws");

}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {c = c.substring(1);       }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return 0;}
