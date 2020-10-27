var menu = ["home","about","services","faq","contact","products"];

var mlen = menu.length;

var output = "<ul>";

for(var i = 0; i < mlen; i++){
	
	output += "<li><a href='"+ menu[i] +".html'>"+ menu[i] +"</a></li>"
}

output += "</ul>";

var el = document.getElementById("menu");
el.innerHTML = output;

//console.log(output)
