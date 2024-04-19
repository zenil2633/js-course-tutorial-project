console.log("Nums & Maths");

const gameScore = 700
console.log(gameScore);


const gameId = new Number(800)
console.log(gameId);
console.log(gameId.toString().length);
console.log(gameId.toFixed(2));
console.log(gameId.toExponential(4));



const productId = 777.799
console.log(productId.toPrecision(5));
console.log(typeof productId);


const depositMoney = 100000000
console.log(depositMoney.toLocaleString('en-IN'));


// ++++++++++++++++++++++++ Maths +++++++++++++++++++++++++

console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-7));
console.log(Math.acos(3));
console.log(Math.ceil(1));
console.log(Math.round(4,8));

// Understanding of Random Fuction in Maths
console.log(Math.random());

// (*) Multiplay value + 1 is equal to = proper number not  0 
console.log((Math.random()*10) + 1); 

// Floor Function is Define as a Around value such a , 2, 4, 6, 7 
console.log(Math.floor(Math.random()*10) + 1);

// Random Function provide value between 0 to 1  and add more number  min and max 
const min = 20
const max = 70

console.log(Math.floor(Math.random()  * (max- min + 1000000) + min))
