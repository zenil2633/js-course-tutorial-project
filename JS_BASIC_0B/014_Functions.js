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
