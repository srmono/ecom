// //Global Scope 
// //Local Scope
// var a = 10;
// var b = 20;

// function fn1(){
// 	var c = 10; //private 
// 	d = "This is from another function"; //global
// 	alert(c)
// }
// fn1()

// function fn2(){
// 	alert(d)
// 	alert(c)
// }
// fn2();

//closure 

//var count = 0;

// function countUp(){

// 	var count = 0;

// 	function child(){
// 		count += 1;
// 	}
// 	child()
// 	return count; 
// 	//console.log(count += 1);
// }

// function countUp(){
// 	var count = 0;
// 	function child(){
// 		count +=1;
// 		return count;
// 	}
// 	return child;
// }

//var add = countUp();

var add = (function(){
	var counter = 0;
	return function(){ counter += 1; return counter}
})()

console.log(add())
console.log(add())
console.log(add())

// lexical scoping

// function init(){
// 	var name = "javascript";
// 	function displayName(){
// 		alert(name)
// 	}
// 	displayName()
// }

// init()

function init(){
	var name = "javascript";
	function displayName(){
		alert(name)
	}
	return displayName;
}

var display = init();
display();






















