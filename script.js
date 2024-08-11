let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let container = document.querySelector(".container1")
let winner = document.querySelector(".winner")

let turn0 = true;
const winarr = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[3,4,5],[2,4,6],[6,7,8]];
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn0 === true){
            box.innerText = "0";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
});
const resetgame = () =>{
    turn0 = true;
    inabledboxes();
    container.classList.add("hide");
}
const inabledboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const disabledboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const showWinner = (w) =>{
    winner.innerText = w +' is Winner';
    container.classList.remove("hide");
    disabledboxes();
}

const checkwinner = () =>{
    for(let pattern of winarr){
        let p1 = boxes[pattern[0]].innerText
        let p2 = boxes[pattern[1]].innerText
        let p3 = boxes[pattern[2]].innerText
        if(p1 !="" && p2 != "" && p3 != ""){
            if(p1 === p2 && p2 === p3){

                showWinner(p1);
            }
        }

    }
}
resetbtn.addEventListener("click",resetgame);