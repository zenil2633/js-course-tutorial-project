console.log("Immediately Invoked Function Expression");

// IIFE REFERS AS  = FUNCTION VALUE = () ShowOutcome = ()  "()()"

(function one() {
    console.log(` DB Connected Sucessfully `);
})
();

// Using Arrow func

(  ()  => {
    console.log(`db connected`);
}) ();


// pass parameter and return "$_global value" value 
(  (system)  => {
    console.log(`db connected on  ${system}`);
}) ('os_system')

