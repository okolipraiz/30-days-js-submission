const challenge = "30 Days of JavaScript";
const company = "Facebook, Googl, Microsoft, Apple, IBM, Oracle, Amazon";
const text =
    "You cannot end a sentence with because because because is a conjunction";
const firstPart = "30 Days of";
const secondPart = "JavaScript";
const fullpart = firstPart + " " + secondPart;

//Console.log All answers
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(1));
console.log(challenge.slice(3));
console.log(challenge.includes("Script"));
console.log(challenge.split(""));
console.log(challenge.trim().split(/\s+/));
console.log(company.split(","));
console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(7));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
console.log(text.indexOf("because"));
console.log(text.lastIndexOf("because"));
console.log(text.search(/because/gi));
console.log(challenge.trimStart());
console.log(challenge.startsWith("30 Days of JavaScript"));
console.log(challenge.endsWith("30 Days of JavaScript"));
console.log(challenge.match(/a/gi));
console.log(firstPart.concat("" + " Javascript"));
console.log(fullpart.concat());
console.log(challenge.repeat(3));

// LEVEL 2
const sentence =
    " The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
const secondSentence =
    "'Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.'";
const numbs = "10";
const numy = parseInt(numbs);
const numx = 10;

const secNumb = "9.8";
const secNumbs = parseFloat(Math.round(secNumb));

const checkOn = "python & jargon";
const jargon = "jargon";

const maxNum = 100;
const randomNum = Math.random() * maxNum + 1;
const secMaxNum = 100;
const secRandomNum = Math.random() * secMaxNum + 50;

const stringAtRandom = "Javascript";
const stringGenRan = parseInt(stringAtRandom, 10);

const listNo =
    "1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125";

console.log(sentence);
console.log(secondSentence);
console.log(numy == numbs);
console.log(typeof numbs);

console.log(secNumbs === numx);
console.log(checkOn.match(/on/gi));
console.log(checkOn.match(/jargon/gi));

if (checkOn.search(/jargon/gi === jargon)) {
    console.log(true);
} else {
    console.log(false);
}

console.log(Math.round(randomNum));
console.log(Math.round(secRandomNum));
console.log(stringGenRan);
console.log(listNo);
console.log(text.slice(31, 54));

// LEVEL 3
const words =
    "Love is the best thing in this world. Some found their love and some are still looking for their love.";
const sentences =
    "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

console.log(words.length);
console.log(text.match(/because/gi).length);
console.log(sentences.replaceAll("%", "&", "@"));

const salaryPerMonth = 5000;
const annualBonus = 10000;
const onlineCourse = 15000;

console.log(salaryPerMonth + annualBonus + onlineCourse);

const regax = /%/gi;
const secRegax = /&/gi;
const thirdRegax = /@/gi;
console.log(sentences.replaceAll(regax, ""));
console.log(sentences.replaceAll(secRegax, ""));
console.log(sentences.replaceAll(thirdRegax, ""));
