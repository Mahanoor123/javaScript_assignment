// Arrays and Array methods

document.write("<h1> Array and its Methods </h1>");


/* 1. Declare an empty array using JS literal notation to store
student names in future. */


var studentsName = new Array();



/* 2. Declare an empty array using JS object notation to store
student names in future. */



var studName = [];



/* 3. Declare and initialize a strings array. */


var cityArray;
cityArray = ["Karachi", "lahore", "Islamabad", "Sialkot", "Quetta"];



/* 4. Declare and initialize a numbers array. */


var myScore;
myScore = [34, 67, 87, 78, 23, 100];



/* 5. Declare and initialize a boolean array. */



var isFollow;
isFollow = [0, 1, true, false];




/* 6. Declare and initialize a mixed array. */



var studInfo;
studInfo = ["Raza", 12, "Karachi", 2, true];




/* 7. Declare and Initialize an array and store available 
education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
BS, BCOM, MS, M. Phil., PhD). Show the listed 
qualifications in your browser like: */



var pakEducations = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h1> Qualifications: </h1>");

for (var i = 0; i < pakEducations.length; i++) {
    document.write(i + ")" + pakEducations[i] + "<br>")
}

document.write("<br>")



/* 8. Write a program to store 3 student names in an array.Take
another array to store score of these three students. 
Assume that total marks are 500 for each student, display 
the scores & percentages of students like: */




var studNames = ["Michael", "John", "Tony"];
var studScore = [320, 230, 480];

document.write("<h1>The scores of Student with percentage: </h1>")
for (var i = 0; i < studNames.length; i++) {
    document.write("Score of  " + studNames[i] + " is " + studScore[i] + ". Percentage: " + (studScore[i] / 500 ) * 100  + "%" + "<br>")
}

document.write("<br>");




/* 9. Initialize an array with color names. Display the array
elements in your browser. */




var myColors = ["black", "blue", "charteuse", "mouve", "taupe", "teal", "hazel"];
document.write("<h1>Colors Array: </h1>", myColors);

document.write("<br> <br>");



/* a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
Display the updated array in your browser. */




var addUserColor = prompt("Which color would you like to add in the beginning");

myColors.unshift(addUserColor);
document.write("<h4>The new array after add color in start:</h4>", myColors);
document.write("<br> <br>");



/* b. Ask the user what color he/she wants to add to the end 
& add that color to the end of the array. Display the updated array in your browser. */



var addUserColor = prompt("Which color would you like to add in the end");

myColors.push(addUserColor);
document.write("<h4>The new array after add color in end:</h4>", myColors);

document.write("<br> <br>");



/* c. Add two more color to the beginning of the array. Display the updated array in your browser. */



myColors.splice(0, 0, "azure", "grey");
document.write("<h4>The new array after add two more colors in start:</h4>", myColors);

document.write("<br> ");



/* d. Delete the first color in the array. Display the updated array in your browser. */



document.write("<br>");

myColors.shift();
document.write("<h4>The new array after delete first color:</h4>", myColors);




/* e. Delete the last color in the array. Display the updated
array in your browser. */



document.write("<br> <br>");

myColors.pop();
document.write("<h4>The new array after delete last color:</h4>", myColors);




/* f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired 
position/index. Display the updated array in your browser. */



document.write("<br> <br>");

var userIndex = +prompt("At which index would you like to add color:");
var userColor = prompt("Which color would you like to add:");

myColors.splice(userIndex, 0, userColor);
document.write("<h4>The new array after add color from user:</h4>", myColors);




/* g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete.
Then remove the same number of color(s) from user-defined position/index. Display the updated array in your browser.  */




document.write("<br> <br>");

var userIndex = +prompt("At which index would you like to remove color:");
var userDeletedColor = +prompt("How many colors would you like to remove:");

var userResult = myColors.splice(userIndex, userDeletedColor);
document.write("<h4>The new array after delete colors from user:</h4>", myColors);
document.write("<h4>The deleted colors are:</h4>", userResult);




/* 10. Write a program to store student scores in an array & 
sort the array in ascending order using Array’s sort method. */



document.write("<br> <br>");
var studScores = [320, 230, 480, 120];
document.write("<h1>Scores of Students:</h1>", studScores)
document.write("<br>");
document.write("<h1>Ordered scores of Students:</h1>", studScores.sort());




/* 11. Write a program to initialize an array with city names. 
Copy 3 array elements from cities array to selectedCities array. */



var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2, 4);

document.write("<h1>Cities List:</h1>", cities);
document.write("<h1>Selected cities List:</h1>", selectedCities);

document.write("<br> <br>");




/* 12. Write a program to create a single string from the below mentioned array:
var arr = [“This ”, “ is ”, “ my ”, “ cat”];(Use array’s join method) */



var myArray = ["This", "is", "my", "cat"];
var myString = myArray.join(" ");
document.write("<h1>Array:</h1>", myArray);
document.write("<h1>String:</h1>", myString);

document.write("<br> <br>");



/*13. Create a new array. Store values one by one in such a way
that you can access the values in the order in which they 
were stored. (FIFO-First In First Out) */




var devices = ["keyboard", "mouse", "printer", "monitor"];

document.write("<h1>Devices:</h1>", devices);
var Out = devices.shift();
document.write("<h4>Out:</h4>", Out + "<br>");
var Out = devices.shift();
document.write("<h4>Out:</h4>", Out + "<br>");
var Out = devices.shift();
document.write("<h4>Out:</h4>", Out + "<br>");
var Out = devices.shift();
document.write("<h4>Out:</h4>", Out + "<br>");

document.write("<br> <br>");




/* 14. Create a new array. Store values one by one in such a way
that you can access the values in reverse order. (Last In First Out) */ 



var devices = ["keyboard", "mouse", "printer", "monitor"];
document.write("<h1>Devices:</h1>", devices);

var Out = devices.pop();
document.write("<h4>Out:</h4>", Out + "<br>");
var Out = devices.pop();
document.write("<h4>Out:</h4>", Out + "<br>");
var Out = devices.pop();
document.write("<h4>Out:</h4>", Out + "<br>");
var Out = devices.pop();
document.write("<h4>Out:</h4>", Out + "<br>");

document.write("<br> <br>");




/* 15. Write a program to store phone manufacturers (AppleSamsung, Motorola, Nokia, Sony & Haier) in an array. 
Display the following dropdown/select menu in your browser using document.write() method: */



var phoneCompanies = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<h1> Which company you like to buy </h1>", phoneCompanies);
