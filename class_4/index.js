//javascript object
const car={
    name:"BmW",
    weight:"890kg",
    model:990,
    color:"white",
  start:  function()
   {
      console.log("Car Has started");
   },
   drive:function()
   {
    console.log("Driving");
    this.stop();
   },
   stop:function()
   {
    console.log("Car stop");
   },

};

console.log(car.color);
console.log(car.weight);
console.log(car.model);
console.log(car.name);
car.start();
car.drive();

//let name="rajib";
//object
let rajib=new String("rajib");
console.log(rajib);

const student={
    std1:function()
    {
        console.log("Student 01");
       
    },
    name:"rajib",
    id:"221-115-075",
    dept:"CSE",
    batch:56,
    std2:function()
    {
        console.log("Student 02");
       
    },
    n:"sagor",
    id_no:"221-115-076",
    d:"CSE",
    batch_no:56,
}
student.std1();
console.log(student.name);
console.log(student.id);
console.log(student.dept);
console.log(student.batch);

student.std2();
console.log(student.n);
console.log(student.id_no);
console.log(student.d);
console.log(student.batch_no);
