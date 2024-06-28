const user={
    username:"shubham",
    price:999,
    myfun:function()
{
console.log(`${this. username},welcome in chaurasiya workspace`)


}
}
user.myfun()
user.username="sandhya"
user.myfun()
//****************__________________------------ */
// function cdac(){
//     let username="shubham"
//     console.log(this)
//     console.log(this.username)
// }
// cdac()
const chai=()=>{//we cant use this keyword in js
    let username="shubham"
   console.log(this)
}
//chai()
const addTwo=(num1,num2)=>{//basic arrow function
    return num1+num2
}
let myresult= addTwo(20,30)
console.log(myresult)
//**********next way to define arraow function */
const addtri=(num1,num2)=>(num1+num2)
console.log(addtri(30,40))