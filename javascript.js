let getComputerChoice = ['rock', 'paper', 'scissors'];

let computerSelection = Math.floor(Math.random() * getComputerChoice.length);

//console.log(computerSelection, getComputerChoice[computerSelection]);

function rules(computerSelection, playerSelection) {
    
    if (playerSelection == computerSelection) {
        return 'Tie!';
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            return'You lost! Paper beats Rock';
        } else {
            return'You won! Rock beats Scissors';
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            return'You won! Paper beats Rock';
        } else {
             return'You lost! Scissors beat Paper';
            }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            return'You lost! Rock beats Scissors';
        } else {
            return'You won! Scissors beat Paper';
        }
    } else { 
        return'Please choose either Rock, Paper or Scissors';
    }
}


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.value;
        console.log("button press")
        console.log("This pressed button has this value" + button.value);
        playGame();
    })

    button.addEventListener("mouseenter",()=>{
        button.classList.add("hover");
        
    })
    button.addEventListener("mouseleave",()=>{
        button.classList.remove("hover");
    })
})
console.log(buttons)

let playerScore = 0;
let computerScore = 0;

    
function playGame() {
        console.log("first" + playerSelection);
        let computerSelection = Math.floor(Math.random() * getComputerChoice.length);
        console.log('computer choice ----- '+ getComputerChoice[computerSelection])
        let result = rules( getComputerChoice[computerSelection], playerSelection);
        console.log(result)
        alert(result);

        if (result.includes('won')) {
            playerScore += 1;
        } else if (result.includes('lost')) {
            computerScore += 1;
        }
    } 
    // console.log(playerScore);
    // console.log(computerScore);

    // if (playerScore > computerScore) {
    //     console.log('You won the game!');
    //     alert('You won the game!');
    // } else if (playerScore < computerScore) {
    //     console.log('Game over. You lost!');
    //     alert('Game over. You lost!');
    // } else {
    //     console.log('Tie!');
    //     alert('Tie!');

    // }
