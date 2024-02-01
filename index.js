const choices = ["r", "p", "s"];

const randomChoice =  choices[Math.floor(Math.random()*choices.length)]
start();

function start() {
    if (confirm("Would you like to play?") == true) {
        callGame();
        function callGame() {
        let player = prompt("Please enter r p or s");
        game(player);
        function game(player) {
        console.log(player);
            let wins = 0;
            let loses = 0;
            switch (true) {
            
                case player === randomChoice:
                    alert("Draw!");
                    if (confirm("play again?") == true) {
                        callGame();
                    } else {
                        alert("Have a terrific day!");
                    }; //end ifelse to confirm play again;
                    break;
            
                case player === "r" && randomChoice === "s":
                case player === "ss" && randomChoice === "p":
                case player === "p" && randomChoice === "r":
                    wins = wins + 1 
                    alert(`You win! 
                            wins:${wins}`);
                    if (confirm("play again?") == true) {
                        callGame();
                    } else {
                        alert("Have a terrific day!");
                    }; //end ifelse to confirm play again
                    break;
            
                case player === "s" && randomChoice === "r":
                case player === "p" && randomChoice === "s":
                case player === "r" && randomChoice === "p":
                    loses = loses + 1;
                    alert(`You loose!
                            losses:${loses}`)
                    if (confirm("play again?") == true) {
                        callGame();
                    } else {
                        alert("Have a terrific day!");
                        }; //end ifelse to confirm play again;
                    break;
            
                default:
                    alert("That is not a valid selection. Please enter r p or s if you would like to play");
                    
                    break;
            } //end switch
        } // end game()
    } //end callGame
    }   else {
        document.getElementById("text").innerHTML = "You chose not to play!"
    } //end ifelse
} //end start()
