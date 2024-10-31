// 4 Pillars of DOM

// 1. Selection of an Element
// 2. Changing HTML
// 3. Changing CSS
// 4. Event Listener

// Selecting Multiple elements at the same time


// 1. Selection of an Element

var a = document.querySelector("h1")

console.log(a)

// 2. Changing HTML

var a = document.querySelector("h1")

// a.innerHTML = "Changed HTML" 

// 3. Changing CSS

// a.style.color = "red"

// a.style.backgroundColor = "black"

// 4. Event Listener

a.addEventListener("click",function(){
    a.innerHTML = "Badal Gaya hu mai bhi"
    a.style.color = "yellow"
    a.style.backgroundColor = "#000"
})


// Selecting Multiple elements at the same time

var h  = document.querySelector("h2")

console.log(h) // Selects only the first ele

var h  = document.querySelectorAll("h2")

h.forEach(function(e){
    console.log(e)
})

// To get element by id and class

// var h = document.getElementById("box")

// var h = document.getElementsByClassName("box")


var box = document.querySelector("#box")

box.innerHTML = "<h1>Hello </h1>"

box.textContent = "<h1>Hello </h1>"

