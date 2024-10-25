const express = require("express");

const app = express();

const port = 8080;

app.listen(port,()=>{
    console.log("Server is running on port: ",port);
})

const path = require("path");

app.set("view engine","ejs");

app.set("views",path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname, 'public/css')));

app.use(express.static(path.join(__dirname, 'public/js')));

app.get("/",(req,res)=>{

    res.render("home");

})

app.get("/about",(req,res)=>{

    res.render("about");

})

app.get("/skills",(req,res)=>{

    res.render("skills");

})

app.get("/projects",(req,res)=>{

    res.render("projects");

})

app.get("/education",(req,res)=>{
    
    res.render("education")

})