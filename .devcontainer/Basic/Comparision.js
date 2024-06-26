// console.log("2">1)// true  convert string into ascii integer
// console.log("02">1)//true
console.log(null>0)
console.log(null==0)
console.log(null>=0)
///the reason is that an equality and comparison ><>=<>= work diffrently
//comparison convert null to a number trating is as 0 thats why null>=0 is true and null>0 false
//strict check => datatype+value
console.log("2"===2)