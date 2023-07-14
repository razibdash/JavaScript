let text=`this is rajib.
          i love my country.

`;
let ln=text.length;
document.getElementById("A").innerHTML=text + " " + ln;

let sum=`the sum is: `;
let a=5;
let b=5;
document.getElementById("B").innerHTML=`OUTPUT ${sum} ${a+b}`;

let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
document.getElementById("C").innerHTML = total;

let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
  html += `<li>${x}</li>`;
}
html += `</ul>`;
document.getElementById("D").innerHTML = html;