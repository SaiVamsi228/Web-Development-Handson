let inp = document.querySelector("input")
let p = document.querySelector("#para")

inp.addEventListener("input",()=>{

    p.innerHTML = inp.value;
    console.log("Updated");
    
})
