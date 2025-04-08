let userScore = 0;
let comScore = 0;
const userChoices = document.querySelectorAll(".img");


const botChoice = () =>{
    const opt = ["rock","paper","scissors"];
    return opt[Math.floor(Math.random()*3)];
};

userChoices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        if(choice.getAttribute("id")=="rock"){
            document.getElementById("user-choice").src = "rock.png";
        }
        else if(choice.getAttribute("id")=="paper"){
            document.getElementById("user-choice").src = "paper.png";   
        }
        else if(choice.getAttribute("id")=="scissors"){
            document.getElementById("user-choice").src = "scissors.png";   
        }
        if (botChoice()=="rock"){
            console.log("bot choice made");
            document.getElementsByClassName("bot-choice").src="rock.png";
        }
        else if (botChoice()=="paper"){
            console.log("bot choice made");
            document.getElementsByClassName("bot-choice").src="paper.png";
        }
        else if (botChoice()=="scissors"){
            console.log("bot choice made");
            document.getElementsByClassName("bot-choice").src="scissors.png";
        }
    });
});

