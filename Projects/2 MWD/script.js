const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var crsr = document.querySelector("#cursor")

window.addEventListener("mousemove",function(dets){
        crsr.style.left = dets.x - 5.5 + "px";
        crsr.style.top = dets.y - 5.5 + "px";
})


tl = gsap.timeline()

tl.from(".nav, #product, #design ",{
    y: 20,
    opacity: 0,
    duration:1,
    ease: Expo.easeInOut,
})

let tme = Document.querySelector(".time h4")

tme.innerHTML = "SaiVamsi" 

// tl.from(" #product",{
//         y: 100,
//         opacity: 0,
//         color: "black",
//         ease: Expo.easeInOut,

// })

// tl.from(" #design",{
//     y: 100,
//     opacity: 0,
//     color: "black",
//     ease: Expo.easeInOut,
// })

tl.from(".content h4, .content-right h4",{
    y: -50,
    opacity: 0,
    color: "black",
    ease: Expo.easeInOut,

})