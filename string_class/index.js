let x="Avronil rajib";
console.log(x);

const student={
    name:"rajib",
    id:"221-115-075",
    dept:"CSE",
    batch:56,
}
console.log(student.name);
console.log(student.id);
console.log(student.dept);
console.log(student.batch);
//string length
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);
//-----------------------------------------------------------
let str = "We are the so-called \"Vikings\" from the north.";
console.log(str);
let text1= 'It\'s alright.';
console.log(text1);

let text2 = "The character \\ is called backslash.";
console.log(text2);

let y = "rajib";
let z = new String("rajib");
if(y==z)
{
   console.log("equal");
}else
console.log("not equal");
let xyz="apple banana Mango";
let slic1=xyz.slice(6,12);
let zy="banana mango apple";
let slic=zy.slice(0,6);
console.log(slic1);
console.log(slic);
if(slic==slic1)
{
    console.log("the string is equal");
}
else
{
    console.log("the string is not equal");
}
const fuith={
    name:"banana",
    weight:"1kg",
    price:"500tk",


};
console.log(fuith.name);
console.log(fuith.weight);
console.log(fuith.price);

function myfc()
{
    document.getElementById("demo").innerHTML=Date();
}
function rajib()
{
    document.getElementById("button").innerHTML=Date();
}
let asd=20;
let asd1=30;
let sub23=asd+asd1;
console.log(sub23);
let str1="this is r";
console.log(typeof str1);

const saaa={
    name:"r",
    age:21,
    roll:"221-115-075",
    birth:"10-03-2001",
   
   
}
console.log(saaa.name);
console.log(saaa.age);
console.log(saaa.roll);
console.log(saaa.birth);
function my_function()
{
      let sa="this is rajib";
      let ab=10;
      let abc=20;
      let sum=ab+abc;
      console.log(sum);
}
my_function();

function sum()
{
    let a=50;
    let c=40;
    return a+c;
}
document.getElementById("A").innerHTML=`the sum is: ${sum()}`;

let strr="this is rajib";
let s1=strr.slice(8,13);
let index =strr.indexOf("rajib");
let src=strr.search("dash");
document.getElementById("B").innerHTML=`the Slice Is: ${s1}`;
document.getElementById("C").innerHTML=`the index Is: ${index}`;
document.getElementById("D").innerHTML=`Searching this dash: ${src}`;
let idi=document.getElementById("E").innerHTML=saaa.age;



