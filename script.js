
    function computerPlay () {
        let comp = Math.floor(Math.random()*3+1);
        switch(comp){
            case 3:
                return "Rock";
                 break;
            case 2:
                return "Paper";
                break;
            case 1:
                return "Scissors"
                break;
        }  
    }

    let computerSelection;
    let result = 0;
    let playerSelection

    //code for a single game
    function play (computerSelection, playerSelection){
        playerSelection=prompt("Rock/Paper/Scissors?")
        computerSelection = computerPlay();
        //computer shows what he randomly picked
        console.log("Computer selected "+ computerSelection);
        
        if (playerSelection==='Rock'){
            //what happens if Player chose Rock
            if(computerSelection=='Rock'){
                    return "It's a tie!. U have won "+ result + " times so far!";
            }
            else if (computerSelection=='Paper'){
                    return "You lost! Paper beats Rock. U have won " + result + " times so far!"
            }
            else if(computerSelection=='Scissors'){
                    result++
                    return "You win! Rock beats Scissors. U have won "+ result + " times so far!";
            }
        }
        else if (playerSelection=='Paper'){
            //what happens if Player chose Paper
            if (computerSelection=='Rock'){
                result++;
                return "You win! Paper beats Rock. U have won "+ result+ " times so far!";
            }
            else if (computerSelection=='Paper'){
                return "It's a tie! U have won "+ result+ " times so far!";
            }
            else if (computerSelection=='Scissors'){
                return "You lost! Scissors beats Paper. U have won "+ result+ " times so far!";
            }
            

        }
        else if (playerSelection=="Scissors"){
            //what happens if Player chose Scissors
            if(computerSelection=='Rock'){
                    return "You lost! Rock beats Scissors. U have won "+ result+ " times so far!";
            }
            else if (computerSelection=='Paper'){
                result++
                    return "You won! Scissors beats Paper. U have won "+ result+ " times so far!";
            }
            else if (computerSelection=='Scissors'){
                    return "It's a tie. U have won "+ result+ " times so far!"
            }
            }

        else {
            console.log("Either you misspelled or you did not choose any of the 3 options");
        }
    }
    
    //Function to play the game 5 Times, counts how many times you won and gives the End result
    function game (computerSelection, playerSelection){
  
        for (i=1; i<6; i++) {
            console.log( play(computerSelection, playerSelection));
    }
        console.log("Your end-result is "+ result);
        result=0;
    }