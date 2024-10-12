
document.write("<h1> MATH EXPRESSIONS </h1>");



/* 1. Write a program to take a number in a variable, do the
required arithmetic to display the following result in your
browser: */

var a = 10;

document.write("<h4> Result: </h4>");
document.write("The value of a is", a);

document.write("<br> <br>");

document.write("The value of ++a is ", ++a , "<br>");
document.write("Now the value of a is ", a);

document.write("<br> <br>");

document.write("The value of a++ is ", a++ , "<br>");
document.write("Now the value of a is ", a);

document.write("<br> <br>");

document.write("The value of --a is ", --a , "<br>");
document.write("Now the value of a is ", a);

document.write("<br> <br>");

document.write("The value of a-- is ", a-- , "<br>");
document.write("Now the value of a is ", a);



/* 2. What will be the output in variables a, b & result after
execution of the following script:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
Explain the output at each stage:
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--; */


document.write("<br> <br>");


var a = 2;
var b = 1;
var result = --a  -  --b  +  ++b   +  b--;

--a; // 0
--a - --b; // 0
--a - --b + ++b; //0
--a - --b + ++b + b--; // 3

document.write("a is ", a, "<br>");
document.write("b is ", b, "<br>");
document.write("result is ", result);




/* 3. Write a program that takes input a name from user & 
greet the user. */

document.write("<br> <br>");

var userName = prompt("Enter yor name:");

document.write("Hi ", userName , ", Welcome to our page!");




/* 5. Write a program to take input a number from user & 
display it’s multiplication table on your browser. If user 
does not enter a new number, multiplication table of 5 
should be displayed by default. */



document.write("<br> <br>");

var userTableNum = +prompt("Enter yor number:");

if (userTableNum !== 0) {
document.write(userTableNum + " X " + 1 + " = " + userTableNum * 1 + "<br>");
document.write(userTableNum + " X " + 2 + " = " + userTableNum * 2 + "<br>");
document.write(userTableNum + " X " + 3 + " = " + userTableNum * 3 + "<br>");
document.write(userTableNum + " X " + 4 + " = " + userTableNum * 4 + "<br>");
document.write(userTableNum + " X " + 5 + " = " + userTableNum * 5 + "<br>");
document.write(userTableNum + " X " + 6 + " = " + userTableNum * 6 + "<br>");
document.write(userTableNum + " X " + 7 + " = " + userTableNum * 7 + "<br>");
document.write(userTableNum + " X " + 8 + " = " + userTableNum * 8 + "<br>");
document.write(userTableNum + " X " + 9 + " = " + userTableNum * 9 + "<br>");
document.write(userTableNum + " X " + 10 + " = " + userTableNum * 10 + "<br>");

}

else {
    document.write(5 + " X " + 1 + " = " + 5 * 1 + "<br>");
    document.write(5 + " X " + 2 + " = " + 5 * 2 + "<br>");
    document.write(5 + " X " + 3 + " = " + 5 * 3 + "<br>");
    document.write(5 + " X " + 4 + " = " + 5 * 4 + "<br>");
    document.write(5 + " X " + 5 + " = " + 5 * 5 + "<br>");
    document.write(5 + " X " + 6 + " = " + 5 * 6 + "<br>");
    document.write(5 + " X " + 7 + " = " + 5 * 7 + "<br>");
    document.write(5 + " X " + 8 + " = " + 5 * 8 + "<br>");
    document.write(5 + " X " + 9 + " = " + 5 * 9 + "<br>");
    document.write(5 + " X " + 10 + " = " + 5 * 10 + "<br>");
}




/* 6. Take
a) Take three subjects name from user and store them in 3 
different variables.
b) Total marks for each subject is 100, store it in another 
variable.
c) Take obtained marks for first subject from user and 
stored it in different variable.
d) Take obtained marks for remaining 2 subjects from user 
and store them in variables.
e) Now calculate total marks and percentage and show the 
result in browser like this.(Hint: user table */



document.write("<br> <br>");


var userSub1 = prompt("Enter your first subject:");
var userSub2 = prompt("Enter your second subject:");
var userSub3 = prompt("Enter your third subject:");

var subMarks1 = +prompt("Enter your first subject marks:");
var subMarks2 = +prompt("Enter your second subject marks:");
var subMarks3 = +prompt("Enter your third subject marks:");

var totalMarks1 = 100;
var totalMarks2 = 100;
var totalMarks3 = 100;

var totalMarks = totalMarks1 + totalMarks2 + totalMarks3;
var userMarks = subMarks1 + subMarks2 + subMarks3;
var userPercentage = (userMarks / totalMarks) * 100;

document.write("You got ", subMarks1, " out of ", totalMarks1, " in ", userSub1, " and ", subMarks1/totalMarks1 *100, "%", "<br>");
document.write("You got ", subMarks2, " out of ", totalMarks2, " in ", userSub2, " and ", subMarks2/totalMarks2 *100, "%",  "<br>");
document.write("You got ", subMarks3, " out of ", totalMarks3, " in ", userSub3, " and ", subMarks3/totalMarks3 *100, "%",  "<br> <br>");

document.write("The <b>total marks</b> are", userMarks, " out of ", totalMarks, "<br>");
document.write("<b>Percentage:</b>", userPercentage , "%", "<br>");