// Arithmetic Op
// Comparision op
// logical op
// assignment op

// Arithmetic Operator: An operator which performs mathematics operations
// Example: +, -, *, / , %, **, ++, --

let a = 9
let b = 2
console.log(a+b) // 10+2 = 12
console.log(a-b) // 10-2 = 8
console.log(a*b) // 10*2 = 20
console.log(a/b) // 5 // 4.5
console.log(a%b) // 1 // 1 a =10, b=2 10/2 = 5 // 0 , 9/2 - 4 - 1
console.log(a**b) // 81 // 9**3 = 9 to the power 2 9^3 = 9*9*9 

// ++ - Increment operator

console.log("*********************")
let c = 10
// Post increment - action will be performed first and then the value will be incremented.

console.log(c++) // 10 // 10++ = 10+1 =11
console.log(c) // 11

// Pre increment - Action will be performed after the value will be incremented.

let d = 5
console.log(++d) // ++5 = 1+5 = 6
console.log(d) // 6

// Post decrement - Pre-decrement

let e = 5
console.log(e--) // 5 // 5-- = 5-1 = 4
console.log(e) // 4

console.log("*****************")
let f = 5
console.log(--f) // 5-1 = 4
console.log(f) // 4


// Comparison Operator - Compares the two values and return a boolean result (true or false).
// Example: ==, !=, ===, !==, >, <, >=, <=
console.log("*****************")

let g = 20
let h ='20'
console.log(g==h) // equality operator 

console.log(g===h) // Strict equality operator
// === checks both value and data type. If both are same then it returns true else false.

// != - If both of the values of the variable are not same but the date type of vaiable can be of numeric or string
console.log(g!=h) // false

// !== - Strict not equal operator
console.log(g!==h) // true

// > - Greater than - a>b // if a is 

let i =10
let j =10
console.log(i>j) // false
console.log(i>=j) // true

console.log(i<j) // 10<10 - false
console.log(i<=j) // 10<=10 - true

// Logical Operator - Evalaute a boolean expresion true or false (a>b) - true or false
// Example: && (AND), ||(OR), !(NOT)
console.log("*****************")
// && - AND operator - Both the condition should be true

// true && true - true
// true && false - false

console.log((10>5) && (7>6)) // true && true // true
console.log((10>5) && (6>7)) // true && false // false
console.log((1>2) && (3>7)) // false && false //

// || (OR) - If any of the condition is true then the evaluation will display the result as true
// true || true  - true
// true || false - true
// false || true - true
//false || false - false
console.log("*****************")

console.log((10>5) || (7>6)) // true 
console.log((10>5) || (5>6)) // true
console.log((10<5) || (7>6)) // true 
console.log((10<5) || (7<6)) // false

// !(NOT) - it will reverse the values and this will only work with boolean datatype. 
// !true - false
// !false = true

console.log(!(2>1)) // !true - false
console.log(!(2<1)) // !false - true

// Assignment operator - It is use to assign the value to the varibale
// = - Assign the value to the variable
let k = 10
// +=, -+, *=, /=, %=
//+= - It will add the value of the variable then assign the same value to it.
k += 5 // k = k+5 // 10+5 = 15
console.log(k) // 15
// -= - It will subtract the value of the variable then assign the same value to it.
let l = 5
l -= 2 // l = l-2 // 5-2 = 3
console.log(l) // 3

let m = 10
m *= 2 // m = m*2 // 10*2 = 20
console.log(m) // 20
// /= - It will divide the value of the variable then assign the same value to it.
let n = 10
n /=3 // n = n/2 = 10/2 = 5
console.log(n) // 5

let o = 10
o %= 3 // o = o%3 // 10%3 = 1
console.log(o) // 1












