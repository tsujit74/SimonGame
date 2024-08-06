let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "purple", "green"];

let started = false;
let level = 0;
let h2 = document.querySelector('h2');
let startBtn = document.querySelector("#startBtn");
let clearBtn = document.querySelector('#clearBtn');

// document.addEventListener("keypress", function () {
//     if (started == false) {
//         console.log("game Start!");
//         started = true;

//         levelUP();
//     }
// });
startBtn.addEventListener("click", function () {
    if (started == false) {
        console.log("game Start!");
        started = true;

        levelUP();
    }
});

clearBtn.addEventListener("click",function(){
    alert("History is Deleted!");
    ul.remove();
});


let okBtn = document.querySelector('#nameSubmit');
let inputName = document.querySelector("input");
okBtn.addEventListener("click",function(){
    inputName.setAttribute("disabled",true);
});
let ul = document.querySelector('ul');
// p.innerText = `Your Scroe is: ${level}`;

function addResult(){
    let listScore = document.createElement('li');
    listScore.innerHTML = `<b>${inputName.value}</b> Your Score is: ${level}`;
    ul.append(listScore);
    console.log("List Added!");
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUP,1000);
        }
    } else {
        h2.innerHTML = `Game over! ${inputName.value} Your Score Was <b>${level}</b> <br> Press start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        inputName.removeAttribute("disabled",false);
        addResult();
        resetGame();
    }
}

function gameFlash(btn) {
    // console.log(this);
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250);
}


function levelUP() {
    userSeq=[];
    level++;
    h2.innerText = `Level: ${level}`;

    let randomIndex = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIndex];
    let randomBtn = document.querySelector(`.${randomColor}`);

    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randomBtn);
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click",btnPress);
}


function resetGame(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

