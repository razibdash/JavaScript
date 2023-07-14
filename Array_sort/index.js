const ar=["rajib","dash","sagor","avronil","noyan","saurav"];
 
console.log(ar.sort());
console.log(ar.reverse());

const ar1=[20,10,90,30,60,50];
let sort_array=ar1.sort(function(a,b)
{
    return a-b;
});
console.log(sort_array);

let sort_dec=ar1.sort(function(a,b)
{
    return b-a;
});
console.log(sort_dec);

let sort_rand=ar1.sort(function(a,b){
    return 0.5-Math.random();
});
console.log(sort_rand);

let i=0;
let max;
for(i=0;i<=ar1.length;i++)
{
    if(ar1[i]>ar1[i+1])
    {
        max=ar1[i+1];
    }
}
console.log(max);
let min;
for(i=0;i<=ar1.length;i++)
{
    if(ar1[i]<ar1[i+1])
    {
        min=ar1[i];
    }
}
console.log(min);