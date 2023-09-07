
function myFunction(){
  
    const htmlCollection = document.querySelectorAll("p");
    let len=htmlCollection.length;
    for(let i=0; i < len ; i++){
        htmlCollection[i].style.color="red";
        htmlCollection[i].style.fontSize="25px";
    }
       
}


function sndFunction(){

    const ancor = document.querySelectorAll("a");
    let len = ancor.length;
    for(let i=0; i<len; i++){
        ancor[i].style.color="blue";
        ancor[i].style.fontSize="20px";
        ancor[i].style.display="block";
    }
}