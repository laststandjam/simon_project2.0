//const

const colors = ["red", "yellow", "green", "blue"];

//cached
var red = document.getElementById("red");
var yellow = document.getElementById("yellow");
var green = document.getElementById("green");
var blue = document.getElementById("blue");
var rounds = document.getElementById("rounds");
var startButton = document.getElementById("gameStart");
var headerText = document.getElementById("gameMessage");
//state
let currentPattern, playerPattern, roundCounter, lost;

//listernes
red.addEventListener("click", track);
yellow.addEventListener("click", track);
green.addEventListener("click", track);
blue.addEventListener("click", track);
startButton.addEventListener("click", startGame);

//functions

init();
function init() {
  currentPattern = [];
  playerPattern = [];
  roundCounter = 0;
  rounds.innerText = roundCounter
}
function newGame() {
  currentPattern = [];
  playerPattern = [];
  roundCounter = 1;
}
function randomizer() {
 if(lost ){
     return lost = false
     roundCounter = 0
 }  
let i = Math.floor(Math.random() * colors.length);
  console.log(colors[i]);
  currentPattern.push(colors[i]);
}
function blinker() {
  let i = 0;
  let interval = setInterval(function() {
    $("#" + currentPattern[i])
      .fadeTo("slow", 0)
      .fadeTo("slow", 1);
    i++;
    if (i >= currentPattern.length) {
      clearInterval(interval);
    }
  }, 1500);
}

function track() {
    {
    playerPattern.push(event.target.id);
    judger();
    if (playerPattern.length === currentPattern.length) {
        newRound();
  }
}
}
  
  function updateRound() {
    ++roundCounter;
    rounds.innerText = roundCounter;
  }


function judger() {
  for (let i = 0; i < playerPattern.length; i++) {
    if (currentPattern[i] !== playerPattern[i]) {
        lost = true
      headerText.innerText = "You lose Press Start to play again";
      return init();
      break
    }
  }
}
// function judger(){
//     if(currentPattern.length === playerPattern.length)
//         for(let i =0; i<playerPattern.length; i++){
//             if( playerPattern[i] !== currentPattern[i])
//            headerText.innerText ="You lose Press Start to play again"

//             }
//             playerPattern= []
//             updateRounds()
//             randomizer()
//             blinker()
//     }
function startGame() {
  headerText.innerText = "Follow The Colors";
  updateRound();
  randomizer();
  blinker();
  if(lost){
      return init()
  }
}
function newRound() {
  updateRound();
  randomizer();
  blinker();
  playerPattern = []
}
