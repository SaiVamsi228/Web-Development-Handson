// falsy values
// false, 0, -0, BigInt 0n, "", null,undefined, NaN


// truthy values
// "0","false"," ", [], {}, function(){} 


// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
val2 = null ?? 10 ?? 20

console.log(val1);
console.log(val2);

// Ternary Operator

// condition ? true: false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("Less than 80") : console.log("more than 80");; 