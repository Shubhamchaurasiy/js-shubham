//IIFE 
// imedietly invoke function expression
// function shubham(){
//     console.log(`DB Connected`)
// }
// shubham()
(function shubham(){//second way to creare function
    console.log(`DB Connected`)
})();//when we user more then 2 invoker function then we must need to teminated the invoker function by semicolon;
(()=>{
    console.log(`data is also connected`);
})();
((name)=>{
    console.log(`data is also connected${name }`);
})("shubham")

