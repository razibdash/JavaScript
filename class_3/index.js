
let aa=10;
let bb=5;
let ml=aa-bb;
console.log(ml);

let multi=aa*bb;
console.log(multi);

let st=aa**bb;
console.log(st);

let ra=2**2;
console.log(ra);

//data type
// Numbers:
let length = 16;
let weight = 7.5;
console.log(length);
console.log(weight);

// Strings:
let color = "Yellow";
let lastName = "Johnson";
console.log(color);
console.log(lastName);

// Booleans
let x = true;
let y = false;

console.log(x);
console.log(y);

// Object:
const person = {firstName:"John", lastName:"Doe"};


// Array object:
const cars = [
     "Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

//fibonacci series using function......!!
function rajib(a,b){
   
    console.log(a);
    console.log(b);
    for(let i=0;i<5;i++)
    {
        let fibo=a+b;
        console.log(fibo);
        a=b;
        b=fibo;
    }
}
let a=0;
let b=1;
rajib(a,b);
document.getElementById("div_1").innerHTML="hello";