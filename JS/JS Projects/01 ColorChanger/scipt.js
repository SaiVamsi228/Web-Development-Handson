
const body = document.querySelector("body")
const btn = document.querySelectorAll("button")

console.log(btn)

btn.forEach(function (button) {

    button.addEventListener('mouseover', function(e){

        if (e.target.className === 'grey'){
            body.style.backgroundColor = "gray"
        }


        if (e.target.className === 'white'){

            body.style.backgroundColor = "white"
        }

        if (e.target.className === 'blue'){

            body.style.backgroundColor = "blue"
        }

        if (e.target.className === 'yellow'){

            body.style.backgroundColor = "yellow"
        }
    })

})

// gbtn.addEventListener("click", function(){
//     document.body.style.backgroundColor = "gray"
// })

// const wbtn = document.querySelector(".white")

// wbtn.addEventListener("click", function(){
//     document.body.style.backgroundColor = "white"
// })

// const bbtn = document.querySelector(".blue")

// bbtn.addEventListener("click", function(){
//     document.body.style.backgroundColor = "blue"
// })

// const ybtn = document.querySelector(".yellow")

// ybtn.addEventListener("click", function(){
//     document.body.style.backgroundColor = "yellow"
// })

