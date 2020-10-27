var wrap = document.createElement("div");
var header = document.createElement("div");
var footer = document.createElement("div");
var left = document.createElement("div");
var right = document.createElement("div");
var headerText = document.createTextNode("header");

document.body.appendChild(wrap);
wrap.setAttribute("id","wrapper");
header.appendChild(headerText);

wrap.appendChild(header)
wrap.appendChild(footer)
wrap.appendChild(left)
wrap.appendChild(header)

