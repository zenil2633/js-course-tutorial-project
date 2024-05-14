console.log("Arrays");

// Basic Description

const myNum = [17, 777, 77, 1777]
console.log(myNum[2]);

const mySkill = new Array("Problem solving", "Communicative", "Hard-Work", "Accomplished Tasks")
console.log(mySkill[3]);


// Array Method 

myNum.push(6)
myNum.pop()
myNum.unshift(7)
myNum.shift()
console.log(myNum);
console.log(myNum.includes(77));
console.log(myNum.indexOf(77));


// Join --- Convert into string
const newArr = myNum.join()
console.log(myNum);
console.log(typeof newArr);


// Slice & Splice

const myID = [7, 8, 9, 10, 11, 12]
console.log("X", myID);

const myID1 = myID.slice(2, 4)
console.log(myID1);
console.log("Y", myID);

const myID2 = myID.splice(2, 4)
console.log("Z", myID);
console.log(myID2);


