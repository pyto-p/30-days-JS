/**
 * INSTRUCTION: Using prompt get the year the user was born and 
 * if the user is 18 or above allow the user to drive if not tell 
 * the user to wait a certain amount of years.
 */


const now = new Date();
const birthYear = prompt("Enter birth year: ");
const currentAge = now.getFullYear() - birthYear;

if (currentAge >= 18) {
    alert(`You are ${currentAge}. You are old enough to drive.`)
} else {
    alert(`You are ${currentAge}. You will be allowed to drive after ${18 - currentAge}`);
}