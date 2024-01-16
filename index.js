const choices = ["r", "p", "s"];

const player = ["r", "p", "s"]

const randomChoice =  choices[Math.floor(Math.random()*choices.length)]

console.log(randomChoice);

window.onload = (Event) => {
    let text;
    if (confirm("Would you like to play?") == true) {
        let game = prompt("Please enter r p or s" , "");
        game;
    }   else {
        text = "You chose not to play!"
    } //end ifelse

    console.log(game);

} //end onload



// function promptCode () {
//     let wins = 0;
//     let loses = 0;
//     prompt("please enter r p s"); //am i grabbing this?
//     console.log(prompt)
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

// //alert is for score
// alert(loses, wins)

