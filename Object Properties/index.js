//Objact Propeties
const person={
    name:"rajib ",
    age: 23
}
person.id=212;
person.country=" Bangladesh";
console.log(person);
console.log(person['age']);

//for in loop
let text="";
for(let x in person){
    text+=person[x];
}
console.log(text);

//Deleting Properties
 
delete person.age;
console.log("Delete Age "+ person);
console.log(person);

//Nested Object

const Rajib={
    name:"rajib",
    age:22,
    id:223,
    number:{
        num1:"01791830152",
        num2:"01823913194"
    }
}
console.log(Rajib);
console.log(Rajib.number.num1);
console.log(Rajib.number.num2);

const sagor={
    name:"rajib",
    age:22,
    id:223,
    nameTitle:[
        {nickname:"rajib",title:"Dash"},
        {nickname1:"avronil",title:"Dash"}
    ] 
}

// for(let i in sagor.nameTitle){
//     console.log(sagor.nameTitle[i].nickname);
// }
console.log(sagor.nameTitle[0].nickname);
console.log(sagor.nameTitle[0].title);
console.log(sagor.nameTitle[1].nickname1);
console.log(sagor.nameTitle[1].title);



