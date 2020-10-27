var api1 = "products.json";
var api2 = "discounts.json";

function commonAjax(url, method, callback){
    var xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            callback(this.responseText)
        }
    }

    xhr.open(method, url);
    xhr.send()
}

function homeProductDisplay(data){

    var json = JSON.parse(data);

    var output ="<h2>Deals of the day</h2>";

    for(deal of json){
        //console.log(deal.title)
        output += '<div class="prod">'+
                    '<img src="'+ deal.image +'">'+
                    '<div class="title">'+ deal.title +'</div>'+
                    '<div class="offer">'+ deal.offer +'</div>'+
                    '<div class="cat">'+ deal.brand +'</div>'+
                '</div>';
    }
    output  += "<div class='clear'></div>";
    var el = document.getElementById("products")
    el.innerHTML = output
}

function discountsDisplay(data){

    var json = JSON.parse(data);

    var output ="<h2>Discounts for you</h2>";

    for(deal of json){
        //console.log(deal.title)
        output += '<div class="prod">'+
                    '<img src="'+ deal.image +'">'+
                    '<div class="title">'+ deal.title +'</div>'+
                    '<div class="offer">'+ deal.offer +'</div>'+
                    '<div class="cat">'+ deal.brand +'</div>'+
                '</div>';
    }
    output  += "<div class='clear'></div>"
    var el = document.getElementById("discounts")
    el.innerHTML = output
}


commonAjax(api1, "GET" , homeProductDisplay); 
commonAjax(api2, "GET" , discountsDisplay);