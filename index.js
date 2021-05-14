function saturdayFun (string1 = "roller-skate"){
    return `This Saturday, I want to ${string1}!` 
}

const mondayWork = function (string1 = "go to the office") {
    return `This Monday, I will ${string1}.`
}

function wrapAdjective (param2 = "*") {
    const innerfunction = function (param1 = "special") {
        return `You are ${param2}${param1}${param2}!`
    } 
    return innerfunction
}



function subtract (num1, num2) {
    return num1-num2
}

function multiply (num1, num2) {
    return num1*num2
}

const divide = function (num1, num2) {
    return num1/num2
}
const Calculator = {add: () =>  1+3, subtract:() =>  1-3, multiply:() =>  1*3, divide:() => 10/5}
    
const actionApplyer = function (int, arrayOfFunctions){
        if (arrayOfFunctions.length === 0) {
            return int
        } else {
            return (int*2+1000)%7
        }        
    } 
