
function rpsls(){
    let random = Math.random()
    if (random >.20) {
        return "rock"
    } else if (random > .4){
        return "paper"
    } else if (random > .6){
        return "scissors"
    } else if (random > .8) {
        return "lizard"
    } else {
        return "spock"
    }
}


function checkWin(choice){
    let botChoice = rpsls()
    if((choice === "paper" && botChoice === "rock") || (choice === "scissors" && botChoice === "paper") || (choice === "rock" && botChoice === "scissors") || (choice === "spock" && botChoice === "rock") || (choice === "spock" && botChoice === "scissors") || (choice === "lizard" && botChoice === "paper") || (choice === "lizard" && botChoice === "spock") || (choice === "scissors" && botChoice === "lizard") || (choice === "paper" && botChoice === "spock") || (choice === "rock" && botChoice === "lizard")){
    console.log("you won!")
    }else if(choice === botChoice){
        console.log("tie")
    }else {
        console.log('lose')
    }
}

checkWin("paper")
checkWin("spock")
checkWin("lizard")
checkWin("paper")
checkWin("spock")
checkWin("lizard")
checkWin("paper")
checkWin("spock")
checkWin("lizard")
checkWin("paper")
checkWin("spock")
checkWin("lizard")
