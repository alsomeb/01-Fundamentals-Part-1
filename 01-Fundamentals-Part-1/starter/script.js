
//------ Values and Variables
// let js = 'amazing';
// console.log(js);

// let firstName = "Jonass"; //camelCase, firstword lowercase next words Uppercase

// console.log(`FirstName: ${firstName}`); // fstring som python

// let age = 23;
// console.log('Age: ' + age);

// let sum = 40 + 8 + 23 - 10;
// console.log(sum);

// let PI = 3.1415; // Constant uppercase plz
// console.log(PI);


//--------- Datatypes
// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "John");
// console.log(typeof 23.2515125);

// javascriptIsFun = "YES"; // Changing value to string
// console.log(typeof javascriptIsFun)



//------------- Let, Const and Var
// let = variable that can change later
// const can not be changed!!, dont declare empty constants!
// best practice use const if variable should not change, could create bugs end of the line..
// dont use var, its legacy!!
// let age = 30;
// age = 31;
// console.log(age);

// const birthYear = 1991;

//------------------ Basic Operators
// math operator
// const now = 2037;
// const ageJonas = now - 1991;
// const ageAlex = now - 2018;
// console.log(ageJonas, ageAlex); // can log several values

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2*2*2

// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName);

// // Asignment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4 // x = x * 4 = 100
// x++ // x = x + 1
// x-- // x = x - 1
// console.log(x);

// // Comp operators
// console.log(ageJonas > ageAlex); // True, alex is older

// const isMyndig = ageAlex >= 18;
// console.log(isMyndig);


// --------------- Operator Precedence
// const now = 2037;
// const ageJonas = now - 1991;
// const ageAlex = now - 2018;
// console.log(now - 1991 > now - 2018);
// // google: mdn operator precedence parantes går före om man lägger in det!
// // math calculations are done before comparison, left to right on math

// const averageAge = (ageAlex + ageJonas) / 2; // här måste parantes in! för division  går före ananrs
// console.log(averageAge);


// -- -------------- Strings and template literals
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// // JOBBIGT!!! finns bättre lösning, temmplate literal, fstring i python!
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew);


// -----------------  Taking Decisions: if / else Statements
// const age = 15;

// if (age >= 18) {
//     console.log("Sarah cant start her driving license ❤️");
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Not yet 😒, sarah must wait another ${yearsLeft} years!`);
// }

// let century; // declaration
// const birthYear = 1991;
// if (birthYear <= 2000) {
//     let century = 20;
//     console.log(century);
// } else {
//     let century = 21;
//     console.log(century);
// }

// ---Type Conversion and Coercion ( javascript automatically converts)
// TYPE CONVERSION
// const inputYear = "1991";
// // Number(nr) converts string to Number, som int och float i python
// console.log(typeof Number(inputYear), Number(inputYear));
// console.log(typeof inputYear, inputYear);

// // TYPE COERCION
// console.log("I am " + 23 + " years old"); // <-- automatiskt allt string,nr även
// console.log("23" - "10" - 3); // här blir numrerna int
// console.log("23" + "10" + 3); // här concat dem istället :S

// let n = "1" + 1; // 11
// n -= 1; // 11 - 1 = 10
// console.log(n);

// --------------- Truthly and falsy values
// 5 falsy values: 0, "empty strings", undefined, null, NaN

// console.log(Boolean(0)); // false
// console.log(Boolean(undefined)); // flase
// console.log(Boolean("Jonas")); // true
// console.log(Boolean({})); // empty object // true


// -- Equality Operators: == vs. ===

// const age = 18;
// // 1 liner behövs ej {}
// if (age === 18) console.log("You just became an adult!");

// // ===, strictly equal, only returns true if both values are the same
// // loosely equal,  '18' == 18  blir true, men med === false, pga en string en int
// // pga javascript automatiskt converterar
// // 18 === 18 true
// // 18 === 19 false

// // avoid == , use strict ===

// const favouriteNumber = Number(prompt("Whats ur fav nr ?"));
// console.log(favouriteNumber);
// console.log(typeof favouriteNumber);

// if (favouriteNumber === 23) { // loose == equality, dvs automagiskt conv str '23' == 23, === måste vi konvertera prompten som ovan
//     console.log("Cool 23 is good!");
// } else if (favouriteNumber === 7) {
//     console.log("Dang 7 brah");
// } else {
//     console.log("Bruh");
// }

// if (favouriteNumber !== 23) console.log("Why not 23?"); // strict är bara == här på !== annars !=

// -------- logical operators
// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision); // AND
// console.log(hasDriversLicense || hasGoodVision); // OR
// console.log(!hasDriversLicense); // not, not has driv license

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah can drive')
// } else {
//     console.log("Noo")
// }

// const isTired = false;
// console.log(hasDriversLicense && hasGoodVision && isTired); // enough for 1 to be false to make whole and operation false

// if (hasDriversLicense && hasGoodVision && !isTired) { // !istired <--- true when it is false
//     console.log("You can drive sir!");
// } else {
//     console.log("NOOOOOO");
// }

// --- SWITCH STATEMENT, compare 1 value to multiple options.. basically
// const day = "kk";

// switch (day) {
//     case "monday": // strict day === "moonday" if true, code executed
//         console.log("Plan course structure");
//         console.log("Go to coding meetup");
//         break; // w/o break code keeps adding and executing cases togh
//     case "tuesday":
//         console.log("Prep theory vids");
//         break;
//     case "wednesday": // visa samma res ons tors wedsneyday || thursday OR
//     case "thursday":
//         console.log("wednesday and thursday write code examples");
//         break;
//     case "friday":
//         console.log("Record vids");
//         break;
//     case "saturday":
//     case "sunday":
//         console.log("Enjoy break");
//         break;
//     default: // else block
//         console.log("Not a valid day!");
// }

// -- sTATEMENTS AND EXPRESSIONS
// expression piece of code that produces a value
// 3 + 4 , 1991, true && false && !false

// ---------- The Conditional (Ternary) Operator
// something similar to if else
// const age = 23;

// // condition       // if part                       // else part
// age >= 18 ? console.log("I like to drink wine🎈") : console.log("I like to drink water 😒");

// const drink = age >= 18 ? 'wine ❤️' : 'water😒';
// console.log(drink);

// // same code but more lines compare to one above
// let drink2;
// if (age >= 18) {
//     drink2 = 'wine ❤️';
// } else {
//     drink2 = 'water 😒';
// }
// console.log(drink2)

// // med fstring aktigt, template literal dvs, bra för snabba
// console.log(`I like to drink ${age >= 18 ? 'wine ❤️' : 'water😒'}`);