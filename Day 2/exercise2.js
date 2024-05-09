console.log("DAY 2: EXERCISE 2");

console.log("\nUsing console.log() print out the following statement:");
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

console.log("\nUsing console.log() print out the following quote by Mother Teresa:");
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

console.log("\nCheck if typeof '10' is exactly equal to 10. If not make it exactly equal.");
let num = 10;
let strNum = '10';

console.log("Type of num: " + typeof num);
console.log("Type of strNum: " + typeof strNum);
console.log(typeof num === typeof strNum);
console.log("To make it equal, we need to change the type of strNum using parseInt (my preference)");
strNum = parseInt(strNum);
console.log(typeof num === typeof strNum);

console.log("\nCheck if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.");
console.log(parseFloat(9.8) === 10);
console.log("To make it equal we need to use Math.round()");
console.log(Math.round(parseFloat(9.8)) === 10);

console.log("\nCheck if 'on' is found in both python and jargon");
console.log("python".includes("on"));
console.log("jargon".includes("on"));

console.log(`\n"I hope this course is not full of jargon." Check if jargon is in the sentence.`);
'I hope this course is not full of jargon'.includes("jargon");

console.log("\nGenerate a random number between 0 and 100 inclusively.");
console.log("General Formula: Math.floor(Math.random()*(max-min + 1)+min);")
Math.floor(Math.random()*100+1);

console.log("\nGenerate a random number between 50 and 100 inclusively.");
Math.floor(Math.random()*(50-40) + 40);

console.log("\nGenerate a random number between 0 and 255 inclusively.");
Math.floor(Math.random()*255+1);

console.log("\nAccess the 'JavaScript' string characters using a random number.");
let charJS = 'JavaScript';
let randIndex = Math.floor(Math.random() * charJS.length);
console.log(charJS.charAt(randIndex));

console.log("\nUse console.log() and escape characters to print the following pattern.");
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

console.log("\nUse substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'");
let sampleString = "You cannot end a sentence with because because because is a conjunction";
sampleString.indexOf('because');
let lenBecause = "because".length;
let firstInstance = sampleString.indexOf('because');
let lastInstance = sampleString.lastIndexOf('because');
let slicedString = sampleString.substring(firstInstance, lastInstance + lenBecause);
/** 
 * I get the sum of lastInstance and the length of the string because in order to slice the last instance of the word because.
*/
console.log(slicedString);