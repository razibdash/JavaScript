
//Function Declarations
function myFunction(a, b) {
    return a * b;
  }
 console.log( myFunction(5,5));


 //Function Expressions
 //The function above is actually an anonymous function
 //(a function without a name).

 const x = function (a, b) {return a * b};
 console.log(x(5,5));


 //Self-Invoking Functions  IIFE

 (
    function(){
        console.log("this is rajib");
    }
 )();


 //Arrow Functions ES6
 const rajib = (x, y) =>{return x * y} ;
 console.log(rajib(3,3));

 const object = {
    a:5,
    b: () => {
       console.log(object.a);
    }
 }
 object.b();


 const fnc= function(x,y){
    console.log(arguments);
    console.log(arguments.length);
    return x * y;
 }
 console.log(fnc(3,4));