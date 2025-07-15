let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let  msg =  document.querySelector("#msg");
let  userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const genComputerChoice = () =>
{
    let option = ["rock","scissors","paper"];
    const rankId = Math.floor(Math.random() * 3) ;
    return option[rankId];
    //rock paper scissor  to choose from computer......
};

const drawGame = () =>
{
    
    msg.innerText = "Game was Draw, play again!";
    msg.style.backgroundColor = "#081b31";
};
 
const showWinner = (userWin , userChoice , compChoice) =>
{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText = userScore;

        msg.innerText = `You Win!  your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};


const playGame = (userChoice) =>
{
    
    //generate computer choice => modular way of doing coding , one function for the one task;
    const compChoice = genComputerChoice();
   

    if(userChoice == compChoice)
    {
        drawGame();
    }
    else
        {
            let userWin = true;
            if(userChoice == "rock")
            {
                // scissors,paper
                userWin = compChoice === 'paper' ?   false : true;
            }
            else if(userChoice === "paper")
            {
                //rock , scissors
                userWin = compChoice === "scissors" ? false : true;
            }
            else{
                // rock , paper
                userWin = compChoice === "rock" ? false : true;
            }
            showWinner(userWin,userChoice,compChoice);
        }
};

choices.forEach((choice) =>
    {
       // console.log(choice);
        choice.addEventListener("click", () =>
    {
        const userChoice = choice.getAttribute("id");
        
        playGame(userChoice);


    });
    });

