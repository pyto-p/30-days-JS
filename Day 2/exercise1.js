//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days of JavaScript';

console.log("DAY 2: EXERCISE 1");

console.log("\nPrint the string on the browser console using console.log()");
console.log(challenge);

console.log("\nPrint the length of the string on the browser console using console.log()");
console.log(challenge.length);

console.log("\nChange all the string characters to capital letters using toUpperCase() method");
let capChallenge = challenge.toUpperCase();
console.log(capChallenge);

console.log("\nChange all the string characters to lowercase letters using toLowerCase() method");
let lowChallenge = challenge.toLowerCase();
console.log(lowChallenge);

console.log("\nCut (slice) out the first word of the string using substring() method");
let firstWord = challenge.substring(0, 2);
console.log(firstWord);

console.log("\nSlice out the phrase Days Of JavaScript from 30 Days Of JavaScript.");
let daysOfJS = challenge.slice(3);
console.log(daysOfJS);

console.log("\nCheck if the string contains a word Script using includes() method");
let scriptInclude = challenge.includes("Script");
console.log(scriptInclude);

console.log("\nSplit the string into an array using split() method");
let splitChallenge = challenge.split(' ');
console.log(splitChallenge);

console.log("\n'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.");
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let compSplit = companies.split(', ');
console.log(compSplit);

console.log("\nChange 30 Days Of JavaScript to 30 Days Of Python using replace() method.");
let replacePython = challenge.replace("JavaScript", "Python");
console.log(replacePython);

console.log("\nWhat is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.");
let charIndex = challenge.charAt(15);
console.log(charIndex);

console.log("\nWhat is the character code of J in '30 Days Of JavaScript' string using charCodeAt()");
let jCode = challenge.charCodeAt(11);
console.log(jCode);

console.log("\nUse indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript");
let firstA = challenge.indexOf('a');
console.log(firstA);

console.log("\nUse lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.");
let lastA = challenge.lastIndexOf('a');
console.log(lastA);

console.log("\nUse indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'");
let searchSentence = 'You cannot end a sentence with because because because is a conjunction';
let firstBecause = searchSentence.search("because");
console.log(firstBecause);

console.log("\nUse trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.");
let whiteSpace = " 30 Days of JavaScript ";
let noSpace = whiteSpace.trim(' ');
console.log(noSpace);

console.log("\nUse startsWith() method with the string 30 Days Of JavaScript and make the result true");
console.log(challenge.startsWith('30'));
console.log(challenge.startsWith('30 Days'));

console.log("\nUse endsWith() method with the string 30 Days Of JavaScript and make the result true");
console.log(challenge.endsWith('JavaScript'));

console.log("\nUse match() method to find all the a’s in 30 Days Of JavaScript");
let matchA = challenge.match('a');
console.log(matchA);

console.log("\nUse concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'");
let emptyString = '';
let concatString = emptyString.concat('30 Days of', " JavaScript");
console.log(concatString);

console.log("\nUse repeat() method to print 30 Days Of JavaScript 2 times");
console.log(challenge.repeat(2));