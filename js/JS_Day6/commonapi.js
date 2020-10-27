var api1 = "https://jsonplaceholder.typicode.com/users";
//var api2 = "server.php";
var api2 = "https://api.github.com/users";

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

function displayUsers(data){
    var users = JSON.parse(data);
    var output = "";

    for(user of users){
        output += "<div class='user'>"+
                    "<div>"+user.name+"</div>"+
                    "<div>"+user.email+"</div>"+
                   "</div>";
    }
    var el = document.getElementById("users")
    el.innerHTML=output;
}

function displayGitUsers(data){
    var users = JSON.parse(data);
    var output = "";

    for(user of users){
        output += "<div class='user'>"+
                    "<div>"+user.login+"</div>"+
                    "<img src='"+user.avatar_url+"' />"+
                   "</div>";
    }
    var el = document.getElementById("users")
    el.innerHTML=output;
}

commonAjax(api1, "GET" , homeProductDisplay); 
commonAjax(api2, "GET" , discountsDisplay);
commonAjax(api2, "GET", displayGitUsers);