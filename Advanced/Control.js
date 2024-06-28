     const islogin=true
     if(false==0){
        console.log("executed")
     }
     const balance=1000
     if(balance>500)
        console.log("true")
    else{
        console.log("false")
    }
    //*************IMPORTANT****************/
    //flasy=> false,0,-0,bigInt,"",null,undefined,Nan
    //truthy value=> "0","false"," ",[],{},function(){} 
    const empobj={}
    if(Object.keys(empobj).length===0){
        console.log("object is empty")
    }
    //nullish coalescing operator (??): null undefined
    let val1;
    //val1=10 ?? 20
    //val1=null?? 30
    val1=undefined??20//here the logic is says if you fetch the data from the third party then it ignore the null value and store the actual value
console.log(val1)
//ternary oprator
//condition?true:false
const icetea=100
icetea>=70?console.log("true"):console.log("false")