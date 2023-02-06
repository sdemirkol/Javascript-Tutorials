// 4 Ways to Declare a JavaScript Variable:
// Using var
// Using let
// Using const
// Using nothing

//In this example, x, y, and z, are variables, declared with the var keyword:
var x = 5;
var y = 6;
var z = x + y;

//In this example, x, y, and z, are variables, declared with the let keyword:
let x = 5;
let y = 6;
let z = x + y;

//In this example, x, y, and z, are undeclared variables:
x = 5;
y = 6;
z = x + y;

//------------------------let--------------------
//let
// The let keyword was introduced in ES6 (2015).

//----- Variables defined with let cannot be Redeclared.---------
let x = "John Doe";
let x = 0;
// SyntaxError: 'x' has already been declared

//With var you can:
var x = "John Doe";
var x = 0;
//var ile aynı isimde değişkeni birden fazla kez tanımlarsak hata vermez.


// ---------Variables defined with let have Block Scope.----------
// Before ES6 (2015), JavaScript had only Global Scope and Function Scope.
// ES6 introduced two important new JavaScript keywords: let and const.
// These two keywords provide Block Scope in JavaScript.
// Variables declared inside a { } block cannot be accessed from outside the block:
{
  let x = 2;
}
// x can NOT be used here

// Variables declared with the var keyword can NOT have block scope.
// Variables declared inside a { } block can be accessed from outside the block.
{
  var x = 2;
}
// x CAN be used here
//--------
var x = 10;
// Here x is 10
{
var x = 2;
// Here x is 2
}
// Here x is 2


//---------aynı durum hem let hem const için geçerli
let x = 10;
// Here x is 10
{
let x = 2;
// Here x is 2
}
// Here x is 10


//-----------Variables defined with let must be Declared before use.----------
carName = "Volvo";
var carName;
//This is OK

carName = "Volvo";
var carName;
//Using a let variable before it is declared will result in a ReferenceError

//------------------const--------------
// The const keyword was introduced in ES6 (2015).
// Variables defined with const cannot be Redeclared.
// Variables defined with const cannot be Reassigned.
// Variables defined with const have Block Scope.

//A const variable cannot be reassigned:
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error

//JavaScript const variables must be assigned a value when they are declared:

//Correct
const PI1 = 3.14159265359;

//Incorrect
/*
const PI2;
PI2 = 3.14159265359;
*/
/*
When to use JavaScript const?
Always declare a variable with const when you know that the value should not be changed.

Use const when you declare:

A new Array
A new Object
A new Function
A new RegExp
*/
/*
const ile bildirilen bir değişkenin tek bir anlamı vardır: 
bağımsız değişken adı daha sonra = ile yeniden atanamaz. 
Buna karşılık, o.a = 5; değişken adını yeniden atamak değil - nesnenin içeriğini değiştiriyor, 
ancak o değişkeninin bellekte işaret ettiği şeyi değiştirmiyor. 
Bir değişken adının yeniden atanmasını önlemek için const kullanın.
*/
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

//But you can NOT reassign the array:
const cars = ["Saab", "Volvo", "BMW"];

cars = ["Toyota", "Volvo", "Audi"];    // ERROR