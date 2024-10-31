let url = "http://universities.hipolabs.com/search?name=India&state-province="

async function getColleges(state){
    try {
        
        let res = await axios.get(url+state);

        return res.data;
        
    } catch (error) {
        console.log(error);
        
    }
}

getColleges()

let btn = document.querySelector("button");
let inp = document.querySelector("input");
let country = ""
let ul = document.querySelector("#results")

btn.addEventListener("click", async ()=>{
    console.log(inp.value);
    
    state = inp.value;

    resp = await getColleges(state);

    console.log(resp);
    
    filteredColleges  = resp.filter(college => college["state-province"] === state)

    console.log(filteredColleges);
    
    ul.innerHTML = "";

    for (res of filteredColleges){
        li = document.createElement("li");
        li.innerText = res.name + " , " + res["state-province"];
        ul.appendChild(li);
    }
    



})