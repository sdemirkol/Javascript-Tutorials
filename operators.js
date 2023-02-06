let a = 3;

console.log(a **= 2);
// Expected output: 9

console.log(a **= 0);
// Expected output: 1

console.log(a **= 'hello');
// Expected output: NaN

{
    let a = 5; // 00000000000000000000000000000101

    a <<= 2;   // 00000000000000000000000000010100

    console.log(a);
    // Expected output: 20 => 5*2^2
}
{
    let a = 1;
    let b = 0;

    a &&= 2;
    console.log(a);
    // Expected output: 2

    b &&= 2;
    console.log(b);
    // Expected output: 0  
    //x && (x = y);
}
{
    // x i binary e çevirip 5 sola kaydırır.
    // yani binary değerinin soluna 5 adet 0 ekler.
    let x = 3;
    x <<= 5; // x=x*2^5 sonuç=96
    console.log(x);
}
{
    // x i binary e çevirip 4 sağa kaydırır.
    // yani binary değerinin en sağındaki 4 adet değeri siler
    let x = 64;
    x >>= 4; //x=x/2^4
    console.log(x);
}
{
    // yukarıdakinin aynısı sadece bunda işarete dikkat edilmez(unsigned)
    let x = 64;
    x >>>= 4; //x=x/2^4
    console.log(x);
}