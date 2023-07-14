const mySet=new Set();

mySet.add("a");
mySet.add("b");
mySet.add("c");
mySet.add("d");
console.log(mySet);
console.log(mySet.size);
mySet.forEach(function(value){
    console.log(value);
});

mySet.delete("d");
console.log(mySet.values());

for(let x of mySet.values()){
    console.log(x);
}