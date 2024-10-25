let url = "https://v2.jokeapi.dev/joke/Any?safe-mode";
let url2 = 'https://dog.ceo/api/breeds/image/random';

let getFacts = async ()=>{

    try {
        let res = await axios.get(url);
        
        return res.data.setup + res.data.delivery;
        
    } catch (error) {
        console.log(error);
    }
    
}

let getImg = async ()=>{
    let resp = await axios.get(url2);
    return resp.data.message
    
}

getImg();
let btn = document.querySelector("button");
let p = document.querySelector("p");
btn.addEventListener("click",async ()=>{
    p.innerText = await getFacts();
})



let link = ""
let myImg = document.createElement("img");
// btn.addEventListener("click", async ()=>{
//     try {
        
//         link = await getImg();
//         if (myImg){
//             myImg.remove();
//         }

//         let myImg = document.createElement("img");
//         p.appendChild(myImg)
//         myImg.setAttribute("src", link)
//         console.log(myImg);
//         myImg.classList.add(".myImg")
//     } catch (error) {
//         console.log("OOps couldn't fetch a dog img");
        
//     }
    
// })