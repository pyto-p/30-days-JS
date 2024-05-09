console.log("DAY 2: EXERCISE 3");

console.log("\n'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.");
let matchString = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(matchString.match(/love/g).length);

console.log("\nUse match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'")
let matchString2 = 'You cannot end a sentence with because because because is a conjunction'
matchString2.match(/because/g).length;

console.log("\nClean the following text and find the most frequent word (hint, use replace and regular expressions):");
console.log("const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'");

let sampleText = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

const regex = /[^\w\s?!]/g; //Negates word character and whitespace character and (?!) thus, it only gets the special characters that messes up the string.
sampleText = sampleText.replace(regex, '').split(' '); //Clean the sample text using regex

let wordCount = sampleText.reduce((counts, word) => {
  counts.set(word, (counts.get(word) || 0) + 1);
  return counts;
}, new Map()).entries();

let maxCount = 0;
let mostWord;
for (const [word, count] of wordCount) {
  if (count > maxCount) {
    maxCount = count;
    mostWord = word;
  }
};

console.log("Most frequent word:", mostWord, "(", maxCount, "occurrences)");

console.log("\nCalculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'");
let income = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

let regex2 = /\D+/g;

income = income.replace(regex2, ' ').trim(' ').split(' ');

let monthly = parseInt(income[0]);
let annualBonus = parseInt(income[1]);
let onlineCourse = parseInt(income[2]);

let totalEarnings = ((monthly + onlineCourse)*12) + annualBonus;

console.log(totalEarnings);
