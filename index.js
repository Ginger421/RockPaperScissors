const choices = ["r", "p", "s"];
const randomChoice =  choices[Math.floor(Math.random()*choices.length)]

let wins = 0;
let losses = 0;
let ties = 0;

start();

function start() {
    if (confirm("Would you like to play?") == true) {
        callGame();
        function callGame() {
        let player = prompt("Please enter r p or s");
        game(player);
        function game(player) {
        console.log(player);
            switch (true) {
            
                case player === randomChoice:
                    ties += 1
                    alert(`Tie! 
                    wins:${wins} losses:${losses} ties:${ties}`);
                    if (confirm("play again?") == true) {
                        callGame();
                    } else {
                        alert("Have a terrific day!");
                    }; //end ifelse to confirm play again;
                    break;
            
                case player === "r" && randomChoice === "s":
                case player === "s" && randomChoice === "p":
                case player === "p" && randomChoice === "r":
                    wins += 1
                    alert(`You win! 
                    wins:${wins} losses:${losses} ties:${ties}`);
                    if (confirm("play again?") == true) {
                        callGame();
                    } else {
                        alert("Have a terrific day!");
                    }; //end ifelse to confirm play again
                    break;
            
                case player === "s" && randomChoice === "r":
                case player === "p" && randomChoice === "s":
                case player === "r" && randomChoice === "p":
                    losses += 1
                    alert(`You loose!
                    wins:${wins} losses:${losses} ties:${ties}`)
                    if (confirm("play again?") == true) {
                        callGame();
                    } else {
                        alert("Have a terrific day!");
                        }; //end ifelse to confirm play again;
                    break;
                
                case player != "r":
                case player != "s":
                case player != "p":
                    alert("That was not a valid entry!")
                    if (confirm("play again?") == true) {
                        callGame();
                    } else {
                        alert("Have a terrific day!");
                    }; //end ifelse to confirm play again;
                    break;
            
                default:
                    alert("Have a great day!");
                    //callGame();
                    break;
            } //end switch
        } // end game()
    } //end callGame
    }   else {
        document.getElementById("text").innerHTML = "You chose not to play!"
    } //end ifelse
} //end start()
