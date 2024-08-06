// Function - Syntax

/*function functionName(parameter,a,b){
    // code
} */

// 2 types of functions in JS
// 1. Named function and
// 2. Anonymous function
// Named function - A function which is having a name

function add(a,b){
    return a+b
}

let sum = add(2,3)
console.log(sum) // 5

function greet(){
    console.log("Hello")
}
greet()


// Anonymous function - A function which is not having a name

let add1 = function(a,b){
    return a+b
}
let sum1 = add1(4,6)
console.log(sum1) // 10

// Types of declaration of function in JS

// 1. Function declaration - 

function addition(a,b){
    return a+b
}

let sum2 = addition(0,5)
console.log(sum2) // 5

// 2.Function Expression - Anonymous function

let anonymous =  function(){
    console.log("Hello JS")
}

anonymous()


// Arrow function - 

// Syntax - 
//const arrow = (a,b,c,d) =>{}

// multiplication of 2 numbers

let sub = (a,b) => {
    return a-b
}

console.log(sub(5,1));

// 4. IIFE - Immediately invoked function expression

//(function(parameter1, par2,...){
    // code to be executed
//})(par1, par2);

 (function (){
     console.log("Server is up and running");
 })();

// 5. Constructor function

// let variable = new Function('param1','param2','return param1+param2')

let variable = new Function('a','b','return a+b')
console.log(variable(5,5)) // 10

