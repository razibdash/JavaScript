let a=123456;
let b=a.toString();
document.getElementById("A").innerHTML=b;
console.log(typeof b);
//toExponential Method
console.log("toExponential Method");
let c=95600000000000;
let ex=c.toExponential(2);
let ex1=c.toExponential(4);
let ex2=c.toExponential(5);
document.getElementById("B").innerHTML=ex;
document.getElementById("C").innerHTML=ex1;
document.getElementById("D").innerHTML=ex2;

//toFixed Method
console.log("toFixed Method");
let fxd=9.565;
let tofxd=fxd.toFixed(0);
let tofxd1=fxd.toFixed(2);
let tofxd2=fxd.toFixed(4);
console.log(tofxd);
console.log(tofxd1);
console.log(tofxd2);

//toPrecision Method
console.log("toPrecision Method");
let pre=9.565;
console.log(pre.toPrecision(2));

//valueOf Method
console.log("ValueOf");
let value=123;
console.log(value.valueOf());

//Numbers Method
console.log("Numbers Method");
let num=123;
console.log(Number(false));
console.log(Number(true));
console.log(Number("11234"));
console.log(Number("  11234"));
console.log(Number("11.234"));
console.log(Number("11.234,234"));
console.log(Number("11.234 234"));
console.log(Number("rajib"));

//parseInt Method
console.log("ParseInt Method");
console.log(parseInt("12.4"));
console.log(parseInt("10 20 30"));
console.log(parseInt("20 rajib"));
console.log(parseInt("30.55 111"));

//parseFloat Method
console.log("ParseFloat Method");
console.log(parseFloat("12.4"));
console.log(parseFloat("10 20 30"));
console.log(parseFloat("20 rajib"));
console.log(parseFloat("30.55 111"));

//number properties
//MAX_VALUE,MIN_VALUE,POSITIVE_INFINITY,NEGATIVE_INFINITY;
let ar=[10,20,30,40];
