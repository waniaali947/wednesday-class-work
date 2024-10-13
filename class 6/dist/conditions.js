"use strict";
let classDay = "wednesday";
if (classDay === "wednesday") {
    console.log("Go to class");
}
else {
    console.log("Do nothing sleep and have a nice day");
}
let firstEid = 5000;
let secondEid = 2000;
if (firstEid === secondEid) {
    console.log(5000);
}
else if (secondEid <= firstEid) {
    console.log("Not give me a eidi");
}
else {
    console.log(secondEid);
}
let homeFood = "biryani";
let moneyIHave = 100;
let pizza = 400;
if (homeFood === "biryani" && moneyIHave === 300) { //&& logic operators
    console.log("Go out and buy pizza");
}
else if (moneyIHave >= pizza) {
    console.log("Buy pizza");
}
else {
    console.log("Eat biryani");
}
let monthsNumber = 8;
switch (monthsNumber) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feburary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("october");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
}
let isMyBirthday = true;
let amIHappy = false;
// logic and
if (isMyBirthday && amIHappy) {
    console.log("Happy Birthday");
}
// logic or
if (isMyBirthday || amIHappy) {
    console.log("Happy birthday am not Happy");
}
;
