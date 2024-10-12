// IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS


document.write("<h1>If, Else if, Else Statements & Condition</h1>");




/* 1. Write a program that takes a character (number or string) 
in a variable & checks whether the given input is a 
number, uppercase letter or lower case letter. (Hint: ASCII 
codes:- A=65, Z=90, a=97, z=122). */



document.write("<br> <br>");

var userInput = prompt("Enter any character:");
var ASCII = userInput.charCodeAt(0);

if (userInput.length == 1) {
    if(ASCII >= 48 && ASCII <= 57) {
        document.write(userInput + " is a number");
    }
    else if(ASCII >= 65 && ASCII <= 90) {
        document.write(userInput + " is an uppercase letter");
    }
    else if(ASCII >= 97 && ASCII <= 122) {
        document.write(userInput + " is a lower case letter");
    }
    else {
        document.write("Neither be a character nor a number");
    }
}
else {
    document.write("Character should be single");
}




/* 2. Write a JavaScript program that accept two integers and
display the larger. Also show if the two integers are equal. */




document.write("<br> <br>");

var userInt1 = +prompt("Enter your first integer:");
var userInt2 = +prompt("Enter your second integer:");

if (userInt1 > userInt2) {
    document.write(userInt1 + " is larger integer than " + userInt2);
}
else if (userInt2 > userInt1) {
    document.write(userInt2 + " is larger integer than " + userInt1);
}
else if (userInt1 === userInt2) {
    document.write(userInt1 + " is equal to " + userInt2);
}





/* 3. Write a program that takes input a number from user & 
state whether the number is positive, negative or zero. */




document.write("<br> <br>");

var userNum = +prompt("Enter any number:");

if (userNum > 0) {
    document.write(userNum + " is a positive number");
}
else if (userNum < 0) {
    document.write(userNum + " is a negative number");
}
else if (userNum === 0) {
        document.write(userNum + " is a zero");
}
else {
    document.write(userNum + " is a not a valid number");
}




/* 4. Write a program that takes a character (i.e. string of 
length 1) and returns true if it is a vowel, false otherwise */


document.write("<br> <br>");

var userString = prompt("Enter any 1 alphabet:").toLowerCase();

if (userString === "a" && userString === "e" && userString === "i" && userString === "o" && userString === "u") {
    document.write(true);
}
else if (userString !== "a" && userString !== "e" && userString !== "i" && userString !== "o" && userString !== "u" ) {
    document.write(false);
}
else {
    document.write("Use only one alphabet");
}


/* 5. Write a program that
a. Store correct password in a JS variable.
b. Asks user to enter his/her password
c. Validate the two passwords:
i. Check if user has entered password. If not, then 
give message “ Please enter your password”
ii. Check if both passwords are same. If they are 
same, show message “Correct! The password you 
entered matches the original password”. Show 
“Incorrect password” otherwise. */




document.write("<br> <br>");

var correctPass = "password";
var userPass = prompt("Enter your password");

if (userPass == false) {
    document.write("<h5>Please enter your password</h5>");
}
if (userPass === correctPass) {
    document.write("Correct! The password you entered matches the original password");
}
else {
    document.write("Incorrect password");
}




/* 6. This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
else
greeting = "Good evening";
} */


document.write("<br> <br>");

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    document.write(greeting);
}
else {
    greeting = "Good evening";
    document.write(greeting);
}




/* 7. Write a program that takes time as input from user in 24 
hours clock format like: 1900 = 7pm. Implement the 
following case using if, else & else if statements */



document.write("<br> <br>");

var userTime = +prompt("Enter your time in 24 hours clock format");
var originalTime = userTime * 100;

if (originalTime >= 0 && originalTime <= 2400) {
if (originalTime >= 0 && originalTime < 1200) {
    document.write("Good Morning!");
}
else if (originalTime >= 1200 && originalTime < 1700) {
    document.write("Good Afternoon!");
}
else if (originalTime >= 1700 && originalTime < 2100) {
    document.write("Good Evening!");
}
else if (originalTime >= 2100 && originalTime <= 2359) {
    document.write("Good Evening!");
}
}
else {
    document.write("Please enter valid time");
}