var xhr = new XMLHttpRequest();
var url = "products.json";
var el = document.getElementById("products");

xhr.onreadystatechange = function() {

    if(this.readyState == 4 && this.status == 200){
        console.log(JSON.parse(this.responseText))

        var data = JSON.parse(this.responseText);

        var output ="";
        for(deal of data){
            //console.log(deal.title)
            output += '<div class="prod">'+
                        '<img src="'+ deal.image +'">'+
                        '<div class="title">'+ deal.title +'</div>'+
                        '<div class="offer">'+ deal.offer +'</div>'+
                        '<div class="cat">'+ deal.brand +'</div>'+
                    '</div>';
        }
        
        el.innerHTML = output
    } else if( this.status == 404) {
        el.innerHTML = "page not found"; 
    }

}
xhr.onprogress = function(){
    console.log(this.readyState);
    el.innerHTML = "Loading...";
}

xhr.open("GET",url); 
xhr.send();


