console.log("De-Structure & JSON");


const CS_Course = {
     name: "Google Certified Professional Cybersecurity",
     priceCourse: "5000 per Month",
     publisher: "GoogleAds"
}

// CS_Course.publisher = OLD Method

// Recent Method  to define de-structure 

const {priceCourse: price} = CS_Course
console.log(price);

// const navbar ({}) => {
 
//     name: "Zenil",
//     age: "22"
// }


// JSON Format

// {
//     "name": "ZENIL",
//     "age": "22",
//     "coursename": "jSC TUTORIAL"
// }

// Array FormaT IN jSON 
[

    {},
    {},
    {}
]