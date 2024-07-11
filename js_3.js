// lecture outcome: this keyword,arrow function,IIEF(imediately invoked function)

// const user={
//     username:"hello",
//     welcomemesage: function() {
//         console.log(`my name is ${this.username} welcome to website`)
//         console.log(this);//current context
//     }
// }
// user.welcomemesage()
// user.username="rohit"
// user.welcomemesage()

// console.log(this) // in node context object is empty{ }
//in contex object of the browser is window.//important

//arrow function why need ?
// we do not use this is function 
//ex
// function chai(){
//     let username="prakash"
//     console.log(`enter username is ${this.username}`);

// }
// chai()
// const chai1= function (){
//     let username="prakash"
//     console.log(`enter username is ${this.username}`);

// }
// chai1()

// const chai=  ()=> {
//     let username="prakash"
//     console.log(`enter username is ${this.username}`);

// }
// chai()

//arrow function basic example 
// const addTwo= (num1,num2) => {
//     return num1+num2
// }

// const addTwo= (num1,num2) =>  num1+ num2 //implicit return 
// const add= (num1,num2) => (num1 +num2 )
// console.log(addTwo(6,5));
// console.log(add(6,5));
//no need to return statemnt
// arrow function for Object
// const add= (num1,num2) => ({username:"khushal"} )
// console.log(add())
//imediately invoked function Expression(IIFE)
//we use for the remove globle scope pollution means varible declered in global scope we use IIFE for imediate  invoked
(function chai(){
    //NAMED IIFI
    console.log("DB CONNECTED");

})();
// chai()
(function  aurcode(){
    //name IIFE
    console.log("DB connected succesfully");
})();
( (name)=>{
    //unnamed iifi
    console.log(`db Connected  your name is ${name}.`)

}

)('rohit');