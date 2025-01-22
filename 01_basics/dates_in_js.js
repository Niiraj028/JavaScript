let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());

// let myCreatedDate = new Date(2025, 0, 28);
// console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date(2025, 0, 28, 5, 45);
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);
console.log(newDate.getFullYear());


newDate.toLocaleString('default',{
    weekday : "long"
})
console.log(newDate);

