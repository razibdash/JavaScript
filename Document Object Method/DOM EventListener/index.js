document.getElementById("myBtn").addEventListener("click", function() {
    alert("Hello World!");
  });

  const output = document.querySelector(".output");
  const myBtnOne = document.querySelector("#myBtnOne");

  myBtnOne.addEventListener("click",function(){
        
    myBtnOne.innerHTML = "You Clicked Button ";
  });

  myBtnOne.addEventListener("click",function(){
     output.innerHTML = "Thanks Clicked For Button";
  });

  const myBtnTwo = document.querySelector("#myBtnTwo");

  myBtnTwo.addEventListener("mouseover", function(){
      myBtnTwo.style.background="blue";
      myBtnTwo.style.color="white";
  });

  myBtnTwo.addEventListener("click" , function(){
      myBtnTwo.innerHTML = "You Clicked Now this Button";
  });

  myBtnTwo.addEventListener("mouseout",function(){
    myBtnTwo.style.background="white";
    myBtnTwo.style.color="black";
  });




  document.getElementById("myP1").addEventListener("click", function() {
  alert("You clicked the white element!");
}, false);

document.getElementById("myDiv1").addEventListener("click", function() {
  alert("You clicked the orange element!");
}, false);

document.getElementById("myP2").addEventListener("click", function() {
  alert("You clicked the white element!");
}, true);

document.getElementById("myDiv2").addEventListener("click", function() {
  alert("You clicked the orange element!");
}, true);







document.getElementById("myDIV").addEventListener("mousemove", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = Math.random();
}

function removeHandler() {
  document.getElementById("myDIV").removeEventListener("mousemove", myFunction);
}
