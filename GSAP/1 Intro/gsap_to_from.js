// gsap.to("#box",{
//     x: 900 ,
//     duration: 2,
//     delay: 1,
//     backgroundColor: "blue",
//     rotate:90,
//     scale: 0.5
// })


// gsap.from("#box",{
//     x:900,
//     y:900,
//     duration: 2,
//     delay: 1,
//     backgroundColor: "blue",
//     rotate:90,
//     scale: 0.5,
// })

gsap.to("h1",{
    x: 500,
    color: "orange",
    duration: 1,
    delay:1,
    stagger: .125,
    repeat: 0,
    yoyo: true
})

gsap.to("h2",{
    x : 550,
    duration:0.5,
    color : "white",
    delay : 1 ,
})

gsap.to("h3",{
    x: 600,
    duration: 0.25,
    color: "green",
    delay: 1.5,
})