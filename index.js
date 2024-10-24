const target = Math.floor(Math.random() * 10) + 1;
let guess = null;

while (guess !== target) {
    guess = parseFloat(prompt("Guess a number between 1 and 10"));
     
    if (guess !== target && guess < target) {
    console.log("Higher");
    } 
    else if (guess !== target && guess > target) {
    console.log("Lower");
    }
    else {
    console.log(`Congratulations! The correct number was ${target}!`);
    } 
} 