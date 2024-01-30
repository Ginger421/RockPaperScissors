const choices = ["r", "p", "s"];

//var player;

const randomChoice =  choices[Math.floor(Math.random()*choices.length)]
start();

function start() {
    if (confirm("Would you like to play?") == true) {
        let player = prompt("Please enter r p or s");
        game(player);
        function game(player) {
        console.log(player);
            let wins = 0;
            let loses = 0;
            switch (true) {
            
                case player === randomChoice:
                    alert("Draw!");
                    confirm("play again?")
                    // if (confirm) {
                    //     player;
                    // } else {
                    //     return;
                    // }
                    break;
            
                case player === "r" && randomChoice === "s":
                case player === "ss" && randomChoice === "p":
                case player === "p" && randomChoice === "r":
                    wins = wins + 1 
                    alert(`You win! 
                            wins:${wins}`);
                    confirm("play again")
                    break;
            
                case player === "s" && randomChoice === "r":
                case player === "p" && randomChoice === "s":
                case player === "r" && randomChoice === "p":
                    loses = loses + 1;
                    alert(`You loose!
                            losses:${loses}`)
                    confirm("play again?");
                    break;
            
                default:
                    alert("That is not a valid selection. Please enter r p or s if you would like to play");
                    break;
            } //end switch
        } // end game()
    }   else {
        document.getElementById("text").innerHTML = "You chose not to play!"
    } //end ifelse
} //end start()


