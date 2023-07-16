const person={
    fName:"rajib",
    lname:"Dash",
    id:221,
    fullname:function(){
        return this.fName+" "+this.lname;
    },
    getFullName:function(){
        return this.fullname();
    }
}
console.log(person.getFullName());


//Explicit Function Binding
const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person2 = {
    firstName:"John",
    lastName: "Doe",
  }
  
  // Return "John Doe":
console.log(person1.fullName.call(person2));