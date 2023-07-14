//TYPE CONVERSION

console.log(Number("12345"));
console.log(Number(" "));
console.log(Number(""));
console.log(Number("90 100")); //return NaN
console.log(Number("Rajib")); //return NaN

console.log(parseFloat(Number("4.44")));
console.log(parseInt(Number("4.44")));

let x="5";
let y=+x; //unary Operator
console.log(y);

let st="rajib";
let an=+st;
console.log(an);//return NaN

//Number to string

console.log(String(12345));
console.log(String(20+30));
console.log(typeof String(20+30));

//convertin Dates to numbers

let d=new Date();
console.log(Number(d));
console.log(d.getTime());
console.log(String(Date()));

//Converting Boolean To Number

let b=true;
console.log(Number(b));
let c=false;
console.log(Number(c));

console.log(String(b));
console.log(String(c));

//automatic type conversion

console.log(5+null);
console.log("5"+null);
console.log("5"+2);
console.log("5"-2);
console.log("5"*2);


