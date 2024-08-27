var btn = document.querySelectorAll("button");
var record = document.querySelector(".record");
var selections=document.querySelector(".Selection")
var msg = document.querySelector(".message");

var gameArray = ["Rock", "Paper", "Scissors"];
let score=[0,0]

for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", Play);
}

function Play(e) {
  let playerChoice = e.target.innerText;
  let computerChoice = gameArray[Math.floor(Math.random() * gameArray.length)];

  selections.innerText=`Player Choice is ${playerChoice} and Computer Choice is ${computerChoice}`;

  if (playerChoice == computerChoice){
      record.innerText=`Player ${score[0]} and Computer ${score[1]}`
      msg.innerText = "Results in a tie match";
 }

 else if (playerChoice=="Rock" && computerChoice=="Scissors"){
    score[0]++
    record.innerText=`Player ${score[0]} and Computer ${score[1]}`
    msg.innerText = "Player wins";

 }

 else if ((playerChoice==="Rock" && computerChoice==="Scissors")|| (playerChoice==="Paper" && computerChoice==="Rock") || (playerChoice=="Scissors" && computerChoice=="Paper"))
    {
    score[0]++
    record.innerText=`Player ${score[0]} and Computer ${score[1]}`
    msg.innerText = "Player wins";
 }

 else{
    score[1]++
    record.innerText=`Player ${score[0]} and Computer ${score[1]}`
    msg.innerText = "Computer wins";

 }

  }
