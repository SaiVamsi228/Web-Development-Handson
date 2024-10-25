let btn = document.querySelector("button");

let input = document.querySelector("input");

logInputText = ()=>{

    let input = document.querySelector("input");


    console.log(input.value);
    
}



btn.addEventListener("click",(e)=>{
    console.log(e.key);
    
    logInputText();
    
})

