console.log("JavaScript Object");

// Signleton  = Constucter in use

// Object literals

// Using Symbol DT

const mylogo = Symbol("ZenTech")
const myUSer = {
     name: "Zenil",
     age: 22,
     city: "Surat",
     email: "zen2190@gmail.com",
     isLoggedIn: true,
     lastLoginDays: ["Mon", "Sun"],
     [mylogo]: "ZTech", // String  convert into sysmbol and using this []
}

console.log(myUSer.city);
console.log(myUSer["name"]);
console.log(myUSer[mylogo]);

myUSer.isLoggedIn = false;
// Object.freeze(myUSer)
myUSer.isLoggedIn = true;

console.log(myUSer);

// Create Function 
myUSer.gretting = function() {
    console.log("Identify My Name And Age");
}

// Add object value
myUSer.grettingOne = function() {
    console.log(`Identify My Name  Is ${this.name} And Age - ${this.age}`);
}

console.log(myUSer.gretting());
console.log(myUSer.grettingOne());


