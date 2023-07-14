let a="bangle";
let b=5;
let c=a+b;
console.log(typeof c);
console.log(typeof NaN);
console.log(typeof new Date());
console.log(typeof undefined);

const sum=(a,b)=>{
    return a+b;
}
console.log(sum(50,50));
let rJIB;
// console.log(typeof function rajib());
console.log(typeof rJIB);
console.log(typeof false);
console.log(typeof true);
console.log(typeof sazida);
console.log("rajib".constructor);
console.log((12.22).constructor);
console.log([1,2,3,4,5].constructor);
console.log({name:"rajib",age:22}.constructor);
console.log(new Date().constructor);
function isArray(myArray){
  console.log(myArray.constructor===Array);
  return myArray.constructor.toString().indexOf("Array") > -1;
  
}
console.log(isArray([1,2,3,4]));
console.log({name:"rajib",age:22});

console.log(typeof null);
