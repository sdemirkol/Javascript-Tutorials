/*
String length
String slice()
String substring()
String substr()
String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String charAt()
String charCodeAt()
String split()
*/
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;

// Extracting String Parts
// There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)

{
    // slice()
    let text = "Apple, Banana, Kiwi";
    let part = text.slice(7, 13);   //Banana
    let part1 = text.slice(7);      //Banana, Kiwi
    let part2 = text.slice(-12);    //Banana, Kiwi - counting from the end.
    let part4 = text.slice(-12, -6);//Banana
}
{
    // substring
    // The difference is that start and end values less than 0 are treated as 0 in substring().
    let str = "Apple, Banana, Kiwi";
    let part = str.substring(7, 13);//Banana
}
{
    // substr ---- Deprecated
    // The difference is that the second parameter specifies the length of the extracted part.
    let str = "Apple, Banana, Kiwi";
    let part = str.substr(7, 6);    //Banana
    let part1 = str.substr(7);      //Banana, Kiwi
}
{
    // Replacing
    let text = "Please visit Microsoft!";
    let newText = text.replace("Microsoft", "W3Schools");   //Please visit W3Schools

    // The replace() method does not change the string it is called on.
    // The replace() method returns a new string.
    // The replace() method replaces only the first match
    let text1 = "Please visit Microsoft and Microsoft!";
    let newText1 = text.replace("Microsoft", "W3Schools");  //Please visit W3Schools and Microsoft!

    // To replace all matches, use a regular expression with a /g flag (global match):
    let text4 = "Please visit Microsoft and Microsoft!";
    let newText4 = text.replace(/Microsoft/g, "W3Schools"); //Please visit W3Schools and W3Schools!

    // By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:
    let text2 = "Please visit Microsoft!";
    let newText2 = text.replace("MICROSOFT", "W3Schools"); //Please visit Microsoft!

    // To replace case insensitive, use a regular expression with an /i flag (insensitive):
    let text3 = "Please visit Microsoft!";
    let newText3 = text.replace(/MICROSOFT/i, "W3Schools");
}
{
    // replaceAll()
    let text = "I love cats. Cats are very easy to love. Cats are very popular."
    text = text.replaceAll("Cats", "Dogs");
    text = text.replaceAll("cats", "dogs");

    // replaceAll() is an ES2021 feature.
    // replaceAll() does not work in Internet Explorer.
}
{
    // UpperCase - LowerCase
    let text1 = "Hello World!";
    let text2 = text1.toUpperCase();
    let text3 = text1.toLowerCase();
}
{
    // concat
    // concat() joins two or more strings
    let text1 = "Hello";
    let text2 = "World";
    let text3 = text1.concat(" ", text2);
}
{
    // trim
    // The trim() method removes whitespace from both sides of a string
    let text1 = "      Hello World!      ";
    let text2 = text1.trim();       //Hello World!
    let text3 = text1.trimStart();  //Hello World!      "
    let text4 = text1.trimEnd();    //       Hello World!
}
{
    // padStart - padEnd
    // padStart() and padEnd() to support padding at the beginning and at the end of a string.
    {
        let text = "5";
        let padded = text.padStart(4, "x"); //xxxx5

    }
    {
        // padStart and padEnd are string method
        let numb = 5;
        let text = numb.toString();
        let padded = text.padStart(4, "0"); //00005
    }
    {
        let numb = 5;
        let text = numb.toString();
        let padded = text.padEnd(4, "0");   //50000
    }

}
{
    // charAt
    // The charAt() method returns the character at a specified index (position) in a string
    let text = "HELLO WORLD";
    let char = text.charAt(0);  //H

    //charCodeAt
    //The charCodeAt() method returns the unicode of the character at a specified index in a string
    let text1 = "HELLO WORLD";
    let char1 = text1.charCodeAt(0);    //72


    let text2 = "HELLO WORLD";
    let char2 = text2[0];
}
{
    // split
    // A string can be converted to an array with the split() method
    text.split(",")    // Split on commas
    text.split(" ")    // Split on spaces
    text.split("|")    // Split on pipe
}