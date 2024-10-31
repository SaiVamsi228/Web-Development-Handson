let h1 = document.createElement("h1");

h1.innerText = "Generate a Random color";

let btn = document.createElement("button");

btn.innerText = "Generate Color";

let box = document.createElement("div");

box.style.border = "2px solid black"

let p = document.createElement("p");

p.innerText = "This is your new Color"

box.append(p);

let body = document.querySelector("body");

// body.style.backgroundColor = "#DADADA"

body.append(h1);

body.append(btn);

body.append(box);

box.classList.add("box")

btn.addEventListener("click",()=>{
    console.log("Color will change right away!");
    let randomColor = generateRandomColor();
    box.style.backgroundColor = randomColor;
    box.style.color = "#FFFFFF";
    h1.style.color = randomColor;
    h1.innerText = randomColor;
})

generateRandomColor = ()=>{
    let r= 0;
    let g = 0;
    let b = 0;

    r = Math.floor(Math.random()*255) + 1
    g = Math.floor(Math.random()*255) + 1
    b = Math.floor(Math.random()*255) + 1

    let color = `rgb(${r},${g},${b})`;

    return color;
}


