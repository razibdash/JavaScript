let text = "Please locate where 'locate' occurs!";
let index = text.lastIndexOf("locate");
document.getElementById("A").innerHTML = index;

let text1 = "Please locate where 'locate' occurs!";
let index1 = text1.indexOf("locate",15);
document.getElementById("B").innerHTML = index1; 

let text2 = "Please locate where 'locate' occurs!";
let index2 = text2.indexOf("rajib");
document.getElementById("C").innerHTML = index2;

let text3="this is rajib";
let index3=text3.indexOf("rajib");
document.getElementById("D").innerHTML=index3;

let text4 = "Please locate where 'locate' occurs!";
let index4 = text4.search("locate");
document.getElementById("E").innerHTML = index4;

let text5 ="this is rajib rajib rajib";   
let index5=text5.match("r");
document.getElementById("F").innerHTML=index5.length +" "+index5;

let text6="I love cats. cats are very easy to love. cats are very popular."
const iterator = text6.matchAll("cats");
document.getElementById("G").innerHTML=Array.from(iterator);

let text7 = "Hello world, welcome to the universe.";
document.getElementById("H").innerHTML = text7.includes("world");

let text8 = "Hello world, welcome to the universe.";
document.getElementById("I").innerHTML = text8.startsWith("Hello");             