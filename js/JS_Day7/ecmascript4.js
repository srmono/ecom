// destruction 

let skills = ["html","css", "js","angular","node"]; 

// let a = skills[0];
// let b = skills[1];

let [a, b, ...c] = skills; 

console.log(c);

var obj = {
    name: "venkat",
    profession: "Training",
    getInfo(){
        return this.profession
    }
}

var {name: firstName,profession, getInfo: getDetails} = obj;

//console.log(getDetails());










