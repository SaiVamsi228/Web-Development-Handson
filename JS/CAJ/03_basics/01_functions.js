// Functions

// console.log("V");
// console.log("a");
// console.log("m");
// console.log("s");
// console.log("i");

function sayMyName(){
    console.log("V");
    console.log("a");
    console.log("m");
    console.log("s");
    console.log("i");
}

// sayMyName()


function addTwoNumbers(a,b){
    return a+b
}


const result = addTwoNumbers(2,"3")
// console.log(result);


function loginUserMessage(username = "Sam"){
    if (username){
        return `${username} just logged in `
    }
    return ` ${username} Please enter a valid Name!`
}

// console.log(loginUserMessage())

// Functions in Objects

function calculateCartPrice(val1,val2,...num){
    return num
}

// console.log(calculateCartPrice(200,400,600,2000))


const user = {
    username: "Vamsi",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "Vamsi",
    price: 199
})