


function getComputerChoise(){
    let computerChoise = ''
    computerChoise = Math.floor(Math.random() * 3) + 1
    
    if(computerChoise === 1){
        return 'Rock'
    }else if(computerChoise === 2){
        return 'Paper'
    }else{
        return 'Scossors'
    }
}
getComputerChoise()
console.log(getComputerChoise())