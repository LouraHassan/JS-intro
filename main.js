
// Question 1
let num1 = 3;
let num2 = 10;

console.log("The area of the rectangle is:", num1 * num2)

// Question 2

let temp1 = 23;
let CtoF = (temp1 *9/5) + 32;
console.log(temp1+"C is "+ CtoF +"F")
let temp2 = CtoF;
let FtoC = (temp2 - 32) * 5/9;
console.log(temp2+"f is "+ FtoC +"C")

// Question 3

let h = 2;
let s = h * 3600;
console.log(h+" hours is "+ s +" seconds")

// Question 4

let thingOne = `Today is Sunday` ;
let thingTwo = `It's 12 PM`;
console.log(thingOne + " "+ thingTwo)

// Question 5

var bill = 10.25 + 3.99 + 7.15;
var tip = bill * (15/100);
var total = bill + tip;
console.log("Total : ", total)

// Question 6

var madLib = "The Intro to JavaScript course is __________. James and Julia are so __________. I cannot wait to work through the rest of this __________ content!"
var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining";
var madLib = madLib.replace("__________", adjective1)
var madLib = madLib.replace("__________", adjective2)
var madLib = madLib.replace("__________", adjective3) 
console.log(madLib)

// Question 7
var awesomeMessage = "Hi, my name is _____. I love ______. In my spare time, I like to ______.";
var firstName = "Loura";
var interest = "Drawing";
var hobby = "solving puzzle";

var awesomeMessage = awesomeMessage.replace("_____", firstName) 
var awesomeMessage = awesomeMessage.replace("_____", interest) 
var awesomeMessage = awesomeMessage.replace("_____", hobby) 

console.log(awesomeMessage)
