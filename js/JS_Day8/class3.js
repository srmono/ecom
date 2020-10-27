/// We can also assign a method to the class function itself, not its "prototype". such methods are classed static. 
// static keyword
// class User {
//     static staticMethod(){
//         console.log(this === User)
//     }
// }

//User.staticMethod();

class User {}

User.staticMethod = function(){
    console.log(this === User)
}

User.staticMethod();