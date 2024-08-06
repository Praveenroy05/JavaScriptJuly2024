// Statement or conditions

// if 
// if else
// nested if else

if(2>3){ // false - 
    console.log("2 is greater than 3")
}
else{
    console.log("2 is not greater than 3")
}

// nested if else

let grade; 
function grades(variable){

    if(variable>=90){
        grade="A"
    }
    else{
        if(variable>=80){
            grade="B"
        }else{
            if(variable>=70){
                grade="C"
            }else{
                if(variable>=60){
                    grade="D"
                }
            }
        }

    }
    return grade
}

console.log(grades(95))


function grades1(){
    grade = "PASS"
    return grade
}

console.log(grades1())


let length =10;

function testing(){
if(true){
    let length = 15;
    console.log("Inside function",length)
}
}

testing()
console.log(length)




// if else if else
// let browser = "safari"

// if(browser == "chrome"){
//     console.log("You are using chrome")
// }
// else if(browser == "firefox"){
//     console.log("You are using firefox")
// }else if(browser == "safari"){
//     console.log("You are using safari")
// }else{
//     console.log("You are using something else")
// }

// switch case
 
// syntax
// switch(expression){
//     case value1:
//         //......
//         break; // exit the loop - 
//     case value2:
//         //......
//         break;
//     default:
//         //......
// }

let browser = "false" // <browser>

// launch a url in <browser> browser

switch(browser){
    case "chrome":
        console.log("You are using chrome")
        break;
    case "firefox":
        console.log("You are using firefox")
        break;
    case "safari":
        console.log("You are using safari")
        break;
    default:
        console.log("You are using something else")
}

let day = 2;

switch(day){
    case 0:
        console.log("Today is Sunday");
        break;
    case 1:
        console.log("Today is Monday");
        break;
    default:
        console.log("Today is not Sunday or Monday");

}

// cross browser testing
// cross platform testing
// multiple environment - Dev , QA, Prod















