// "use strict"
// works in modern 

var grade = "C";

// if(grade == "A"){
// 	console.log("You can apply for PHD")
// } else if(grade == "B"){
// 	console.log("You can apply for PG")
// }else{
// 	console.log("not sure")
// }


if(grade == "A")
	console.log("You can apply for PHD")
  console.log("You can apply for PG")

//condition ? value : value2

var age = 18;

var access = age > 18 ? "You have access" : age < 18 ? "You are not allowed" : "find some other option";

console.log(access)


// nullish coalescing operator "??"


var firstName = null;
var lastName = null;
var nickname = null; //"SuperCoder";

console.log(firstName ?? lastName ?? nickname ?? "Anonymous");




/// switch 
// var a = 10;
// switch(a){
// 	case 10:
// 		statements;
// 	case 9:
// 		statements;
// }

var val = 35 + 5;

switch(val){
	case 5:
	case 10:
		console.log("value is true");
		break;
	case 15:
		console.log("value is false");
		break;
	case 20:
		console.log("value is false");
		break;
	default: 
		console.log("I don't know such values")
}




































