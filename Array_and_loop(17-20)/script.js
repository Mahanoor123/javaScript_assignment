// Arrays and Loops

document.write("<h1> Arrays and Loops </h1>");

/* 1. Declare and initialize an empty multidimensional array.
(Array of arrays) */



var myArray = [1, 2, 3, [3.1, 3.2, 3.3, [3.31, 3.32, 3.3]], 4];



/* 2. Declare and initialize a multidimensional array 
representing the following matrix: */



var newArray = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
for (var i = 0; i < newArray.length; i++) {
    document.write("</br>")
    for (var j = 0; j < newArray[i].length; j++) {
    document.write(newArray[i][j] +  " ");
    } 
}
document.write("</br> </br>");



/* 3. Write a program to print numeric counting from 1 to 10. */



for (var i = 1; i <= 10; i++) {
    document.write("" + i + "</br>");
}



/* 4. Write a program to print multiplication table of any 
number using for loop. Table number & length should be 
taken as an input from user. */



document.write("</br> </br>");


var tableOf = +prompt("Which number of table would you like to print:");
var tableLength = +prompt("What length of table would you like to calculate");

document.write("<h1> Mulatiplication of table of " + tableOf + " Length " + tableLength + "</h1>")  
for (var i = 1; i <= tableLength; i++) {
    document.write(tableOf + " " + " X " + i + " = " + tableOf * i + " " + "</br>");
}
document.write("</br>");




/* 5. Write a program to print items of the following array using for loop:
fruits = [“apple”, “banana”, “mango”, “orange”, 
“strawberry”] */



document.write("</br> </br>");

var fruits = ["apple", "banana", "mango", "orange",  "strawberry"];
for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}
document.write("</br>");
for (var i = 0; i < fruits.length; i++)
document.write("Element at index "  + i + " is " + fruits[i] + "<br>");




/* 6. Generate the following series in your browser. See 
example output.
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k */




document.write("</br> </br>");

document.write("<h1>Counting:</h1>");
for (var i = 1; i <= 15; i++) {
    document.write(i + " , ");
}

document.write("<h1>Reverse Counting:</h1>");
for (var i = 10; i >= 1; i--) {
    document.write(i + " , ");
}

document.write("<h1>Even:</h1>");
for (var i = 0; i <=20 ; i++) {
    if(i % 2 === 0) {
        document.write(i + " , ");
    }
}

document.write("<h1>Odd:</h1>");
for (var i = 0; i <=20 ; i++) {
    if(i % 2 !== 0) {
        document.write(i + " , ");
    }
}

document.write("<h1>Series:</h1>");
for (var i = 1; i <=20 ; i++) {
    if(i % 2 === 0) {
        document.write(i + "k" + ",");
    }
}
document.write("</br> </br>");




/* 7. You have an array
A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an 
array. After searching, prompt the user whether the given item is
found in the list or not. Example: */




var desserts = ["cake", "apple pie", "cookie", "chips", "patties"];
var userSearch = prompt("Welcome to Delice Bakery, what do you want to order Sir/Ma'am?");
var isDessertFoud = false;

for (var i = 0; i <= desserts.length -1 ; i++) {
    if (desserts[i] === userSearch) {
        isDessertFoud = true;
        document.write(userSearch + " is <strong>Available</strong> at index " + i + " in our bakery.");  
        break;   
    }
}
if (!isDessertFoud) {
    document.write("We are sorry " + userSearch + " is <strong>not Available</strong>  in our bakery.");
}
document.write("<br> <br>");




/* 8. Write a program to identify the largest number in the 
given array.
A = [24, 53, 78, 91, 12].*/




var numArray = [24, 53, 78, 91, 12];
var largest = numArray[0];

for (var i = 0; i < numArray.length; i++) {
  if (numArray[i] > largest ) {
    largest = numArray[i];
  }
}
document.write("Array items: " + numArray); 
document.write("<br>")
document.write("The largest number is " + largest);
document.write("<br> <br>");




/*9. Write a program to identify the smallest number in the 
given array.
A = [24, 53, 78, 91, 12] */




var numArray = [24, 53, 78, 91, 12];
var smallest = numArray[0];

for (var i = 0; i < numArray.length; i++) {
  if (numArray[i] < smallest ) {
    smallest = numArray[i];
  }
}
document.write("Array items: " + numArray); 
document.write("<br>")
document.write("The smallest number is " + smallest);
document.write("<br> <br>");




/* 10. Write a program to print multiples of 5 ranging 1 to 
100. */

for (var i = 1; i <= 100; i++) {
    if(i % 5 === 0) {
        document.write(i + " ")
    }
}