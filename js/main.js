

//const


const colors = ["red","yellow", "green", "blue"]

//cached
var red = document.getElementById("red")
var yellow = document.getElementById("yellow")
var green = document.getElementById("green")
var blue = document.getElementById("blue")
//state
let currentPattern,
    playerPattern,
    rounds


//listernes
red.addEventListener("click", track)
yellow.addEventListener("click", track)
green.addEventListener("click", track)
blue.addEventListener("click", track)

//functions
    init()
function init() {
    currentPattern = []
    playerPattern = []
    rounds = 0
}
function newGame() {
    currentPattern = []
    playerPattern = []
    rounds = 0
}
function randomizer(){
    let i = Math.floor(Math.random() * colors.length)
    console.log(colors[i])
    currentPattern.push(colors[i])
}
var flashLights = function(arr) {
    let i = 0;
  
    let interval = setInterval(function() {
      $("#" + currentPattern[i]).fadeTo("slow", 0).fadeTo("slow", 1);
      //$("#sound-" + currentPattern[i])[0].play();
      i++;
      if (i >= currentPattern.length) {
        clearInterval(interval);
      }
    }, 1500);
  };

function track(){
    playerPattern.push(event.target.id)
}
