
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
    
    function play (computerSelection, playerSelection){
        console.log(computerSelection);
        if (playerSelection==='Rock'){
            switch(computerSelection){
                case 'Rock':
                    return "It's a tie!";
                    break;
                case 'Paper':
                    return "You lost! Paper beats Rock"
                    break;
                case 'Scissors':
                    return "You win! Rock beats Scissors"
                    break;
            }
        }
        else if (playerSelection=="Paper"){
            switch(computerSelection){
                case 'Rock':
                    return "You win! Paper beats Rock";
                    break;
                case 'Paper':
                    return "It's a tie!"
                    break;
                case 'Scissors':
                    return "You lost! Scissors beats Paper"
                    break;
            }

        }
        else if (playerSelection=="Scissors"){
            switch(computerSelection){
                case 'Rock':
                    return "You lost! Rock beats Scissors";
                    break;
                case 'Paper':
                    return "You won! Scissors beats Paper"
                    break;
                case 'Scissors':
                    return "It's a tie"
                    break;
            }
        }
        else {
            console.log("Either you misspelled or you did not choose any of the 3 options");
        }
    }
    