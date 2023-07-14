let x=5;

if(x==5)
{
    console.log(x);
}
if(x===5){
    console.log(x);
}
if(x!=9)
{
    console.log(x);

}
if(x!==10)
{
    console.log(x);
}

let age=18;
if(age==18 && age>=18){
    console.log("you are Adult");
}else{
    console.log("you are NOT Adult");
}

//ternary operators

let vari=((age==18 && age<=18)) ? "Adult" : "not Adult";
console.log(vari);
let ages=25;
console.log(ages>=18?ages<50?"ADULT":"OLD":"YOUNG");

console.log(
    ages>=18
    ?ages<30
    ?"you are adult"
    :"you are old"
    :"you are young"
);

console.log("2"<"12");
console.log("2">"12");
console.log("2"==="12");
console.log("2"==="2");
console.log("2"!=="12");

let rajib="18";
rajib=Number(rajib);
if(isNaN(rajib)){
    console.log("input is not a number");
}else{
    console.log(rajib<18 ? "yount" : "adult");
}
