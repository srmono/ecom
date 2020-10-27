var xhr = new XMLHttpRequest();
var url = "product.json";
var el = document.getElementById("data");



xhr.onreadystatechange = function() {

    if(this.readyState == 4 && this.status == 200){
        console.log(JSON.parse(this.responseText))

        var data = JSON.parse(this.responseText);

        var output = "<div><img src='"+ data.image +"'><div>"+data.title+"</div><div>";

        // for(d in data){
        //     output += "<p>"+ data[d] +"</p>"
        // }
        
        el.innerHTML = output
    } else if( this.status == 404) {
        el.innerHTML = "page not found"; 
    }

}
xhr.onprogress = function(){
    console.log(this.readyState);
    el.innerHTML = "Loading...";
}
xhr.onerror = function(){
    console.log("error")
}

xhr.open("GET",url); 
xhr.send();
