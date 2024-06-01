console.log("This & Arrow Function");

// Clarify This function 

const user = {
    username: "Zen2190",
    websitename: "ZenInfotechprivate.Ltd",
    cost: 7979,

    WelcomeCandidate: function() {
        console.log(`${this.username}, Hope you are grateful as well`); 
         // "This" as refers current context define 
         console.log(this);

    }
}
user.WelcomeCandidate()
user.username = ("Vivek")
user.WelcomeCandidate()

console.log(this);

// function cannot refers "this"

// function skill() {
//     let name = "priblem solving"
//     console.log(this.name);
// }
// skill()


//  +++++++++++ Arrow Function = "() => {}" ++++++++++++++

const FriendPotential = () => {
    let bestfrd = "Loyalty"
    console.log(this);
}
FriendPotential()

// Different Methods to return value in arrow func
const multiply = (num1, num2) => {
    return num1 * num2
}
console.log(multiply(7, 9));

const dividation = (num1, num2) => num1 / num2
console.log(dividation(7, 9));

//  Return Object value in arrow func

const AbstractionObject = (num3, num4) => ({username: "Zenildungrani"})
console.log(Abstraction(7, 9))




