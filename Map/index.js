const myMap= new Map();
 

myMap.set("a",10);
myMap.set("b",20);
myMap.set("c",30);
myMap.set("d",40);

console.log(myMap);

console.log(myMap.get("a"));
console.log(myMap.get("b"));
console.log(myMap.get("c"));

console.log(myMap.size);
myMap.delete("b");
console.log(myMap);

console.log(myMap.has("d"));
console.log(myMap.has("e"));

let text="";
myMap.forEach(function(value){
    text+=value;
});
console.log(`${text}`);

for(const x of myMap.entries()){
    console.log(x);
}

console.log(typeof myMap);

const sndMap=new Map();

 sndMap.set(1,"rajib ");
 sndMap.set(2,"dash");
 sndMap.set("batch"," 56");
 console.log(sndMap);

 let text2="";
 sndMap.forEach(function(value){
    text2+=value;
 });
 console.log(text2);
  console.log(sndMap.has("batch"));
  console.log(sndMap.has("batchs"));
  console.log(sndMap.has("1"));
  console.log(sndMap.get(1));
  console.log(sndMap.get(2));
  console.log(sndMap.get("batch"));
 console.log("-------Map End--------");
