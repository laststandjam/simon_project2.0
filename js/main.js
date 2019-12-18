

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
init()
function newGame() {
    currentPattern = []
    playerPattern = []
    rounds = 0
}

function track(){
    playerPattern.push(event.target.id)
}
