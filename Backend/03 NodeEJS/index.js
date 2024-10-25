const express = require("express");
const app = express();

const path = require("path")

const instaData = require("./data.json")

const port = 8080;

app.use(express.static(path.join(__dirname,"public/css")))
app.use(express.static(path.join(__dirname,"public/js")))

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);    
})

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"))

app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    
    if (username in instaData){        
        let data = instaData[username];
        res.render("instagram.ejs",{data})}
    else{
        res.render("error.ejs", {username});
    }
    // console.log(data);
})

app.get("/rolldice",(req,res)=>{
    let diceVal = Math.floor(Math.random()*6) + 1 ;
    res.render("rolldice",{diceVal})
})
app.get("/hello",(req,res)=>{
    res.send("hello")
})
