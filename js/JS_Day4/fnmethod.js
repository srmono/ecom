// call()
// apply()
// bind

// var person = {
// 	fullName: function(country){
// 		return this.firstName + " " + this.lastName + " "+ country
// 	}
// }

// var person1 = {
// 	firstName: "venkat",
// 	lastName: "b",
// }
// var person2 = {
// 	firstName: 'sravan',
// 	lastName: "bandla"
// }


//person.fullName.call(person2, "USA");

//Apply()
var person = {
	fullName: function(city,country){
		return this.firstName + " " + this.lastName + " " + city +" "+ country
	}
}

var person1 = {
	firstName: "venkat",
	lastName: "b",
}

person.fullName.apply(person1,["bangalore","india"]);