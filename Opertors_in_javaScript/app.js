// Activity 01              Arithmetic operations

let num1 = 5;
let num2 = 7;
let add = num1 + num2;   // addition
console.log(`Addition ${add}`);

let sub = num1 - num2;
console.log(`Subtraction ${sub}`);       // subtraction


let mul = num1 * num2;      // multiplication
console.log(`Multiplication ${mul}`);
 
let divide = num1/num2;
console.log(`Divide ${divide}`);        // division

let remainder = num2%num1;
console.log(`Remainder ${remainder}`);      // Remainder




// Activity  02             Assignment operator 

num1 += num2;
console.log(num1);          // num1 = num1 + num2

num2 -= num1;
console.log(num2);


// Activity 03          comparison operator

let a = 5;
let b = 3;
let result1 = a<b;
console.log(result1);


let result2 = a>b;
console.log(result2);


let result3 = a<=b;
console.log(result3);


let result4 = a>=b;
console.log(result4);


// Activity 04          Logical operators

console.log((a<b) && (a>2));
console.log((a<b) || (a>2));
console.log(!a>b);


let res = (a>=0) ? "positive number" : "number is even";
console.log(res);