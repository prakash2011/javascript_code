// lecture outcome: array,include,slice,splices,flat,concat,push,join,string to array,object,destructuring the object,functions,rest operator ,array pass in function ,object pass in function ,scope,closure,hosting ,function cconcept
//array
//js array is resizable
// const myarr=[0,1,2,3,4,5]
// console.log(myarr[3]);
// const superhero=["shaktiman","juniourg","superman"]

// const myarray=new Array(1,2,3,4)
// console.log(myarray);ffffdfdf
// superhero.push("batman");
// superhero.push("ironman")//argument needed to push the element
// superhero.pop()//no argument neeed remove from last.

// superhero.unshift("captian america")//add to strting position to array
// console.log(superhero);
// superhero.shift()//no argument needed pop to first position of array. 
// console.log(superhero);

//includes 
// console.log(superhero.includes("batman")); //give answer in true or false
//indexof
//  console.log(superhero.indexOf("shaktiman"))//give the index of word 
// console.log(superhero.indexOf("ironman"))//give the index of word if not exist return  -1.

// //join : addds all the elements and convert into a string 
// const newarr=superhero.join() //shaktiman,juniourg,superman
// console.log(newarr);
// console.log(typeof newarr);

// //slice ,splice
// //slice do the slice of array not manipulate orignal array.
// // diffrence : splice is do the manipulation in orignal array so splice content remove from array.

// const newarr1=[0,1,2,3,4,5]
// console.log("A",newarr1);
// const myn1=newarr1.slice(1,3);
// console.log(myn1);
// console.log("B",newarr1);
// const myn2=newarr1.splice(1,3);
// console.log(myn2);
// console.log("C",newarr1);

// //arrays :
// const indian_cars=["wagnaor","Range Rover","audi","Tata motors"]
// const foreign_cars=["farari","lambourgini","hyundai"]
// indian_cars.push(foreign_cars);
// console.log(indian_cars);
//here we push second array to first array in existing array as element  
//['wagnaor','Range Rover','audi','Tata motors',[ 'farari', 'lambourgini', 'hyundai' ] ]
// console.log(indian_cars.fill(0,1,4));   //return modified array form given strating to ending point.
// console.log(indian_cars[4][1]);

//concat do same as push. but it created new array insted existing array
// console.log(indian_cars.concat(foreign_cars));

//also use spread method for spread 
// const all_new_cars=[...indian_cars,...foreign_cars]
// console.log(all_new_cars);

//flat : if array inside a array we flat into single array.
// const array=[1,2,[3,[4,5]],6,7,[8,9]]
// const anotherarray=array.flat(1);//[ 1, 2, 3, [ 4, 5 ], 6, 7, 8, 9 ]
// const anotherarray1=array.flat(2);//[ 1, 2, 3, 4, 5, 6, 7, 8, 9]
// //we do not specify array depth we write infinity
// const anotherarray2=array.flat(Infinity);
// console.log(anotherarray1);

// // convert string to Array
// console.log(Array.isArray("prakash"));
// console.log(Array.from("prakash"));
// console.log(Array.from({name:"prakash"}))
// //ex
// let score1=100
// let score2=200
// let score3=300
// console.log(Array.of(score1,score2,score3));

// ///object (important)
// //singleton :when object declered by constructor its a single ton
// //ex object.create

// // //object literals: object declered by literals its not single tone
// const mysym=Symbol("key1");//create symbol 
// const jsuser={
//     name:"praksh",
//     "full name":"prakash prajapati",//also declerd with double quote

//     [mysym]:"mykey1",//define in object
//     age:18,
//     location: "gujarat"

// }
// console.log(jsuser.name);//one way to access
// console.log(jsuser["age"])//second way
// console.log(jsuser['full name'])//
// //[Symbol(key1)]: 'mykey1'

// jsuser.name="shashank"
// Object.freeze(jsuser)//freeze th object  jsuser so we cant change the value.

// jsuser.age=45
// console.log(jsuser);

// jsuser.greeting =function(){
//     console.log("hello js user");
// }
// console.log(jsuser.greeting);//[Function]

// console.log(jsuser.greeting());//hello js user undefined
// jsuser.greetingTwo =function(){
//     console.log(`hello js user ${this["full name"]}`);

// }
// console.log(jsuser.greetingTwo());


// using constructer to create object 
// const newuser=new Object();//singletone object
// const newuser1={}
// console.log(newuser);//{}
// console.log(newuser1);//{}

// newuser.id=1234
// newuser.email="newuser@google";
// newuser.age=34
// console.log(newuser);

// const regularuser={
//     email:"prakash.developer@gmail.com",
//     fullname:{
//         username:{
//             firstname:"prakash",
//             lastname:"prajapati"
//         }
//     },
//     userid : 23   
// }
// console.log(regularuser.fullname.username.firstname);
//merge objects
// using assign
// const obj1={1:"a",2:"b"};
// const obj2={3:"c",4:"d"};
// const obj3={5:"e",6:"f"}

// // const obj4={obj1,obj2,obj3}//simple way
// // const obj4=Object.assign({},obj1,obj2,obj3);//assign
// const obj4 ={...obj1,...obj2,...obj3}//spread
// console.log(obj4);
//database data format
// const user=[
//     {
//         id:123,
//         name:"kuldeep"

//     },
//     {
//       id:2213,
//       name:"rajat"
//     }
// ]
// console.log(user[1].id);//access the value 
// console.log(Object.keys(newuser));
// //it gives the keyvalue but important its  give in array so we do loop on it .
// console.log(Object.values(newuser));
// console.log(Object.entries(newuser)); //array inside the array
// //check object is own a property
// console.log(newuser.hasOwnProperty('age'));//True

const employee ={
    id:"email",
    my_full_name: "prakash",
    age:23
}
//destructuring the object

// we can use syntax given below when we required to access object property frequently
//we use syntax as above but new syntax is 
// const {my_full_name}=employee
// console.log(my_full_name);
// const {my_full_name:name}=employee

// console.log(name);//same as but we access as short  name
//api handlig :in api data are in json,array and also in object form

// js functions 
 
// function name() {
//     console.log("P");
//     console.log("R");
//     console.log("A");
//     console.log("K");
//     console.log("A");
//     console.log("S");
//     console.log("H");


// }
// name()//where name is referance and () is execution.

// //add a two number :
// function addtwonumber(num1,num2){//here num1 and num2 called parameter
//     console.log(num1+num2);//print output not return

// }
// const result=addtwonumber(2,5);
// console.log(result);//undefined becuse print not return

// function addtwonumber(num1,num2){//here num1 and num2 called parameter
// //    const result=num1+num2;//print output not return
// // return result
// return num1+num2
// }
// const result1=addtwonumber(2,5);
// console.log(result1);//undefined becuse print not return

// function loginuser(username){
//     return `${username}  justed login `
// }
// console.log(loginuser("prakash"));//prakash  justed login
// console.log(loginuser())//undefined  justed login
// console.log(loginuser(""));//  justed login

// function loginuser(username){
//    if(!username){// if(username===undefined)
//        console.log("please enter the number");
//        return 
//    }
//    return `${username}  justed login `
// }

// console.log(loginuser("prakash"))//prakash
// console.log(loginuser());

// function loginuser1(username="sam"){ //defult username
//     return `${username}  justed login `
// }

// console.log(loginuser1());

//Rest operator in function.
// function calculatecartprice(...num1){
//     return num1
// }
// console.log(calculatecartprice(200,300,1000,2000))//use for the multiple argument )

// //same  interview perspective
// function calculatecartprice(value1,value2,...num1){
//     return num1
// }
// console.log(calculatecartprice(200,300,1000,2000))//use for the multiple argument )
// //output:[1000,2000]

//object pass in function 
// function handleobject(anyobject){
//     console.log(`the product name  is ${anyobject.productname} and price is ${anyobject.price}`)

// }
// const myobject ={
//     productname:"robot toy ",
//     price:234
// }
// console.log(handleobject(myobject))
// handleobject({
//     productname:"robot toy ",
//     price:234
// })

// array pass in function :
// myarray=[100,222,66,122]
// function handlearray(anyarray){
//     return anyarray[2]
// }
// console.log(handlearray(myarray))
// console.log(handlearray([12,134,434,879]))

//scope 
let a=100
let b=200
if(true){
    let a=10
    const b=20
    var c=30
}

// console.log(a);
// console.log(b);
// console.log(c);

//closure : parent class are not use variable and properties of child class.
// function one(){
//     const username="prakash"
//     function two(){
//         const website="youtube coder"
//         // console.log(username);

//     }
//     // console.log(website)
//     two()
// }

// one()

// //ex -scope (intersesting )
// if (true){
//     const username="prakash"
//     if(username=="prakash"){
//         const website =" youtube"
//         console.log(username+website);
//     }
//    console.log(website);//1
// }
// console.log(username);//2


// function concept
// console.log(addone(5))
// function addone(num){
//     return num+1

// }
// // Error:Cannot access 'addtwo' before initialization(hosting)
// console.log(addtwo(5));
// const addtwo = function(num){//also called expresssion
//     return num+2
// }
