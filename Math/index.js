let pi=Math.PI;
console.log(pi.toPrecision(5));

console.log(Math.E);
console.log(Math.SQRT2);
console.log(Math.SQRT1_2);
console.log(Math.LOG10E);

//math method

console.log(Math.round(pi.toPrecision(5)));
console.log(Math.ceil(pi.toPrecision(5)));
console.log(Math.floor(pi.toPrecision(5)));
console.log(Math.trunc(pi.toPrecision(5)));
console.log(Math.sign(pi.toPrecision(5)));
let x=8;
let y=2;
console.log(Math.pow(x,y));
console.log(Math.sqrt(64));
console.log(Math.abs(-64));
console.log(Math.sin(90*Math.PI/180));
console.log(Math.cos(0*Math.PI/180));

console.log(Math.max(10,20,30,40,50,60,70));
console.log(Math.min(10,20,30,40,50,60,70));

console.log(Math.random()*10);
console.log(Math.log(10));
console.log(Math.log2(10));
console.log(Math.log10(10));

//Math.random()

console.log("Random");
console.log(Math.floor(Math.random()*10)+1);


//min(included) max(excluded)
const getrand=(max,min) =>{
    return Math.floor(Math.random()*(max-min))+min;
}
console.log(getrand(5,1));


//min(included) max(included)
const rand=(max,min) =>{
    return Math.floor(Math.random()*(max-min+1))+min;
}
console.log(rand(5,1));


