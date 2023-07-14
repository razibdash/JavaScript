//convert binary
console.log((3).toString(2));
console.log(3&5);
console.log(3|5);
console.log(3^5);
console.log(~5);
console.log(5<<1);
console.log(5>>1);
console.log(5>>>1);

function bin2dec(bin){
    return parseInt(bin, 2).toString(10);
  }
  console.log(bin2dec(0b0001));
function dec2bin(dec){
    return parseInt(dec, 10).toString(2);
  }
  console.log(dec2bin(2));