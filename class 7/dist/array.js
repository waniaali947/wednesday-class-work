"use strict";
const myMard = [
    " jam",
    "bread",
    "chips"
];
console.log("Here is my mard third element", myMard[2]); // this syntax get element myMard[index]
console.log("before changing ", myMard);
myMard[2] = "chips kurkury"; //this syntax change element in array
myMard[3] = "cup cake"; // this syntax add element in array
console.log("after changing", myMard);
console.log("length of myMard", myMard);
myMard.push("chocalates");
console.log(myMard);
myMard.pop();
console.log(myMard);
