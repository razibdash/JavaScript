const ar=["rajib", "dash","22"];
let to=ar.toString();
console.log(to);

let jm=ar.join(" * ");
console.log(jm);
ar.pop();
console.log(ar);
ar.push("23");

let sht=ar.shift();
console.log(sht);
let usht=ar.unshift("Rajib");
console.log(ar);
//delete ar[2];

ar.splice(3,0,"10-03-2001, 56 cse"); //adding multiple element

//ar.splice(0,1); remove 1st element
const ar1=["sagor","dash",22];
const concat=ar.concat(ar1);
console.log(concat);

let slic=concat.slice(1,3);
console.log(slic);



