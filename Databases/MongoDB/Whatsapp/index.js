const express = require("express")
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const path = require("path")
const methodOverride = require("method-override");

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let Whatsapp = new mongoose.Schema({
    from : {
        type : String,
        required : true
    },
    msg : {
        type: String,
    },
    to : {
        type : String,
        required : true
    },
    date : {
        type : Date,
    }
})

let Chat = mongoose.model("Chat", Whatsapp);

let chat1 = new Chat({
    from : "Sai Vamsi",
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam recusandae quae id aspernatur ipsam itaque ad natus, aliquam illum fuga minima, minus labore at dolorem neque perferendis tenetur voluptate quis. Nobis quibusdam delectus pariatur fuga sunt ea quisquam accusantium velit enim molestias ab, accusamus doloribus odio! Ducimus cum consequuntur nostrum.",
    to : "Poorna Sai",
    date : new Date()
})


// chat1.save().then(res => console.log(res))
// .catch(err => console.log(err))  

app.set("view engine", "ejs")

app.set("views" ,path.join(__dirname, "views"))

app.use(express.static(path.join(__dirname, "public")))

app.listen(port , (req,res)=>{
    console.log("Server started on port: ", port);
})


app.get("/", async (req,res)=>{
    res.send("This is root! ")
})

app.get("/chats", async (req,res)=>{
    let allChats = await Chat.find();
    
    res.render("index",{allChats});
})

app.get("/chats/new", (req,res)=>{
    res.render("newChat");
})

app.use(express.urlencoded({extended : true}));

app.post("/chats", async (req,res)=>{

    let {from , msg, to} = req.body;

    await new Chat({
        from : from,
        msg: msg,
        to: to,
        date : new Date()
    }).save();

    res.redirect("/chats");

})

app.get("/chats/:id/edit", async (req, res)=>{

    let {id} = req.params;

    let chat = await Chat.findById(id);

    res.render("editChat", {chat, id});
})

app.use(methodOverride('_method'));

app.put("/edit/:id", async (req,res)=>{

    let {id} = req.params;

    let {newMsg} = req.body;    

    await Chat.findByIdAndUpdate(id, {msg : newMsg})

    res.redirect("/chats");
})

app.delete("/chats/:id", async (req,res)=>{
    let {id} = req.params;

    await Chat.findByIdAndDelete(id, {new:true});


    res.redirect("/chats");
})