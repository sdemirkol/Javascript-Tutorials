
{
    //Dizide locate'in başlangiç karakterinin string deki sırasını verir.
    let str = "Please locate where 'locate' occurs!";
    let first = str.indexOf("locate");
    console.log(first); // 7
    let last = str.lastIndexOf("locate");
    console.log(last); // 21

    //Both indexOf(), and lastIndexOf() return -1 if the text is not found:
    let non = str.lastIndexOf("Ali");
    console.log(non); // -1

    //Both methods accept a second parameter as the starting position for the search:
    let a = str.indexOf("locate", 15);
    console.log(a); // 21

    //lastIndexOf() yöntemleri geriye doğru (sondan başa) arama yapar, 
    //yani: ikinci parametre 15 ise, arama 15 konumundan başlar ve dizenin başına kadar arama yapar.
    let text = "Please locate where 'locate' occurs!";
    text.lastIndexOf("locate", 15); // 21
}
{
    //The search() method searches a string for a string (or a regular expression) and returns the position of the match:
    let str = "Please locate where 'locate' occurs!";
    str.search("locate"); // 7

    let text = "Please locate where 'locate' occurs!";
    text.search(/locate/); // 7
}
/*
Did You Notice?
The two methods, indexOf() and search(), are equal?

They accept the same arguments (parameters), and return the same value?

The two methods are NOT equal. These are the differences:

    - The search() method cannot take a second start position argument.
    - The indexOf() method cannot take powerful search values (regular expressions).
*/
{
    //The match() method returns an array containing the results of matching a string against a string (or a regular expression).
    let text = "The rain in SPAIN stays mainly in the plain";
    let myArr = text.match("ain");
    console.log(myArr); // ["ain"]

    let text1 = "The rain in SPAIN stays mainly in the plain";
    let myArr1 = text1.match(/ain/g);
    console.log(myArr1); // ["ain","ain","ain"];

    let text2 = "The rain in SPAIN stays mainly in the plain";
    let myArr2 = text2.match(/ain/gi);
    console.log(myArr2); // ["ain","AIN","ain","ain"];
}
{
    //The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).
    let text = "I love cats. Cats are very easy to love. Cats are very popular."
    const iterator = text.matchAll("Cats");
    console.log(Array.from(iterator));
}

