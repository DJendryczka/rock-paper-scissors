let playerScore = 0
let computerScore = 0

const paper = document.getElementById('paper')
const rock = document.getElementById('rock')
const scissors = document.getElementById('scissors')
const play = document.getElementById('play-game')
let playerSelection



/* Computer makin a choise */
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


/* Get player  and computer choise and load to variable */

paper.addEventListener('click', ()=>{
    playerSelection = 'Paper'
    /* Display computer choise */
    let computerSelection = getComputerChoise()
    playGame(playerSelection, computerSelection)
})
rock.addEventListener('click', ()=>{
    playerSelection = 'Rock'
    /* Display computer choise */
    let computerSelection = getComputerChoise()
    playGame(playerSelection, computerSelection)
})
scissors.addEventListener('click', ()=>{
    playerSelection = 'Scissors'
    /* Display computer choise */
    let computerSelection = getComputerChoise()
    playGame(playerSelection, computerSelection)
})


/* Logic of the game */
function playGame(player, computer){

    if(player === computer){
        
        document.getElementById('choise').innerHTML = `Your choise is ${player}<br>Computer choise is ${computer}<br> No one wins`
        document.getElementById('result').innerHTML = `Your Score is ${playerScore}<br>Computer Score is ${computerScore}`
        
    }
    if(player === 'Rock' && computer === 'Paper'){

        document.getElementById('choise').innerHTML = `Your choise is ${player}<br>Computer choise is ${computer}<br> You luse ${computer} wins`
        computerScore += 1
        document.getElementById('result').innerHTML = `Your Score is ${playerScore}<br>Computer Score is ${computerScore}`
        
    } 
    if(player === 'Rock' && computer === 'Scissors'){
        
        document.getElementById('choise').innerHTML = `Your choise is ${player}<br>Computer choise is ${computer}<br> You win ${player} wins`
        playerScore += 1
        document.getElementById('result').innerHTML = `Your Score is ${playerScore}<br>Computer Score is ${computerScore}`
        
    }
    if(player === 'Paper' && computer === 'Rock'){

        document.getElementById('choise').innerHTML = `Your choise is ${player}<br>Computer choise is ${computer}<br> You win ${player} wins`
        playerScore += 1
        document.getElementById('result').innerHTML = `Your Score is ${playerScore}<br>Computer Score is ${computerScore}`
        
    }
    if(player === 'Paper' && computer === 'Scissors'){
        
        document.getElementById('choise').innerHTML = `Your choise is ${player}<br>Computer choise is ${computer}<br> You luse ${computer} wins`
        computerScore += 1
        document.getElementById('result').innerHTML = `Your Score is ${playerScore}<br>Computer Score is ${computerScore}`
        
    }
    if(player === 'Scissors' && computer === 'Rock'){
        
        document.getElementById('choise').innerHTML = `Your choise is ${player}<br>Computer choise is ${computer}<br>You luse ${computer} wins`
        computerScore += 1
        document.getElementById('result').innerHTML = `Your Score is ${playerScore}<br>Computer Score is ${computerScore}`
        
    }
    if(player === 'Scissors' && computer === 'Paper'){
        
        document.getElementById('choise').innerHTML = `Your choise is ${player}<br>Computer choise is ${computer}<br> You win ${player} wins`
        playerScore += 1
        document.getElementById('result').innerHTML = `Your Score is ${playerScore}<br>Computer Score is ${computerScore}`
        
    }
   
}


