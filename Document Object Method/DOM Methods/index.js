//DOM Methods

let domMethod=document.getElementById("a");
domMethod.innerHTML="This Is getElementById method";

let domMethodOne=document.getElementsByTagName("h2")[1];
domMethodOne.innerHTML="This is getElementsByTagName Method";

let domMethodTwo=document.getElementsByClassName("myClass")[0];
domMethodTwo.innerHTML="This Is getElementsByClassName Method";

let domMethodThree=document.querySelector(".mySelector");
domMethodThree.innerHTML="This Is querySelector Method";

let TagName=document.getElementsByTagName("h2")[4];

TagName.attribute="id";
TagName.innerHTML="This Is getElementsByTagName Method";


const x = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length ;i++) {
  text += x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;

const element =document.getElementById("myImage");
element.src="text.jp"
