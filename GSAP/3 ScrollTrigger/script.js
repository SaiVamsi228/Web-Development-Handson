tl = gsap.timeline()
tl.from("#page1 #box",{
    scale:0,
    rotate: 360,
    duration:1,
    delay:1
})

tl.from("#page2 #box",{
    scale:0,
    duration:1,
    rotate: 90,
    scrollTrigger:{
        trigger: "#page2 #box",
        scroller: "body",
        markers: true,
        start: "top 80%",
        end: "top 50%",
        scrub: 5

    } 
})

