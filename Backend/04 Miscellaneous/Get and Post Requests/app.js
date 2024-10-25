const express = require("express");

const app = express();

const port = 8080;

app.listen(port, () => {
  console.log("Server is running on port: ", port);
});

app.get("/register", (req, res) => {
  let { usrnme, pswd } = req.query;
  console.log(usrnme);

  console.log(req.query);

  res.send(
    `Standard GET response! Welcome ${usrnme} Your Password is :${pswd}`
  );
});

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.post("/register", (req, res) => {
    let { user, pswd } = req.body;
    console.log(req.body);
    console.log(user);
    console.log(pswd);
    res.send(
        `Standard POST response! Welcome ${user} Your Password is :${pswd}`
      );
});
