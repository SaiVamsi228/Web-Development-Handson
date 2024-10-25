// singleton
// objects create
// object literals

const mySym = Symbol("key1")

const JsUser = {

    name: "Vamsi",
    'full name': 'Sai Vamsi',
    [mySym]: 'mykey1',
    age: 18,
    location : 'Jaipur',
    email: 'vamsi22@gmail.com',
    isLoggedIn: false,
    lastLoginDays: ['Monday','Saturday']
}

// console.log(JsUser[mySym]);
// console.log(JsUser.email);
// console.log(JsUser["full name"]);
// console.log(JsUser.lastLoginDays[0]);
// console.log(JsUser.isLoggedIn);

JsUser.email = 'sai22@gmail.com'
console.log(JsUser.email);

JsUser.greeting = 'Hej'
console.log(JsUser);
console.log(JsUser.greeting);

JsUser.greeting = function(abc){
    console.log(`Hello ${abc}`);
}

// console.log(JsUser);

// console.log(JsUser.greeting()); //prints Hello undefined returns undefined
// console.log(JsUser.greeting(JsUser.name)); // prints Hello Vamsi returns undefined

// console.log(JsUser);

JsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(JsUser.greeting2());