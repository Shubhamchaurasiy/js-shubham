const myArr=[10,20,30,40,540]
console.log(myArr)
const marvel=["thor","spider","iron"]
const DC= [   "batman","falsh","superman"]
//DC.push(marvel)//push one array to another array
//console.log(DC) 
var v1=marvel.concat(DC)//concat krne me doosre array ki value bhi phle array me jake sequesnce me set ho jati
//console.log(v1)
const allheros= [...marvel,...DC]//spread operator : it use in when we need all value sepratly of array
console.log(allheros)
const demoArray=[1,2,3,4,[23,54,32],33,[2,3,4,[5,43,34]]]
const flatarray=demoArray.flat(Infinity)//flat  function nested array ki value ko spread kr deta hai  
console.log(flatarray)
console.log()
console.log(Array.from("shubham"))//it is convert the value into  array
console.log(Array.isArray("Ayushi"))
console.log(Array.from({name:"shubham"}))//intresting
let name="shubham"
let email="shubhamchaurasioyar98@gmail.com"
let mobile="8319813656"
console.log(Array.of(name,email,mobile))