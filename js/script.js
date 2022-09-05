let playerSelection

const paper = document.getElementById('paper')
const rock = document.getElementById('rock')
const scissors = document.getElementById('scissors')




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



paper.addEventListener('click', ()=>{
    playerSelection = 'Paper'
    /* Display computer choise */
    let computerSelection = getComputerChoise()
    console.log(` Player selection is ${playerSelection} Comp selection is ${computerSelection}`)
    playGame(playerSelection, computerSelection)
})
rock.addEventListener('click', ()=>{
    playerSelection = 'Rock'
    /* Display computer choise */
    let computerSelection = getComputerChoise()
    console.log(` Player selection is ${playerSelection} Comp selection is ${computerSelection}`)
    playGame(playerSelection, computerSelection)
})
scissors.addEventListener('click', ()=>{
    playerSelection = 'Scissors'
    /* Display computer choise */
    let computerSelection = getComputerChoise()
    console.log(` Player selection is ${playerSelection} Comp selection is ${computerSelection}`)
    playGame(playerSelection, computerSelection)
})

function show(){
    alert(playerSelection)
}  

/* Logic of the game */
function playGame(player, computer){

    if(player === computer){
        console.log("No one wins") 
        document.getElementById('choise').innerHTML = `Your choise is ${player},Computer choise is ${computer} No one wins`
    }
    if(player === 'Rock' && computer === 'Paper'){
        console.log("You luse Paper wins")
        document.getElementById('choise').innerHTML = `Your choise is ${player},Computer choise is ${computer} You luse ${computer} wins`
    } 
    if(player === 'Rock' && computer === 'Scissors'){
        console.log("You win Rock wins")
        document.getElementById('choise').innerHTML = `Your choise is ${player},Computer choise is ${computer} You win ${player} wins`
    }
    if(player === 'Paper' && computer === 'Rock'){
        document.getElementById('choise').innerHTML = `Your choise is ${player},Computer choise is ${computer} You win ${player} wins`
    }
    if(player === 'Paper' && computer === 'Scissors'){
        console.log("You luse Scissors wins")
        document.getElementById('choise').innerHTML = `Your choise is ${player},Computer choise is ${computer} You luse ${computer} wins`
    }
    if(player === 'Scissors' && computer === 'Rock'){
        console.log("You luse Rock wins")
        document.getElementById('choise').innerHTML = `Your choise is ${player},Computer choise is ${computer} You luse ${computer} wins`
    }
    if(player === 'Scissors' && computer === 'Paper'){
        console.log("You win Scissors wins")
        document.getElementById('choise').innerHTML = `Your choise is ${player},Computer choise is ${computer} You win ${player} wins`
    }
   
}
/* Get player choise and lod to variable */

