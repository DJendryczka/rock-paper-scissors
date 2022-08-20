function getComputerChoise(){
    let computerChoise = ''
    computerChoise = Math.floor(Math.random() * 3) + 1
    
    if(computerChoise === 1){
        return 'Rock'
    }else if(computerChoise === 2){
        return 'Paper'
    }else{
        return 'Scissors'
    }
}
let computerSelection = getComputerChoise()

console.log(`Comp selection is ${computerSelection}`)

function playGame(playerSelection, computerSelection){

    if(playerSelection === computerSelection){
        console.log("No one wins") 
    }
    // Rock
    if(playerSelection === 'Rock' && computerSelection === 'Paper'){
        console.log("You luse Paper wins")
    } 
    if(playerSelection === 'Rock' && computerSelection === 'Scissors'){
        console.log("You win Rock wins")
    }
    if(playerSelection === 'Paper' && computerSelection === 'Rock'){
        console.log("You win Paper wins")
    }
    if(playerSelection === 'Paper' && computerSelection === 'Scissors'){
        console.log("You luse Scissors wins")
    }
    if(playerSelection === 'Scissors' && computerSelection === 'Rock'){
        console.log("You luse Rock wins")
    }
    if(playerSelection === 'Scissors' && computerSelection === 'Paper'){
        console.log("You win Scissors wins")
    }
    console.log(`Player selection is ${playerSelection}`)
}
playGame( "Rock", computerSelection)
