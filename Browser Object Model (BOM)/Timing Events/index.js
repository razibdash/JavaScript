const setTime = document.querySelector("#setTimeOut");
const setInter = document.querySelector("#setInterval");

let setTimeIntance;
let setIntervalIntance;

function setTimeFunc(){

    setTimeIntance = setTimeout(function(){
        setTime.innerHTML = "Time Is Over!";
    },4000);
}
function StopFunc(){

    clearTimeout(setTimeIntance);
}

function intervalFunc(){

    setIntervalIntance = setInterval(function(){
      setInter.innerHTML = new Date().toLocaleTimeString();
    },1000);
}

function stopInterval(){
    
    clearInterval(setIntervalIntance);
}