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

//let ecomProjects = projects.filter( project => project.category === "Ecom")

//console.log(ecomProjects)

//const project90 = projects.filter( project => project.start > 1980 && project.start < 1990 );

//console.log(project90)

// map

let projectnames = projects.map( project => project.name );

//console.log(projectnames)

let projectDetails = projects.map(project => `${project.name} is blongs to ${project.category}, and it has started ${project.start} and the project completed in ${project.end}`)
//console.log(projectDetails)

const upGrade = grades.map(grade => grade + 5 );
//console.log(upGrade);

//sort 

// const sortedProjects = projects.sort(function(p1, p2){ 
//     if( p1.start > p2.start ){
//         return 1
//     } else{
//         return -1
//     }
// })

const sortedProjects = projects.sort( (p1, p2) => ( p1.start > p2.start ? 1 : -1 ) );

//console.log(sortedProjects)

const sortedGrades = grades.sort((a,b) => a - b);

//console.log(sortedGrades);

//reduce

// let totalGrades = 0;
// for( x of grades){
//     totalGrades += x;
// }


// const totalGrades = grades.reduce(function(total, grade){
//     return total + grade
// }, 0 )

const totalGrades = grades.reduce((total, grade) => total + grade, 0 );
//console.log(totalGrades);

const totalSpend = projects.reduce( (total, project) => total + (project.end - project.start) , 0 )
//console.log(totalSpend)


const mergeFunc = grades
    .map( grade => grade + 5)
    .filter( grade => grade >= 60 )
    .sort( (a,b) => b - a );

console.log(mergeFunc)



