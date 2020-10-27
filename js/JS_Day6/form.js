var loginForm = document.getElementById("login");
var url = "server.php";

loginForm.addEventListener("submit",handleSubmit)

function handleSubmit(ev){
    ev.preventDefault();

    var user = document.getElementById('uname').value;
    var pw = document.getElementById('pw').value;

    if(user.length < 6){
        alert("value must be 6 characters")
        return false;
    }

    var userdata = { 
        username: user, 
        password : pw
    }

    var finaldata = JSON.stringify(userdata);
    
    console.log("userdata ",userdata);
    console.log("final data ", finaldata);

    var xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText)
        }
    }
    

    xhr.open("GET", url);
    //xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(finaldata)
}