let userscore = 0;
let compscore = 0;
let gameActive = false;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const startBtn = document.querySelector("#start-btn");
const stopBtn = document.querySelector("#stop-btn");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userscore++;
        msg.innerText = `You won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScorePara.innerText = userscore;
    } else {
        compscore++;
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScorePara.innerText = compscore;
    }
};

const drawGame = () => {
    msg.innerText = "Game Draw";
    msg.style.backgroundColor = "yellow";
};

const playGame = (userChoice) => {
    if (!gameActive) return; 
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        if (!gameActive) {
            alert("Please start the game first!");
            return;
        }
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


startBtn.addEventListener("click", () => {
    gameActive = true;
    userscore = 0;
    compscore = 0;
    userScorePara.innerText = userscore;
    compScorePara.innerText = compscore;
    msg.innerText = "Game started! Make your move.";
    msg.style.backgroundColor = "#081b31";
    startBtn.disabled = true;
    stopBtn.disabled = false;
});


stopBtn.addEventListener("click", () => {
    gameActive = false;
    msg.innerText = "Game stopped! Final score: You - " + userscore + ", Comp - " + compscore;
    msg.style.backgroundColor = "#333";
    startBtn.disabled = false;
    stopBtn.disabled = true;
});
