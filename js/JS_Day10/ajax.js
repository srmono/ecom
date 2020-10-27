// let config = {}
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then( (users) => users.json())
//     .then( data => console.log(data)) 

var url = "https://jsonplaceholder.typicode.com/users";
async function getData(){
    let response = await fetch(url);
    console.log(response)
}

getData()