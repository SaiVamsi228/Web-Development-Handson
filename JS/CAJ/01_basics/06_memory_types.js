// Stack (used in Primitive ), Heap (used in non-Primitive)

let myName = "Sai Vamsi"

let anotherName = myName

anotherName = "Sai Vamshi"

console.log(anotherName);

console.log(myName);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "user2@google.com"

console.log(userOne.email);

console.log(userTwo.email);