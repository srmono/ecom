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


userLogin('bvsrao','123456')
    .then( (user) => getUserProjects(user))
    .then( (projects) =>  getProjectDetails(projects[0]))
    .then( (details) => console.log(details))
    .catch( err => console.log(err))
    .finally( () => console.log(" all done"))
