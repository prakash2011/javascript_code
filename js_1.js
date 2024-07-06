//js learn outcome : stack and heap,string and string methods,number ,maths,Date


// console.log("hello world")

// //stack( primitive datatype )and heap(non-primitive datatype) concept
// let username="sujal patel"
// let name=username
// console.log(name)
// console.log(username)
// //change the value of name so change the value name
// // cannot change the value of username becuaze its change the copy value not origanal value of stack bcz stack give copy of value to another var

// name="sujal sakhavala"

// console.log(name)
// console.log(username)

// //in heap give the refrence of value so varible  change the value content wil be change in original value.
// let userone={
//     email:"P@1234"
// }
// console.log(userone)
// let usertwo=userone
// usertwo.email="k@12345";
// console.log(userone)

//string.js 
// //can we denote throgh single and double quote
// const name="hitesh"
// const repocount=50
// console.log(name+repocount+"value")

// //advanced sysntax  using backstick
// console.log(`Hello  this is string new syntax ${ name} my age ${repocount}`);

// //using object crete string it s give methods 
// const gamename=new String('prakash-Pc')
// // console.log(gamename[0])
// // // methods and functions 
// // // console.log(gamename.__proto__);
// // // console.log(gamename.toUpperCase());//it cannot change the origanal value of string
// // console.log(gamename.charAt(3));//using index find the character
// // console.log(gamename.indexOf('s')) //check given charcter is which index
// // const string =gamename.substring(0,4);//substring 
// // console.log(string);

// // //slicing :slice the given string using value 
// // const slicestring=gamename.slice(-9,4);
// // console.log(slicestring);

// //sanitize 
// //trim method 
// const username= "   prakash   " ;
// console.log(username);
// console.log(username.trim()); // trim remove the starting and ending space of string 
// console.log(username.trimStart());
// console.log(username.trimEnd());


// //replace
// const url="https://www.google.com/praksh%20prajapati";
// console.log(url.replace('%20','__'));

// //include :check  include word in string 
// console.log(url.includes('prajapati')); //check the word in the string 

// //split the string using character 
// const word ="hi my name is prakash i am  22 year old ";
// console.log(word.split(' '));// in result its give the array

// // number and maths 
// const score =400
// console.log(score);// print simple number 

// const balance=new Number(100.294)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));
// const otherNumber= 34.4578; //34
// const num= 134.7578;// 135
// console.log(otherNumber.toPrecision(2));
// console.log(num.toPrecision(3))

// //tolocale string  convert in to indian add comma to value.
// const hundreds= 100000
// console.log(hundreds.toLocaleString('en-IN'));

// // maths maths maths maths 
// console.log(Math);
// console.log(Math.abs(-4));// absolute value convert negitive to positive
// console.log(Math.round(4.7));

// //ceil
// console.log(Math.ceil(4.2));//5
// //flour
// console.log(Math.floor(4.9));//4
// console.log(Math.min(4,7,1,2,36,34));
// console.log(Math.max(4,7,1,2,36,34));
//random
// console.log(Math.random());
// console.log((Math.random()*10)+1);
// console.log(Math.floor(Math.random()*10)+1);
// //formula for all range:
// const min=10;
// const max=20;
// console.log(Math.floor(Math.random()*(max-min+1))+min)

//Dates: temporal future version //proposal
// let myDate =new Date()
//console.log(myDate.toString());
//Sat Jul 06 2024 15:59:40 GMT+0530 (India Standard Time)

//  console.log(myDate.toDateString());
//  Sat Jul 06 2024
// console.log(myDate.toLocaleString());
// 7/6/2024, 4:03:25 PM
//  console.log(myDate.toLocaleDateString());
//  7/6/2024

// console.log(typeof myDate);
// //object type of date
// let mycreateDate= new Date(2023,0,23)
// console.log(mycreateDate.toDateString());
// //Mon Jan 23 2023
// let mycreateDate= new Date("2023-01-23")//yy-mm-dd
// console.log(mycreateDate.toDateString());
// //Mon Jan 23 2023
// let mycreateDate1= new Date("01-01-24")//dd--mm-yy(indian)
// console.log(mycreateDate1.toDateString());
// Mon Jan 01 2024

//timestamp in js in date:
// let mytimestampp =Date.now()
// console.log(mytimestampp); //give in milliseconds
// console.log(mycreateDate1.getTime());
// console.log(Math.floor(Date.now()/1000));//time in sec

// //month start with 0 in date.
// let newDate=new Date()
// // console.log(newDate);
// // console.log(newDate.getMonth());
// // console.log(newDate.getDay());


// //customize date :
// console.log(newDate.toLocaleString('default',{
//     weekday: "long",
//     dayPeriod: "long"
// }))
// //Saturday













