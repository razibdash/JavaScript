let text = "Visit W3Schools";
let n = text.search(/w3schools/i);
console.log(n);

let text2 = "Visit Microsoft!";
let result = text2.replace(/microsoft/i, "W3Schools");
console.log(result);


const pattern = /e/;
console.log(pattern.test("The best things in life are free!"));