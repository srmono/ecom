let promise = new Promise( (resolve, reject) => {
    setTimeout(() => {
        //ajax calls 
        var x = false;
        if(x){
            resolve("completed and returned user")
        }else{
            reject(new Error(" No user is there"))
        }
    },5000)
});

promise
    .then( user => console.log(user) )
    .catch( err => console.log(err) )