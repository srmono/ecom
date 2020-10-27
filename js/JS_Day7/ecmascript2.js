//Arrow functions 

//let sayHello = (name, profession) => "Hello "+ name + " your profession is " + profession;

//console.log( sayHello("venkat", "training") )

//default values 
function sum(a, b = 12){
    return a+b;
}

console.log(sum(15))

///////////////////this context

var btn = document.getElementById('btn');

function fn(){
  console.log(this)
}

//console.log(fn())

var fn1 = () => {
  console.log(this)
}

btn.addEventListener('click', fn1)
