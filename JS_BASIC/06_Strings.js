console.log("Strings");

// Old Method to find string value 

const Name = "Zen"
const Iq = "100"
// console.log(Name + Iq + " Value");


// Modern Method to define String value 

console.log(`Go By My Name is ${Name} and My Intelligence is ${Iq} `);

// Define Strings 

const Laptopname = new String('Hplaptop-15')
console.log(Laptopname);
console.log(Laptopname.charCodeAt(Laptopname));
console.log(Laptopname.concat('', '.Laptopname'));
console.log(Laptopname.padEnd("191", "."));
console.log(Laptopname.length);
console.log(Laptopname.indexOf('p'));

// __proto__ function is object but don't see that
console.log(Laptopname.__proto__); 

// General Function
console.log(Laptopname.toLowerCase());
console.log(Laptopname.toUpperCase());
console.log(Laptopname.charAt(7));

// Substring is not changing value 
console.log(Laptopname.substring(0,7));

// While, slice has change the reverse string, If Count has (-) position 
console.log(Laptopname.slice(-8,7));

// Another Interesting function 
const newStringOne = "  Zen  "
console.log(newStringOne);
// Trim has removed space
console.log(newStringOne.trim());

// Replace function
 const url = "https//zdinfotech.com/%60dungrani"
 console.log(url.replace('%60', '-'));
 console.log(url.includes('zd'));

// Using Split Function 
console.log(Laptopname.split('-'));






