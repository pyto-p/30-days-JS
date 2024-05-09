//PART 1: COMMENTS

// Comments can make code readable.
// Welcome to 30DaysOfJavaScript

/*
  Comments can make code readable, 
  easy to reuse and informative
*/

//PART 2: VARIABLES

//Create a variable.js (not gonna do, i'll just do it here in a single file) file and declare variables and assign string, boolean, undefined and null data types

let name1 = "";
let isMarried = false;
let education;
let assets = null;

//Create datatypes.js file (not gonna do, i'll just do it here in a single file) and use the JavaScript typeof operator to check different data types. Check the data type of each variable

console.log(typeof name1);
console.log(typeof isMarried);
console.log(typeof education);
console.log(typeof assets);

//Declare four variables without assigning values

let firstName1;
let lastName1;
let age1;
let address1;

//Declare four variables with assigned values
const job = "Full Stack Web Developer"
const salary = 500000;
const company = "IBM"
const hasBonus = true;

// Declare variables to store your first name, last name, marital status, country and age in multiple lines

let firstName = "Sebastian"
let lastName = "Temporal"
let maritalStatus = "Single";
let country = "PH"
let age = 21;

//Declare variables to store your first name, last name, marital status, country and age in a single line
let firstName2="Andre", lastName2="Temporal", maritalStatus2="Single", country2="PH", age2="16";

//Declare two variables myAge and yourAge and assign them initial values and log to the browser console.
const myAge = 21;
const yourAge = 25;

console.log(`I am ${myAge} years old, and you are ${yourAge} years old.`)