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

var output ="";
for(deal of deals){
	//console.log(deal.title)
	output += '<div class="prod">'+
				'<img src="'+ deal.image +'">'+
				'<div class="title">'+ deal.title +'</div>'+
				'<div class="offer">'+ deal.offer +'</div>'+
				'<div class="cat">'+ deal.brand +'</div>'+
			  '</div>';
}

var el = document.getElementById("products");
el.innerHTML = output;




