const projects = [
    { name: "Project One", category: "Ecom", start: 1981, end: 2004},
    { name: "Project Two", category: "Finance", start: 1991, end: 2014},
    { name: "Project Three", category: "Retail", start: 1999, end: 2012},
    { name: "Project Four", category: "Technology", start: 1989, end: 2010},
    { name: "Project Five", category: "Retail", start: 1999, end: 2019},
    { name: "Project Six", category: "Auto", start: 1980, end: 2006},
    { name: "Project Seven", category: "Ecom", start: 1986, end: 2009},
    { name: "Project Eight", category: "Finance", start: 2011, end: 2019},
    { name: "Project Nine", category: "Retail", start: 1971, end: 1989}
]; 

const grades = [23,45,78,92,34,56,98,45,68,49];
// regular way
// for( let i =0; i < projects.length; i++){
//     console.log(projects[i])
// }

// foreach
// projects.forEach(project => console.log(project));

//////Filters 
//let eligible = []; 
// for(let i = 0; i < grades.length; i++){
//     if(grades[i] >= 60){
//         eligible.push(grades[i])
//     }
// }

// let eligible = grades.filter(function(grade){
//     if(grade >=60 ){
//         return true
//     }
// })

let eligible = grades.filter(grade => grade >= 60 )

//console.log(eligible);

let ecomProjects = projects.filter( project => project.category === "Ecom")

console.log(ecomProjects)



