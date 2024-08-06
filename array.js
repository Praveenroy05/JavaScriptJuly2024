//let i =10
//let array = [1,2,3,4,5] // index 0 =1
// Array literal
//let arrayName = [value1, value2];

let arr = [] // empty array
console.log(Array.isArray(arr))

let numericArray = [1,2,3,6,7] // Numeric array
let fruits = ["Apple", "Oragne", "Banana"] // String array
let mixedArray = [1, "Apple", 3.5, true, null, undefined]

console.log(arr)
console.log(numericArray)
console.log(fruits)
console.log(mixedArray)

// let array = new Array()

let array = new Array(2,4,5,"Tom") // [2,4,5,"Tom"]
console.log(array)

// length - 
// Syntax - array.length // size of an array
let array1 = [1,2,3,4,5, 6, "Tom", "pink"] // 0-7 // 8
console.log(array1.length) // 5


// push() - 
// Syntax - array.push(value1, value2, value3, ...) // add elements at the

array1.push("red", "orange", "JS", "Java")
console.log(array1)

// pop() - 
// Syntax - array.pop() // remove the last element from the array

let removedElement = array1.pop()
console.log(removedElement)
console.log(array1)

// unshift()
// Syntax - array.unshift(value1, value2, value3, ...) // add elements at the
// beginning of the array

array1.unshift(0,"TS")
console.log(array1)

// shift()
// Syntax - array.shift() // remove the first element from the array
let removedElementFromShift = array1.shift()
console.log(removedElementFromShift)
console.log(array1)


// splice()
// Syntax - array.splice(startIndex, deleteCount, item1, item2, item3, ...)
// startIndex - index at which to start changing the array

let array2 = ["Organe", "Banana", "Apple", "Mango", 1,2,4,5] //0-7 // 8
console.log(array2)

array2.splice(1,0,"Tom", "Bob", "pink", "yellow")
console.log(array2)

//slice - 
// Syntax - array.slice(startIndex, endIndex)
// startIndex - index at which to start changing the array
// endIndex - index at which to end changing the array. EndIndex will be exclusive

let array3 = [1,2,3,"Java", "pink", "rose", "4.5", 89]

console.log(array3.slice(1,5)) // 5-1 = 4
console.log(array3.slice(-4,-1)) // -1-1 = -2

console.log(array3.slice(1,)) //

// toString() - 
// Syntax - array.toString() // convert array to string
let courses = ["HTML", "CSS", "JavaScript", "React", "TS"];
console.log(courses.toString());

// join()
// Syntax - array.join(separator) // convert array to string
// separator - separator to be used between elements of the array

console.log(courses.join("|"))

// concat() - 
// Syntax - array.concat(array1, array2, array3, ...) // merge two or more
// arrays into one array

let arr1 = [1,2,3,4]
let arr2 = ["String", "JS", "TS"]
let arr3 = [false,true]

console.log(arr1.concat(arr2, arr3)) // arr1 + arr2 + arr3

// indexOf() - Return the first index at whicha given elelment can be found in the array
// Syntax - array.indexOf(element, fromIndex)

console.log(courses.indexOf("CSS")) //1
console.log(courses.indexOf("CSS", 2)) //

let array4 = ["apple", "orange", "ts", "js", 2, 3, 4]
// reverse() - 
// Syntax - array.reverse() // reverse the array
console.log(array4)
console.log(array4.reverse())

// sort()
// Syntax - array.sort([compareFunction]) // sort the array in ascending order
console.log(array4.sort())

// foreach() , map(), reduce(), filter(), some(), each()

// forEach() - Execute a provided function once for each array element.

// Syntax: - array.forEach(function(currentValue, index, array){}) // [1,2,3,4]

// currentValue - The current element being process in the array
// index - The index of the current element being processed
// array

let fruitsArray = ["apple", "banana", "orange", "Mango"] // apple 0, banana 1

fruitsArray.forEach((a)=>{ // 
    console.log(a) // apple 0
})

// map() - Create a new array by iterating through all the elements of an an array

// array.map(function(currentValue, index, array){})

let numericalArray = [1,2,3,4,5] // 1*1 2*2 product : price // let variable = 1

let square = numericalArray.map(function(number){
    return number%2 ===0 
})
console.log(square)

// filter() - Create a new array with all the elenets that pass the fucntions
// array.filter(function(currentValue, index, array){})

let evenNumber = numericalArray.filter(function(number){
    return number %2 === 0
})

console.log(evenNumber)


// reduce(fn) - 
// array.reduce(function(accumulator, currentValue, index, array){}, initialValue)

let sum = numericalArray.reduce(function(total, element){ // total =1
      return total+element  // 0+1 =1 +2 =3
},0)

console.log(sum)

// some() - true
// array.some(function(currentValue, index, array){})
// [1,2,3,4,5]
let some = numericalArray.some(function(number){

    return number > 4
})
console.log(some)

// every()
// array.every(function(currentValue, index, array){})

let every = numericalArray.every(function(number){

    return number > 0
})
console.log(every)

