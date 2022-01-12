const btn1 =document.querySelector("#btn1");
const btn2 =document.querySelector("#btn2");
const btn3 =document.querySelector("#btn3");

const div = document.querySelector(".text");

btn1.addEventListener('click', ()=>{
    if (result < 5) {
    let playerSelection =  btn1.getAttribute("class");
    play(computerSelection, playerSelection);
    div.innerHTML = ("You have won " + result + " times so far!");
    }
    else {
      div.innerHTML =("The Game is over, you won 5 times. Refresh the page to play again!")
    }});

btn2.addEventListener('click', ()=>{
    if (result < 5) {
    let playerSelection =  btn2.getAttribute("class");
    play(computerSelection, playerSelection);
    div.innerHTML = ("You have won " + result + " times so far!");
    }
    else {
      div.innerHTML =("The Game is over, you won 5 times. Refresh the page to play again!")
    }});

btn3.addEventListener('click', ()=>{
    if (result < 5) {
    let playerSelection =  btn3.getAttribute("class");
    play(computerSelection, playerSelection);
    div.innerHTML = ("You have won " + result + " times so far!");
    }
    else {
        div.innerHTML =("The Game is over, you won 5 times. Refresh the page to play again!")
    }});

   
   
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

    //code for a single game
    function play (computerSelection, playerSelection){
        // var playerSelection =  btn.getAttribute("class");
        console.log(playerSelection);
        computerSelection = computerPlay();

        if (playerSelection==='Rock'){
            //what happens if Player chose Rock
            if(computerSelection=='Rock'){
                alert("Computer selected "+ computerSelection+"! It's a tie!. U have won "+ result + " times so far!");
            }
            else if (computerSelection=='Paper'){
                alert("Computer selected "+ computerSelection+"! You lost! Paper beats Rock. U have won " + result + " times so far!");
            }
            else if(computerSelection=='Scissors'){
                result++;
                alert("Computer selected "+ computerSelection+"! You win! Rock beats Scissors. U have won "+ result + " times so far!");
            }
        }
        else if (playerSelection=='Paper'){
            //what happens if Player chose Paper
            if (computerSelection=='Rock'){
                result++;
                alert("Computer selected "+ computerSelection+"! You win! Paper beats Rock. U have won "+ result+ " times so far!");
            }
            else if (computerSelection=='Paper'){
                alert("Computer selected "+ computerSelection+"! It's a tie! U have won "+ result+ " times so far!");
            }
            else if (computerSelection=='Scissors'){
                alert("Computer selected "+ computerSelection+"! You lost! Scissors beats Paper. U have won "+ result+ " times so far!");
            }
            

        }
        else if (playerSelection=="Scissors"){
            //what happens if Player chose Scissors
            if(computerSelection=='Rock'){
                alert("Computer selected "+ computerSelection+"! You lost! Rock beats Scissors. U have won "+ result+ " times so far!");
            }
            else if (computerSelection=='Paper'){
                result++
                alert("Computer selected "+ computerSelection+"! You won! Scissors beats Paper. U have won "+ result+ " times so far!");
            }
            else if (computerSelection=='Scissors'){
                alert("Computer selected "+ computerSelection+"! It's a tie. U have won "+ result+ " times so far!");
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
    