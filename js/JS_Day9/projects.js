// Project Class: Represent project
class Project {
    constructor(title, author, isbn){
        this.title = title;
        this.author =  author;
        this.isbn = isbn
    }
}

// UI Class: To Handle UI Events/tasks
class UI{
    //display projects 
    static displayProjects(){

        // const storedProjects = [
        //     {
        //         title: "project1",
        //         author: "venkat",
        //         isbn: 9999
        //     },
        //     {
        //         title: "project2",
        //         author: "korey",
        //         isbn: 4567
        //     }
        // ];

        //const projects = storedProjects;
        const projects = Store.getProjects();

        projects.forEach( (project) => UI.addProjectsToList(project) )
    }

    static addProjectsToList(project){
        const list = document.querySelector('#project-list');
        const row = document.createElement('tr');

        row.innerHTML = `
            <td> ${project.title} </td>
            <td> ${project.author} </td>
            <td> ${project.isbn} </td>
            <td> <a href="#" class=" btn btn-danger btn-sm delete"> X </a></td>
        `
        list.appendChild(row)
    }

    static deletePorject(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(msg, className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(msg));
        const container = document.querySelector('.container');
        const form = document.querySelector('#project-form');
        container.insertBefore(div, form);

        setTimeout( () => document.querySelector('.alert').remove(), 5000)
    }

    static clearFields(){
        document.querySelector('#title').value = "";
        document.querySelector('#author').value = "";
        document.querySelector('#isbn').value = "";
    }
}

// Store : data handle
class Store{
    static getProjects(){
        let projects;

        if( localStorage.getItem('projects') === null){
            projects = []
        }else{
            projects = JSON.parse(localStorage.getItem("projects"))
        }

        return projects;
    }

    static addProject(project){
        const projects = Store.getProjects();
        projects.push(project);
        localStorage.setItem("projects", JSON.stringify(projects))
        console.log(projects);
    }

    static removeProject(isbn){
        //debugger;
        const projects = Store.getProjects();
        //console.log("remove", isbn.trim());
        const isbnfinal = isbn.trim();

        projects.forEach( (project, index) => {

            if(project.isbn === isbnfinal){
                //console.log("test")
                projects.splice(index, 1)
            }
           // console.log(project, index);
        //    console.log("inside loop ",project.isbn == isbn.trim())
        //    console.log("project: ", project.isbn.length) //typeof project.isbn)
        //    console.log("arg: ", isbn.trim().length) //typeof isbn))
        })
        
        localStorage.setItem("projects", JSON.stringify(projects))
    }
}


document.addEventListener('DOMContentLoaded', UI.displayProjects );

document.querySelector('#project-form').addEventListener('submit', (ev) => {
    ev.preventDefault(); 

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;


    if(title === "" || author === "" || isbn === ""){
        UI.showAlert("Please fill all the fields", "danger");
    }else{
        const isbnfinal = isbn.trim()
        console.log(isbnfinal);
        const project = new Project(title, author, isbnfinal);

        UI.addProjectsToList(project); // adding row to table

        Store.addProject(project);

        UI.showAlert("Project Added", "success");

        UI.clearFields();
    }
})

document.querySelector("#project-list").addEventListener('click', (e) => {
    UI.deletePorject(e.target);
    // console.log(e.target.parentElement)
    // console.log(e.target.parentElement.previousElementSibling)
    // console.log(e.target.parentElement.previousElementSibling.textContent)
    Store.removeProject(e.target.parentElement.previousElementSibling.textContent);

    UI.showAlert("Project is removed successfully", "success")
})







