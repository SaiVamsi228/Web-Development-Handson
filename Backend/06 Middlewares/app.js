const express = require("express")
const app = express();

app.use((req,res)=>{
    console.log("Hi i am middleware")
    res.send("Middleware finished")
})

app.get("/", (req,res)=>{
    res.send("This is Root")
})
app.listen(8080, ()=>{
    console.log("Server is listening to port", 8080)
})

app.get("/random",(req,res)=>{
    res.send("This is a random page")
})