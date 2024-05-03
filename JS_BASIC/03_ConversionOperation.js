console.log("Zenil");

let Iq = "110Zen"
let Ability = null 
let Street = undefined
let condition = true 
let name = "Zen"

console.log(typeof Iq)
console.log(typeof (Iq));

// If Input "33" => 33
// iF Input "110zen" => NaN

// convert string into number 
let valueInNumber = Number(Iq)
console.log(typeof valueInNumber)
// find current what value is of number 
console.log(valueInNumber);

//IsLoggedIn

let isLoggedIn = "Zen"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
// If value is "" => Flase
// If value is 1 => true

// convert number into string 
let someNumber = 7 
let stringNumber = String(someNumber)
console.log(someNumber);
console.log(typeof stringNumber);


/* --- --- --- Operations --- --- --- */
let value = 3
let nagvalue = -value
console.log(nagvalue);


/* ---   basic operations --- */
// console.log(7+7);  
// console.log(7-2);
// console.log(7*7);
// console.log(7**4);
// console.log(7/1);
// console.log(7%6); 

/* ---  Complex types of Coversion --- */

let str1 = "Zen"
let str2 = " Dungrani"
let str3 = str1 + str2 
console.log(str3);

console.log("1" + 2);
console.log(1 / "2");
console.log("1" + (2 - 2));
console.log((1 + 2 + 2 ) % "3");

 // --- Tricky Conversion --- 
 let iq10, iq20, iq30 
 iq10 = iq20 = iq30 = (2-2)  // Make sure proper  code arrangement and readability 

 console.log(+true);
 console.log(-false);

let Scorebroad = 700
++Scorebroad 
console.log(Scorebroad);

// -- Link To Study Different Conversion --- 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
// https://tc39.es/ecma262/2023/multipage/abstract-operations.html#sec-abstract-operations