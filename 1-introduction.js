// JavaScript can "display" data in different ways:

// Writing into an HTML element, using innerHTML.
// Writing into the HTML output using document.write().
// Writing into an alert box, using window.alert().
// Writing into the browser console, using console.log().

let a, b, c;  // Declare 3 variables
a = 5;        // Assign the value 5 to a
b = 6;        // Assign the value 6 to b
c = a + b;    // Assign the sum of a and b to c

a = 5; b = 6; c = a + b;
//En iyi okunabilirlik için, programcılar genellikle 80 karakterden uzun kod satırlarından kaçınırlar. 
//Bir JavaScript ifadesi bir satıra sığmazsa, bir operatörden sonra enter tuşuna basılarak alt satıra geçilebilir.
document.getElementById("demo").innerHTML = 
"Merhaba Herkese";

// How to create variables:
var x;
let y;

// How to use variables:
x = 5;
y = 6;
let z = x + y;