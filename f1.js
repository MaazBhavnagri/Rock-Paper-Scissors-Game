let my=0;
let comp=0;

const choice=document.querySelectorAll(".Ch");
const msg=document.querySelector("#msg");
const c=document.querySelector("#cScore");
const m=document.querySelector("#mScore");

choice.forEach((element) => {
    element.addEventListener("click", () =>{
        const choiceID = element.getAttribute("id");
        let compID=genCompID();
        playGame(choiceID,compID);
        
    })    
});
let genCompID=()=>
{
    let n=Math.floor(Math.random()*3);
    if(n==0)
    {
        return "rock";
    }
    else if(n==1)
    {
        return "paper"
    }
    else{
        return "Scissors";
    }
}
let winner=(comp,my)=>{
    if(my%5==0 && my>comp)
    {
        alert("You Win the Match with "+my+" points");
        this.my=0,this.comp=0;
    }
    else if (comp%5==0 && comp>my) {
        alert("You Lose the Match win more than "+(comp-my)+" points to comeback");
        this.my=0,this.comp=0;
    }
}
let playGame=(choiceID,compID)=>{
    if(choiceID==compID)
    {
        console.log("Draw");
        msg.innerHTML="<b>Match was Draw</b>";
        msg.style.backgroundColor="black";
    }
    else if(choiceID=="rock" && compID=="paper" || choiceID=="paper" && compID=="Scissors" || choiceID=="Scissors" && compID=="rock")
    {
        comp++;
        console.log("Computer Score="+comp);
        let score=document.querySelector(".Score2");
        score.cScore=comp;
        c.innerText=comp;
        msg.innerHTML="<b>You lose the Match</b>";
        msg.style.backgroundColor="red";
        winner(comp,my);
    }
    else if(choiceID=="Scissors" && compID=="paper" || choiceID=="rock" && compID=="Scissors" || choiceID=="paper" && compID=="rock")
    {
        my++;
        console.log("My Score="+my);
        let score=document.querySelector(".Score1");
        score.mScore=my;
        m.innerText=my;
        msg.innerHTML="<b>You win the Match</b>";
        msg.style.backgroundColor="green";
        winner(comp,my);
    }
}
$(".reload").click(function() {
    location.reload(false);
})