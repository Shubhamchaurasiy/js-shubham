//how to work memory in js
/* 
*stack=>premitive(we acheive the copy of tyhe data in stack)
string
Number
booleAN
null
undefined
Symbol
bigint
***************************************************
*heap=>nonpremitive(we acheive the refrence  of the data in heap)
Array
object
function
*/   
/*
//this given the copy iof the data
let name1="shubham"
let anothername=name1;
anothername="sahwag"
console.log(name1)
console.log(anothername)

*/
//this given the refrence of data
let user1={
    name:"shubham",
    age:34

}
let user2=user1;
user2.age=56
console.log(user1)
console.log(user2)
console.log(user1.name)

