// String:

// 1. Using single quote
let variable = 'Apple' // "String" 
console.log(variable.length)

// 1. Using double quote
let str = "Apple" // "String" 
console.log(str)

// 3. String constructor
// new String("String")
let str1 = new String("I am a String") // "String"
console.log(str1)

//4. Empty String
let str2 = ""

//5. Multiline String
let str3 = ` THis is a 
            multi line 
            String`
console.log(str3)

// charAt()

// Syntax - string.charAt(index)

console.log(str.charAt(1)) // p

for(let i=0; i<str.length; i++){
    console.log(str.charAt(i)) // 0 - A
}


// concat()
// Syntax - string.concat(string2)

let str4 = "Hello"
let str5 = "World"
let newStr = str4.concat(str5)
console.log(newStr)

// includes()
// Syntax - string.includes(searchString, position)
let greet = "Hello Joohn"
let result = greet.includes("J", 7)
console.log(result)

//startsWith() , endsWith()
// Syntax - string.startsWith(searchString, position)
// Syntax - string.endsWith(searchString, position)
console.log(greet.startsWith("J"))
console.log(greet.endsWith("John"))

// indexOf() - 
// Syntax - string.indexOf(searchString, position)
console.log(greet.indexOf("o")) // 4
console.log(greet.indexOf("o", 9)) // 4

// lastIndexOf() - Return the position of the last occurance of a specified value in a string.
// Syntax - string.lastIndexOf(searchString, position)
console.log(greet.lastIndexOf("o")) //8
console.log(greet.lastIndexOf("o", 9)) // -1

// slice(startIndex, EndIndex)

// split() - It splits a string into an array of string
// Syntax - string.split(separator, limit)

let string = "I am a string in JS"
console.log(string.split("a"))

// toLowerCase() , toUpperCase()

console.log(string.toUpperCase())
console.log(string.toLowerCase())










