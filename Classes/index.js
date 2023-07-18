class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const car1=new Car("volvo",2001);
console.log(car1.name);
console.log(car1.year);
console.log("My car is " + car1.age() + " years old.");