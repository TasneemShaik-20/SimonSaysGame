let gameseq=[];// intially empty array of game seq i.e before starting the game 
let userseq=[];//initially empty array of user seq  i.e before starting the game
let btns=["red","yellow","blue","pink"];
let started=false;
let level=0;


let h2=document.querySelector("h2");
// let btn=document.querySelector(".btn");

document.addEventListener("keypress",function(){//if we press a key anywhere on the white screen the game will get started
    if(started==false){//after clicking any key the game gets started and started vlue changes to true 
        console.log("Game Started");
        started=true;

        levelUp();//after gam is started the level changes to level 1//
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);
}

 

function levelUp(){
    userseq=[];
     level++;
     h2.innerText=`level ${level}`;//level ${1} i.e level 1//
    



    //selecting the button randomly by js
    let randIdx=Math.floor(Math.random()*3);
    let randclr=btns[randIdx];
    let randBtn=document.querySelector(`.${randclr}`);
    console.log(randIdx);
    console.log(randclr);
    console.log(randBtn);
    gameseq.push(randclr);//adding clrs to array that js has selected
    console.log(gameseq);
        //  after levelup random button is choosen //
     gameFlash(randBtn)
 }

    function checkAns(idx){
        // console.log("current  level:",level);
         
        if(userseq[idx]===gameseq[idx]){//check game clr and user selected clr are same
            if(userseq.length==gameseq.length){
                setTimeout(levelUp,1000);
            
            }
        }else{//if not same game over
            h2.innerHTML=`Game Over!  Your score : <b>${level}</b> <br> Press any key to start again.`;
            document.querySelector("body").style.backgroundColor="red";
            setTimeout(function (){
                document.querySelector("body").style.backgroundColor="white";
            },250);
            reset();
        }
    }

 function btnPress(){
    let btn=this;
    userFlash(btn);

    usercolor=btn.getAttribute("id");
    console.log(usercolor);
    userseq.push(usercolor);//pushing the user color in the userseq array to which which color has selected till now
    
    checkAns(userseq.length-1);
    }

 let allBtns=document.querySelectorAll(".btn");
 for(btn of allBtns){
    btn.addEventListener("click",btnPress);
 }

 function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
 }