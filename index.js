const { faker, tr } = require("@faker-js/faker");
const { v4: uuidv4 } = require("uuid");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const { ne } = require("@faker-js/faker");

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let port = 8080;

app.listen(port, (req, res) => {
  console.log("Server started on port: ", port);
});

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "instagram",
  password: "Saivamshi)2284",
});

getRandomUser = () => {
  return {
    userId: uuidv4(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};

app.get("/", (req, res) => {
  let q = "SELECT COUNT(*) AS user_count from users;";
  try {
    connection.query(q, (err, result) => {
      if (err) {
        throw err;
      }
      console.log(result);

      res.render("home", { userCount: result[0].user_count });
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/user", (req, res) => {

  let q = "SELECT * FROM users;"

  try {
    connection.query(q, (err, result) => {
      if (err) {
        throw err;
      }
      res.render("displayUsers", {data: result});
    });
  } catch (error) {
    console.log(error);
    
  }
});

app.use(express.urlencoded({ extended: true }));

app.post("/edit/:id/:username",(req,res)=>{
  let {id , username} = req.params ;
  res.render("editUsername", {id : id, username: username})
})

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.patch("/user/:id/:username", (req, res)=>{
  
  let {id, username} = req.params;

  let {newUsername} = req.body;

  let q = "UPDATE users set username = ? where userId= ?";


  try {
    connection.query(q, [newUsername, id], (err, result)=>{
      if (err){
        if (err.code === "ER_DUP_ENTRY"){
          console.log("Hiiiii");
          
          return res.render("dupUsername", {id , username});
        }
      }
      res.redirect("http://localhost:8080/user");
    })
  } catch (error) {
    console.log(error);
  }
})

app.get("/newuser", (req, res)=>{
    res.render("addNewUser");
})

app.post("/user",(req, res)=>{

  let {username, email} = req.body;

  let id = uuidv4();

  let password = faker.internet.password();

  let data = [id, username, email, password];
  

  let q = "INSERT INTO users VALUES(?, ?, ?, ?);";

  try {
    connection.query(q,data, (err, result)=>{
      if (err){
        if (err.code === 'ER_DUP_ENTRY') {
          return res.render("dupError");
        }
        else{
          return res.status(500).send("Internal Server Error");
        }
      }
      console.log("Hi");
      
      res.redirect("http://localhost:8080/user");
    })
  } catch (error) {
    console.log(error);
    
    
  }
})

app.post("/user/:id", (req,res)=>{
  
  let {id} = req.params;

  try {

    let q = "DELETE FROM users where userId = ?"

    connection.query(q, id, (err, result)=>{
      if (err){
        throw err;
      }
      res.redirect("http://localhost:8080/user")
    })
    
  } catch (error) {
    console.log(error);
    
  }
})
// data = [];

// for (let i = 0; i < 100; i++) {
//     const user = getRandomUser();
//     // Push array of values instead of object
//     data.push([
//         user.userId,
//         user.username,
//         user.email,
//         user.password
//     ]);
// }

// let q = "INSERT INTO users VALUES ?";

// try {
//     connection.query(q, [data], (err, result) => {
//         if (err) {
//             throw err;
//         }
//         console.log("Tables in the database:", result);
//     });
// } catch (error) {
//     console.log("Error showing tables:", error);
// }
