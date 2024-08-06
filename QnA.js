// 1. check the acccount details
// 2. online transaction
// 3. check the balance

const prompt = require('prompt-sync')();

let flag = true
while(flag){
    let choice = prompt("Enter your choice: \n 1. check the acccount details \n 2. online transaction \n 3. check the balance \n")
    switch(choice){
        case "1":
            console.log("Account details:")
            console.log("Account number: 1234567890")
            console.log("Account holder name: John Doe")
            console.log("Account type: Savings")
            break;
        case "2":
            console.log("Online transaction:")
            console.log("Transaction type: Debit")
            console.log("Transaction amount: $100")
            break;
        case "3":
            console.log("Account balance: $1000")
            break;
        default:
            console.log("Invalid choice")
            flag = false
            }
}

console.log("******************************************")

let k =5
console.log(++k) // 6 ++
console.log(k) // 6



// reduce() with String
// The reduce() method applies a function against an accumulator and each element in the array (from left
// to right) to reduce it to a single value.
// The reduce() method does not execute for arrays with zero elements. If the array is empty,
// the reduce() method returns undefined.
// The reduce() method executes the provided function once for each element in the array (from left to
// right) and the return value of each call is used as the accumulator value for the next call

// Example to conactenate every element of an array having string values

const words = ["Hello", "World", "from", "EduNexGen"];

// Using reduce to concatenate the strings
const sentence = words.reduce((accumulator, currentValue) => {
  return accumulator + " " + currentValue;
}, "");

console.log(sentence); // Output: "Hello World from EduNexGen"

// Let say if we have to find how many test cases have passed, failed

const testResults = [
    { testName: "Login Test", status: "passed" },
    { testName: "Signup Test", status: "failed" },
    { testName: "Checkout Test", status: "passed" },
    { testName: "Profile Update Test", status: "failed" }
  ];
  
  
  // Using reduce to summarize test results
  const summary = testResults.reduce((accumulator, currentValue) => {
    accumulator[currentValue.status] = (accumulator[currentValue.status] || 0) + 1;
    return accumulator;
  }, {});
  
  console.log(summary); // Output: { passed: 2, failed: 2 }
  
