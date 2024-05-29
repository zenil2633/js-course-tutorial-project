console.log("Scopes");

//{} = define variable and after execution is between called scope{}

// < === scope example how it is actually work ===  >

let z = 700
// const y = 60
// var x = 50

   if (true) {
    let z = 70
    console.log("INNER: ", z);
    // const y = 60
    
   }

// Var is not defined and we can't use anymore due to problem of scopE and only use LET AND CONST

// console.log(z);
// console.log(y);
// console.log(x);

 
//  Nested scope & basic details show the "closure" 
//  Child function is take value from main funtion
function one() {
       const familyname = "DUNGRANI"

       function two() {
        const firstname = "Zenil"
        console.log(familyname);
     }
  
    //  console.log(firstname);

    //  two()
  
} 
    // one()


  // Same condition apply on if statement 

  if (true) {
        const familyname = "dungrani"
        if (familyname === "dungrani") {
              const firstname = " zenil"
              console.log(familyname + firstname);
        }

    // console.log(firstname);
  }
    // console.log(familyname);


    // ++++++++++++++++++ INTERESTING EXAMPLE OF FUNCTION ++++++++++++++++ 

    console.log(addOne(80))
    function addOne(num) {
        return num + 10
    }


    // addTwo(70) = can't allow to put value before initialization
    const addTwo = function(num){
        return num - 10
    }
    console.log(addTwo(70))

    
   
   


