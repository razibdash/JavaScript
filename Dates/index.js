let d=new Date();
console.log(d);

//there are 4 way t0 create a new date onject

let d1=new Date(2023,11,24,10,33,30,0);
console.log(d1);

let d2=new Date(2023,11,24,10,33,30);
console.log(d2);
let d3=new Date(2023,11,24,10,33);
console.log(d3);
let d4=new Date(2023,11,24,10);
console.log(d4);
let d5=new Date(2023,11,24);
console.log(d5);
let d6=new Date(2023,11);
console.log(d6);

//create a new date object from a date string

const sDate=new Date("October 13, 2023 11:13:00");
console.log(sDate);

const strDate=new Date();
console.log(strDate.toUTCString());
console.log(strDate.toDateString());
console.log(strDate.toISOString());