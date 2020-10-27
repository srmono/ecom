var xhr = new XMLHttpRequest();

console.log("outside", xhr.readyState)

xhr.onreadystatechange = function() {
    console.log(" inside state change ", xhr.readyState)
    var el = document.getElementById("data");
    if(this.readyState == 4 && this.status == 200){
        el.innerHTML = this.responseText
    } else if( this.status == 404) {
        el.innerHTML = "page not found"; 
    }

}

// xhr.onload = function(){
//     console.log(" inside onload ", xhr.readyState)
//     if(this.readyState == 4 && this.status == 200){
//     console.log("inside if ", xhr.readyState)
//         console.log(this.responseText);
//     }
// }

xhr.open("GET","simple.txt"); //configure
xhr.send();//send 


// readyState 
// onreadystatechange

// 0 : request is not initialized 
// 1 : server connection established
// 2 : request received 
// 3 : processing request 
// 4 : request finished and response is ready 

//Status 

// 200 : "ok"
// 403 : "Forbidden"
// 404 : "Not found"
