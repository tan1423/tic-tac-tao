console.log("welcome to tic tac toc game");
let turn = "X";
let gameover = false;

const changeturn  = ()=>{
    return turn === "X" ? "O" : "X";
}
const chancewin = ()=>{
    let boxtexts = document.getElementsByClassName("boc-text");
    let win = [
        [0, 1, 2, 2.5, 5, 0],
        [3, 4, 5, 2.5, 15, 0],
        [6, 7, 8, 2.5, 25, 0], 
        [0, 3, 6, -7.5, 15, 90],
        [1, 4, 7, 2.5, 15, 90], 
        [2, 5, 8, 12.5, 15, 90],
        [0, 4, 8, 2.5, 15, 45], 
        [2, 4, 6, 2.5, 15, 135],
    ]
    win.forEach(e=>{
        if((boxtexts[e[0]].innerHTML === boxtexts[e[1]].innerHTML) && (boxtexts[e[2]].innerHTML === boxtexts[e[1]].innerHTML) && (boxtexts[e[0]].innerHTML !== "")){
            document.querySelector(".info").innerHTML = boxtexts[e[0]].innerHTML + " won";
            gameover = true;
            document.querySelector(".imginfo").getElementsByTagName('img')[0].style.width = "150px";
            document.querySelector(".line").style.width = "25vw";
            document.querySelector(".line").style.transform =  `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}
//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector(".boc-text");
    element.addEventListener('click', ()=>{
        if(boxtext.innerHTML === ''){
            boxtext.innerHTML = turn;
            turn = changeturn();
            chancewin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerHTML = 'turn of ' + turn;
            }
        }
    })
})

reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll(".boc-text");
    Array.from(boxtexts).forEach(element=>{
        element.innerHTML = "";
    })
    turn = "X";
    gameover = false;
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerHTML = 'turn of ' + turn;
    document.querySelector(".imginfo").getElementsByTagName('img')[0].style.width = "0px";
})