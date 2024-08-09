// Objects - It is a collection of key-value pairs in JS. The key -value pari can store any data types, functions, other object.

// className obj = new ClassName() - In java

// 1. Object Literals - {key:value}
// 2. Object Constructor - new Object()
// 3. Factory functions - function(){} - returns an object
// 4. Class style- class ClassName{} - returns an object
// 5. Construtor Function


// 1. Object Literals - We have to use { key:value, methods: function()}
// Syntax: - 
/*
let obj = {
    key1:value1,
    key2:value2,
    method :function(){}
}
*/

let person = {
    name: "John",
    age:40,
    city: "NY",
    personInfo: function(){
        console.log(this.name, this.age, this.city)
    }
}
console.log(person.name);
console.log(person.age);
console.log(person.city);
person.personInfo()

// 2. new Object() - Object Constructor
// Syntax:
/* 
let obj = new Object();
 obj.key1 = value1,
 obj.key2 = value2,
 obj.method = function(){}

*/

let obj = new Object();
obj.name = "Rahul";
obj.age = 30;
obj.city = "AR";
obj.personInfo = function(){
    console.log(this.name, this.age, this.city)
}

obj.personInfo();

// 3. Constructor Function - this, new
// Syntax - 
/*
function ConstructorFunction(par, par1){
    this.key1 = value1;
    this.key2 = value2;
    this.method = function(){}
} 

let obj = new ConstructorFunction(arg1, arg2)
let obj1 = new ConstructorFunction()
    */

function Car(model, year, color){
        this.model = model; 
        this.year = year;
        this.color = color; 
        this.start = function(){
            console.log(this.model +" "+ "Started")
}
}

let car = new Car("BMW", 2024, "Red")
car.start();

// 4. Class style - ES6 - 2015
// Syntax -

/*

class ClassName{

    constructor(param1, param2,....){
        this.param1 = param1;
        this.param2 = param2;
    }


method(){}

}

*/

class CarClass{
    constructor(model, year, color){
        this.model = model;
        this.year = year;
        this.color = color;
    }

    start(){
        console.log("Car Started")
    }

    static stop(){
        console.log("Car stopped")
    }
}

let car1 = new CarClass("BMW", 2023, "White")
console.log(car1.model)
car1.start()
CarClass.stop()

//5. Factory Functions
// Syntax - 
/*
function name(){
     return {object}
} */

   //  let obj = name()

   function CarInfo(model, year, color){

    return {
    model : model,
    year  : year,
    color : color,
    start : function(){
        console.log(this.model +" "+ "Started")
}
    }
    
}

let carObj = CarInfo("Audi", 2022, "Red")
carObj.start()
console.log(carObj.color)





