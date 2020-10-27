var name = "Java Script";
var el = document.createElement("div");

document.body.appendChild(el);

var text = document.createTextNode("some text");

el.appendChild(text);

el.setAttribute("id","test");

var pElement = document.getElementById("box");

pElement.style.color = "white";

console.log(pElement); 

console.log(pElement.innerHTML)

pElement.innerHTML = "<h1> Welcome to " + name +" </h1>";

console.log(pElement.innerHTML)

el.remove();

var els = document.getElementsByTagName("p");
console.log(els[1])

