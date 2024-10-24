function guessNumbersGame() {
    
    // Creating a random number between 1-10
    const target = Math.floor(Math.random() * 10) + 1;
    
    // Prompting user for their guess
    let guess = null;

    // The while loop will keep prompting the user to guess until they have guessed the right number.
    while (guess !== target) {
        guess = parseFloat(prompt("Guess a number between 1 and 10"));
        
        // If the user's guess is LOWER than the target they will get a clue to guess a higher number.
        if (guess < target) {
        console.log("Higher");
        }
        // If the user's guess is HIGHER than the target they will get a clue to guess a lower number.
        else if (guess > target) {
        console.log("Lower");
        }
        // If the user guesses the target number they will get the below message.
        else {
        console.log(`Congratulations! The correct number was ${target}!`);
        console.log("Refresh the page to try again!")
        } 
    }
}

guessNumbersGame();