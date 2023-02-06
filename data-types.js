/*
JavaScript has 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

The Object Datatype
The object data type can contain:

1. An object
2. An array
3. A date
*/

{
    // Numbers:
    let length = 16;
    let weight = 7.5;

    // Strings:
    let color = "Yellow";
    let lastName = "Johnson";

    // Booleans
    let x = true;
    let y = false;

    // Object:
    const person = { firstName: "John", lastName: "Doe" };

    // Array object:
    const cars = ["Saab", "Volvo", "BMW"];

    // Date object:
    const date = new Date("2022-03-25");
}
{
    let x;       // Now x is undefined
    x = 5;       // Now x is a Number
    x = "John";  // Now x is a String
}
{
    let x = 16 + 4 + "Volvo";
    // Result:20Volvo
}

let car;    // Value is undefined, type is undefined

/*
Code	Result	Description
\'	    '	    Single quote
\"	    "	    Double quote
\\	    \	    Backslash
*/
{
    let text = "We are the so-called \"Vikings\" from the north.";
}
{
    let text = 'It\'s alright.';
}
