// OPERATOR PRECEDENCE
console.log(3 + 4 * 5); // 3 + 20 = 23
console.log(4 * 3 ** 2); // 4 * 9 = 36

let a = 999;
let b = 400;
let c = 50;
console.log(a - b > a - c); 
console.log(3 + 10 * 2);   // logs 23
console.log(3 + (10 * 2)); // logs 23 because parentheses here are superfluous
console.log((3 + 10) * 2); // logs 26 because the parentheses change the order

// Precedence   Operator type           Associativity        Operator
// 14           Exponentation           right-to-left        **
// 13           Multiplication          left-to-right        *
// 13           Division                left-to-right        /
// 13           Remainder               left-to-right        %
// 12           Addition                left-to-rigt         +
// 12           Subtraction             left-to-right        -
// 10           Less than               left-to-right        <
// 10           Less than or equal      left-to-right        <=
// 10           Greater than            left-to-right        >
// 10           Greater than or equal   left-to-right        >=
// 9            Equality                left-to-right        ==
// 9            Inequality              left-to-right        !=
// 9            Strict Equality         left-to-right        ===
// 9            Strict InEquality       left-to-right        !==
// 8            AND                     left-to-right        &
// 7            XOR                     left-to-right        ^
// 6            OR                      left-to right        |
// 5            Logical AND             left-to-right        &&
// 4            Logical OR              left-to-right        ||
// 4            Nullosh coalescing op.  left-to-right        ??
// 3            Conditional (ternary) op. left-to-right      ?  :

// TEMPLATE LITERALS
/* Template literals are literals delimited with backtick (`) characters, 
allowing for multi-line strings, for string interpolation with embedded expressions, 
and for special constructs called tagged templates. */

const myName = "Jessika";
const presentation = "I'm " + myName;
// this would cause an error: 'I'm' + myName because of the single quotes
console.log(presentation);
// better practise using backticks `
const present = `I'm ${myName}`;
console.log(present);

console.log("String with \n multiple \n lines");
// better practise using backticks `
console.log(`String with
multiple
lines`);

// TERNARY OPERATOR
const age = 18;
age >= 18 ? console.log("I can legally drive") : console.log("I can't legally drive");

//Type coercion
/*Type coercion is the automatic or implicit conversion of values from one data 
type to another (such as strings to numbers). Type conversion is similar to type 
coercion because they both convert values from one data type to another with one 
key difference — type coercion is implicit whereas type conversion can be either 
implicit or explicit. */
const value1 = '5';
const value2 = 9;
let sum = value1 + value2;
console.log(sum);//59
//converts value1 to a number
sum = Number(value1) + value2; //14
console.log(sum);//14
//conversion
console.log("23" - "10" -3); //10
const year = "2022";
console.log(year + 15);//202215
console.log(Number(year) + 15);//2037
//the strings are converted to numbers
console.log("23" > "18"); //true
let n = "1" + 1; //11
n = n -1;
console.log(n);//10

//ARRAYS
const characters = ["Chewbacca", "Khal Drogo", "Tommy Shelby", "Yoda"];
const moreCharacters = ["Littlefinger", "Zaphod", "Totoro"];
const allCharacters = characters.concat(moreCharacters);
console.log(allCharacters);
/* 
  'Chewbacca',
  'Khal Drogo',
  'Tommy Shelby',
  'Yoda',
  'Littlefinger',
  'Zaphod',
  'Totoro'
*/
// add to array with push()
allCharacters.push("Mononoke");
// pop() removes the last element of an array.
allCharacters.pop();
// Shift (remove) the first element of the array:
allCharacters.shift();
// The unshift() method adds new elements to the beginning of an array.
allCharacters.unshift("R2D2");
console.log(allCharacters);
/*
  'R2D2',
  'Khal Drogo',
  'Tommy Shelby',
  'Yoda',
  'Littlefinger',
  'Zaphod',
  'Totoro'
*/
console.log(allCharacters.length);//7

const calcAge = function(birthYear) {
  return 2022 - birthYear;
}
const yearOfBirth = [1999, 2001, 2005];
console.log(calcAge(yearOfBirth[0]));//23
//console.log(calcAge(yearOfBirth));//NaN

//OBJECTS
const personObject = {
  // property, assigned value "Darth"
  firstName: "Darth", 
  lastName: "Vader", 
  birthYear: 1977,
  job: "Dark Lord",
  offspring:[ "Leia", "Luke"],

  // calculateAge is a property in the object that has a function
  calculateAge: function () {
    // this points to the object
    console.log(this);
    //using personObject.birthYear is bad practise, use this keyword instead
    //if you have to change values it makes it easier if you use "this"
    return 2022 - this.birthYear;
  },
  getSummary: function () {
    return `${this.firstName}${this.lastName} is ${this.calculateAge()} years old and his profession is: ${this.job}. He has the offsprings ${this.offspring}`;
  }
}
/*
const info = prompt("What do you know about Darth Vader?");
console.log(personObject.job);//Dark Lord
console.log(personObject.age);//81

if(personObject[info]) {
  console.log(personObject[info]);
} else {
  console.log("Sorry, could not be found");
}
*/
//add props 
personObject.location = "Death Squadron";
console.log(personObject);
/*
  firstName: 'Darth',
  lastName: 'Vader',
  birthDay: 81,
  job: 'Dark Lord',
  offspring: [ 'Leia', 'Luke' ],
  location: 'Death Squadron'
*/
console.log(personObject.offspring.length);
console.log(personObject.offspring[0]);
console.log(personObject.offspring[1]);
console.log(personObject.calculateAge()); //45
console.log(personObject.getSummary()); //45