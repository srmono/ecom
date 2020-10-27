// var arr = ["skill","html"];
// arr.length; 

var student = {
	name: "venkat",
	city:"bangalore",
	country:"India",
	pincode: 560035,
	getFullName: function(){

	}
}

// var obj1 ={};
// // get size of props from an object
// Object.objsize = function(MyObj){
// 	var osize = 0, key;

// 	for(key in MyObj){
// 		if(MyObj.hasOwnProperty(key)) osize++;
// 	}
// 	return osize;
// } 

// Object.objsize(student);

var library = [
	{
		title: "I am unique",
		author: "Abdul Kalam",
		readingStatus: true
	},
	{
		title: "Steve Jobs",
		author: "Walter",
		readingStatus: true
	},
	{
		title:"The final Book of the Hunger Games",
		author: "collins",
		readingStatus: false
	},
]

for(var i =0; i < library.length; i++ ){
	var book = library[i].title + " by "+ library[i].author ; 
	if(library[i].readingStatus){
		console.log("Already Read " + book);
	}else{
		console.log("You still need to read " + book);
	}
}

function findAllMethods(obj){
	console.log("obj props: ", Object.getOwnPropertyNames(obj));

	return Object.getOwnPropertyNames(obj).filter(function(property){
		return typeof obj[property] == "function";
	})
}


// check given property 

function hasKey(obj,key){
	
	return obj !=null && hasOwnProperty.call(obj,key)
}











