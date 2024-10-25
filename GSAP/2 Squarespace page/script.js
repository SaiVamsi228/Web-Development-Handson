var tl = gsap.timeline()
tl.from("#nav",{
    y:-100,
    duration:1,
    opacity:0,
})

tl.from("#left_img ,#right_img, #top_right, #bottom_left",{
    opacity:0,
    duration:1,
    // scale:0,
})

tl.from("#main h1",{
    opacity:0,
    duration: 1,
    y:-30,
    // scale: 0,
    stagger: true,
})

tl.from("#button",{
    y:100,
    opacity:0,
    scale: 0,
})

tl.to("#button",{
    y: 25,
    repeat: -1,
    yoyo: true,
})

tl.from("#main h1 span",{
    scale:0.75,
    // duration:.5,
    repeat: -1,
    yoyo:true
})
