console.log("Part 2");

const marvel_Heros = ["Spiderman", "Ironman", "CaptainAmerica", "Thor"]
const dc_Heros = ["Superman", "DarkKnight", "Joker", "Flashboo"]

// marvel_Heros.push(dc_Heros)

// console.log(marvel_Heros);
// console.log(marvel_Heros[4][2]);

// marvel_Heros.concat(dc_Heros)
// console.log(marvel_Heros);

// Below Example Show How to Marge Array with perfection
const AllMyFavHero = marvel_Heros.concat(dc_Heros)
console.log(AllMyFavHero);

// Spread Operator = [Glass pieces has been dropped]
 const All_MY_Fav = [...marvel_Heros, ...dc_Heros]
 console.log(All_MY_Fav);


//  Flat Function  = ALl Sub-Array combine with one line
const Single_Array = [7, 8, 9, [1,3,2], 5,6, [2,3, [4,5]]]
const Combine_Array = Single_Array.flat(Infinity)
console.log(Combine_Array);


// Interesting Array Converter
console.log(Array.isArray("Zen"));
console.log(Array.from("Zenil"));
console.log(Array.from({age: 22})); 

// Example

let W_Band = 7.5
let R_Band = 6.5
let S_Band = 7.0
console.log(Array.of(W_Band, R_Band, S_Band));
