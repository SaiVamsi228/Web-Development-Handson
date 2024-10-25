let rect = document.querySelector('#center');

rect.addEventListener("mousemove",function(details){

    console.log(rect.getBoundingClientRect());

    mouseLocation = details.clientX

    colorIntensityL = (Math.floor(255*((698-mouseLocation)/(200)))).toString()
    colorIntensityR = (Math.floor(255*((mouseLocation - 698)/(200)))).toString()



    if (  mouseLocation < 698) {

        rect.style.borderColor = `rgb(${colorIntensityL},0,0)`
    }

    else if ( mouseLocation < 898){
        rect.style.borderColor = `rgb(0,0,${colorIntensityR})`
    }
})

rect.addEventListener("mouseleave",()=>{
    rect.style.borderColor = "white"
})