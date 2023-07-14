const number=[20,40,50,10,70];
function myfun(value,index,array)
{
      console.log(value);
      console.log(index);
      console.log(array);
      console.log("------------");
}
number.forEach(myfun);

//Map Method

 const num=[20,40,50,10,70];
function myfun1(value)
{
     return value*2;
}
let num1=num.map(myfun1);
console.log(num1);
//Filter method
function myfun2(value)
{
    return value>10;

}
let num2=num.filter(myfun2);
console.log(num2);
//reduce method

function myfun3(total,value,index,array)
{
    return total+value;

}
let num3=num.reduce(myfun3);
console.log(num3);


//reduceRight()
//every() same as filter Method return true or false
//some() return true and false
//indexOf() 
//lastIndexOf()
//includes() return true or false
//find() return value
//findIndex() return index
//form() 
//keys()


