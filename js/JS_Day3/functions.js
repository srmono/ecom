// Create function
// function fn(){
// 	console.log("I am a function")
// }

//calling function
// fn();

//return in function
//passing args in function
function sum(a,b){
	return a + b; 
	console.log("Test");//this won't execute
}

// console.log(sum(5000,222));
// sum(50,25,90,56); // additional args are ignored
// sum(56); // NaN : Not a Number

// sum; // function returns itself

// var newSum = sum; //
// typeof c

// passing n number of arguments
function orderTotal(){
	//console.log(arguments)
	//arguments // built in array in functions
	var total = 0;

	for(price of arguments){
		total += price
	}

	return total;
}

// hoisting
fn();

function fn(){
	console.log("regular function")
}

// literal way of creating function
//literal(); // after error next lines won't be executed

var literal = function(){
	console.log("literal function")
}

literal();
//console.log("test");

//self invoking functions
(function(name){
	console.log("Hey "+ name +" I am Self Invoking function")
})("venkat")

// recursive function
//countdown 10 to 1

function recursive(fromNumber){
	console.log(fromNumber)

	var nextNumber = fromNumber -1;

	if(nextNumber > 0){

		recursive(nextNumber)
	}
}






































