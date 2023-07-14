const marCokka=() =>{
   let rand=Math.floor(Math.random()*6)+1;
   document.querySelector(".cokka").innerHTML=rand;
}
// first Problem
const rand=(min,max)=>{
   return Math.floor(Math.random()*(max-min+1))+min;
}

console.log(rand(1,6));

//second problem
const student=["Rajib","Sagor","Saurov","Proyash","Emran","Sazida","Tisha","Avronil"];
 
console.log(student.sort());

//trid Problem
const rol=[10,20,11,6,20,12,1,9,2,8,3,7,4,5];

rol.sort(function(a,b){
   return a-b;
});
console.log(rol);

const num=[10,20,11,6,20,12,1,9,2,8,3,7,4,5];
num.sort(function(a,b){
   return b-a;
});
console.log(num);

//leep year

const isLeepYear=(year)=>{
   if( (year%400===0) || ((year%4===0) && (year%100 !==0)) ){
      console.log(`${year} is a Leep Year`);
   }else{
      console.log(`${year} is NOT leep Year`);
   }
}

isLeepYear(2026);

//vowel count

const vowel=["a","e","i","o","u","A","E","I","O","U"];
  
    function countVowel(sentance){
      let count=0;
      const letters=Array.from(sentance);
      letters.forEach(function(value){
          if(vowel.includes(value))
          {
            count++;
          }
      });
      return count;

    }
    console.log(countVowel("I Love Bangladesh"));

    //Find Out The doplicate Number from array?

    const number=[1,4,5,5,6,7,8,8];
    const duplicate=number.filter(function(value,index,array){
      return array.indexOf(value) !== index;
    });
    console.log(duplicate);

    //Find Out The unique Number from array?

    const uni=[1,2,3,3,4,5,8,9,6];
    const unique=uni.filter(function(value,index,array){
       return array.indexOf(value)===index;
    });
    console.log(unique.sort());

