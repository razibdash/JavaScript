// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.name = function() {
      return this.firstName + " " + this.lastName
    };
  }
  //Constuctor prototype
  Person.prototype.country="Bangladesh";
  const rajib = new Person("Rajib", "Dash", 22, "black");
  const sagor = new Person("sagor", "Dash", 22, "black");
  const avro = new Person("avro", "Dash", 22, "black");
// Display full name
document.getElementById("demo").innerHTML =
"My Name is " + rajib.name(); 
console.log(rajib.country);