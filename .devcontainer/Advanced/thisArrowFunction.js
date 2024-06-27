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
function cdac(){
    let username="shubham"
    console.log(this)
    console.log(this.username)
}
cdac()
