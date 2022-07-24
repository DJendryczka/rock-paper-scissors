
const rock = 1
const paper = 2
const scissors = 3

function getComputerChoise(){
    let computerChoise = ''
    computerChoise = Math.floor(Math.random() * 3) + 1
    console.log(computerChoise)
}
getComputerChoise()