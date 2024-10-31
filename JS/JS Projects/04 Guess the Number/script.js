let actNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1


const form = document.querySelector("#form")
const userInput = document.querySelector("#guessField")
const submit = document.querySelector("#subt")

const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")

const startOver = document.querySelector(".resultParas")

const p = document.createElement('p')
const button = document.createElement("button")

let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame){

    submit.addEventListener('click',(e)=>{

        e.preventDefault()

        const guess = parseInt(userInput.value)

        console.log(guess);

        validateGuess(guess)


    })
}

function validateGuess(guess){

    if ( isNaN(guess) ){
        alert("Please enter a valid number")
    }

    else if ( guess < 1 ){
        alert("Please Enter a number >=1")
    }

    else if ( guess > 100){
        alert("Please Enter a number <=100")
    }

    else{
        prevGuess.push(guess)

        if (numGuess === 10){
            displayGuess(guess)
            displayMessage(`Game Over. <br> Random Number was ${actNumber}`)
            endGame()
        }

        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}


function checkGuess(guess){

    if (guess === actNumber){
        
        displayMessage("You Guessed it right")
        endGame()

    }

    else if (guess < actNumber){

        displayMessage("Number is Toooo.. Low!")

    }

    else {

        displayMessage("Number is Toooo.. High!")

    }



}

function displayGuess(guess){

    userInput.value = ''
    guessSlot.innerHTML += ` ${guess}`
    numGuess ++
    remaining.innerHTML = `${11 - numGuess}`

}

function displayMessage(message){

    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value =  ""
    userInput.setAttribute('disabled', "")
    button.classList.add('button')
    button.innerHTML = `Start new Game`
    button.style.border = "solid 2px white"
    button.style.fontSize = "15px"
    button.style.marginTop = "0px"
    button.addEventListener("mouseover",()=>{
        button.style.backgroundColor = "white"
        button.style.color = "black"
    })
    startOver.appendChild(button)

    playGame = false
    newGame()
}

function newGame(){
    const newGamebutton = document.querySelector("button")

    newGamebutton.addEventListener("click",()=>{
        
        let actNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ""
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true

    })
}





