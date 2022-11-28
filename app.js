//  1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//     1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
//     •	Do not use numbers to reference the last element, find it programmatically, 
//     •	ages[7] – ages[0] is not allowed!

//     1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
//     1c.	Use a loop to iterate through the array and calculate the average age. 

var ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages[ages.length - 1] - ages[0]);

// loop avarage
console.log("---------------------------");
var sum = 0;
for (let age of ages) {
    sum += age;
}
console.log(sum / ages.length);
console.log("---------------------------");

//Dynamic Check
ages.push(100);
console.log(ages[ages.length - 1] - ages[0]);
console.log("---------------------------");

console.log("Question 2");
let sumOfLetters = 0;
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
for (let name of names) {
    sumOfLetters += name.length;
}
console.log("The avarage number of letters is : " + sumOfLetters / names.length + "\nconcatination : ");
//Concatenation of names
var namesCon = '';
for (let name of names) {
    namesCon += name + " ";
}
console.log(namesCon);

//3.	How do you access the last element of any array? arrayname.length - 1;
//4.	How do you access the first element of any array? array[0];
var nameLengths = [];
for (let nameSize of names) {
    nameLengths.push(nameSize.length);
}
console.log(nameLengths);

//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
let sumOfElements = 0;
for (let elm of nameLengths) {
    sumOfElements += elm;
} console.log(sumOfElements);

console.log("Functions: ");
function myFunction(word, n) {
    var words = '';
    for (let i = 0; i < n; i++) {
        words += word;
    } return words;
}
console.log(myFunction('Hello', 3));

function fullName(firstName, lastname) {
    return firstName + " " + lastname;
}
console.log(fullName('Jesus', 'Romero'));

//
var testArray = [1,99];
function arrayLengthOver100 (testArray){
    var count =0;
    for(let nums of testArray){
        count += nums;
    } if (count > 100 ){
        return true;
    } return false;
    }

console.log(arrayLengthOver100(testArray));

//
function arrayofNumbers (x){
    var count =0;
    for(let nums of x){
        count += nums;
    }
    return count/x.length;
}
console.log(arrayofNumbers (testArray));

//Question 11
function arrayComparison(array1, array2){
    if (arrayofNumbers(array1) >arrayofNumbers(array2)){
        return true;
    }
return false;
}

let xarray =[200,2];
console.log(arrayComparison(testArray,xarray ));

//question 12
function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside && (moneyInPocket > 10.50)){
    return true;
    }return false;
}
console.log(willBuyDrink(true, 09.50));

//Question 13
var string = window.prompt("Input a String in Upper Case");


function myFunFunction(x){
    return x.toLowerCase();
}
console.log(myFunFunction(string));