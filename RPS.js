let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const msgdiv=document.querySelector(".msg-container");
const computer=document.querySelector("#comp-score");
const user=document.querySelector("#user-score");

const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    //math.random() generates random no 0-1,if math.random * n, n-1 no will generated
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

}

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        console.log("You win !");
        userScore++;
        user.innerText=userScore;
      msg.innerText=`You win ! Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor="green";
      
    }
    else {
        console.log("You lost :(");
        compScore++;
        computer.innerText=compScore;
        msg.innerText=`You lost. ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor="red";
    }
}

const draw = () => {
    console.log("Game was draw :)");
    msg.innerText=`Game was draw. Play again.`
    msg.style.backgroundColor="rgb(9, 22, 63)";
}

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("Comp Choice =", compChoice);

    if (userChoice === compChoice) {
        draw();
    }
    else {
        let userWin = true;
        if (compChoice === "rock") {
            userWin = userChoice === "paper" ? true : false;
        }
        else if (compChoice === "paper") {
            userWin = userChoice === "scissor" ? true : false;
        }
        else if (compChoice === "scissor") {
            userWin = userChoice === "rock" ? true : false;
        }

        showWinner(userWin,userChoice,compChoice);
    }

};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});