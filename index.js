const wins = 0;
const loses = 0;

const choices = ["Rock", "Paper", "Scissors"];

const player = ["r", "p", "s"]

const randomChoice =  choices[Math.floor(Math.random()*choices.length)]

console.log(randomChoice);

window.onload = (Event) => {
    let text;
    if (confirm("Would you like to play?") == true) {
        promptCode();
    }   else {
        text = "You chose not to play!"
    } //end ifelse
} //end onload

function promptCode () {
    prompt("please enter r p s");
    if (player === randomChoice) {
                return "draw"
            } 
            if (player === "r" && randomChoice === "Scissors" || //for player wins
                player === "s" && randomChoice === "Paper" ||
                player === "p" && randomChoice === "Rock") {
                    wins =+ 1
                return "Win!"
            } else {
                //loses =-1
                return "You lose:-("
        
            }
}
// function game(params) {
//     if (player === randomChoice) {
//         return "draw"
//     } 
//     if (player === "r" && randomChoice === "Scissors" || //for player wins
//         player === "s" && randomChoice === "Paper" ||
//         player === "p" && randomChoice === "Rock") {
//             wins =+ 1
//         return "Win!"
//     } else {
//         loses =-1
//         return "You lose:-("

//     }
// }
// //end game()
// //prompt is for choice r p s

// //alert is for score
// alert(loses, wins)
// //confirm is for do you wnat to play has ok (true) or cancel
// confirm("Would you like to play rock, paper, scissors?") // need to add theis to an onload

// window.confirm()//possible switch statement for options confirm need to be in if statement???

