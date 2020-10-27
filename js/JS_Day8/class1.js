//basic syntax
// class MyClass {
//     constructor(){ ... }

//     method1(){ }
//     method2(){ }
//     method3(){ }
// }
// class User {
//     constructor(name){
//         this.name = name
//     }

//     sayHi(){
//         console.log(this.name)
//     }
// }

//User.prototype.methods() 

//let user = new User("Venkat");
//user.sayHi()
//console.log(typeof User)
//console.log(User === User.prototype.constructor);

//console.log( Object.getOwnPropertyNames(User.prototype) )

// function representation
// function User(name){
//     this.name;
// }

// User.prototype.sayHi = function(){
//     return this.name
// }



////////// Class Expression

// let User = class {
//     sayHi(){
//         console.log("hello")
//     }
// }

// let user = new User();
// user.sayHi();


///////////// Dynamically / on-demand create class


// function genClass(phrase){
//     //declare a class and return it
//     return class {
//         sayHi(){
//             console.log(phrase)
//         }
//     }
// }

// let User = genClass("Hello Class");

// let user =  new User();

// user.sayHi()


////////////// Getter / Setter

class User {

    constructor(name){
        this.name = name
    }

    get name(){
        return this._name;
    }

    set name(value){
        if( value.length < 4){
            console.log(" Name is too short, min 5 characters")
            return; 
        }
        this._name = value
    }

}

let user = new User("venkat");
user.name = "sr";
console.log(user.name)




















































































































































































































