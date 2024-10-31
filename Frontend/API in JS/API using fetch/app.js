let url = "https://catfact.ninja/fact";

fetch(url)
.then((res)=>{
    return res.json();    
})
.then((resJson)=>{
    console.log(resJson.fact);
    return fetch(url)
})
.then((res)=>{
    return res.json();    
})
.then((data2)=>{
    console.log(data2.fact);
    return fetch(url)
})
.then((Res)=>{
    return Res.json();
})
.then((res)=>{
    console.log(res.fact);    
})
.catch((err)=>{
    console.log(err);
})



getFacts = async ()=>{
    try {
        let res =  await fetch(url);
        let data = await res.json();
        console.log(data.fact);
        
    } catch (error) {
        console.log(error);
        
    }
}

getFacts();