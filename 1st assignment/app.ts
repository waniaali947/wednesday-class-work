function addition(num1 : number , num2 : number) {
    return num1 + num2;
}

const result = addition(5 , 7);
console.log(result);

function subtraction(num1 : number , num2 : number) {
    return num1 - num2;
}

const result2 = subtraction(10 , 3);
console.log(result2);

function multiply(num1 : number , num2 : number) {
    return num1 * num2;
}

const result3 = multiply(6 , 8);
console.log(result3)

function division(num1 : number , num2 : number) {
    return num1 / num2;

}
const result4 = division(30 , 6);
console.log(result4)

//condition

function arithmeticOperation(num1 : number , num2 : number ,operation : string) {
if(operation == "addition"){
    console.log(num1 + num2);
} else if(operation == "subtraction"){
    console.log(num1 - num2);
}  else if(operation == "multiply"){
    console.log(num1 * num2);
} else if(operation == "division"){
    console.log(num1 / num2);
}};

