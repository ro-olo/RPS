let getComputerChoice = ['rock', 'paper', 'scissors'];

let computerSelection = Math.floor(Math.random() * getComputerChoice.length);

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


const buttons = document.querySelectorAll('.choice');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.value;
        playGame();
    })

    button.addEventListener("mouseenter",()=>{
        button.classList.add("hover");
        
    })
    button.addEventListener("mouseleave",()=>{
        button.classList.remove("hover");
    })
})



let playerScoreIn = 0;
let computerScoreIn = 0;
let playerScore = document.querySelector("#playerScore");
playerScore.textContent="0";
let computerScore = document.querySelector("#computerScore");
computerScore.textContent="0";


    
function playGame() {
        console.log("first" + playerSelection);
        let computerSelection = Math.floor(Math.random() * getComputerChoice.length);
        console.log('computer choice ----- '+ getComputerChoice[computerSelection])
        let result = rules( getComputerChoice[computerSelection], playerSelection);
        console.log(result);
        roundResult.textContent = result;

        if (result.includes('won')) {
            playerScoreIn += 1;
            playerScore.textContent = playerScoreIn;
        } else if (result.includes('lost')) {
            computerScoreIn += 1;
            computerScore.textContent = computerScoreIn;
        };
        //CODICE PER SETTARE IL BOTTONE
        

         if (playerScoreIn == 5) {
            console.log('You won the game!');
            gameResult.textContent = 'You won the game!';
            again.removeAttribute("hidden");
        } else if (computerScoreIn == 5) {
            console.log('Game over. You lost!');
            gameResult.textContent = 'Game over. You lost!';
            again.removeAttribute("hidden");
        } 
    }

    again.addEventListener("click", function() {
        playerScoreIn = 0;
        computerScoreIn = 0;
        playerScore.textContent = "0";
        computerScore.textContent = "0";
        again.setAttribute("hidden", true);
        roundResult.textContent = '';
        gameResult.textContent = '';
    });

    function toggleRoundButton(){
        buttonHidden = buttonRound.getAttribute("hidden");
        buttonRound.setAttribute("hidden" ,!buttonHidden);
    }

    