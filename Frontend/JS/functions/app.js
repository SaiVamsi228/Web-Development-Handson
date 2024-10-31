// function isAdult(age){
    
//     if(age>=18){
//         console.log("Adult");
//     }
//     else{
//         console.log("Not an adult");
//     }
// }

// console.log(isAdult(3));

// Roll a Die

function rollADie(){

    diceVal = Math.floor(Math.random() * 6) + 1 ;
    
    return diceVal;
}

console.log(rollADie());

function printInfo(nme,age){
    console.log(nme,age);
    
};

printInfo("Sai",10)
printInfo("Vamsi", 20)


function avg(a,b,c){

    return (a+b+c)/3 ;
}

console.log(avg(9.29,9.09,8.8));


function printTable(n){

    let i = 1;

    for(let i = 1; i<=10; i++){
        console.log(`${n} x ${i} = ${n*i}`);        
    }

};

printTable(43)


function sum1ton(n){

    let s = 0;

    for(let i = 1; i <= n; i++){
        s += i;
    }

    return s;
}

console.log(sum1ton(8));


function concatArrOfStrings(arr){

    let str = "";

    for(s of arr){

        str += s;
    };

    return str
}

arr = ["S","a","i","V","a","m","s","i"];

console.log(concatArrOfStrings(arr));

const sum = function(a,b){
    return a+b;
}

console.log(sum(2,8));

function multipleGreet(func, n){
    for(let i = 0; i<n; i++){
        func();
    }
}

let greet = function(){
    console.log("hello");
}

multipleGreet(function() {console.log("Waka Waka")}, 2);

let oddEvenTest = function(req){

    if(req == "odd"){
        return function(n){
            console.log(!(n%2 == 0));
        }
    } else if (req == "even"){
        return function(n){
            console.log(n%2 == 0);
        }
    } else{
        console.log("wrong request");
    }
}

req = "odd"
let func = oddEvenTest(req)

func(11)

const calculator = {
    add(a,b) {

        return a + b;
        
    },

    sub(a,b){

        return a - b;
    },

    mul(a,b){
        return a*b;
    }
}


console.log(calculator);

