

//const


const colors = ["red","yellow", "green", "blue"]

//cached
var red = document.getElementById("red")
var yellow = document.getElementById("yellow")
var green = document.getElementById("green")
var blue = document.getElementById("blue")
var rounds = document.getElementById("rounds")
var startButton=document.getElementById("gameStart")
var headerText = document.getElementById("gameMessage")
//state
let currentPattern,
    playerPattern,
    roundCounter;


//listernes
red.addEventListener("click", track)
yellow.addEventListener("click", track)
green.addEventListener("click", track)
blue.addEventListener("click", track)
startButton.addEventListener("click",startGame )

//functions
   
init()
function init() {
    currentPattern = []
    playerPattern = []
    roundCounter = 0
}
function newGame() {
    currentPattern = []
    playerPattern = []
    roundCounter = 1
}
function randomizer(){
    let i = Math.floor(Math.random() * colors.length)
    console.log(colors[i])
    currentPattern.push(colors[i])
}
 function blinker() {
    let i = 0;
    let interval = setInterval(function() {
      $("#" + currentPattern[i]).fadeTo("slow", 0).fadeTo("slow", 1);
      i++;
      if (i >= currentPattern.length) {
        clearInterval(interval);
      }
    }, 1500);
  };

function track(){
    playerPattern.push(event.target.id)
    if(playerPattern.length === currentPattern.length){
    judger()
    }
}
function updateRounds(){
    ++roundCounter
    rounds.innerText = roundCounter
}
function judger(){
    if(currentPattern.length === playerPattern.length)
        for(let i =0; i<playerPattern.length; i++){
            if( playerPattern[i] !== currentPattern[i])
           headerText.innerText ="You lose Press Start to play again"
           
            }
            playerPattern= []
            updateRounds()
            randomizer()
            blinker()
    }
function startGame(){
    headerText.innerText= "Follow The Colors"
    updateRounds()
    randomizer()
    blinker()
}
