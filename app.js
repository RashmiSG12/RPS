let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const scoreUser = document.querySelector("#user-score");
const scoreComp = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const drawGame = () => {
    msg.innerText = "Oh NOOOOO It's a draw";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        scoreUser.innerText = userScore;
        msg.innerText = `Hurray You Win your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        scoreComp.innerText = compScore;
        msg.innerText = `Oops! You lose ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    //Generate computer choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        //Draw
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            //comp -> scissors, paper
            userWin = compChoice === "paper" ? false: true;
        }else if(userChoice === "paper"){
            //comp -> rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }else { //user -> scissors
            //comp -> rock, paper
            userWin = compChoice === "rock" ? false: true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice =  choice.getAttribute("id");
        playGame(userChoice);
    });
});

