let c1 = document.querySelector("#c1");
let c2 = document.querySelector("#c2");
let c3 = document.querySelector("#c3");
let c4 = document.querySelector("#c4");

let box = document.querySelector(".box");

let flashColor = (container)=>{
    let prevColor = container.style.backgroundColor;
    container.style.backgroundColor = "white";
    setTimeout(()=>{
        container.style.backgroundColor = prevColor;
    },50)
}

let sequence = [];



let addColor = ()=>{

    announcement.innerText = `Level ${i+1} Your score: ${points }`
    let arr = [c1,c2,c3,c4];
    let randomContainer = arr[Math.floor(Math.random() * 4) + 1 - 1]
    console.log(randomContainer.id);

    sequence.push(randomContainer.id);
    console.log(sequence);
    
    flashColor(randomContainer);
}
let start = false;

document.body.addEventListener("keydown",()=>{

    if(!start){
        announcement.innerText = "Level 1"
    addColor();
    start = true;
    };
})



let i = 0;
let points = 0 ;

let displayScore = ()=>{
    announcement.innerText = `GAME OVER  YOUR FINAL SCORE: ${points}`
    announcement.style.color = "goldenrod"
    
}

let announcement = document.createElement("h1");

announcement.innerText = "Press any key to start the game";

announcement.style.color = "goldenrod"
let heading = document.querySelector(".heading");

announcement.classList.add("myHeading")

heading.append(announcement)

box.addEventListener("click",(e)=>{

    let container = e.target.id;

    if(container == "c1"){
        container = c1;
    }
    else if(container == "c2") {
        container = c2;
    }
    else if(container == "c3") {
        container = c3;
    }
    else if(container == "c4") {
        container = c4;
    }  else{
        container = null;
    }
    

    if (container.id != sequence[i]){
        document.body.backgroundColor = "red"
        // setTimeout(()=>
        //     {
        //         document.body.backgroundColor = "white"
        //     }, 1000);
        
        start = null;
        displayScore();
        points = 0;

    } else{
        i += 1;
        
        if (i>=sequence.length){
            points += 100;
            addColor();
            i = 0;
        } else{
            announcement.innerText = `Level ${i+1} Your score: ${points }`
        }
       
    }
})