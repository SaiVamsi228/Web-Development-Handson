const express = require("express");

const app = express();

// console.dir(app);

let port = 8080; // 8080

app.listen(port, ()=>{
    console.log("App is Listening on port:",port);
})

// app.use((req,res)=>{
//     // console.log(req);
//     // console.log(res);

    
    
//     console.log("Request received!");

//     let code = "<h1>My Fav Fruit <h1>  <li> Mango </li> <li> Litchi </li> "
    
//     res.send(code )
// })

app.get("/:username/:id", (req,res)=>{
    let {username , id } = req.params;
    console.log(username);

    htmlStr = `<h1>Welcome to the page of @${username} </h1>`
    
    res.send(htmlStr);
})

// app.get("/apple",(req,res)=>{
//     res.send("You contacted apple path")
// })
// app.get("/orange",(req,res)=>{
//     res.send("You contacted orange path")
// })

// app.get("/pineapple",(req,res)=>{
//     res.send("You contacted pineapple path")
// })

// app.get("*",(req,res)=>{
//     res.send("This path does not exist")
// })

// app.post("/",(req,res)=>{
//     res.send("You sent a post request to root")
// })

app.get("/search",(req,res)=>{
    console.log(req.query);
    res.send("success") 
    
})