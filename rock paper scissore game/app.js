let uerSCore = 0;
let compSCore = 0;

const choices = document.querySelectorAll(".choice");
let  msg =  document.querySelector("#msg");

const genComputerChoice = () =>
{
    let option = ["rock","scissors","paper"];
    const rankId = Math.floor(Math.random() * 3) ;
    return option[rankId];
    //rock paper scissor  to choose from computer......
};

const drawGame = () =>
{
    console.log("Game Draw");
    msg.innerText = "Game was Draw, play again!";
    msg.style.backgroundColor = "#081b31";
};
 
const showWinner = (userWin) =>
{
    if(userWin)
    {
        console.log("you win!");
        msg.innerText = "You Win";
        msg.style.backgroundColor = "green";
    }
    else{
        console.log("you lose!");
        msg.innerText = "You Lose!";
        msg.style.backgroundColor = "red";
    }
};


const playGame = (userChoice) =>
{
    console.log("user choice = ",userChoice);
    //generate computer choice => modular way of doing coding , one function for the one task;
    const compChoice = genComputerChoice();
    console.log("computer choice = ",compChoice);

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
            showWinner(userWin);
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

