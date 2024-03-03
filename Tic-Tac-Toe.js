
let Box = document.querySelectorAll('.game-btn');
let newEle = document.querySelector('.myWinner').textContent = "X";
let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let myCheck = 0;
let count = 0;
function checkWinner()
{
    myCheck++;
    for (let pattern of winPatterns)
    {
        let position1 =Box[pattern[0]].textContent;
        let position2 =Box[pattern[1]].textContent;
        let position3 =Box[pattern[2]].textContent;
        if (position1!="" && position2!="" && position3!="")
        {
            if (position1==position2 && position2 == position3 )
            {
                let newEle = document.querySelector('.myWinner').textContent = "Winner";
                for (let myBtn of Box)
                {
                    myBtn.disabled = true;
                }
            }
        }
    }
    newEle = document.querySelector('.myWinner').textContent;
    if (myCheck==9 &&  newEle=="Winner")
    {
        document.querySelector('.myWinner').textContent = "Winner";
        console.log('Winner');
    }
    else if (myCheck==9)
    {
        document.querySelector('.myWinner').textContent = "Draw";
        console.log('Draw');
    }
}

let check = 0;

function ansFun(ele)
{
    
    console.log(myCheck);
    if (check==0)
    {
        let newEle = document.querySelector('.myWinner').textContent = "O";
        ele.innerHTML = "X";
        console.log("ele");
        check = 1;
        ele.disabled = true;
    }
    else
    {
        let newEle = document.querySelector('.myWinner').textContent = "X";
        ele.innerHTML = "O";
        console.log("ele");
        check = 0;
        ele.disabled = true;
    }
    
    checkWinner();
    
}

function Reset()
{
    for (let Boxes of Box)
    {
        document.querySelector('.myWinner').textContent = "X";
        Boxes.textContent = "";
        Boxes.disabled = false;
        myCheck=0;
        check=0;
    }
}
function NewGame()
{
    for (let Boxes of Box)
    {
        document.querySelector('.myWinner').textContent = "X";
        Boxes.textContent = "";
        Boxes.disabled = false;
        check=0;
    }
}