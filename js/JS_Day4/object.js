//singleton pattern

// var person = {
// 	firstName: "venkat",
// 	lastName: "B",
// 	getFullName: function() {
// 		return this.firstName + " "+ this.lastName
// 	}
// }

// var venkat = Object.create(person);
// //person.firstName = "sravan"; 
// person.getFullName(); 
// //delete person.firstName
// console.log(person.firstName); 

// constructor pattern 

function Person(firstName, lastName, profession){
	this.firstName = firstName;
	this.lastName = lastName;
	this.profession = profession;

	this.getFullName = function(){
		return this.firstName + " "+ this.lastName;
	}

	this.getProfession = function(){
		return this.profession
	}
}

Person.prototype.city = "Bangalore";

var personOne = new Person("venkat","b","Trainer");
personOne.skills = [""];

personOne.getSkills = function(){
	return this.skills
}

var personTwo = new Person("sravan","bandla","Engineer");


//function Array(){}
var skills = ["html","css","js"];
skills.length;
var obj = {};
//var skills = new Array("html","css","js");
var name = "venkat";
var price = 20;
var userLoggedin = true;
//var check = null; 
String.prototype.convertUpperCase = function(){
    return this.toUpperCase();
}










