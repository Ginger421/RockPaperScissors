const choices = ["r", "p", "s"];

let player

const randomChoice =  choices[Math.floor(Math.random()*choices.length)]

window.onload = (Event) => {
    if (confirm("Would you like to play?") == true) {
        player = prompt("Please enter r p or s" , "");
        console.log(player);
        game();
    }   else {
        document.getElementById("text").innerHTML = "You chose not to play!"
    } //end ifelse

} //end onload



// function promptCode () {
//     let wins = 0;
//     let loses = 0;
//     if (player === randomChoice) {
//                 return "draw"
//             } 
//             if (player === "r" && randomChoice === "s" || //for player wins
//                 player === "s" && randomChoice === "p" ||
//                 player === "p" && randomChoice === "r") {
//                     wins = wins=+1;
//                     console.log(wins);
//                 return "Win!"
//             } else {
//                 loses = loses =+ 1;
//                 return "You lose:-("
//                 console.log(loses);
        
//             }

// }

function game() {  

let wins = 0;
let loses = 0;
switch (player) {

    case player === randomChoice:
        alert("Draw!");
        break;

    case player === "r" && randomChoice === "s":
    case player === "s" && randomChoice === "p":
    case player === "p" && randomChoice === "r":
        wins = wins + 1 
        alert(`You win! 
                wins:${wins}`)
        break;

    case player === "s" && randomChoice === "r":
    case player === "p" && randomChoice === "s":
    case player === "r" && randomChoice === "p":
        loses = loses + 1;
        alert(`You loose!
                losses:${loses}`)
        break;
        
    default:
        alert("That is not a valid selection. Please enter r p or s if you would like to play");
        break;
}
} //end game()

