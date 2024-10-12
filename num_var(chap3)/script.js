
document.write("<h1> VARIABLES FOR NUMBERS </h1>");


/*1. Declare a variable called age & assign to it your age. Show
your age in an alert box. */


var myAge = 23;
alert("I am " + myAge + " years old");


/* 2. Declare & initialize a variable to keep track of how many
times a visitor has visited a web page. Show his/her
number of visits on your web page. For example: “You
have visited this site N times”. */


var visitorCount = 10;
alert("Youhave visited this site " + visitorCount + " times");


/* 3. Declare a variable called birthYear & assign to it your
birth year. Show the following message in your browser: */


document.write("<br> <br>");

var birthYear = 2001;
document.write("My birth year is ", birthYear);
document.write("Declared type of my variable is: ", typeof birthYear);




/* 4. A visitor visits an online clothing store
www.xyzClothing.com . Write a script to store in variables
the following information:
a. Visitor’s name
b. Product title
c. Quantity i.e. how many products a visitor wants to
order
Show the following message in your browser: “John
Doe ordered 5 T-shirt(s) on XYZ Clothing store”. */



document.write("<br> <br>");



var visitorName = "Ayaz Ali";
var productName = "Ray Ben Spectacles(34)";
var qtyProduct = 4;

document.write(visitorName, " ordered", qtyProduct, " ", productName, " on Abc Clothing store.");