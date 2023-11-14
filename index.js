const wins = 0;
const loses = 0;

const choices = ["Rock", "Paper", "Scissors"];

const randomChoice =  choices[Math.floor(Math.random()*choices.length)]

console.log(randomChoice);

function game(params) {
    if (player === randomChoice) {
        return "draw"
    } 
    if (player === "Rock" && randomChoice === "Scissors" || //for player wins
        player === "Scissors" && randomChoice === "Paper" ||
        player === "Paper" && randomChoice === "Rock") {
            wins =+ 1
        return "Win!"
    } else {
        loses =-1
        return "You lose:-("

    }
}


