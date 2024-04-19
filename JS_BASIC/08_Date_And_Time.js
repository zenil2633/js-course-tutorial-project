console.log("Dates")

// Basic Function  of date
let Currentdate = new Date()
console.log(Currentdate.toDateString());
console.log(Currentdate.toISOString());
console.log(Currentdate.toJSON());
console.log(Currentdate.toLocaleDateString());
console.log(Currentdate.toLocaleString());
console.log(Currentdate.toString());
console.log(Currentdate.toLocaleTimeString());
console.log(Currentdate.toUTCString());
console.log(typeof Currentdate);


// Example 
console.log("Examples");
let myBorndate = new Date(2003, 2, 4)
let mydate = new Date("02-04-2003")
let myTimedate = new Date(2003, 2, 4, 5, 4)
console.log(myBorndate.toString());
console.log(myBorndate.toLocaleString());
console.log(myBorndate.toLocaleTimeString());

// TimeStamp 
console.log("TimeStamp");

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log("As compare with myBorndate");
console.log(myBorndate.getTime());
console.log(Math.floor(Date.now()/1000));


// Get functions

console.log("Get Functions");

let Mydate = new Date()
 console.log(Mydate.getDate());
 console.log(Mydate.getMonth() + 1);
 console.log(Mydate.getTime() + 24);
 console.log(Mydate.getMinutes());
 console.log(Mydate.getDay());

//  `${Mydate.getDay()} and time is ${Mydate.getDay()}` =  string  interpolation

Mydate.toLocaleString('default', {
    weekday: "long"
})



