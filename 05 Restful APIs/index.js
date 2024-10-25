const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
  { id: uuidv4(), username: "ElonMusk", content: "Why not die on Mars?????" },
  {
    id: uuidv4(),
    username: "SaiVamsi",
    content: "I love coding",
  },
  {
    id: uuidv4(),
    username: "RGV",
    content:
      "Since there is no point in life, better to live it point to point and point by point",
  },
  {
    id: uuidv4(),
    username: "Svamsi",
    content:
      "In life, every event is independent of the past and the future. So why to carry the past or worry about the future!",
  },
  {
    id: uuidv4(),
    username: "NelsonMandela",
    content:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  },
  {
    id: uuidv4(),
    username: "NelsonMandela",
    content: "It always seems impossible until it’s done.",
  },
  {
    id: uuidv4(),
    username: "NelsonMandela",
    content:
      "What counts in life is not the mere fact that we have lived. It is what difference we have made to the lives of others that will determine the significance of the life we lead.",
  },
  {
    id: uuidv4(),
    username: "NelsonMandela",
    content:
      "There is no passion to be found playing small – in settling for a life that is less than the one you are capable of living.",
  },
  {
    id: uuidv4(),
    username: "NelsonMandela",
    content: "I am the master of my fate: I am the captain of my soul.",
  },
  {
    id: uuidv4(),
    username: "NelsonMandela",
    content:
      "Do not judge me by my successes, judge me by how many times I fell down and got back up again.",
  },
  {
    id: uuidv4(),
    username: "NelsonMandela",
    content: "A winner is a dreamer who never gives up.",
  },
  {
    id: uuidv4(),
    username: "NelsonMandela",
    content:
      "Live life as though nobody is watching, and express yourself as though everyone is listening.",
  },
  {
    id: uuidv4(),
    username: "NelsonMandela",
    content:
      "Education is the most powerful weapon which you can use to change the world.",
  },
  {
    id: uuidv4(),
    username: "NelsonMandela",
    content:
      "As we let our own light shine, we unconsciously give other people permission to do the same.",
  },
];

app.listen(port, () => {
  console.log("Listening to port: ", port);
});

app.get("/", (req, res) => {
  res.send("Server working well");
});

app.get("/posts/new", (req, res) => {
  res.render("newPost");
});

app.post("/posts", (req, res) => {
  let { username, post } = req.body;

  // console.log(req.body);

  if (username != "" && post != "") {
    posts.push({ id: uuidv4(), username: username, content: post });
    res.redirect("/posts");
  }
});

app.get("/posts", (req, res) => {
  let { username } = req.query;

  // console.log("Req working");

  // console.log(username);

  if (username) {
    let filteredPosts = posts.filter(
      (post) => post.username.toLowerCase() === username.toLowerCase()
    );

    res.render("posts", { posts: filteredPosts });
  } else {
    res.render("posts", { posts: posts });
  }
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;

  // console.log(id);

  // console.log(id);

  let username = "";

  let content = "";

  for (let post of posts) {
    if (post.id == id) {
      username = post.username;
      content = post.content;
    }
  }

  console.log(username, content);

  res.render("showPost", { id: id, username: username, content: content });
});

app.get("/posts/edit/:id", (req, res) => {
  let { id } = req.params;

  let post = posts.find((post) => post.id == id);

  let username = post.username;

  let content = post.content;

  res.render("newContent", { id: id, username: username, content: content });
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;

  let { newContent } = req.body;

  // console.log("New Content", newContent, id);

  let myPost = posts.find((post) => post.id == id);

  myPost.content = newContent;

  res.redirect("/posts");
});


app.delete("/posts/:id", (req,res)=>{
  let {id} = req.params;

  let filteredPosts = posts.filter(post=> post.id != id);

  posts = filteredPosts;
  res.redirect("/posts");
})