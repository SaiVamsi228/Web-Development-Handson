// const val = require("./math")
// console.log(val);

// for (let fn in val){
//     console.log(val[fn](3,5));
// }

// let n = 5;

// for (let i = 0 ; i < n ; i ++){
//     console.log(i);
// }

// console.log("Completed");

// let args = process.argv

// for(let i = 2; i < args.length; i++){
//     console.log("Hello: ",args[i]);
// }

import {sum,mul} from "./math.js"
import { generate } from "random-words";

console.log(sum(1,2));
console.log(generate());
