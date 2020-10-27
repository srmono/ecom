document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnGo').addEventListener('click', doFetch)
});

function doFetch(ev){
    ev.preventDefault();
    showLoading(); 

    setTimeout( () => {
        var url = "https://jsonplaceholder.typicode.com/users";
        fetch(url)
            .then( res => res.json())
            .then(showContent)
            .catch(fail)
            .finally(hideLoading);
    }, 10000);
}

function showLoading(){
    
    document.getElementById('btnGo').disabled = true;
    let overlay = document.createElement('div');
    overlay.className = "overlay";
    let loader = document.createElement('div');
    loader.className = 'loader';
    overlay.appendChild(loader);
    document.body.appendChild(overlay);
}
function hideLoading(){
    document.getElementById('btnGo').disabled = false;
    let overlay = document.querySelector('.overlay');
    document.body.removeChild(overlay);
}
function showContent(data){
    console.log('we got the content');
    console.log(data)
}

function fail(err){
    console.log(err.message)
}