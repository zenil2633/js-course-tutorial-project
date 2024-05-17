console.log("Part_B");

// const tinderUser = new Object() // Singleton Object

const tinderuser = {}   // define - non-singleton object 
tinderuser.Id = "Zen2190"
tinderuser.name = "ZenTech"
tinderuser.age = 22
tinderuser.IsLoggedIn = true;

console.log(tinderuser);

// Object into objects
const RegisterForm = {
    createUser: {
        newcandidate: {
            employeeId: "Tom234",
            employeeCity: "USA",
            employeeAge: 35
        }
    }
}
console.log(RegisterForm.createUser.newcandidate);


// Assign Objects = Targets = {} & Sources = ID

const ID1 = {1: "Zenil", 2: 2190}
const ID2 = {3: "Vivek", 4: 219}
const ID3 = {5: "Smit", 6: 21}
const ID4 = {7: "Tirth", 8: 2}
const ID5 = {9: "Chand", 10: 21}

// const AllIdMerge = Object.assign({}, ID1, ID2, ID3, ID4,ID5)
// console.log(AllIdMerge);
const AllIdMerge = {...ID1, ...ID3};
console.log(AllIdMerge);

// Using Array in objects 

const FirstUser = [
    {
        id: "Viv219",
        name: "Vivek"

    },
    {
        id: "   Meet219",
        name: "Meet"

    },
 
]

FirstUser[1].name
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('age'));
