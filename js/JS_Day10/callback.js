//user login in to website -> username -> projects done by user -> project details 

function userLogin(uname,pw, callback){
    setTimeout(() => {
        console.log("user logged in , username passed to callback")
        callback({username: uname})
    },3000)
} 

function getUserProjects(uname,callback){
    setTimeout(() => {
        console.log("projects fetched by user");
        callback(["project1","project2","project3"])
    },3000)
}

function getProjectDetails(project, callback){
    setTimeout(() => {
        console.log("project details")
        callback("project details are here")
    },3000)
}

userLogin("bvsrao","122345", (user) => {
    console.log(user); 
    getUserProjects(user, (projects) => {
        console.log(projects);
        var proj = projects[0];
        getProjectDetails(proj, (details) => {
            console.log(details)
        })
    })
})