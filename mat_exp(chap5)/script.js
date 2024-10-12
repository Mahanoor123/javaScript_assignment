
document.write("<h1> MATH EXPRESSIONS </h1>");



/* 1. Write a program that take two numbers & add them in a 
new variable. Show the result in your browser. */

var userNum1 = +prompt("Enter your first number:");
var userNum2 = +prompt("Enter your second number:");
var sum = userNum1 + userNum2;

document.write("Sum of ", userNum1, " and ", userNum2, " is ", sum, "<br>");



/* 2. Repeat task1 for subtraction, multiplication, division &
modulus. */

var sub = userNum1 - userNum2;

document.write("Subtraction of ", userNum1, " and ", userNum2, " is ", sub, "<br>");

var mul = userNum1 * userNum2;

document.write("Multiplication of ", userNum1, " and ", userNum2, " is ", mul, "<br>");

var div = userNum1 / userNum2;

document.write("Division of ", userNum1, " and ", userNum2, " is ", div, "<br>");

var mod = userNum1 % userNum2;

document.write("Modulus of ", userNum1, " and ", userNum2, " is ", mod, "<br>");



 /* 3. Do the following using JS Mathematic Expressions
a. Declare a variable.
b. Show the value of variable in your browser like “Value
after variable declaration is: ??”.
c. Initialize the variable with some number.
d. Show the value of variable in your browser like “Initial
value: 5”.
e. Increment the variable.
f. Show the value of variable in your browser like “Value
after increment is: 6”.
g. Add 7 to the variable.
h. Show the value of variable in your browser like “Value after addition is: 13”.
i. Decrement the variable.
j. Show the value of variable in your browser like “Value
after decrement is: 12”.
k. Show the remainder after dividing the variable’s value 
by 3. 
l. Output : “The remainder is : 0”. */




document.write("<br> <br>");

var newVar;
document.write("Value after variable declaration is ", newVar, "<br>");

var newVar = 19;
document.write("Initial value:", newVar, "<br>");

newVar++;
document.write("Value after increment is: ", newVar, "<br>");

newVar += 7;
document.write("Value after addition is: ", newVar, "<br>");

newVar--;
document.write("Value after decrement is: ", newVar, "<br>");

var mod = newVar % 3;
document.write("The remainder is : ", mod, "<br>");



/* 4. Cost of one movie ticket is 600 PKR. Write a script to 
store
ticket price in a variable & calculate the cost of buying 5 
tickets
to a movie. Example output: */



document.write("<br> <br>");


var movieTicket = 600;
var movieTickets5 = movieTicket * 5;

document.write("The total cost to buy 5 tikets to a movie is ", movieTickets5, "PKR");



/* 5. Write a script to display multiplication table of any 
number in your browser. E.g */



document.write("<br> <br>");

var tableOf = 8;
document.write(tableOf , " X ", " 1 ", " = ", tableOf * 1, "<br>");
document.write(tableOf , " X ", " 2 ", " = ", tableOf * 2, "<br>");
document.write(tableOf , " X ", " 3 ", " = ", tableOf * 3, "<br>");
document.write(tableOf , " X ", " 4 ", " = ", tableOf * 4, "<br>");
document.write(tableOf , " X ", " 5 ", " = ", tableOf * 5, "<br>");
document.write(tableOf , " X ", " 6 ", " = ", tableOf * 6, "<br>");
document.write(tableOf , " X ", " 7 ", " = ", tableOf * 7, "<br>");
document.write(tableOf , " X ", " 8 ", " = ", tableOf * 8, "<br>");
document.write(tableOf , " X ", " 9 ", " = ", tableOf * 9, "<br>");
document.write(tableOf , " X ", " 10 ", " = ", tableOf * 10, "<br>");




/* 6. The Temperature Converter: It’s hot out! Let’s make a 
converter based on the steps here.
a. Store a Celsius temperature into a variable.
b. Convert it to Fahrenheit & output “NNoC is NNoF”.
c. Now store a Fahrenheit temperature into a variable.
d. Convert it to Celsius & output “NNoF is NNoC”. */




document.write("<br> <br>");


var tempCelsius = 37.5;
var tempFhtConvert = (tempCelsius * 9/5) + 32;
var tempFarenheit = 98.4;
var tempCelsConvert = (tempFarenheit - 32 ) * 5/9;

document.write(tempCelsius, "oC", " is ", tempFhtConvert, "oF", "<br>");
document.write(tempFarenheit, "oF", " is ", tempCelsConvert, "oC", "<br>");




/*7. Write a program to implement checkout process of a 
shopping cart system for an e-commerce website. Store 
the following in variables
a. Price of item 1
b. Price of item 2
c. Ordered quantity of item 1
d. Ordered Quantity of item 2
e. Shipping charges
Compute the total cost & show the receipt in your browser. */


document.write("<br> <br>");


var itemPrice1 = 700;
var itemPrice2 = 1500;
var qtyItem1 = 4;
var qtyItem2 = 1;
var shipAdd = 350;

var totalCost = itemPrice1 * qtyItem1 + itemPrice2 * qtyItem2 + shipAdd;

document.write("Total cost of your order is ", totalCost);




/* 8. Store total marks & marks obtained by a student in 2 
variables. Compute the percentage & show the result in 
your browser */



document.write("<br> <br>");

var studTotalMarks = 500;
var studObtMarks = 330;
var studPercentage = studObtMarks / studTotalMarks * 100;

document.write("<h4> Marks Sheet </h4>" + "<br>");
document.write("Total Marks: ", studTotalMarks , "<br>");
document.write("Marks Obtained: ", studObtMarks , "<br>");
document.write("Percentage: ", studPercentage);



/* 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
script to convert the total currency to Pakistani Rupees. 
Perform all calculations in a single expression.
(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
and 1 Saudi Riyal = 28 Pakistani Rupee) */



document.write("<br> <br>");

var dollarMoney = 10;
var riyalMoney = 25;

var pakCurrency = dollarMoney * 350.0 + riyalMoney * 204;

document.write("<h4> Currency in PKR </h4>");
document.write("Total currency in PKR: ", pakCurrency);




/* 10. Write a program to initialize a variable with some 
number and do arithmetic in following sequence:
a. Add 5
b. Multiply by 10
c. Divide the result by 2
Perform all calculations in a single expression */


document.write("<br> <br>");

var myNum = 55;
var myResult = 55 + 5 * 10 / 2;
document.write("The value after calculation is: ", myResult);



/* 11. The Age Calculator: Forgot how old someone is? 
Calculate it!
a. Store the current year in a variable.
b. Store their birth year in a variable.
c. Calculate their 2 possible ages based on the stored 
values.
Output them to the screen like so: “They are either NN or NN
years old”. */



document.write("<br> <br>");


var currentYear = 2024;
var birthYear = 2001;

var userAge = currentYear - birthYear;

document.write("Current Year: ", currentYear, "<br>");
document.write("Birth year: ", birthYear, "<br>");
document.write("Your age is: ", userAge);




/* 12. The Geometrizer: Calculate properties of a circle.
a. Store a radius into a variable.
b. Calculate the circumference based on the radius, and
output “The circumference is NN”.
(Hint : Circumference of a circle = 2 π r , π = 3.142)
Calculate the area based on the radius, and output “The 
area is NN”. (Hint : Area of a circle = π r2, π = 3.142) */



document.write("<br> <br>");

var radius = 14;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius ** 2;

document.write("Radius of a circle", radius, "<br>");
document.write("The circumference is: ", circumference, "<br>");
document.write("The area is: ", area);


/* 13. The Lifetime Supply Calculator: Ever wonder how
much a “lifetime supply” of your favorite snack is? 
Wonder no more.
a. Store your favorite snack into a variable
b. Store your current age into a variable.
c. Store a maximum age into a variable.
d. Store an estimated amount per day (as a number).
e. Calculate how many would you eat total for the rest of
your life.
Output the result to the screen like so: “You will need 
NNNN to last you until the ripe old age of NN”. */




document.write("<br> <br>");


var fvtSnack = "choco pie";
var currAge = 23;
var maxAge = 89;
var estAmount = 2;
var snackAmount = estAmount * 66;

document.write("You will need ", snackAmount, " to last you until the ripe old age of ", maxAge );