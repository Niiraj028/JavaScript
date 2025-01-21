let a = 2;
let b = 6;

// ********* ARITHEMATIC OPERATOR ***************
// +, -, *, /, %, **

console.log("ARITHEMATIC OPERATOR");
console.log("a + b = ", a+b);
console.log("a - b = ", a-b);
console.log("a * b = ", a*b);
console.log("a / b = ", a/b);
console.log("a % b = ", a%b);
console.log("a ** b = ", a**b); // Exponentition
a++;
console.log("a++ = ", a);   // Post Increment
b--;
console.log("b-- = ", b);   // Post Decrement

console.log("--b = ", --a);  // Pre Increment
console.log("++b = ", ++b);  // Pre Decrement


// ********* ASSIGNMENT OPERATOR ***************
    // =, +=, -=, *=, %=, **=
console.log("ASSIGNMENT OPERATOR");
console.log("a = ", a=9);
console.log("a += b ", a+=b);
console.log("a -= b ", a-=b);
console.log("a *= b ", a*=b);
console.log("b **= 3 ", b**=3);


// ********* COMPARISION OPERATOR ***************
// ==, !=, ===, !==, >, >=, <, <=

a = 4;
b = "5";
console.log("COMPARISON OPERATOR");
console.log("a == b ", a==b); // => COMPARE VALUE IS EQUAL OR N0T
console.log("a != b ", a!=b); // => COMPARE VALUE IS EQUAL OR NOT
console.log("a === b ", a===b); // STRICTER VERSION OF EQUAL TO => 
console.log("a !== b ", a!==b); // STRICTER VERSION OF NOT EQUAL TO


a = 6;   // number
b = "6"; // String
console.log("a == b ", a==b); // => DOESN'T CARE THE DATA TYPE IS SAME OR DIFFERENT, ONLY COMPARE THE VALUE WITHIN IT
console.log("a != b ", a!=b); // => DOESN'T CARE THE DATA TYPE IS SAME OR DIFFERENT, ONLY COMPARE THE VALUE WITHIN IT
console.log("a === b ", a===b); // STRICTER VERSION OF EQUAL TO
console.log("a !== b ", a!==b); // STRICTER VERSION OF NOT EQUAL TO

console.log("a > b ", a>b);
console.log("a >= b ", a>=b);
console.log("a < b ", a<b);
console.log("a <= b ", a<=b);


// ********* LOGICAL OPERATOR ***************
// &&, ||, !

a = 4;
b = 0;
console.log("LOGICAL OPERATOR");
console.log("a && b ", a&&b);
console.log("!(a&&b) ", !(a&&b));
console.log("a || b ", a||b);
console.log("!a ", !a);
console.log("!b ", !b);


// ********* CONDITIONAL STATEMENT ***************


// IF STATEMENT
 age = 30;


console.log("IF STATEMENT")
if(age >= 18){
    console.log("You CAN vote.")
}

if(age < 18){
    console.log("You CANNOT vote.")
}

// IF ELSE STATEMENT
console.log("IF-ELSE STATEMENT")
if(age >= 18){
    console.log("You CAN vote.")
}
else {
    console.log("You CANNOT vote.")
}

// ODD-EVEN NUMBER

console.log("ODD-EVEN NUMBER CHECKING PROGRAM");
let num = 342343;
if(num % 2 == 0){
    console.log("The number", num , "is EVEN");
}
else {
    console.log("The number", num , "is ODD");
}

// ELS-IF STATEMENT

let marks = 99;
console.log("ELSE-IF STATEMENT")

if(marks >= 80 && marks <= 100){
    console.log("GRADE A");
}
else if(marks >= 60 && marks < 80){
    console.log("GRADE B");
}
else if(marks >= 40 && marks < 60){
    console.log("GRADE C");
}
else if(marks >= 32 && marks < 40){
    console.log("GRADE D");
}
else if (marks >= 0 && marks < 33){
    console.log("You are not eligible to goto next class, you need to improve yourself first");
}
else {
    console.log("You are entering invalid marks, please enter valid marks..");
}


// // ********* TERNARY OPERATOR ***************
// Condition ? true-outpur : false-output

let age = 43;
result = age >=18 ? "Adult" : "Not Adult";
console.log(result);

 age = 13;
result = age >=18 ? "Adult" : "Not Adult";
console.log(result);

 age = 18;
result = age >=18 ? "Adult" : "Not Adult";
console.log(result);


// ********* SWITCH STATEMENT ***************

let day = 7;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day, Please give the date value between 1 to 7");
    }
    