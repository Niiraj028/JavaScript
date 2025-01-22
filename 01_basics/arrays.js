// console.log("Niraj Sharma");

// let marks = [45, 56, 67, 87, 98];
// console.log("Array Elements: ", marks);

// console.log("Array Length:", marks.length);
// console.log(marks[3]); // => 87
// console.log(marks[43]); // => Undefined
// marks[2] = 10000; // it will change the value of element on index 2, the meaning is it will change the value 67 into 10000
// console.log(marks); // => [ 45, 56, 10000, 87, 98 ]
// console.log(marks.indexOf(98)); // => 4



let marks2 = [45, 56, 67, 87, 98];

// itterating the array using for loop
for(let i =0; i<marks2.length; i++){
    console.log(marks2[i]);
}

// itterating the array using for-of loop
for(let el of marks2){
    console.log(el);
}


// ==============🏵️🏵️🏵️ PRACTICE PROBLEM: 1 🏵️🏵️🏵️===============

// For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
// Find the average marks of the class

let marksOfStudent = [85, 97, 44, 37, 76, 60];
let sum = 0;
for(let el of marksOfStudent){
    sum += el;
}
console.log("Average Marks: " + sum/marksOfStudent.length);

let avg = sum/marksOfStudent.length;
console.log(`Average marks of student using template literals = ${avg}`);

// ==============🏵️🏵️🏵️ PRACTICE PROBLEM: 2 🏵️🏵️🏵️===============

//For a given Array with price of 5 items -> [250, 645, 300, 900, 50].
// All items have an offer of 10% OFF on them. Change the Array to store final price after applying offer.

let originalPrice = [250, 645, 300, 900, 50];
let discountedPrice = [];
let i = 0;
for(let el of originalPrice){
    discountedPrice[i] = el - (el * 10) / 100;
    i++;
}
console.log(`After discount of 10% the discounted price of the items is : ${discountedPrice}`);


// ==============🔥🔥🔥 ARRAY METHODS 🔥🔥🔥===============
// push()     => Add to end || => It make changes in the existing array only
// pop()      => Delete form end and return
// toString() => Converts Array to String


let names = ["Amit", "Sumit", "Sagar", "Ayush", "Shivam"];
names.push("Niraj", "Nikku");

for(let el of names){
    console.log(el);
}
names.pop();
console.log(names);

let age = [34, 45, 32, 12, 87];
console.log(age.toString());


// concat()  => joins multiple arrays and return result
// unshift() => add to start
// shift()   => delete from start and return


// let marvelheroes = ["IronMan", "SpiderMan", "Thor"];
// let dcHeroes = ["Batman", "SuperMan"];
// let indianHeroes = ["Shaktiman", "Krish"];

// let heroes = marvelheroes.concat(dcHeroes, indianHeroes);
// console.log(heroes);

// let marvelheroes2 = ["IronMan", "SpiderMan", "Thor"];
// marvelheroes2.unshift("Antman");
// console.log(marvelheroes2);

// let marvelheroes3 = ["IronMan", "SpiderMan", "Thor"];
// let value = marvelheroes3.shift();
// console.log("Deleted : " + value);
// console.log(marvelheroes3);


// slice()  => returns a piece of the array
//🔶🔶🔶  slice(startIndex, endIndex)

// splice() => change original array(add, remove, replace)
//🔶🔶🔶  splice(startIndex, deleteCount, newElement)

// let marvelheroes4 = ["IronMan", "SpiderMan", "Thor", "Loki", "Antman"];
// console.log(marvelheroes4);
// console.log(marvelheroes4.slice(2,5));


let marvelheroes5 = ["IronMan", "SpiderMan", "Thor", "Loki", "Antman"];
console.log(marvelheroes5);
marvelheroes5.splice(0, 0, "Hero");
console.log(marvelheroes5);


let arr = [ 1, 3,4 ,5, 6, 7, 7];
// delete one element
arr.splice(2,1); // -> delete 4
console.log(arr);

// add element
arr.splice(0,0, 100);
console.log(arr);

// Replace element
arr.splice(1,1, 51);
console.log(arr);


// ==============🏵️🏵️🏵️ PRACTICE PROBLEM: 3 🏵️🏵️🏵️===============


// qs: create an array to store companies -> "Bloomberg", "Microsoft", "Google", "Uber", "IBM", "Netflix"
// Remove the first company from array
// Remove uber and add Ola in it's place
// Add amazon at the end


let companies = ["Bloomberg", "Microsoft", "Google", "Uber", "IBM", "Netflix"];
companies.splice(0,1);
console.log(companies);

companies.splice(2, 1, "Ola")
console.log(companies);

companies.splice(companies.length,0,"Amazone");
console.log(companies);
