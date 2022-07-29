let question1 = document.querySelector(".question1");
let question2 = document.querySelector(".question2");
let question3 = document.querySelector(".question3");
let question4 = document.querySelector(".question4");
let question5 = document.querySelector(".question5");

let arrow1 = document.querySelector(".arrow1");
let arrow2 = document.querySelector(".arrow2");
let arrow3 = document.querySelector(".arrow3");
let arrow4 = document.querySelector(".arrow4");
let arrow5 = document.querySelector(".arrow5");

let answer1 = document.querySelector(".answer1");
let answer2 = document.querySelector(".answer2");
let answer3 = document.querySelector(".answer3");
let answer4 = document.querySelector(".answer4");
let answer5 = document.querySelector(".answer5");

function showAnswer1() {
  answer1.classList.toggle("hide");
  arrow1.classList.toggle("rotate");
  question1.classList.toggle("question__active");
}
function showAnswer2() {
  answer2.classList.toggle("hide");
  arrow2.classList.toggle("rotate");
  question2.classList.toggle("question__active");
}
function showAnswer3() {
  answer3.classList.toggle("hide");
  arrow3.classList.toggle("rotate");
  question3.classList.toggle("question__active");
}
function showAnswer4() {
  answer4.classList.toggle("hide");
  arrow4.classList.toggle("rotate");
  question4.classList.toggle("question__active");
}
function showAnswer5() {
  answer5.classList.toggle("hide");
  arrow5.classList.toggle("rotate");
  question5.classList.toggle("question__active");
}

question1.addEventListener("click", showAnswer1);
question2.addEventListener("click", showAnswer2);
question3.addEventListener("click", showAnswer3);
question4.addEventListener("click", showAnswer4);
question5.addEventListener("click", showAnswer5);
