const mongoose = require("mongoose");

// mongoose.connect("mongodb://12.0.0.27017/test");

main()
  .then((res) => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

const user1 = new User({
  name: "Adam",
  email: "adam@yahoo.in",
  age: 48,
});

// user1.save();

// const user2 = new User({
//   name: "Eve",
//   email: "eve@yahoo.in",
//   age: 44,
// });

// user2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.insertMany([
//   { name: "Calvin", email: "adam@yahoo.in", age: 48 },
//   { name: "Klein", email: "eve@yahoo.in", age: 33 },
//   { name: "Gucci", email: "parker@yahoo.in", age: 22 }
// ]);

// User.find({age : {$gt: 47}})
//   .then((res) => console.log(res[0].name))
//   .catch((err) => console.log(err));

// User.updateMany({ age: {$lt : 25} }, { age: 25 })
//   .then((res) => console.log("updated Data"))
//   .catch((err) => console.log(err));


// User.findByIdAndUpdate({_id : "6725c6ef661ebb904590c178"}, {age: 50}, {new : true})
// .then(res => console.log(res))
// .catch(err => console.log(err))


// User.deleteOne({name: "Calvin"})
// .then( res => console.log(res))
// .catch( err => console.log(err))

// User.findOneAndDelete({name : "Gucci"}, {new : true})
// .then(res => console.log(res))
// .catch(err => console.log(err))

User.findByIdAndDelete({_id : "6725c3d4fe2b19a52b8b3105"}, {new : true})
.then(res => console.log(res))
.catch(err => console.log(err))
