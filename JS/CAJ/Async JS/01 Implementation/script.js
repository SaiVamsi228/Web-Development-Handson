const sayVamsi = function(){
    console.log("Sai Vamsi");
}

// setTimeout(function(){
//     sayVamsi()
// },1000)

const changeText = function () {
    document.querySelector('h1').innerHTML = "Rehearse and Repeat"    
}

// setTimeout(function () {
//     changeText()
// },2000)


const changeMe = setTimeout(changeText(),2000)


const stp = document.querySelector('#stop')

stp.addEventListener('click',function(){
    clearTimeout(changeMe)
    console.log("STOPPED");
})