function getRandomHexColor() {
    const colors = "0123456789ABCDEF"
    myColor = "#"
    for (let index = 0; index < 6; index++) {
        myColor += colors[Math.floor(Math.random() * 16)]
    }
    return myColor
}

const ele = document.querySelector('h1')
const body = document.querySelector('body')
let flag = 0
const changebgColor = function(){
    rhc = getRandomHexColor()
    console.log(rhc)
    body.style.backgroundColor = rhc
}

let changeC

const strt = document.querySelector('#start')
strt.addEventListener('click', function(){
    if (!changeC) {
        changeC = setInterval(changebgColor,1000)
        console.log('STARTED')
    }
})

const stp = document.querySelector('#stop')
stp.addEventListener('click',function(){
    clearInterval(changeC)
    changeC = null
    console.log('STOPPED')
})