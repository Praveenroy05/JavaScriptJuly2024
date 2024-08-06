// This is a single lne comment

/*
This is a multi line comment
This is a sceond line
*/

// Data Types in JS:

/*
1. Number
2. String
3. Boolean
4. Undefined
5. Null
*/

// 1. Number - 

//var , let , const

var a = 10.8787;
// typeof
console.log(typeof(a))

//int b =10;

// 2. String

var str = 'c'; // char in java
console.log(typeof(str))

// 3. Boolean -  true (1==1)/false(1<0)
var b = true;
console.log(typeof(b))

// 4. Undefined

var name;
console.log(typeof(name))

// 5. Null

var x = null;
console.log(typeof(x))

var username ; 


// Variables in JS

// var - ES5 - ECMASCRIPT 5

// let, const - ES6

//var - Global scope or Function scope
// You can redeclare var , redefine it

var c =10;
var c =10;
var c =20;
var c =20;

var c =30;
c =50

// var - Global scope or Function scope
// You can redeclare var , redefine it

// let  - Block - {....} scoped or gloabl
// You can not redeclare let , redefine it

// const - Block - {....} scoped or global
// it is use to store constant variable
// You can not redeclare const and cannot redefine it

var r; // undefined
let s; // undefined
const t = 2; // 


const v1 = 20;
 //v1 = 20;

let v = 10
v = 20
//let v = 10

const xy=35;
function testing(){
    const x =10;
    if(true){
        const y =20;
        console.log(x) //10
        console.log(y) // 20
    }
 //   console.log(y) // Reference erro - it is undefines

}

testing()



var a = 10; // Global

function test(){
    console.log(a)
}

function test1(){
    var b =20
    console.log(a)
    console.log(b)
}

test()
test1()
console.log("*******************************")


var flag = true 
var t1 = 4 // functional
if(t1>3){ 
    var flag = false
}
console.log(flag)


let z 
console.log(z) // undefined

z = 14;
console.log(z) // 14
console.log(typeof(z))


global.test = 42;

let myvariable; 
// {...} // 

function add(a,b){
    myvariable =  a+b
    return myvariable;
}

var say = 12;
let say = 13;
console.log(say)



// Usage:
// var - We do not use var keyword
// let - The value can be changed for a variable
// const - The value cannot be changed anytime









