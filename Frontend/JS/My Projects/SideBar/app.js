let btn = document.querySelector("button");
let main = document.querySelector(".main")
let opened = false

let cont = document.createElement("div")
let newB = document.querySelector(".newB")
     
cont.innerHTML = `<h1>Coding Addict</h1> <table><tr><td><a href="">Home</a></td></tr><tr><td><a href="">Home</a></td></tr><tr><td><a href="">Home</a></td></tr><tr><td><a href="">Home</a></td></tr><tr><td><a href="">Home</a></td></tr></table> <button class="newB">X</button>`

cont.classList.add("container")

btn.addEventListener("click",()=>{
    if (!opened){
        opened = true;
        main.prepend(cont);
        btn.remove()
    }
})

newB.addEventListener("click",()=>{
    
    cont.remove();

    main.prepend(btn);

    opened = false;
})