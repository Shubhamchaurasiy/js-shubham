//****date and time in js  */
//  let mydate=new Date()
//  console.log(mydate)//give date and time
//  console.log(mydate.toString())//universal time
//  console.log(mydate.toDateString())
//  console.log(mydate.toLocaleString())
//  let mycreatdate= new Date(2023,3,3)
//  console.log(mycreatdate.toDateString())
let newdate=new Date()
console.log(newdate.getMonth())
console.log(newdate.getDate())
console.log(newdate.getDay())  
console.log(newdate.toLocaleString('default',{
    weekday:"long",
  
}))