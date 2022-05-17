
function rpsls(){
    let random = Math.random()
    if (random >.20) {
        return "rock"
    } else if (random > .4){
        return "rock"
    } else if (random > .6){
        return "scissors"
    } else if (random > .8) {
        return "lizard"
    } else {
        return "spock"
    }
}
document.querySelector('#aPlacetoYell').innerText = rpsls()

document.querySelector('button').addEventListener('click', checkWin)


function checkWin(){
    let botChoice = rpsls()
    let choice = document.querySelector('input').value
    if((choice === "paper" && botChoice === "rock") || (choice === "scissors" && botChoice === "paper") || (choice === "rock" && botChoice === "scissors") || (choice === "spock" && botChoice === "rock") || (choice === "spock" && botChoice === "scissors") || (choice === "lizard" && botChoice === "paper") || (choice === "lizard" && botChoice === "spock") || (choice === "scissors" && botChoice === "lizard") || (choice === "paper" && botChoice === "spock") || (choice === "rock" && botChoice === "lizard")){
        alert("you won!")
    }else if(choice == botChoice){
        alert("tie")
    }else {
        alert('lose')
    }
}


