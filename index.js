const choices = ["r", "p", "s"];

const randomChoice =  choices[Math.floor(Math.random()*choices.length)]

window.onload = (Event) => {
    if (confirm("Would you like to play?") == true) {
        let player = prompt("Please enter r p or s" , "");
        console.log(player);
        promptCode();
    }   else {
        document.getElementById("text").innerHTML = "You chose not to play!"
    } //end ifelse

} //end onload



function promptCode () {
    let wins = 0;
    let loses = 0;
    if (player === randomChoice) {
                return "draw"
            } 
            if (player === "r" && randomChoice === "s" || //for player wins
                player === "s" && randomChoice === "p" ||
                player === "p" && randomChoice === "r") {
                    wins = wins=+1;
                    console.log(wins);
                return "Win!"
            } else {
                loses = loses =+ 1;
                return "You lose:-("
                console.log(loses);
        
            }

}

// //alert is for score
// alert(loses, wins)

