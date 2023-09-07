function ChangeTExt(){
    const title= document.querySelector("#title");
    title.innerHTML="Hello World";
} 

const button = document.querySelector("#button");
button.onclick = function(){
    button.innerHTML="Event DONE!!";
}

function mOver(){
    const mouseOver = document.querySelector("#mouseOver");
    mouseOver.innerHTML = "Thanks For Hover";
}
function mOut(){
    const mouseOver = document.querySelector("#mouseOver");
    mouseOver.innerHTML = "Mouse Over Me";
}

const mouseEvent = document.querySelector("#onmousedown");

function mDown(){
    mouseEvent.innerHTML = "Thank You";
}
function mUp(){
    mouseEvent.innerHTML = "Click Me";
}

function upperCase() {
    const x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
  }