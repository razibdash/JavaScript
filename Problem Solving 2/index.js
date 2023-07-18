
//problem 1
let sentance="Lorem ipsum dolor sit amet consectetur adipisicing elit.ipsum Perferendis, aspernatur.\
 Illo recusandae consequuntur ipsum possimus laudantium modi corporis,\
 excepturi autem amet ipsum ipsa quos suscipit iure quae? Placeat error ipsum tenetur porro odit.";

 let matc=sentance.match(/ipsum/gi);
 console.log(matc);

 let len=matc ? matc.length :0;
 console.log(len);
 let sntIndxOf=sentance.indexOf("ipsum");
 console.log(sntIndxOf);

 sntIndxOf=sntIndxOf>=0 ? sntIndxOf :"Not Fount";
 console.log(sntIndxOf);

 //problem 2

 function linerSearch(array,value){
    let len=array.length;
    for(let i = 0; i < len; i++){
        if(array[i] === value){
           
            return i;
          
        }
    }
    return "Not FOUND";
 }

 let position=linerSearch(['a','b','c','d','e'],'c');
 console.log(position);


 //problem 3

 function longestString(array){
       let longestWord="";
       for(let name of array){
         if(name.length > longestWord.length){
            longestWord=name;
         }
       }
       return [longestWord,array.indexOf(longestWord)];
 }

 let names=longestString(["rajib dash","avronil","avronilrajib","bangledesh is a beautifull country"]);
 console.log(names);


 //problem 4

 function fizzBUzz(number){
    for (let i=1; i<=number;i++){
          if(i%15==0){
            console.log(`${i} Is FizzBzz`);
          }else if(i % 3==0){
            console.log(`${i} Is Fizz`);
          }else if(i % 5==0){
            console.log(`${i} Is Bzz`);
          }else {
            console.log(i);
          }
    }
 }

 fizzBUzz(30);

 //Problem 5

 const mixArray=[
    "rajib",
    undefined,
    "avronil",
    false,
    "",
    "apple",
    40,
    "k",
    true,
    "thanks",
    NaN
 ];

 const trueArray= mixArray.filter(function(el){
    if(el){
        return true;
    }else{
        return false;
    }
 });

 console.log(trueArray);

 //problem 6

 const obj={
    a: "rajib",
    b: undefined,
    c: "avronil",
    d: false,
    e: "",
    f: "apple",
    g: 40,
    h: "k",
    i: true,
    j: "thanks",
    k: NaN,
 };

 const trueobj=function(obj){
    for(let i in obj){
        if(!obj[i]){
           delete obj[i];
        }

    }
    return obj;
 }

 console.log(trueobj(obj));

