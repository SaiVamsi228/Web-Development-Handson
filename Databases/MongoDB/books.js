const mongoose = require("mongoose");

// mongoose.connect("mongodb://12.0.0.27017/test");

main()
  .then((res) => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,
    },
    author : {
        type: String
    },
    price: Number
});

const Book = new mongoose.model("Book", bookSchema);

let book1 = new Book({
    title : "How to cure a Mockingbird",
    author : "Harper Leeward",
    price : "100"
})


book1.save().then(res => console.log(res))
.catch(err => console.log(err))

