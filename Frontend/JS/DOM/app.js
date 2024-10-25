let headings = document.getElementsByClassName("myHeadings")

// for (let i = 0; i < headings.length; i ++){
//     headings[i].innerText = "Im Sai Vamsi powerful"
//     console.dir(headings[i]);
// }

let myhead = document.querySelector("h2");

myhead.style.backgroundColor = "goldenrod"

let input = document.createElement("input")

let btn = document.createElement('button')

btn.innerText = "Click Me"

let body = document.querySelector('body')

body.append(input)

input.setAttribute("placeholder","username ")

btn.setAttribute("id","btn")

body.append(btn)    

let butn = document.querySelector("button");

butn.style.backgroundColor = "blue"

butn.style.color = "white"

let h1 = document.createElement("h1")

h1.innerText = "DOM Practice"

h1.innerHTML = `<u>${h1.innerText}</u>`

body.append(h1);

h1.style.color = "purple";

let p = document.createElement("p")

p.innerHTML= "<p>Sai Vamsi <b>DOM</b> Practice</p>";

body.append(p)
