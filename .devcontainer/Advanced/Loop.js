// const myobj={
//     name:'shubham',
//     class:'b.tech',
//     mark:100,
//     subject:"js"
// }
// for(const key in myobj){
//     //console.log(myobj[key])
// //console.log(`${key} for sortcut is ${myobj[key]}`)
// }
// const myarr=[1.232,234,2,54,65]
// for(const kw in myarr){
//    // console.log(kw)
// }
// //********************we cant use this type loop in map beacuse map is not itterable

const coding=["js","ruby","java","python","cpp"]
// coding.forEach(element => {
//     console.log(element)
// });
coding.forEach(function (val){
   // console.log(val)
})
//***************** */
//above two method of itterating the value of array using for ecah
function printme(val){
   // console.log(val)

} 
coding.forEach(printme)
//******** */foreach function give the multiple properies of the array  not only the valuecoduing
coding.forEach((val11,index,arr)=>{
console.log(val11,index,arr)
})