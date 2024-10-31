var tl = gsap.timeline()

tl.from("#nav",{
    opacity : 0,
    duration: 0.8
})

tl.from("#nav h1 , #nav h2 ",{
    y: -80,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3
})
tl.from("#cont1",{
    duration: 0.3,
    opacity: 0,
})

tl.from("#cont1 h1",{
    x: -80,
    opacity : 0,
    stagger: 0.3
})

tl.from("#cont1 img",{
    opacity: 0,
    scale: 50,
    duration: 1
})

tl.from("#cont2 h2",{
    y: 50,
    opacity: 0,
    stagger: 0.3
})

tl.from("#right img",{
    opacity: 0,
    duration: 0.5

})

tl.from("#right_cont h2",{
    opacity: 0,
    stagger: 0.3,
    x: 50
})



gsap.from("#page2 .box",{
    scale: 0.5,
    opacity: 0.5,
    duration : 1.5,
    stagger: 0.1,
    scrollTrigger: {
        trigger: "page2 .box",
        scroller: "body",
        start: "bottom 50%",
        scrub:1,
    }
})