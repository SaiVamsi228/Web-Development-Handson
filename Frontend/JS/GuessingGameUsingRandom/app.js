let n = prompt("Enter a Max Number: ");

let rN = (Math.floor(Math.random() * n)) + 1;

let guess = prompt(`Guess a number between ${1} and ${n}`);

while (true) {

    if (guess == rN){
        console.log("Congratulations! You guessed it right");

        break;        
    }

    else if (guess > rN){
        console.log("Too High");
    }

    else if (guess < rN){
        console.log("Too Low !");
        
    }

    guess = prompt(`Guess a number between ${1} and ${n}`);


}

