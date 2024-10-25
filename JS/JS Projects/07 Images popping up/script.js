
 
const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    };  
}


contentArea = document.querySelector("#center")


contentArea.addEventListener("mousemove",
    throttleFunction((dets) => {

        // Our less Repeatation code
    
        let div = document.createElement("div")
        // div.style.position = "absolute"

        div.classList.add('imagediv')

        div.style.left = dets.clientX - 100 + "px" 
        div.style.top = dets.clientY  + "px"


        let img = document.createElement("img")

        img.setAttribute("src","https://images.unsplash.com/photo-1715412405339-5d3c3aa70ec6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")

        

        let tl = gsap.timeline()
        tl.to("img",{
            y: "0",
            ease: Power1,
            duration: 0.5

        })

        tl.to("img",{
            y: "100%",
            ease: Power3,
            delay: 0.6,
            duration: 0.5
        })
        
        
        setTimeout(function(){
            div.remove();
        },3000)

        div.appendChild(img)

        document.body.appendChild(div)
        
    }, 600));
