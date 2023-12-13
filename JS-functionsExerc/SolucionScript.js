// ejercicio 1
// Convertir minutos a segundos

function minutesToSeconds(minutes){
    return minutes * 60
}

//Return the Next Number from the Integer Passed.**
//Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function nextNumber(number){
    return number+1
}

//Area of a Triangle.**
//Write a function that takes the base and height of a triangle and return its area.
function rectangledTriangle(base, height){
    return (base*height)/2
}

//**4. Convert Age to Days.**
//Create a function that takes the age in years and returns the age in days.
const ageInDays = (yearsOld) => yearsOld*365;
console-console.log(ageInDays(1));

//. Power Calculator.**
//Create a function that takes voltage and current and returns the calculated power.
function circuitPower(voltage, current){
    return voltage * current
}

//Return Something to Me!.**
//Write a function that returns the string "something" joined with a space " " and the given argument a.
function giveMeSomething(argumentA){
    return `Somthing ${argumentA}`
}
// console.log(giveMeSomething('is better than nothing'))

//Sum of Polygon Angles.**
//Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).
function sumPolygon(numberOfSides){
    return numberOfSides * 60
}

//Convert Hours and Minutes into Seconds.**
//Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.
function timeToSeconds(hours, minutes){
    a= hours*60*60
    b= minutes*60
    total=a+b
    return total
}

// console.log(timeToSeconds(10, 52));
