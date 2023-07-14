//String Lenght
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("demo").innerHTML = text.length;

//string Slice
let text1 = "Apple, Banana, Kiwi";
let part = text1.slice(7,13);
document.getElementById("A").innerHTML = part; 

//SubString()
let str = "Apple, Banana, Kiwi";
document.getElementById("B").innerHTML = str.substring(7,13);

//string replace
function myFunction() {
    let text = document.getElementById("C").innerHTML;
    document.getElementById("C").innerHTML =
    text.replace("Microsoft","W3Schools");
}

let s="rajib dash";
  console.log(s.length);
  let str1=new String("this is rajib");
//   console.log(str1.charAt(1,5));
  console.log( str1.search("rajib"));
  console.log(str1.indexOf("is"));
  console.log(str1.slice(0,4));

  console.log(str1.lastIndexOf("b"));
  console.log(str1.includes("rajib"));
  console.log(str1.includes("sagor"));


