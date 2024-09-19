// Document Elements
// Looks for "text0".
const textField0 = document.getElementById("text0");

const increaseScoreButton = document.getElementById("button0");
// Internal Variables
let score  = 0;


// Process (what is going to happen in what sequence?
increaseScoreButton.addEventListener("click", () => {
  increaseScoreByOne();
  updateScoreText();
  checkScoreForSeven();
});


function increaseScoreByOne() {
  score++;

}

function checkScoreForSeven() {
 if (score >= 7) {
changeScoreTextColorToGreen() }
}
function updateScoreText(newText) {
  textField0.innerHTML = "Your score is" + score;
}

function changeScoreTextColorToGreen(){
  textField0.style.color = "green";
}
