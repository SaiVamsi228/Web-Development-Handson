gsap.to("#page1 h1",{
    transform: "translateX(-60%)",
    fontWeight: "100",
    scrollTrigger: {
        trigger: "#page1", /*trigger should be parent when using pin*/
        scroller: "body",
        markers: true,
        start: "top 0",
        end: "top -200%",
        scrub: 3,
        pin: true

    }
})