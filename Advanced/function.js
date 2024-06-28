function myName(){


console.log('s')
console.log('h')
console.log('u')
console.log('b')
console.log('h')
console.log('a')
console.log('m')
}
//myname=> function name/refrence of the function
//myName()=>execution of the function name
//myName()
//------------------------------------------
function myAddition(number1,number2){//parameter
console.log(number1+number2)
}
myAddition(4,6)//argumnet

function myAddition1(number1,number2){

//let result=number1+number2
//return result
return number1+number2
}
let output=myAddition1(3,5)
console.log(output)


function loginusername(username){
    if(username===undefined){
        console.log("please enter the value")
        return
    }
    return `${username} just logged in`
}
let loginoutput=loginusername()
console.log(loginoutput)

//#############################################
//...obj =>ko hi rest aur spread operator botle hai
function abc(val1,val2,...num1){//spread operator
    return num1
}

console.log(abc(200,399,400,4400,304403,4043))
const user={
    username:"shubham",
    price:200
}
const myArr=[200,300,400,900]
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleobject(user)