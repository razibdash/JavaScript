let a=1234e5;
document.getElementById("A").innerHTML=a;

let b=123e-5;
document.getElementById("b").innerHTML=b;

let c=999999999999999;
document.getElementById("c").innerHTML=c;
let d=99999999999999999999;
document.getElementById("d").innerHTML=d;


//sum of two floating number

let e=2.5;
let f=1.4;
document.getElementById("e").innerHTML=`the sum is: ${e+f}`;

let g="100";
let h=10;
document.getElementById("f").innerHTML=`the div is: ${g/h}`;
document.getElementById("g").innerHTML=`the sub is: ${g-h}`;
document.getElementById("h").innerHTML=`the multi is: ${g*h}`;
document.getElementById("i").innerHTML=`the rem is: ${g%h}`;
let i="b56";
console.log(isNaN(g));
document.getElementById("j").innerHTML=isNaN(g);
document.getElementById("k").innerHTML=g/i;
let r=10;
let ii=0;
while(ii<r)
{
   console.log(ii);
   ii++;
}
const ra=[10,20,30,40,50];
for(let i=0;i<ra.length;i++)
{
    console.log(ra[i]);
}
const obj={
    name:"Rajib",
    age:"22",
    id:"221-115-075"
}
console.log(obj.name);
console.log(obj.age);
console.log(obj.id);
document.getElementById("l").innerHTML=obj.name;
document.getElementById("m").innerHTML=obj.age;
document.getElementById("n").innerHTML=obj.id;

const rajib={
    fname:"rajib",
    lname:"Dash",
    id:"221-115-075",
    batch:56,
    dept:"CSE",
    birthday:"10-03-2001"

}
document.getElementById("rajib_sec").innerHTML=rajib.fname;
document.getElementById("rajib_sec1").innerHTML=rajib.lname;
document.getElementById("rajib_sec2").innerHTML=rajib.id;
document.getElementById("rajib_sec3").innerHTML=rajib.batch;
document.getElementById("rajib_sec4").innerHTML=rajib.dept;
document.getElementById("rajib_sec5").innerHTML=rajib.birthday;

const sagor={
    fname:"Sagor",
    lname:"dash",
    id:"221-115-075",
    batch:56,
    dept:"CSE",
    birthday:"22-04-2001"
}
document.getElementById("s_sec").innerHTML=sagor.fname;
document.getElementById("s_sec1").innerHTML=sagor.lname;
document.getElementById("s_sec2").innerHTML=sagor.id;
document.getElementById("s_sec3").innerHTML=sagor.batch;
document.getElementById("s_sec4").innerHTML=sagor.dept;
document.getElementById("s_sec5").innerHTML=sagor.birthday;

