//backtics => `` it is used for creating the placholder which allow to inject the varibale in backtics ``
//it is also known as string manipulation
// const name="shubham"
// const age=34
// console.log(`hello dera my name is ${name.toUpperCase()} and my age is ${age}`);
const game=new String('MarioForevor')
for(let i=0;i<game.length;i++){
    console.log(game[i].toUpperCase())
}
console.log(game.length)
console.log(game.__proto__)//to inherit properties from an object of JS classes defined with class 
console.log(game.charAt(2))//check the elemenet which is in given posiiton
console.log(game.indexOf(m))