const rect = document.querySelector("#center")
const body = document.querySelector("body")

body.addEventListener("mousemove",(details)=>{

   console.log(details.clientY)

   gsap.to("#center",{
    x : details.clientX - (1395/2) - .30*(details.clientX - (1395/2)) ,
    // y : details.clientY - (690/2) - .30*(details.clientY - (690/2) ),
    rotate: 0 - .04*(details.clientX - (1395/2))
   })
})

