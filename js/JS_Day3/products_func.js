var deals = 
[
	{
		image: "prod.jpeg",
		title: "Speakers",
		offer: "min 50%",
		brand:  "Jeans"
	},
	{
		image: "prod.jpeg",
		title: "Shirts",
		offer: "min 50%",
		brand:  "LUIS"
	},
	{
		image: "prod.jpeg",
		title: "Shoes",
		offer: "min 50%",
		brand:  "JBL"
	},
	{
		image: "prod.jpeg",
		title: "Speakers",
		offer: "min 50%",
		brand:  "JBL"
	},
	{
		image: "prod.jpeg",
		title: "Speakers",
		offer: "min 50%",
		brand:  "Jeans"
	},
	{
		image: "prod.jpeg",
		title: "Shirts",
		offer: "min 50%",
		brand:  "LUIS"
	},
	{
		image: "prod.jpeg",
		title: "Shoes",
		offer: "min 50%",
		brand:  "JBL"
	},
	{
		image: "prod.jpeg",
		title: "Speakers",
		offer: "min 50%",
		brand:  "JBL"
	}
];

var discounts = 
[
	{
		image: "prod.jpeg",
		title: "Speakers",
		offer: "min 50%",
		brand:  "Jeans"
	},
	{
		image: "prod.jpeg",
		title: "Shirts",
		offer: "min 50%",
		brand:  "LUIS"
	},
	{
		image: "prod.jpeg",
		title: "Shoes",
		offer: "min 50%",
		brand:  "JBL"
	},
	{
		image: "prod.jpeg",
		title: "Speakers",
		offer: "min 50%",
		brand:  "JBL"
	},
	{
		image: "prod.jpeg",
		title: "Speakers",
		offer: "min 50%",
		brand:  "Jeans"
	},
	{
		image: "prod.jpeg",
		title: "Shirts",
		offer: "min 50%",
		brand:  "LUIS"
	},
	{
		image: "prod.jpeg",
		title: "Shoes",
		offer: "min 50%",
		brand:  "JBL"
	},
	{
		image: "prod.jpeg",
		title: "Speakers",
		offer: "min 50%",
		brand:  "JBL"
	}
]

function displayProducts(data, el, title){
	var output ="<h1>"+title+"</h1>";
		//alert("hi")
	for(deal of data){
		console.log(deal.title)
		output += '<div class="prod">'+
					'<img src="'+ deal.image +'">'+
					'<div class="title">'+ deal.title +'</div>'+
					'<div class="offer">'+ deal.offer +'</div>'+
					'<div class="cat">'+ deal.brand +'</div>'+
				  '</div>';
	}

	output += "<div class='clear'></div>";
//	alert("hey")
	el.innerHTML = output;
}

//btn.addEventListener("click",displayProducts(deals,dealsElement, "Today Deals"))

var dealsElement = document.getElementById("products");
var discountsElement = document.getElementById("discounts");

displayProducts(deals,dealsElement, "Today Deals");
displayProducts(discounts , discountsElement, "Today Discounts");



