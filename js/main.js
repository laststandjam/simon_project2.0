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
let currentPattern = [],
  playerPattern,
  roundCounter,
  lost,
  won;

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
  won = false;
  lost = false;
  rounds.innerText = roundCounter;
  headerText.innerText = "Press Play to start";
}
function newGame() {
  currentPattern = [];
  playerPattern = [];
  roundCounter = 1;
}
function randomizer() {
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
  if (lost) {
    return;
  }
  playerPattern.push(event.target.id);
  judger();
  if (playerPattern.length === currentPattern.length) {
    newRound();
  }
}

function updateRound() {
  rounds.innerText = currentPattern.length + 1;
}

function judger() {
  for (let i = 0; i < playerPattern.length; i++) {
    if (currentPattern[i] !== playerPattern[i]) {
      lost = true;
      headerText.innerText = "You lose Press Start to play again";
      return;
    } else if (playerPattern.length === 10) {
      won = true;
      headerText.innerText =
        "You win see how high you can go or start a new game";
    }
  }
}
function startGame() {
  if (lost) {
    headerText.innerText = "Follow The Colors";
    newGame();
    return init();
  }
  if (won) {
    headerText.innerText = "Follow The Colors";
    newGame();
    return init();
  }
  headerText.innerText = "Follow The Colors";
  roundCounter = 1;
  rounds.innerText = roundCounter;
  newGame();
  randomizer();
  blinker();
}
function newRound() {
  updateRound();
  randomizer();
  blinker();
  playerPattern = [];
}
