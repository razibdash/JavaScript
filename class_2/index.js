document.getElementById("sum").innerHTML= "hello Bangladesh";
let a=10;
let b=20;
var s=a+b;
console.log(s);
var x = 5;
var y = 6;
var z = x + y;
document.getElementById("sum2").innerHTML =
"The value of z is: " + z;
let  r = 10;
document.getElementById("demo").innerHTML = r;
var rajib = 10;
 rajib=20;
 console.log(rajib);
 rajib=35;
 document.getElementById("sagor").innerHTML=rajib;
 for(let i=0;i<5;i++)
 {
   console.log(i);
 }

 //Function Scope.

if(true)
 {
    var ri="rajib";
    console.log(ri);
 }

 // Hoisting
 Car="BMW";
 var Car;
 if(true)
 {
    console.log(Car);
 }
rajibBd="Hello bangladesh";
var rajibBd;
if(true)
{
    console.log(rajibBd);
}

sagor="this js";
var sagor;
if(true){
    console.log(sagor);

}

let aaa="this is test";
console.log(aaa);

var fs=0;
var snd=1;
console.log(fs);
//using for loop prints fibonacci series..........??
for(var i=0;i<10;i++)
{
    var fibo=fs+snd;
    console.log(fibo);
    fs=snd;
    snd=fibo;
}
