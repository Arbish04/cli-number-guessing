#! /User/bin/env node
import inquirer from "inquirer"
//1) computer will generate a random number
//2) user input for the guessing number
//3) compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random()*5+1);
const answers = await inquirer.prompt([{
    name: "UserGuessedNumber",
    message: "Please Guess a number",
    type: "number",
}]);
if(answers.UserGuessedNumber === randomNumber){
    console.log("Congratulations!! You guessed it right");
}else{console.log("you guessed it wrong");}


