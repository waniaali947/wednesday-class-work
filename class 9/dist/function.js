"use strict";
// function is a way save your code resulbilty
Object.defineProperty(exports, "__esModule", { value: true });
// let tea = 2+ 2+ 3;
// function makeTea(suger=4,milk:any,water?:any):void {
// let tea = 2 + suger + milk;
// return tea
// console.log(tea);
// }
// makeTea(undefined,2)
// makeTea(1,2,)
//  let responce : number =makeTea(2,3,1);
//  console.log(responce);
//  function makeHaleem (daal:any,chicken:any,onion:any):any { //perameter
// let haleem = daal + chicken + onion;
// return haleem
//  }
//  let response = makeHaleem(9,3,2); //argument
//  console.log(response);
// function makeBiryani () {
//  let biryani = 3 + 4 + 5;
//  return biryani
// }
// let responce = makeBiryani();
// console.log(responce)
// Basic syntax of function
// function nameofffunction
// function body
function admitcard(name, rollNumber, courseName, phoneNumber) {
    console.log("===================");
    console.log("Name:" + name); //concatenation
    console.log("Rollnumber:" + rollNumber);
    console.log("Course name:" + courseName);
    console.log("phone number:" + phoneNumber);
}
admitcard("wania", 2345, "typescript", 309929394); //argument
admitcard("zaki", 32455, "javascript");
const studentIdCards = [
    {
        name: "Ahmed",
        rollNumber: 22778,
        courseName: "typescript",
        phoneNumber: 23456789,
    },
    {
        name: "Ali",
        rollNumber: 23778,
        courseName: "jypescript",
        phoneNumber: 234906789,
    },
    {
        name: "hiba",
        rollNumber: 23878,
        courseName: "wed development 3.0",
        phoneNumber: 2349067809,
    }
];
// loop through array of abject
for (const student of studentIdCards) {
    //invoke function with object value as argument
    admitcard(student.name, student.rollNumber, student.courseName, student.phoneNumber);
}
