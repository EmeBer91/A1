
//Looks for the text
const textField0 = document.getElementById("text0");
textField0.innerHTML = showStylizedScore  (786);

function showScore(inputNumber) {
  return inputNumber * 100;
}
function showStylizedScore(scoreInput){
  return "Your score is" + scoreInput * 100;
}
