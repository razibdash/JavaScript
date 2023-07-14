const cars=["BMW","Volvo","Toyato","yamaha"];

for(let i=0;i<cars.length;i++)
{
    console.log(cars[i]);
}
console.log("-------------");
for(let i=0,len=cars.length;i<len;i++){
    console.log(cars[i]);
}
console.log("-------------");
let i=1;
let len=cars.length;
for(; i<len;i++)
{
    console.log(cars[i]);
}
console.log("-------------");

console.log("-------------");