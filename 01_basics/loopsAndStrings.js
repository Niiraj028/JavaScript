// const PromptSync = require("prompt-sync");

// console.log("Niraj Sharma");

// LOOOPS 

// ********* FOR LOOPS ***************
// for(let i =1; i<=13; i++){
//     console.log("NIRAJ SHARMA", i);
// }


// ...............CALCULATE SUM OF N NATURAL NUMBER.................
// let n = 100;
// let sum = 0;
// for(let i =1; i<=n; i++){
//     sum +=i;
// }
// console.log("SUM: ",sum);

// ********* WHILE LOOPS ***************
// let i = 10;
// while(i>=0){
//     console.log(i);
//     i--;
// }

// ********* DO WHILE LOOPS ***************

// i = 10;
// do{
//     console.log("Niraj Sharma");
//     i--;
// }
// while(i>=1);


// ********* FOR-OF LOOPS ***************
// => WORKS ON THE ARRAYS AND STRINGS

// let str = "Niraj Sharma";
// let j = 1;
// let size = 0
// for(let i of str){
//     console.log(i," -> ", j++);
//     size++;
// }
// console.log("String size is: ", size);




// ********* FOR-IN LOOPS ***************
// => WORKS ON OBJECTS AND ARRAYS
//  SYNTAX

// for(let key in objVar){
//     console.log(key);
// }

// let student = {
//     name : "Niraj Sharma",
//     age : 24,
//     cgpa : 7.00,
//     isPass : true
// };
// for(let key in student){
//     console.log("KEY = ", key , " VALUE : ", student[key]);
// }



// ==============🏵️🏵️🏵️ PRACTICE PROBLEM 🏵️🏵️🏵️===============

// PRINT ALL THE EVEN NUMBER FROM 0 TO 100

// console.log("Even Number is : ")
// for(let i =0; i<=100; i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }


//🏵️🏵️🏵️ CREATE A GAME WHERE YOU START WITH ANY RANDOM GAME NUMBER, ASK THE USER TO KEEP GUESSING THE GAME NUMBER UNTILL THE USER ENTERS CORRECT VALUE


// const gameNumber = 54; // Secret number

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// const askQuestion = () => {
//     rl.question("Enter a number: ", (userNumber) => {
//         userNumber = parseInt(userNumber); // Convert input to a number

//         if (userNumber === gameNumber) {
//             console.log("Congratulations, You Have Entered the Correct Number!! 🎉");
//             rl.close(); // Exit the input stream
//         } else if (userNumber > gameNumber) {
//             console.log("Too high! Try again.");
//             askQuestion(); // Ask again
//         } else {
//             console.log("Too low! Try again.");
//             askQuestion(); // Ask again
//         }
//     });
// };

// // Start the game
// askQuestion();




// ****************************************🔥 STRINGS 🔥********************************************


// let str = "Niraj Sharma"

// console.log(str);

// console.log(str[0]);  //N
// console.log(str[3]);  //a
// console.log(str[6]);  //S
// console.log(str[45]); //Undefined

// =======TEMPLATE LITERALS =========
//        `This is template literals` => A way to have embadded expressions in Strings

// let obj = {
//     item : "Pen",
//     price : 10
// };

// //        String interpolation
// // To create strings by doing subtitution of placeholders
// //      `string text ${expression} string text` => ${obj.item} & ${obj.price}

// let output = `The cost of ${obj.item} is ${obj.price} rs`;
// console.log(output);

// console.log("The cost of", obj.item, "is", obj.price, "rs");


// let specialString = `Niraj, This is a Template Literal`;
// console.log(typeof specialString);


// // we can make change here in template literals
// let result = `The result is ${1+3+5+7} rs`;
// console.log(result);


// ***************🔥ESCAPE CHARACTERS🔥*******************
// => \n

// console.log("Niraj\nSharma");

// let str = "Niraj\tSharma";
// console.log(str.length);


// ***************🔥 STRING METHODS 🔥*******************

// str.toUpperCase()
// str.toLowerCase()
// let str = "Niraj";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());


// // str.trim()
// let str2 = "          Niraj          Kumar        Sharma           ";
//  console.log(str2.trim());

// // str.slice(start, end) // => returns part of string
// let str3 = "0123456789";
// console.log(str3.slice(1,5));

// // str1.concat(str2)
// console.log(str.concat(str3));

// // str.charAt(index)
// console.log(str3.charAt(5));

// // str.replace(searchVal, newVal)
// console.log(str3.replace(5, "☠️"));




// ==============🏵️🏵️🏵️ PRACTICE PROBLEM 🏵️🏵️🏵️===============

//🏵️🏵️🏵️ qs1:  Prompt the user to enter their full name. Generate a username for them based on the input.
//       Start username with "@", followed by their fullname and ending with their fullname length.



const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for input
rl.question("Enter your name: ", (name) => {
    console.log(`@${name}${name.length}`);
    rl.close(); // Close the interface after input
});
