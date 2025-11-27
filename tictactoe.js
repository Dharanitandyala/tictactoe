let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newGame=document.querySelector("#newGame");
let msgContainer=document.querySelector(".msg-container");
let msg= document.querySelector("#msg");


let turn=true;
let count=0;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame =() =>{
    turn=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) =>{
   box.addEventListener("click",()=>{
    
let p1 = document.getElementById("player-input1").value.trim();
let p2 = document.getElementById("player-input2").value.trim();

if(p1 === "" || p2 === ""){
    alert(" Please enter both player names before playing!");
    return; 
}
   
    if(turn){
      box.innerText="o";
      turn=false;
    }
    else{
    box.innerText="x";
    turn=true;
    }
    box.disabled=true;
    count++;

    let isWinner=checkWinner();
     if (count===9 && !isWinner){
        gameDraw();
     }
   });
});

const gameDraw=() =>{
    msg.innerText=`Tie-ishh👏`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};


const disableBoxes=() =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner) =>{
    let winnerName = winner === "x" 
        ? document.getElementById("player-input1").value 
        : document.getElementById("player-input2").value;

    msg.innerText = `Winner Winner Chicken Dinner..\n🏆 Winner: ${winnerName} 💥🔥`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner=() =>{
    for(let pattern of winPatterns){
        
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                console.log("Winner",pos1);
                showWinner(pos1);
            }
        }
    }
};

newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);

