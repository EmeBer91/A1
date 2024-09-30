//A B C D F
const gradeIdTextField = document.getElementById("grade");
let grade =90;

function getGrade() {
  if (grade >=90 && grade <=100) {
    gradeIdTextField.innerText = "A";
}

else if (grade >=80 && grade <=89) {
  gradeIdTextField.innerHTML= "B";
  }

  else if (grade >=70 && grade <=79) {
    gradeIdTextField.innerHTML= "C";
  }

  else if (grade >=60 && grade <=69) {
    gradeIdTextField.innerHTML= "D";
  }

  else if (grade >=0 && grade<=59) {
    gradeIdTextField.innerHTML= "F";
  }

  }
getGrade();


