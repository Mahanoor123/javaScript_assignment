
document.write("<h1>USER INPUT & CONDITIONAL STATEMENT</h1>");

/* 1. Write a program to take “city” name as input from user. If 
user enters “Karachi”, welcome the user like this: 
“Welcome to city of lights” */




var userCity = prompt("Enter your city name:").toLowerCase()

if (userCity === "karachi") {
    document.write("Welcome to the city of lights");
}



/* 2. Write a program to take “gender” as input from user. If the
user is male, give the message: Good Morning Sir. If the 
user is female, give the message: Good Morning Ma’am. */



document.write("<br> <br>");

var userGender = prompt("Enter your gender here: \n male or female").toLowerCase();

if (userGender === "male") {
    document.write("Good Morning Sir.");
}
else if (userGender === "female") {
    document.write("Good Morning Ma'am.");
}
else {
    document.write("Enter your correct gender.");
}




/* 3. Write a program to take input color of road traffic signal 
from the user & show the message according to this table: */




document.write("<br> <br>");

var userSignalColor = prompt("Enter traffic signal color:").toLowerCase();

if (userSignalColor === "red") {
    document.write("Must Stop.");
}
else if (userSignalColor === "yellow") {
    document.write("Ready to move.");
}
else if (userSignalColor === "green") {
    document.write("Move now.");
}
else {
    document.write("Enter traffic color only");
}




/* 4. Write a program to take input remaining fuel in car (in 
litres) from user. If the current fuel is less than 0.25litres, 
show the message “Please refill the fuel in your car” */




document.write("<br> <br>");

var userCarFuel = +prompt("Enter fuel in car (in litres):");

if (userCarFuel < 0.25) {
    document.write("Please refill the fuel in your car.");
}
else {
    document.write("Enter fuel.");
}




/* 5. Run this script, & check whether alert message would be
displayed or not. Record the outputs. */



document.write("<br> <br>");

var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true"); // display
}

var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true"); // not dispaly
}

var c = 12;
if (c++ === 13) {
  alert("condition 1 is true"); // not diplay
}

if (c === 13) {
  alert("condition 2 is true"); // display
}
if (++c < 14) {
  alert("condition 3 is true"); // not display
}
if (c === 14) {
  alert("condition 4 is true"); // display
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals"); // display
}

if (true) {
  alert("True"); // disply
}

if (false) {
  alert("False");
}

if ("car" < "cat") {
  alert("car is smaller than cat"); // car is smaller
}




/* program to take input the marks obtained in three
subjects & total marks. Compute & show the resulting
percentage on your page. Take percentage & compute 
grade as per following table: */




document.write("<br> <br>");

var userTotalMarks = +prompt("Enter you total marks in 3 subjects:");
var userObtainedMarks = +prompt("Enter your obtaines marks in 3 subjects:");

var userPercentage = (userObtainedMarks / userTotalMarks) * 100;

if (userPercentage >= 0.0 && userPercentage <= 100.00) {
if (userPercentage >= 80.0 ) {
    document.write("<h1> Marks Sheet </h1>" + "<br> <br>");
    document.write("Total Marks: ", userTotalMarks);
    document.write("<br>");
    document.write("Marks Obtained: ", userObtainedMarks);
    document.write("<br>");
    document.write("Percentage: ", userPercentage + "%");
    document.write("<br>");
    document.write("Grade: " + "A-One");
    document.write("<br>");
    document.write("Remarks: " + "Excellent");
}
else if (userPercentage >= 70.0 ) {
  document.write("<h1> Marks Sheet </h1>" + "<br> <br>");
  document.write("Total Marks: ", userTotalMarks);
  document.write("<br>");
  document.write("Marks Obtained: ", userObtainedMarks + "%");
  document.write("<br>");
  document.write("Percentage: ", userPercentage);
  document.write("<br>");
  document.write("Grade: " + "A");
  document.write("<br>");
  document.write("Remarks: " + "Good");
}
else if (userPercentage >= 60.0 ) {
  document.write("<h1> Marks Sheet </h1>" + "<br> <br>");
  document.write("Total Marks: ", userTotalMarks);
  document.write("<br>");
  document.write("Marks Obtained: ", userObtainedMarks + "%");
  document.write("<br>");
  document.write("Percentage: ", userPercentage);
  document.write("<br>");
  document.write("Grade: " + "B");
  document.write("<br>");
  document.write("Remarks: " + "You need to improve");
}
else if (userPercentage < 60.0 ) {
  document.write("<h1> Marks Sheet </h1>" + "<br> <br>");
  document.write("Total Marks: ", userTotalMarks);
  document.write("<br>");
  document.write("Marks Obtained: ", userObtainedMarks + "%");
  document.write("<br>");
  document.write("Percentage: ", userPercentage);
  document.write("<br>");
  document.write("Grade: " + "Fail");
  document.write("<br>");
  document.write("Remarks: " + "sorry");
}
}
else {
  document.write("Enter correct marks:");
}



/* 7. Guess game:
Store a secret number (ranging from 1 to 10) in a variable.
Prompt user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correct
answer”.
b. If the guessed number +1 is the secret number, show
“Close enough to the correct answer”. */



document.write("<br> <br>");

document.write("<h1>Guess Game:<h1>");


var secretNum = 5;
var userGuessNum = +prompt("Enter any number ranging b/w 0-10");

if (userGuessNum === secretNum) {
  document.write("Bingo! Correct answer");
}
else if (userGuessNum + 1 === secretNum) {
  document.write("Close enough to the correct answer");
}
else {
  document.write("You are fail:");
}



/* 8. Write a program to check whether the given number is
divisible by 3. Show the message to the user if the number 
is divisible by 3. */


document.write("<br> <br>");

var userNum = +prompt("Enter any number to check whether it is divisible by 3");

if (userNum % 3 === 0) {
  document.write(userNum + " is divisible by 3");
}
else {
  document.write(userNum + " is not divisible by 3");
}




/* 9. Write a program that checks whether the given input is an
even number or an odd number. */


document.write("<br> <br>");


var userInput = +prompt("Enter number to check even or odd:");


if (userInput >= 0) {
  if (userInput % 2 === 0) {
    document.write(userInput, " is an even number");
  }
  else {
    document.write(userInput, " is an odd number");
  }
}
else {
  document.write(userInput, " is an invalid input");
}



/* 10. Write a program that takes temperature as input and 
shows a message based on following criteria
a. T > 40 then “It is too hot outside.”
b. T > 30 then “The Weather today is Normal.”
c. T > 20 then “Today’s Weather is cool.”
d. T > 10 then “OMG! Today’s weather is so Cool.” */




document.write("<br> <br>");


var userTemperature = +prompt("Enter your temperature:");

if (userTemperature >= 40) {
    document.write("It is too hot outside.");
}
else if (userTemperature >= 30) {
  document.write("The Weather today is Normal.");
}
else if (userTemperature >= 20) {
  document.write("Today's Weather is cool.");
}
else if (userTemperature >= 10) {
  document.write("OMG! Today's weather is so Cool.");
}
else {
  document.write("Weather not find!");
}




/* 11. Write a program to create a calculator for +,-,*, / & % 
using if statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user. */




document.write("<br> <br>");


var userNum1 = +prompt("Enter your first number:");
var userNum2 = +prompt("Enter your second number");
var userOperation = prompt("Which operation would you like to perform(e.g : +, *, /)");

if (userOperation == "+") {
  document.write("The addition of " + userNum1 + " and " + userNum2 + " is " + userNum1 + userNum2);
}
else if (userOperation == "-") {
  document.write("The subtraction of " + userNum1 + " and " + userNum2 + " is " + userNum1 - userNum2);
}
else if (userOperation == "*") {
  document.write("The multiplication of " + userNum1 + " and " + userNum2 + " is " + userNum1 * userNum2);
}
else if (userOperation == "/") {
  document.write("The division of " + userNum1 + " and " + userNum2 + " is " + userNum1 / userNum2);
}
else if (userOperation == "%") {
  document.write("The modulus of " + userNum1 + " and " + userNum2 + " is " + userNum1 % userNum2);
}
else {
  document.write("Invalid input");
}