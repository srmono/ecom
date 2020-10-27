// btn.onclick = function(){
// 	console.log("Event Called")
// }

//object.addEventListener(event,eventhandler,true/false)
// attach event on element 
// attach event on object
// addEventListener
// capturing phase
// bubbling phase
// target
// event object
// e.target
// e.currentTarget
// stopPropagation
// stopImmediatePropagation
// onload
// onerror
// e.preventDefault()

var btn = document.getElementById("btn");
var p1 = document.getElementById("parent1");
var p2 = document.getElementById("parent2");

var c1 = document.getElementById("child1");
var c2 = document.getElementById("child2");

function fn1(e){
	//console.log(e.target); 
	//console.log(e.currentTarget); 
	console.log("fn1 Parent Event Called")
}
function fn2(e){
	// e.stopPropagation();
	// if(false){
	// 	e.stopImmediatePropagation();
	// }
	console.log("fn2 Child Event Called");
}

function fn3(){
	console.log("I am function 3")
}
p1.addEventListener("click",fn1);
p2.addEventListener("click",fn1);

c1.addEventListener("click",fn1);
c1.addEventListener("click",fn2);
c1.addEventListener("click",fn3);

//c2.addEventListener("click",fn2);



var input = document.getElementById("uname");

input.addEventListener("focus",function(){
	console.log("input focused")
});

input.addEventListener("blur",function(){
	//console.log("input out focused")
	var x = input.value;
	input.value = x.toUpperCase();
	console.log(x.toUpperCase())
})

var login = document.getElementById("login");
login.addEventListener("submit", function(ev){
	ev.preventDefault();
	var user = document.getElementById("uname").value;
	var pw = document.getElementById("pw").value;
	if(user.length < 6 ){
		alert("User Name should be minimum 6 characters")
		return false;
	}
	//submit to server
	console.log("userName is "+ user +" and password is "+ pw)
})

var anc = document.getElementById("anc");
anc.addEventListener("click", function(e){
	e.preventDefault();
	console.log("anchor is clicked")
})









