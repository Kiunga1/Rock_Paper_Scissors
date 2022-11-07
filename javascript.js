

const options = ["rock", "paper", "scissors"];

function getComputerChoice (){
    const choice = options[Math.floor(Math.random() * options.length)];
    
    return choice;
}

function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput === false){
        const choice = prompt("Rock, Paper or Scissors?");
        if(choice == null){
            continue;
        }
        const choiceLower = choice.toLowerCase()
        if(options.includes(choiceLower)){
            validatedInput = true;
            return choiceLower; 
        }
    } 
}

function checkRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    }else if (
        (playerSelection == "rock" && computerSelection == "scissors") || 
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "player";
    }else {
        return "computer";
    }
}

function playRound (playerSelection, computerSelection){
    const result = checkRound(playerSelection, computerSelection);
    if (result == "Tie"){
        return `It\'s a tie  ${playerSelection} is same as ${computerSelection}`;
    }else if (result ==  "player") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    for (let i = 0; i < 5; i++) {
        if(i === 0){
            console.log("First Round!");
        }
        else if(i === 4){
            console.log("Last Round!");
        }
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("----------------------")
        if(checkRound(playerSelection,computerSelection) === "Player"){
            scorePlayer++;
        }
        else if(checkRound(playerSelection, computerSelection) == "Computer"){
            scoreComputer++;
        }
    }
    if(scorePlayer > scoreComputer){
        console.log(`Player won by ${scorePlayer}/5`)
    }
    else if(scorePlayer < scoreComputer){
        console.log(`Computer won by ${scoreComputer}/5`)
    }
    else{
        console.log("It's a tie!")
    }
}

game()

