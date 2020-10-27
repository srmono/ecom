//object modification
let name = "venkat";
let profession = "Training";

let person = {
    name,
    profession,
    "get Info"(){
        return this.name
    }
}
console.log( person["get Info"]() );