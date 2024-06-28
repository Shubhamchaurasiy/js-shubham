//object
//singleton when we cretae the object by controctor
//Object.create// singlton 
//object literals 
const user={
    name:"shubham",
    rollno:96,
    location:"rampur",
    isloggedIn:true,
    lastLogin:["monday","sunday"]
}
console.log(user)
console.log(user.name)//access the value of object
console.log(user["name"])//access the value by second way
user.name="ayushi"//update the value in the object
console.log(user)
//Object.freeze(user)
user.name="rigved"// not update the value in the object because object is already freeze
console.log(user)
user.mygreet=function(){//creating he function grreting 
    console.log(`kaise ho ${this.name} bhai`)//in sam function object we use this keyword yo access the value of variable
}
console.log(user.mygreet())
///creationg the object by singlton
//const instrauser=new Object()
const fbuser= {}
fbuser.id="abc123"
fbuser.name="shreya"
fbuser.gender="female"
fbuser.mark=98
//console.log(instrauser)//create the object by singlton
console.log(fbuser)//create the object by non singlton
const user1={fullname:{
    username:{
        fname:"shubham"
        ,lname:"chaurasiya"
    }
}

}
console.log(user1.fullname.username.fname)//get the value in nested object 
obj1={name:"shubham"
    ,mark:98
}
obj2={code:"shubh123"
    ,pass:12398
}
obj3={age:23
    ,mobile:998175182
}
const obj4=Object.assign(obj1,obj2,obj3)//merge the object togheter
console.log(obj4)


const obj5= {...obj1,...obj2,...obj3}
console.log(obj5)
console.log(fbuser)
console.log(Object.keys(fbuser))//getting all the key of object in arrays
console.log(Object.values(fbuser))///getting all the object of object in arrays
console.log(Object.entries(fbuser))//gettiong all the key value pair in entitites
console.log(fbuser.hasOwnProperty('mark'))
//*******************************************
//destructuring of object
const course={name:"js",
    price:999,
    courseinstructor:"hitesh",

} 
//course.courseinstructor
const {cteacher}=course
console.log(cteacher)
//**********************************api rtesponse
[{},{},{}]