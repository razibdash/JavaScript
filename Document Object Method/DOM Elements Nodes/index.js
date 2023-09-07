
const para = document.createElement("p");// <p> </p>
const node = document.createTextNode("This Is Create Element Node Text");
//This Is Create Element Node Text

para.appendChild(node);
//<p>This Is Create Elements Node Text</p>

const myDiv = document.querySelector(".div1");

myDiv.appendChild(para);

//Creating new HTML Elements - insertBefore()

const paraTwo = document.createElement("p");
const nodeTwo = document.createTextNode("this is second text");
paraTwo.appendChild(nodeTwo);

const pTag = document.querySelector(".pTag");
myDiv.insertBefore(paraTwo , pTag);


//Removing a Child Node
const removeTag = document.querySelector(".PTagRemove");
myDiv.removeChild(removeTag);

