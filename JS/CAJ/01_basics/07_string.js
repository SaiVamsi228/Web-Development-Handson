const name = "Vamsi"

const repoCount = 50

// console.log(name + repoCount + " Value"); // Dont use this syntax use modern days

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('Sai Vamsi')

console.log(gameName); // In browser we get each char as key: val pairs and the data type of string is object

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName);


console.log(gameName.charAt(5));
console.log(gameName.indexOf('V'));
console.log(gameName.indexOf('t'));

const newString =  gameName.substring(0,4)
console.log((newString));

const anotherString = gameName.slice(-10,0)
console.log(anotherString);

const newStringOne = '    Sai Vamsi '
console.log((newStringOne));
console.log((newStringOne.trimStart()));


const url = 'https://sv.com/sai%20Vamsi'
console.log(url.replace('%20',"-"));
console.log(url.includes('vs'));

const stringOne = "Sai* Vamsi"
console.log(stringOne.split("*"));