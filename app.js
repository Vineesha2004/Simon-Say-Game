let gameSeq=[];
let userSeq=[];

let btns=["yellow" , "red" , "purple" ,"green"];

let started = false;
let level=0;

let h2=document.querySelector("h2");

// step 1 =  keypress -> game started

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started ") 
        started = true;

        levelUp();
    }
});

// step 2 = flash + level up 

// function for game flash 

function gameFlash(btn){
    btn.classList.add("flash")
    setTimeout(function () {
        btn.classList.remove("flash")
    } ,250);
}

// function for user flash 

function userFlash(btn){
    btn.classList.add("user-flash")
    setTimeout(function () {
        btn.classList.remove("user-flash")
    } ,250);
}

// function for increasing level of the game 
function levelUp(){
    userSeq= [];
    level++;
    h2.innerText= `Level ${level}`;
    

 //random btn choose 

let randIdx= Math.floor(Math.random() * 3);
let randColor=btns[randIdx];
let randBtn = document.querySelector(`.${randColor}`);
// console.log(randIdx);
// console.log(randColor);
// console.log(randBtn);
gameSeq.push(randColor);
console.log("gameSeq",gameSeq);
 gameFlash(randBtn);
}

// checking if gameseq = userSeq
function checkAns(idx){
     if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
           setTimeout(levelUp, 1000);
        }  // if gameSeq != userSeq or user entered wrong sequence 
     } else{
        h2.innerHTML = `Game Over!! your score was <b>${level} </b> <br>press any key to start .`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        } , 150);
        reset();
     }
} 


function btnPress() {
    // console.log(this)
   let btn = this;
   userFlash(btn);

   userColor = btn.getAttribute("id");
   userSeq.push(userColor);
   console.log("userSeq",userSeq);
checkAns(userSeq.length-1);

}
 let allBtns=document.querySelectorAll(".btn");
 for(btn of allBtns){
    btn.addEventListener("click", btnPress);
 }

 // function reset 
 function reset(){
    started = false;
    gameSeq= [];
    userseq = [];
    level = 0;
 }