console.log('hello bro')



// CREATING A NORMAL FUNCTION

// const talha = function(){
//     console.log('This is talha')
// }


// CONVERTING IT INTO ARROW FUNCTION
// const talha = ()=>{
//     console.log('This is talha')
// }

// talha();

//FUNCTION RETURNING SOMETHING
// const greet = ()=>{
//     return "Good Morning";
// }

//ONE LINER DO NOT REQUIRE BRACES/RETURN
//ONE LINER WILL AUTOMATICALLY RETURN
// const greet = () => "Good Morning";              //equals to return "Good Morning"

// console.log(greet())

//Returning Object
// const greet = () => ({name: "Talha"})

//NO NEED FOR PARANTHESIS WHEN PASSING SINGLE ARGUMENT
// const greet = name => "Good Morning " + name;

//PARANTHESIS IS REQUIRED WHEN PASSING MORE THAN ONE ARGUMENT
const greet = (name, ending) => "Good Morning " + name + ending;
console.log(greet("Talha","BYe"))