
## const
buttonArray



## variables
playerturn
PlayerPaternArr
current Pattern

## cached dom
red 
blue 
green 
yellow
white

hard and normal button


## functions
###### normalMode
    calls init 
##### hardMode
    adds a 5th button
    call init
###### init 
    sets state to blank
###### render 
    updates viewer from state
###### randomizer 
    takes color from buttonArray and pushes to the current pattern Array
    call render
    
###### blinker 
    blinks current patteren and when finished sets player turn to true
   
    boops on blinks
 call render
###### tracker 
    takes player clicks and moves them to playerPattern
###### judger 
    judges currentPattern and playerPattern if equal call randomizer  else player loses
function judger(){
    
}


## listners
all butons listing for click
