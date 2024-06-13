// event listsener
document.getElementById("btn-out").addEventListener("click", submit);
//  function
function submit() {
  // variables
  let num1 = document.getElementById("first").value.toLowerCase();
  let num2 = document.getElementById("secound").value.toLowerCase();
  let num3 = document.getElementById("third").value.toLowerCase();
  let num4 = document.getElementById("fourth").value.toLowerCase();
  let grade = 0;
  let statement = document.getElementById("statement");
  // if statements
  if (num1 == "mbappe") {
    document.getElementById("mb1").innerHTML = "1";
    document.getElementById("clr1").style.color = "green";
    grade = grade + 1;
  } else {
    document.getElementById("mb1").innerHTML = "0";
    document.getElementById("clr1").style.color = "red";
  }
  if (num2 == "messi") {
    document.getElementById("mb2").innerHTML = "1";
    document.getElementById("clr2").style.color = "green";
    grade = grade + 1;
  } else {
    document.getElementById("mb2").innerHTML = "0";
    document.getElementById("clr2").style.color = "red";
  }
  if (num3 == "ronaldo" || num3 == "cr7") {
    document.getElementById("mb3").innerHTML = "1";
    document.getElementById("clr3").style.color = "green";
    grade = grade + 1;
  } else {
    document.getElementById("mb3").innerHTML = "0";
    document.getElementById("clr3").style.color = "red";
  }
  if (num4 == "tatum") {
    document.getElementById("mb4").innerHTML = "1";
    document.getElementById("clr4").style.color = "green";
    grade = grade + 1;
  } else {
    document.getElementById("mb4").innerHTML = "0";
    document.getElementById("clr4").style.color = "red";
  }
  let gradeOut = (document.getElementById("grade").innerHTML = grade);
  let precentage = Math.round((grade / 4) * 100);
  document.getElementById("precent").innerHTML += "%";
  document.getElementById("precent").innerHTML = precentage += "%";
  if (grade == 4) {
    statement.innerHTML = "enthusiast ";
  } else if (grade == 3) {
    statement.innerHTML = "i watch when i can";
  } else if (grade == 2) {
    statement.innerHTML = "i know a few";
  } else if (grade == 1) {
    statement.innerHTML = "whats basketball? whats soccer?";
  } else {
    statement.innerHTML = "what?";
  }
}
