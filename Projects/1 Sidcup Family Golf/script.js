var crsr  = document.querySelector("#cursor")
var blur  = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x - 150 + "px"
    blur.style.top = dets.y - 150 + "px"
})


var tl = gsap.timeline()
tl.to("#nav",{
    height: "100px",
    backgroundColor: "black",
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        start:20,
        end: 30,
        scrub: 1
    }
})

tl.to("#main",{
    backgroundColor: "black",

    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
        // markers: true
    }
})

tl.from("#colon1",{
    y: -100,
    x: -100,

    scrollTrigger:{
        trigger: "#page3",
        scroller: "body",
        start: "top 20%",
        end: "bottom 80%",
        // markers: true,
        scrub: 2,

    }

})

tl.from("#colon2",{
    y: 100,
    x: 100,

    scrollTrigger:{
        trigger: "#page3",
        scroller: "body",
        start: "top 20%",
        end: "bottom 80%",
        // markers: true,
        scrub: 2,

    }

})

tl.from("#bg_quote",{
    y: 100,
    scrollTrigger:{
        trigger: "#page4",
        scroller: "body",
        start: "top 40%",
        end: "bottom 60%",
        scrub: 1,
    }

})