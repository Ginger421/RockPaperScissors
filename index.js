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
//end game()
//prompt is for choice r p s
//alert is for score
alert(loses, wins)
//confirm is for do you wnat to play has ok (true) or cancel

window.confirm()//possible switch statement for options confirm need to be in if statement???

