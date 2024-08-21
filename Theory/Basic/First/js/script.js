"use strict";
// let a = 10;
// a = "Test"; this is error in ts but correct in js.
let a;
let data;
data = 10;
data = "String";
let test;
test = "Code";
//type assertion
//let arr:(number | string)[] = [34,3,4,"data"]
// let arr:number[] = [34,4,5,6];
// arr.forEach((item)=>{
//     console.log(typeof(item));
// })
// console.log("akkdf")
// enum colors{RED,GREEN=20,BLUE};
// let mycolor:colors;
// mycolor = colors.GREEN;
// console.log(mycolor);
// let sum=(x:number,y:number)=>{
//     // if(y == undefined){
//     //     y=x;
//     // }
//     console.log("Sum called",x+y);
// }
// sum(23,3);
//! for undefined value
let sum = (x, y) => {
    if (y == undefined) {
        y = x;
    }
    console.log("Sum called");
};
sum(23);
//! Default value
// let sum=(x:number,y:number=0)=>{
//     console.log("Sum called")
// }
// sum(23);
//function sum(){};
// let sum = function (){
// }
