function userLogin(uname,pw){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log("user logged in , username passed to callback")
            resolve({username: uname})
        },3000)
    })
} 

function getUserProjects(uname){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log("projects fetched by user");
            resolve(["project1","project2","project3"])
        },3000)
    })
}

function getProjectDetails(project){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("project details")
            resolve("project details are here")
        },3000)
    }) 
}

//async await

async function displayDetails(){
    try {
        let loggedUser = await userLogin('bvsrao','123456');
        let projects = await getUserProjects(loggedUser);
        let details = await getProjectDetails(projects[0]);
        console.log(details)
    } catch (error) {
        console.log(error)
    }
}

//displayDetails(); 

//ajax call 

//Promise.all([ig,fb])

const ig = new Promise( (resolve, reject) => {
    setTimeout(() => {
        resolve( { photos: ['pic1', 'pic2'] })
    }, 3000)
});

const fb = new Promise( (resolve, reject) => {
    setTimeout(() => {
        resolve( { posts: ['post1', 'post2'] })
    }, 3000)
});

Promise.all([ig,fb])
    .then( (results) => {
        let instagram = results[0];
        let facebook = results[1];
        console.log("instagram: " , instagram)
        console.log("Facebook: " , facebook)
    })















