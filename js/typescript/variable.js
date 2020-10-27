"use strict";
exports.__esModule = true;
var x = 30;
var y = 20;
//let x = 20; // error
var name = "venkat";
var price = 200;
var isLoggedIn = true;
//let big: bigint = bigint(100n); 
//isLoggedIn = 20; 
//let n: null = null;
//let u: undefined = undefined; 
var list = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ["venkat", 23];
var randomValue = 10;
randomValue = "venkat";
randomValue = {};
randomValue = [];
console.log(name);
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 25] = "Green";
    Color[Color["Blue"] = 26] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
var d = Color[25];
console.log(d);
var notSure = 4;
notSure = "may be sting";
//notSure = false; 
//notSure
function sum(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
console.log(sum(20, 80));
var ro = [1, 2, 3];
// function getinfo(person: {firstName: string, lastName: String}) {
//   return person.firstName;
// }
function getinfo(person) {
    return person.firstName;
}
