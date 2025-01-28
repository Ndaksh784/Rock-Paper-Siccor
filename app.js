let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
     


};
const showinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        console.log("You win");
        msg.innerText=`You won! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
        userscorepara.innerText=userscore;
        
    } 
    else{
        compscore++;
        console.log("You lose");
        msg.innerText=`You lose.${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
        compscorepara.innerText=compscore;
    }
};
const drawgame=()=>{
    console.log("Game draw");
    msg.innerText="Game Draw";

};
 const playgame=(userchoice)=>{
    console.log("user ",userchoice);
    const compchoice=gencompchoice();
    console.log("comp choice=",compchoice);
    if(userchoice===compchoice){
        drawgame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice=="paper"?false:true;

        }
        else if(userchoice==="paper"){
            userwin=compchoice=="scissors"?false:true;
        }
        else{
            userwin=compchoice=="rock"?false:true;

 
    }
    showinner(userwin,userchoice,compchoice);
}

};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
        
         

    });
});