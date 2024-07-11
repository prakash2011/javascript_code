// // lecture outcome : if, if-else,if -else if  ladder,switch,truthy values,false values,empty aray and object checking,for,nullish and ternary operator, break and continue

// const userloggedin=true

// if(2!=2){
//   console.log(" yes the conditon is true");
// }
// else{
//     console.log("condition  is false");
// }
//condition :   <,>,<=,>=,==,!=,===,!==
//  const score =200;

//  if(score > 150){
//      let batsman="rohit sharma"
//      console.log(`the best score  is done by  ${batsman} which is greter then 150.` );
//  }
//  console.log(`the curent score iby the  ${batsman} which is greter then 1000.` );

//shore hand notation 
//  if(score >100 ) console.log("the score is above 100.");//implicite scope no need to write scope //{ }
// //for multile line but dont use this syntax
// if(score >100 ) console.log("the score is above 100."),
// console.log("this is multiline in if with shorthand synatx");

// const productprice = 1000

// if (productprice < 500) {
//     console.log("the product prie is lesssthan 500");
// }
// else if (productprice < 700) {
//     console.log("the product prie is lesssthan 700");
// }
// else if (productprice < 800) {
//     console.log("the product prie is lesssthan 800");
// }
// else {
//     console.log("the product prie is lesssthan 1100");
// }
// const userloggedin = true
// const debitcard = true
// const logginedwithgogle = false

// if (userloggedin && debitcard) {
//     console.log("allow to purchase");
// }
   
// if(userloggedin || logginedwithgogle){
//     console.log("user are loggin");
// }

// const month=3
// switch (month) {
//     case 1:
//         console.log(" january");
//         break;
//     case 2:
//         console.log(" february");
//         break;
//     case 3:
//         console.log("t march");
//         break;
//     case 4:
//         console.log(" April");
//         break;
//     default:
//         console.log(" INVLID NUMBER ");
//         break;
// }

// truthy values
// const username="prakashpajapati"//truth
// // const username=""//false
// const username=[] //true
// if(username){
//     console.log(`username is ${username} `);
// }
// else{
//     console.log("username is not avilable");
// }

// falsy value : false,0,-0,bigInt 0n,"",null,undefined,Nan
//truth values: "0",'false'," ",[],{},function(){}
// //for array
// if(username.length===0){
//     console.log("array is empty");
// }
// const emptyObj={}
// //for object checking 
// if(Object.keys(emptyObj).length===0){
//     console.log("object is empty");
// }
//false==0//true
//false='' //true
//0 =='' //true
// nullish coalescing operator (??): null undefined// USED FOR  PREVENT ERROR 
// let val1;
// val1 = 5 ?? 10 //5
// val1= null??10//10
// val1= undefined ??  10 //10 
// val1=null ?? 10 ??20 //10
// console.log(val1);

//ternary operator 
// condition ? True :false
//  let iceteaprice = 100
//  iceteaprice <=80 ? console.log("price less than 80") : console.log("more  than 80");

//for loop
// for (let i = 0; i < 10; i++) {
//     console.log(i);
    
// }

// for (let i = 1; i < 10; i++) {
//     for (let j = 1; j<10; j++) {
//         console.log(i+ '*'+j +'='+ i*j);
        
//     }
// // }
 
// let myarr=[1,23,34,11,45]
// for (let i = 0; i < myarr.length; i++) {
//     const element = myarr[i];
//     console.log(element);
// }
    
//break  statement //break statent break the iteration when condition is true .
for (let i = 0; i < 10; i++) {
   console.log(`the i value is ${i}`);
   if(i==5){
       console.log("detected 5");
       break
   }
    
}

//continue  statement : continue statement skip the iteration
for (let i = 0; i < 10; i++) {
    console.log(`the i value is ${i}`);
    if(i==5){
        console.log("detected 5");
        continue
    }
     
 }