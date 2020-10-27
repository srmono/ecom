// while
// while(condition){
// 	//statement
// 	//loop body
// }

//var a = 0;
// while(a < 10){
// 	console.log(a);
// 	a++
// }

// do while

// do{
// 	//loop body
// } while(condition);

// do{
// 	console.log(a)
// 	a++
// } while(a<10)

// for 

// for (initation; condition; increment){
// 	//loop body
// }

// console.time("start")
// for(var i = 0; i < 100000; i++){
// 	//console.log("For Loop: ", i) 
// }
// console.timeEnd("start")

// console.time("reverse")
// for (var i = 100000 - 1; i >= 0; i--) {
	
// }
// console.timeEnd("reverse")


// for of
var menu = ["home","about","services","faq","contact","products"];

// for(m of menu){
// 	console.log(m)
// }

// for in 
// for(m in menu){
// 	console.log(menu[m])
// }

var product = {
	image: "earphones.jpg",
	title: "Speakers",
	offer: "min 50%",
	brand:  "JBL"
}

//product.image
//product[image]

for(prop in product){
	console.log(prop, " : ",product[prop])
}























