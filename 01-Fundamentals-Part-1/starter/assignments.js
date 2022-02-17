// // LECTURE: Values and Variables

// let country = 'Sweden';
// let continent = 'Scandinavia';
// let population = 10000000;
// console.log("\n\n\nLABBAR:") // för att pusha ner i consolen på web
// console.log(`Country Name: ${country}`)
// console.log(`Contitent Name: ${continent}`)
// console.log(`Population: ${population}`)

// // LECTURE: Data Types

// let isIsland = false;
// let language;
// console.log(typeof isIsland);
// console.log(typeof country);
// console.log(typeof population);
// console.log(typeof language);


// LECTURE: let, const and var
// const language = "Swedish";
// const country = "Sweden";
// console.log(language);
// console.log(country);

// LECTURE: Basic Operators
// population++ // +1
// const halfOfPopulation = population / 2;
// const finlandPopulation = 6000000;
// console.log(halfOfPopulation);
// console.log(finlandPopulation > population); // finland bigger pop


// CODING CHALLENGE #1
// use const because i wont change the values later on in the program
// else use let

// const massMark = 95;
// const heightMark = 1.88;

// const massJohn = 85;
// const heightJohn = 1.76;

// const markBMI = massMark / heightMark ** 2; // square går före div!
// const johnBMI = massJohn / (heightJohn * heightJohn); // parantes pga div före gånger på right side!
// console.log(markBMI, johnBMI)

// const markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);



// --- ------- CODING CHALLENGE #2
// using coding challenges #1 variables
// if (markBMI > johnBMI) {
//     console.log(`Mark has the higher BMI: ${markBMI}, john's is: ${johnBMI}`);
// } else {
//     console.log(`John has the higher BMI: ${johnBMI}, Marks is: ${markBMI}`);
// }


// LECTURE: Equality Operators: == vs. ===
// const numNeighbours = Number(prompt("How many neighbour countries does your country have ?"));

// if (numNeighbours === 1) { // 1 el "1" === måste promt konv till Number() då tex "1" inte är 1
//     console.log("only 1 border!");
// } else if (numNeighbours > 1) {
//     console.log("More than 1 border!");
// } else {
//     console.log("No borders!"); // 0 eller ingen siffr
// }


// --- ------- CODING CHALLENGE #3
// teams = dolphins, koalas
// const dolphinsAverageScore = (96 + 108 + 89) / 3;
// console.log(`Dolph AVG Rounded: ${Math.round(dolphinsAverageScore)}`);
// const koalasAverageScore = (88 + 91 + 110) / 3;
// console.log(`Koalas AVG Rounded: ${Math.round(koalasAverageScore)}`);

// if (dolphinsAverageScore === koalasAverageScore) {
//     console.log("Its a draw!");
// } else if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 95) {
//     console.log("Dolphins WIN! 🎈");
// } else {
//     console.log("Koalas WIN! 🎈");
// }

// --- ------- CODING CHALLENGE #4  BILL AND TIP program
// const billValue = 430;
// // between 50 - 300             =  if / else
// const tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

// console.log(`The Bill: ${billValue}, Tip: ${tip}, Sum: ${billValue + tip}`);
