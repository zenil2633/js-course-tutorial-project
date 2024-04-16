// DataTypes is divided into Two different groups 

//  A :- Primitive 
//  7 Types : - String, Boolean, BigInt, Number, Null, Undefined, Symbol 
// Symbol is occationally Used Just Like Idenfied D.T

const Surname =  ("Dungrani")
   const IsLoggedIn = true
const BigNumber = 77777444442343942n
    const IdNumber = 7
const TempDown = null
    const Id = Symbol("Zenil")
const IdNum = Symbol("777")

console.log(Id === IdNum);
console.log(Surname);
console.log(IsLoggedIn);
console.log(TempDown);
    

// Indenfied DataType ["typeof Function is really help to indentied  actual  D.T"]
console.log(typeof Surname);
console.log(typeof IsLoggedIn);
console.log(typeof BigNumber);
console.log(typeof IdNumber);
console.log(typeof TempDown);
console.log(typeof Id);
console.log(typeof IdNum);
   

//  B :- Reference [Non-Primitive]
//  Array, Objects, Function

const Books = ["Pyschology of Money", "Think and Grow Rich", "Self Development"]

let mySkills = {
    name: "ProblemSolving",
    B: 100,
}

const mybooks = function(){
      BookName = ("Think And Grow Rich")
      Author = ("Napoleon Hill")
}

console.log(Books);
console.log(typeof Books);
console.log(mybooks);
console.log(typeof mybooks);
console.log(typeof mySkills);