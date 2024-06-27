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
{
    "results": [
      {
        "gender": "female",
        "name": {
          "title": "Miss",
          "first": "Jennie",
          "last": "Nichols"
        },
        "location": {
          "street": {
            "number": 8929,
            "name": "Valwood Pkwy",
          },
          "city": "Billings",
          "state": "Michigan",
          "country": "United States",
          "postcode": "63104",
          "coordinates": {
            "latitude": "-69.8246",
            "longitude": "134.8719"
          },
          "timezone": {
            "offset": "+9:30",
            "description": "Adelaide, Darwin"
          }
        },
        "email": "jennie.nichols@example.com",
        "login": {
          "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
          "username": "yellowpeacock117",
          "password": "addison",
          "salt": "sld1yGtd",
          "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
          "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
          "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
        },
        "dob": {
          "date": "1992-03-08T15:13:16.688Z",
          "age": 30
        },
        "registered": {
          "date": "2007-07-09T05:51:59.390Z",
          "age": 14
        },
        "phone": "(272) 790-0888",
        "cell": "(489) 330-2385",
        "id": {
          "name": "SSN",
          "value": "405-88-3636"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/75.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
        },
        "nat": "US"
      }
    ],
    "info": {
      "seed": "56d27f4a53bd5441",
      "results": 1,
      "page": 1,
      "version": "1.4"
    }
  }