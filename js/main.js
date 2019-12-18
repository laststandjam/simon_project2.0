//const
const colors = ["red","yellow", "green", "blue"]

//cached

//state
let currentPattern,
    playerPattern,
    rounds


//listernes
red.addEventListener("click", playerMove)
yellow.addEventListener("click", playerMove)
green.addEventListener("click", playerMove)
blue.addEventListener("click", playerMove)
startButton.addEventListener("click", startPlay)
//functions
function newGame() {
    currentPattern = []
    playerPattern = []
    rounds = 0
}
