// Dates

const myDate = new Date()

// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let mynewDate = new Date(2024,0,15); //yyyy,mm,dd
console.log(mynewDate.toLocaleString());

mynewDate = new Date("11-31-2025") // mm-dd-yyyy
// console.log(mynewDate.toLocaleString());


let newDate = new Date()
// console.log(newDate.toLocaleDateString());
// console.log(newDate.getDay());
// console.log(newDate.getMonth());
// console.log(newDate.getFullYear())
// console.log(newDate.getMinutes());

console.log(`${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`);


// let myTimeStamp = Date.now()

// console.log(Math.floor(myTimeStamp/(1000*60*60)));


startTimeStamp = new Date(2024,3,24)

curTimeStamp = new Date()

prev_time = startTimeStamp.getTime()
cur_time = curTimeStamp.getTime()

console.log(curTimeStamp.toLocaleString(),startTimeStamp.toLocaleString());

console.log(`The number of days since ${curTimeStamp.toLocaleString()} is ${((cur_time - prev_time)/ (1000*60*60*24)).toFixed(2)} days` );
console.log(`The number of hours since ${curTimeStamp.toLocaleString()} is ${Math.round(((cur_time - prev_time)/ (1000*60*60)))} hours` );
console.log(`The number of minutes since ${curTimeStamp.toLocaleString()} is ${Math.round(((cur_time - prev_time)/ (1000*60)))} minutes` );
console.log(`The number of seconds since ${curTimeStamp.toLocaleString()} is ${Math.round(((cur_time - prev_time)/ (1000)))} seconds` );


