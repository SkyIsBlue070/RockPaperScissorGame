let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const genCompChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const rndmInd = Math.floor(Math.random()*3);
    return options[rndmInd];
}

const showWinner= (userWin) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You Win!!");
        msg.innerText=("Hoorah! You Win :)");
        msg.style.backgroundColor ="green";
    }
        else{
            compScore++;
            compScorePara.innerText=compScore;
            console.log("You Lose! :( ");
            msg.innerText=("Womp Womp! You Lose :(");
            msg.style.backgroundColor ="red";
        }
}

const playGame = (choiceId)=>{
    console.log("User Chose:",choiceId);
    //Generate Computer Choice
    const compChoice = genCompChoice();
    console.log("Computer Chose:",compChoice);

    if(choiceId===compChoice)
        {
            console.log("DRAW! Go Again...");
            msg.innerText=("DRAW...Phew");
        }
    else{
            let userWin=true;
            if(choiceId ==="rock"){
                userWin= compChoice==="paper"? false : true;
            }
            else if(choiceId==="paper"){
                userWin= compChoice==="scissors"?false:true;
            }
            else{
                userWin= compChoice==="rock"?false:true;
            }
            showWinner(userWin);
        }
}


choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const choiceId=choice.getAttribute("Id");
        playGame(choiceId);
    })
})
