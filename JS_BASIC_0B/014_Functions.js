console.log("Functions");


// Basic Function method 
function Fullname() {
    console.log("Z");
    console.log("E");
    console.log("N");
    console.log("I");
    console.log("L");
    console.log("D");
    console.log("U");
    console.log("N");
    console.log("G");
    console.log("R");
    console.log("N");
    console.log("I");
}
Fullname()


function addTwoNumbers(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}
addTwoNumbers(7,5,6)
addTwoNumbers(7,"5",6)
addTwoNumbers(7,5,"z")
addTwoNumbers(7,5,null)


// Define var then find value using ( return result)
function AddTwoNums(num7, num8) {
    // let result = (num7 + num8)
    console.log("Zen");
    return num7 + num8
}
const result =  AddTwoNums(9,10)
console.log("Result:", result);


// LoginUserMessage  & BASIC IF ELSE STATEMENT
function LoginUserMsg(username = "Zenil") {
    if(!username) {
        console.log("Please Enter Your Fullname with Number");
        return
    }
    return `${username} Is Logged INTO THIS SYSTEM  `
}
// console.log(LoginUserMsg("Zenil"));
console.log(LoginUserMsg("Tirth"));


// Shop cart price total 
function calculateitems(val1, val2, val3, ...TotalItems) {
    return TotalItems
}
console.log(calculateitems(200, 400, 600, 800, 2000, 4000))


// How to add object into function
const Skills = {
    technical: "JavaScript Programming",
    softprice: 2000
}

function Combineskill(anyskill) {
    console.log(`My Expertise in ${anyskill.technical} and Cost Will be $${anyskill.softprice} `);
}
Combineskill(Skills)

// How to add array into function 
const myNewArray = [300, 600, 700, 400, 444]

function returnNewArray(getarr) {
    return getarr[2]
}
console.log(returnNewArray(myNewArray));
console.log(returnNewArray([2020, 2203, 4400, 40404]));  // direct pass value




