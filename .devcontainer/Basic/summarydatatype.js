//#premeitive
//7type:
/* 
string
Number
booleAN
null
undefined
Symbol
bigint
*/
const id=Symbol('123456789')
const anotherid=Symbol('123456789')
console.log(id==anotherid)
console.log(id)
console.log(anotherid)
const bignumber=1234567854554646456564564546456456456456456456456456456546456456456456546456456456456456456456456456456456456456456456546456456456456546456456456456456456
console.log(bignumber)
console.log(typeof(bignumber))

//js is dynamically type 
//Refrence(Non premitive)
/* 
Array
object
function
*/
const bikes=["herohonda","royalenfield","suzuki"]
const obj={

name:"shubham",
age:34,
marks:88

}
const myFunction=function(){
    console.log("hello shubham ji kaise ho")
}
//console.table([bikes,obj])