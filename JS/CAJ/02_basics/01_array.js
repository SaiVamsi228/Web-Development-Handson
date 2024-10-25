// Arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ['shaktiman', 'naagraj']

const my_Arr2 = new Array(1,2,3,4)

console.log(my_Arr2);

myArr.push(10)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(10)
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(10));
console.log(myArr.indexOf(3));
console.log(myArr.indexOf(8));

newArr = myArr.join()

console.log(newArr);
console.log(typeof newArr);


// Slice and Splice

console.log("A ",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C ",myArr);

