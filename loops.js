// Loops will execute same block of code multiple times

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

// for  - If we know how many times we have run the iteration - 10
// while - if we do not how many times we have to execute  - 
// do-while - if we know that before checking the condition we have to execute the statement 1 time.
// for ... of //  - for ... of loop is used to iterate over iterable objects like arrays, strings etc
// for ... in //  - for ... in loop is used to iterate over the properties of an object.

// For loop - syntax

// for(initialisation; condition; increment/decrement){
// initialisation = initialise the variable to start with ex: - let i=0
// condition - it will check for true or false. Ex: - i<5 // 0<5
// increment/decrement - i++/i-- = i++ = i=i+1 // i = 0+1=1
// }
console.log("******************************************")
for(let i =1; i<5; i++){ // 1<5 // 2<5 3<5 4<5 5<5
    console.log(i) // 1 //2 //3 //4
}

let result = ""
for(let i =1; i<5; i++){ // 1<5 // 2
    result += i + " "
}
console.log(result) // 1 2 3 4  // 1 2  

// While - syntax
// while(condition){ let i= 10; i>20
//     // code to be executed
// }

console.log("******************************************")

let j = 0 // print from 0 to 4
while(j<5){ // 0 <5 1<5  5<5
    console.log(j) // 0 1 2 3 4
    ++j // j++ = j+1 // 0+1 =1 2 4+1=5
}

// do ... while -syntax

/*
do{
    //code to be executed
}while(condition);

*/

//print from 0 to 10

console.log("******************************************")
let k = 0
do{
    console.log(k) // 0
    k++ // 1
}while(k<10); 

// for ... in - is used to iterate over the properties of the object

// for ... in  - syntax

//for(variable in object){
    //code to be executed
//}

const employee = {name: "Tom", age :30, city : "London"}
//console.log(employee[name]) // Map - key -value : 0:4, 1: 5

for(let key in employee){
    console.log(key +":"+ employee[key]) // name age and city   // array = [1,2,3,4,5] = = array[0] // array[index] 
}


// for ... of
// for...of - is used to iterate over the values of the array or the iterable object

// The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include Array, String etc
// for...of - syntax

//for(variable of iterable){
    //code to be executed
//}
console.log("***************************************")
let array = [10,20,30,"Tom", false, 4.5] // [1,2,3,4,5] // 0 [0:10, 1:20, 2:30 ....]
// console.log(array[0]) // 10
// console.log(array[3]) // Tom

for(let i of array){
    console.log(i)
}



























